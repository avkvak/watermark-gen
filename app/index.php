<?php
include "tmpl/head.php";
include "tmpl/header.php";
?>

<main class="wrapper">
  <div class="container clearfix">
    <!--Основной контент-->
    <section class="center-content clearfix">
      <!--Рабочая область-->
      <section class="workspace">
        <h1 class="workspace-title">Генератор водяных знаков</h1>

        <div class="workspace-inner clearfix">
          <!--область для загрузки каринки, видима при загрузке картинки-->
          <div class="workspase__uploud-image">
            <!--область для водяного знака, видима уже при его загрузке-->
            <div class="workspase_wotermark-wrap">
              <div class="workspase__wotermark workspase__wotermark-image"><img id="blah" src="#" alt="your image" /></div>
              <div class="workspase__wotermark workspase__wotermark-watermark"><img id="blah2" src="#" alt="your watermark" /></div>
            </div>
          </div>
        </div>
      </section>

      <?php include "tmpl/generator.php"; ?>

    </section>
  </div>
</main>

<?php include "tmpl/footer.php"; ?>
