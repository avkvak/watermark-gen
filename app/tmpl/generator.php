<!--Панель управления-->
<aside class="controllers">
    <h2 class="controllers-title">Настройки</h2>
    <form class="controllers-form">
        <!--Раздел загрузки файлов-->
        <div class="uploud">
            <div class="input-form">
                <div class="title-label">Исходное изображение</div>
                <label for="input-image" class="input-label">
                    <input type="text" name="image" id="input-image" placeholder="Загрузите изображение" class="input"><span class="upload-img"></span></label>
                <label for="input-upload-img"></label>
                <input type="file" name="upload-img" id="input-upload-img" class="upload-btn" onchange="readURL(this);">
            </div>
            <div class="input-form">
                <div class="title-label">Водяной знак</div>
                <label for="input-watermark" class="input-label">
                    <input type="text" name="watermark" id="input-watermark" placeholder="Загрузите водяной знак" class="input"><span class="upload-img"></span></label>
                <label for="input-upload-watermark"></label>
                <input type="file" name="upload-watermark" id="input-upload-watermark" class="upload-btn" onchange="readURL2(this);">
            </div>
        </div>
        <!--Раздел положение wotermark-->
        <div class="position">
            <div class="position-row clearfix">
                <label class="position-label">Положение</label>
                <!--Кнопки преключения режима нормальный/замостить-->
                <div class="position__type-button-wrap clearfix">
                    <button class="position__type-button position__type-button_normal"></button>
                    <button class="position__type-button position__type-button_tile"></button>
                </div>
            </div>
            <div class="position-row-2 clearfix">
                <!--Окно визаульного позиционирования. Открыто для наполнения. то, котрое видимо-->
                <div class="position__vizual-wrap">
                    <!--сетка режима "нормально"-->
                    <div class="position_vizual">
                        <div id="normal" class="grid">
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
                            <div class="bottm-row">
                                <div class="left"></div>
                                <div class="center"></div>
                                <div class="right"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Окно визаульного позиционирования. Открыто для наполнения. то, котрое не видимо-->
                <div class="position__vizual-wrap position__vizual-wrap--hiden">
                    <!--Сетка режима "замостить"-->
                    <div class="position_vizual">
                        <div id="tile" class="grid">
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
                            <div class="bottm-row">
                                <div class="left"></div>
                                <div class="center"></div>
                                <div class="right"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Кнопки управления-->
                <div class="position__controller-wrap">
                    <div class="position__controller_X">
                        <input type="text" placeholder="--" class="position__controller_X-input">
                        <a href="#" class="position__controller_X-up"></a>
                        <a href="#" class="position_controller_X-down"></a>
                    </div>
                    <div class="position__controller_Y">
                        <input type="text" placeholder="--" class="position__controller_Y-input">
                        <a href="#" class="position__controller_Y-up"></a>
                        <a href="#" class="position_controller_Y-down"></a>
                    </div>
                </div>
            </div>
        </div>
        <!--Раздел с прозрачностью-->
        <div class="opacity">
            <label class="opasity__label">Прозрачность</label>
            <div class="opasity__slider-wrap">
                <div class="opasity-slider">
                    <input type="range">
                </div>
            </div>
        </div>
        <!--Раздел с кнопками-->
        <div class="buttons">
            <div class="buttons-wrap">
                <button type="reset" value="Сброс" class="btn btn-res">Сброс</button>
                <button type="submit" value="скачать" class="btn">Скачать</button>
            </div>
        </div>
    </form>
</aside>