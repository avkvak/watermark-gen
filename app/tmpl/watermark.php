<?php
resizeImage('../' . $_POST['image'], '../uploads/files/' . $_POST['name'], '650', '580', '100');

define('WATERMARK_SOURCE_NAME', $_POST['name']);
define('WATERMARK_SOURCE_IMAGE', '../uploads/files/' . $_POST['name']);
define('WATERMARK_OVERLAY_IMAGE', '../uploads/files/' . $_POST['watermark_name']);
define('WATERMARK_OVERLAY_OPACITY', $_POST['opacity'] * 100);
define('WATERMARK_OUTPUT_QUALITY', 90);
define('WATERMARK_OUTPUT_COORDINATES', $_POST['positionsString']);

function filter_opacity(&$img, $opacity)
{
    if (!isset($opacity)) {
        return false;
    }
    $opacity /= 100;

    $w = imagesx($img);
    $h = imagesy($img);

    imagealphablending($img, false);

    $minalpha = 127;
    for ($x = 0; $x < $w; $x++) {
        for ($y = 0; $y < $h; $y++) {
            $alpha = (imagecolorat($img, $x, $y) >> 24) & 0xFF;
            if ($alpha < $minalpha) {
                $minalpha = $alpha;
            }
        }
    }

    for ($x = 0; $x < $w; $x++) {
        for ($y = 0; $y < $h; $y++) {

            $colorxy = imagecolorat($img, $x, $y);
            $alpha = ($colorxy >> 24) & 0xFF;

            if ($minalpha !== 127) {
                $alpha = 127 + 127 * $opacity * ($alpha - 127) / (127 - $minalpha);
            } else {
                $alpha += 127 * $opacity;
            }
            $alphacolorxy = imagecolorallocatealpha($img, ($colorxy >> 16) & 0xFF, ($colorxy >> 8) & 0xFF, $colorxy & 0xFF, $alpha);
            if (!imagesetpixel($img, $x, $y, $alphacolorxy)) {
                return false;
            }
        }
    }

    return true;
}

function resizeImage($sourceImage, $targetImage, $maxWidth, $maxHeight, $quality = 80)
{
    if (!$image = @imagecreatefromjpeg($sourceImage)) {
        return false;
    }

    list($origWidth, $origHeight) = getimagesize($sourceImage);

    if ($maxWidth == 0) {
        $maxWidth = $origWidth;
    }

    if ($maxHeight == 0) {
        $maxHeight = $origHeight;
    }

    $widthRatio = $maxWidth / $origWidth;
    $heightRatio = $maxHeight / $origHeight;

    $ratio = min($widthRatio, $heightRatio);

    $newWidth = (int)$origWidth * $ratio;
    $newHeight = (int)$origHeight * $ratio;

    $newImage = imagecreatetruecolor($newWidth, $newHeight);
    imagecopyresampled($newImage, $image, 0, 0, 0, 0, $newWidth, $newHeight, $origWidth, $origHeight);
    imagejpeg($newImage, $targetImage, $quality);

    imagedestroy($image);
    imagedestroy($newImage);

    return true;
}

function create_watermark($source_file_path, $output_file_path)
{
    list(, , $source_type) = getimagesize($source_file_path);

    if ($source_type === NULL) {
        return false;
    }

    switch ($source_type) {
        case IMAGETYPE_GIF:
            $source_gd_image = imagecreatefromgif($source_file_path);
            break;
        case IMAGETYPE_JPEG:
            $source_gd_image = imagecreatefromjpeg($source_file_path);
            break;
        case IMAGETYPE_PNG:
            $source_gd_image = imagecreatefrompng($source_file_path);
            break;
        default:
            return false;
    }

    $overlay_gd_image = imagecreatefrompng(WATERMARK_OVERLAY_IMAGE);
    filter_opacity($overlay_gd_image, WATERMARK_OVERLAY_OPACITY);
    imagealphablending($overlay_gd_image, false);
    $overlay_width = imagesx($overlay_gd_image);
    $overlay_height = imagesy($overlay_gd_image);

    $coordinates = explode(',', WATERMARK_OUTPUT_COORDINATES);


    $length = count($coordinates);
    for ($i = 0; $i < $length; $i = $i + 2) {
        imagecopy($source_gd_image, $overlay_gd_image, $coordinates[$i], $coordinates[$i + 1], 0, 0, $overlay_width, $overlay_height);
    }

    imagejpeg($source_gd_image, $output_file_path, WATERMARK_OUTPUT_QUALITY);
    imagedestroy($source_gd_image);
    imagedestroy($overlay_gd_image);
}

define('UPLOADED_IMAGE_DESTINATION', '../uploads/files/');
define('PROCESSED_IMAGE_DESTINATION', '../uploads/watermark/');

function process_image_upload()
{
    $temp_file_path = WATERMARK_SOURCE_IMAGE;
    $temp_file_name = WATERMARK_SOURCE_NAME;

    list(, , $temp_type) = getimagesize($temp_file_path);

    if ($temp_type === NULL) {
        return false;
    }

    switch ($temp_type) {
        case IMAGETYPE_GIF:
            break;
        case IMAGETYPE_JPEG:
            break;
        case IMAGETYPE_PNG:
            break;
        default:
            return false;
    }

    $uploaded_file_path = UPLOADED_IMAGE_DESTINATION . $temp_file_name;
    $processed_file_path = PROCESSED_IMAGE_DESTINATION . preg_replace('/\\.[^\\.]+$/', '.jpg', $temp_file_name);

    move_uploaded_file($temp_file_path, $uploaded_file_path);

    $result = create_watermark($uploaded_file_path, $processed_file_path);

    if ($result === false) {
        return false;
    } else {
        return array($uploaded_file_path, $processed_file_path);
    }

}

$result = process_image_upload();

if ($result === false) {
    echo 'Error';
} else {
    echo WATERMARK_SOURCE_NAME;
}