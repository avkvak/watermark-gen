<?php
include "tmpl/head.php";
include "tmpl/header.php";
?>

<main class="wrapper">
  <aside class="sidebar">
    <div class="sidebar-lang">
      <div class="sidebar-lang__rus"><a href="lang.php?lang=ru">РУС</a></div>
      <div class="sidebar-lang__eng"><a href="lang.php?lang=us">ENG</a></div>
    </div>
    <div class="sidebar-social cle">
      <ul class="sidebar-social__list">
        <li class="social-item sprite sprite-fb"><a class="social__icons-link fb" href="http://www.facebook.com/sharer/sharer.php?s=100&p%5Btitle%5D=TITLE&p%5Bsummary%5D=DESC&p%5Burl%5D=URL&p%5Bimages%5D%5B0%5D=IMG_PATH" target="_blank" onclick="return Share.me(this)">Facebook</a></li>
        <li class="social-item sprite sprite-tw"><a class="social__icons-link tw" href="https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Ffiddle.jshell.net%2F_display%2F&text=Моя картинка с водяным знаком! Сделал с помощью URL&url=URL" target="_blank" onclick="return Share.me(this)">Twitter</a></li>
        <li class="social-item sprite sprite-vk"><a class="social__icons-link vk" href="http://vk.com/share.php?url=URL&title=Классный генератор водяных знаков&description=Моя картинка с водяным знаком! Сделал с помощью URL&image=IMG_PATH&noparse=true" target="_blank" onclick="return Share.me(this)">Вконтакте</a></li>
      </ul>

      <div class="fb-share-button" </div>
      <div class="sidebar-social__like sprite sprite-like">Поделиться</div>
    </div>
    
  </aside>
  <div class="container clearfix">
    <!--Основной контент-->
    <section class="center-content clearfix">
      <!--Рабочая область-->
      <section class="workspace">
        <h1 class="workspace-title"><?php echo $labels['name']; ?></h1>

        <div class="workspace-inner clearfix">
          <div class="workspase__uploud-image">
            <!--область для загрузки каринки, видима при загрузке картинки-->
            <div class="workspase__wotermark workspase__wotermark-image">
              <img id="watermark__src-image" src="img/image.jpg" alt="your image" />
              <!--область для водяного знака, видима уже при его загрузке-->
              <div class="workspase_wotermark-wrap">
                <div class="workspase__wotermark workspase__wotermark-watermark">
                  <img id="watermark__src-logo" src="img/watermark.png" alt="your watermark" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <?php include "tmpl/generator.php"; ?>

    </section>
  </div>
</main>

<?php include "tmpl/footer.php"; ?>
