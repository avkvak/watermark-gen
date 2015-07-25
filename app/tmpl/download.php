<?php

$filename = $_GET['file'];

if (ini_get('zlib.output_compression'))
    ini_set('zlib.output_compression', 'Off');

$file_extension = strtolower(substr(strrchr($filename, "."), 1));

if ($filename == "") {
    $error = true;
    exit($error);
} elseif (!file_exists($filename)) {
    $error = true;
    exit($error);
};

switch ($file_extension) {
    case "gif":
        $ctype = "image/gif";
        break;
    case "png":
        $ctype = "image/png";
        break;
    case "jpeg":
    case "jpg":
        $ctype = "image/jpg";
        break;
    default:
        $ctype = "application/force-download";
}

header("Pragma: public");
header("Expires: 0");
header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
header("Cache-Control: private", false);
header("Content-Type: $ctype");
header("Content-Disposition: attachment; filename=\"" . basename($filename) . "\";");
header("Content-Transfer-Encoding: binary");
header("Content-Length: " . filesize($filename));
readfile("$filename");

$dir = "../uploads/files";
$files = 0;

$handle = opendir($dir) or die("Couldn't open the directory!");
while ($file = readdir($handle)) {
    unlink($dir."/".$file);
    $files++;
}
rmdir($dir);
closedir($dir);

$dir = "../uploads/files/thumbnail";
$files = 0;

$handle = opendir($dir) or die("Couldn't open the directory!");
while ($file = readdir($handle)) {
    unlink($dir."/".$file);
    $files++;
}
rmdir($dir);
closedir($dir);

exit();