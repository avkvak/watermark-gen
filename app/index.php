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
          <div class="workspase__uploud-image">
            <!--область для загрузки каринки, видима при загрузке картинки-->
            <div class="workspase__watermark workspase__watermark-image">
              <img id="watermark__src-image" src="#" alt="your image" />
              <!--область для водяного знака, видима уже при его загрузке-->
              <div class="workspase_watermark-wrap">
                <div class="workspase__watermark workspase__watermark-watermark">
                  <img id="watermark__src-logo" src="#" alt="your watermark" />
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
