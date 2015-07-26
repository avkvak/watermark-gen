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
        <li class="social-item sprite sprite-fb"><a id="fb" class="social__icons-link fb" href="#" target="_blank">Facebook</a></li>
        <li class="social-item sprite sprite-tw"><a id="tw" class="social__icons-link tw" href="#" target="_blank">Twitter</a></li>
        <li class="social-item sprite sprite-vk"><a id="vk" class="social__icons-link vk" href="#" target="_blank">Вконтакте</a></li>
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
