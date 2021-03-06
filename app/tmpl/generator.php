<aside class="controllers">
  <h2 class="controllers-title"><?php echo $labels['settings']; ?></h2>
  <form action="" method="POST" class="controllers-form">
    <!--Раздел загрузки файлов-->
    <div class="uploud block">
      <div class="input-form">
        <div class="title-label"><?php echo $labels['origin']; ?></div>
        <label for="input-image" class="input-label">
          <input type="text" name="image" id="input-image" value="Загрузите изображение" disabled="disabled" class="input"/><span class="upload-img"></span>
        </label>
        <label for="input-upload-img"></label>
        <input id="input-upload-img" class="upload-btn" type="file" name="files" multiple>
      </div>
      <div class="input-form">
        <div class="title-label"><?php echo $labels['water']; ?></div>
        <label for="input-watermark" class="input-label">
          <input type="text" name="watermark" id="input-watermark" value="Загрузите водяной знак" disabled="disabled" class="input"/><span class="upload-img"></span>
        </label>
        <label for="input-upload-watermark"></label>
        <input type="file" name="files" id="input-upload-watermark" class="upload-btn" disabled/>
      </div>
    </div>
    <!--Раздел положение wotermark-->
    <div class="position block">
      <div class="position-row clearfix">
        <label class="position-label"><?php echo $labels['location']; ?></label>
        <!--Кнопки преключения режима нормальный/замостить-->
        <div class="position__type-button-wrap"><a href="#" class="position__type-button position__type-button_tile"></a><a href="#" class="position__type-button position__type-button_normal position__type-button_normal-active"></a></div>
      </div>
      <div class="position-row clearfix">
        <!--Окно визаульного позиционирования.-->
        <div class="position__grid-wrap">
          <!--Cетка-->
          <div id="grid" class="grid">
            <div class="top-row">
              <div class="left"></div>
              <div class="center"></div>
              <div class="right"></div>
            </div>
            <div class="middle-row">
              <div class="left"></div>
              <div class="center"></div>
              <div class="right"></div>
            </div>
            <div class="bottom-row">
              <div class="left"></div>
              <div class="center"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
        <!--Кнопки управления-->
        <div class="position__controller-wrap">
          <div class="position__controller_X"><span class="position__controller_X-description">X</span>
            <input type="text" value="00" id="normalX" class="position__controller_X-input"/><a href="#" class="position__controller_X-up"></a><a href="#" class="position__controller_X-down"></a>
          </div>
          <div class="position__controller_Y"><span class="position__controller_Y-description">Y</span>
            <input type="text" value="00" id="normalY" class="position__controller_Y-input"/><a href="#" class="position__controller_Y-up"></a><a href="#" class="position__controller_Y-down"></a>
          </div>
        </div>
      </div>
    </div>
    <input type="hidden" id="tilePos" name="tilePos">
    <!--Раздел с прозрачностью 
    <input type="range" min="0" max="1" step="0.05" value="1" id="slider"  />-->
    <div class="opacity block">
      <label class="opasity__label"><?php echo $labels['opacity']; ?></label>
      <div class="opasity__slider-wrap">
        <div class="opasity-slider">
          <input id="opacity-control" type="range" min="0" max="1" step="0.05" value="1"/>
         </div>                 
      </div>
    </div>
    <!--Раздел с кнопками-->
    <div class="buttons">
      <div class="buttons-wrap clearfix">
        <button type="reset" value="Сброс" class="btn btn-res" id="btn-reset"><?php echo $labels['res']; ?></button>
        <button type="submit" value="скачать" class="btn"><?php echo $labels['dow']; ?></button>
      </div>
    </div>
  </form>
</aside>