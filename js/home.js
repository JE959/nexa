// let sliderDelay, slideIndex = 1; function setSliderDelay() { sliderDelay = setInterval(() => { showSlides(++slideIndex) }, 5e3) } function plusSlides(e) { slideIndex += e, clearInterval(sliderDelay), showSlides(slideIndex), setSliderDelay() } function currentSlide(e) { slideIndex = e, clearInterval(sliderDelay), showSlides(slideIndex), setSliderDelay() } function showSlides(e) { let l = document.getElementsByClassName("mySlides"), s = document.getElementsByClassName("dot"); for (let d of (e > l?.length && (slideIndex = 1), e < 1 && (slideIndex = l?.length), l)) d.style.display = "none"; for (let i of s) i.className = i?.className.replace(" active", ""); l[slideIndex - 1].style.display = "block", s[slideIndex - 1].className += " active" } $(document).ready(function () { setSliderDelay() }), showSlides(slideIndex);

"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var sliderDelay,
  slideIndex = 1;
function setSliderDelay() {
  sliderDelay = setInterval(function () {
    showSlides(++slideIndex);
  }, 5e3);
}
function plusSlides(e) {
  slideIndex += e, clearInterval(sliderDelay), showSlides(slideIndex), setSliderDelay();
}
function currentSlide(e) {
  slideIndex = e, clearInterval(sliderDelay), showSlides(slideIndex), setSliderDelay();
}
function showSlides(e) {
  var l = document.getElementsByClassName("mySlides"),
    s = document.getElementsByClassName("dot");
  var _iterator = _createForOfIteratorHelper((e > (l === null || l === void 0 ? void 0 : l.length) && (slideIndex = 1), e < 1 && (slideIndex = l === null || l === void 0 ? void 0 : l.length), l)),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var d = _step.value;
      d.style.display = "none";
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var _iterator2 = _createForOfIteratorHelper(s),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var i = _step2.value;
      i.className = i === null || i === void 0 ? void 0 : i.className.replace(" active", "");
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  l[slideIndex - 1].style.display = "block", s[slideIndex - 1].className += " active";
}
$(document).ready(function () {
  setSliderDelay();
}), showSlides(slideIndex);

/*--Share Functionality: Facebook, Insta an  Twitter--*/
var w = 600;
var h = 500;
var incomeDocCount = 0;
var co_incomeDocCount = 0;
var left = (screen.width / 2) - (w / 2);
var tops = (screen.height / 2) - (h / 2);
/*---*/
  
function getId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return 'error';
    }
}
// home popup forms
function registerin() {
    $('#rfiModal').addClass("hidden")
    // $('body').removeClass("h-[100vh]").removeClass("overflow-y-hidden");
    $('body').removeClass("modal-open");
    $('#rfiModal').removeClass("bg-[rgba(0,0,0,0.7)]").removeClass("backdrop-blur-[1px]").removeClass("absolute");
    $('#header-fixed').addClass('z-[999]')
}


function subscribeClose2() {
    $('#subscribeWrapper2').addClass('hidden')
    $('body').removeClass("modal-open");
    // $('body').removeClass('overflow-y-hidden')
}

function subscribeOpen2() {
    $('#subscribeWrapper2').removeClass('hidden')
    $('body').addClass("modal-open");
    // $('body').addClass('overflow-y-hidden')
    // $('#header-fixed').removeClass('z-[999]');
    document.getElementById("form-sub").reset();
    $('#form-sub label').css('color','black')
    $('.thankyoutext').css('display','none');
    $('#emailID-id').css('display','none');
    $('#nexahub').css('display','block');
}

function createInspire(e) {
  $(".youtube-link").addClass("hidden"), $("#create-inspire-modal").removeClass("hidden"), $("#youtube-" + e).removeClass("hidden"), $("body").addClass("modal-open");
}
function closeInspireModal() {
  $("#create-inspire-modal").addClass("hidden"), $("body").removeClass("modal-open");
      var iframe = $("#youtubeVideo iframe"); iframe.attr("src", "");
}


(function (){ 
    $('.playboxicon a').on('click',function(){ 
        var videoId = $(this).attr('data-url');
        var myId = getId(videoId);
        $('#youtubeVideo').html('<iframe  style="width: 100%; height: 400px; margin:0 auto; frameborder:0;" src="//www.youtube.com/embed/' + myId + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowfullscreen></iframe>');       
    });

      





    
    $('#myModalAutoOpen_rfi .close').on('click',function (){
        $('#myModalAutoOpen_rfi').modal('hide');
    });

    $('.newpopup').on('click',function() {
        $(".subscribeform").fadeIn();
        $("body").addClass("bodylock");
        $('#nexahub').show();
        $('.thankyoutext').hide();
    });

    // $('.closeSubscribe').on('click',function () {
    //     $('.subscribeform').fadeOut();
    //     $('body').removeClass('bodylock');
    //   });
      var hemailEl = $('#form-sub #emailID');
      var hcheckboxEl = $('#form-sub .chkagree');
      $('#form-sub').bind('input', function(e){
        checkEmail(hemailEl);
        Ischeckbox(hcheckboxEl);
        });
    $('.subscribeformIn').find('.subscribtionSub').on('click',function(e) {
        e.preventDefault();
       var isEmailValid = checkEmail(hemailEl);
       var ischeckboxValid =  Ischeckbox(hcheckboxEl);
        var isFormValid = isEmailValid && ischeckboxValid;
        if (isFormValid) {
            //prepare data for sending 
            var rowdata = PrepareRequestMedia(Allapis.subscribe, JSON.stringify({ emailid: $('.subscribeformIn').find('.email').val(), currentUrl: $(location).attr("href"),category :'All' }), "");
            // send data to server
            $.ajax(rowdata)
                .done(function(response) {
                    if (response) {
                        $('.thankyoutext').css('display','block');
                        $('#nexahub').css('display','none');
                    }

                })
                .fail(function(err) {});
        }
    });



    $('#allsocial').find('.slider__wrapper').append($('#twitter').find('.slider__wrapper').html());
    $('#allsocial').find('.slider__wrapper').append($('#youtube').find('.slider__wrapper').html());
    $('#allsocial').find('.slider__wrapper').append($('#facebook').find('.slider__wrapper').html());
    $('#allsocial').find('.slider__wrapper').removeClass('active');   
    $('#allsocial').find('.slider__wrapper:first').addClass('active');


//other js code\


const windowWidth = window.innerWidth;
var multiItemSlider = (function () {
    return function (selector, config) {
        // console.log('selector', selector, config)
        var
            _mainElement = document.querySelector(selector), // основный элемент блока
            _sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
            _sliderItems = _mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
            _sliderControls = _mainElement.querySelectorAll('.slider__control'), // элементы управления
            _sliderControlLeft = _mainElement.querySelector('.slider__control_left'), // кнопка "LEFT"
            _sliderControlRight = _mainElement.querySelector('.slider__control_right'), // кнопка "RIGHT"
            //   _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
            //   _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента    
            _wrapperWidth = parseFloat("1124.36"),
            _itemWidth = parseFloat("374.75"),
            _positionLeftItem = 0, // позиция левого активного элемента
            _transform = 0, // значение транфсофрмации .slider_wrapper
            _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
            _items = []; // массив элементов

        // console.log('_sliderWrapper', _wrapperWidth)
        // console.log('_itemWidth', _itemWidth)

        // наполнение массива _items
        _sliderItems.forEach(function (item, index) {
            _items.push({ item: item, position: index, transform: 0 });
        });

        var position = {
            getItemMin: function () {
                var indexItem = 0;
                _items.forEach(function (item, index) {
                    if (item.position < _items[indexItem].position) {
                        indexItem = index;
                    }
                });
                return indexItem;
            },
            getItemMax: function () {
                var indexItem = 0;
                _items.forEach(function (item, index) {
                    if (item.position > _items[indexItem].position) {
                        indexItem = index;
                    }
                });
                return indexItem;
            },
            getMin: function () {
                return _items[position.getItemMin()].position;
            },
            getMax: function () {
                // console.log("positionerr",position.getItemMax())
                return _items[position.getItemMax()].position;
            }
        }

        var _transformItem = function (direction) {
            var nextItem;
            if (direction === 'right') {
                _positionLeftItem++;
                if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) > position.getMax()) {
                    nextItem = position.getItemMin();
                    _items[nextItem].position = position.getMax() + 1;
                    _items[nextItem].transform += _items.length * 100;
                    _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
                }
                // console.log('step-right', _step)
                // _transform -= "33.33";

                if(windowWidth <= "425"){
                    _transform -= "100";
                }else if(windowWidth >= '760' && windowWidth <= '900'){
                    // console.log("uggtugt")
                    _transform -= "50";
                }else if(windowWidth){
                    _transform -= "33.33";
                }
            }
            if (direction === 'left') {
                _positionLeftItem--;
                if (_positionLeftItem < position.getMin()) {
                    nextItem = position.getItemMax();
                    _items[nextItem].position = position.getMin() - 1;
                    _items[nextItem].transform -= _items.length * 100;
                    _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
                }
                // console.log('step', _step)
                _transform += _step;
            }
            _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
        }

        // обработчик события click для кнопок "назад" и "вперед"
        var _controlClick = function (e) {
            var direction = this.classList.contains('slider__control_right') ? 'right' : 'left';
            e.preventDefault();
            _transformItem(direction);
        };

        var _setUpListeners = function () {
            // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
            _sliderControls.forEach(function (item) {
                item.addEventListener('click', _controlClick);
            });
        }

        // инициализация
        // _setUpListeners();
        setInterval(slide, 3000);

        function slide() {
            _transformItem('right');
        }

        // setInterval(slide, 3000);
        function slide() {
            _transformItem('right');
        }
        return {
            right: function () { // метод right
                _transformItem('right');
            },
            left: function () { // метод left
                _transformItem('left');
            }
        }

    }
}());

var slider = multiItemSlider('.slider')
var slider2 = multiItemSlider('.slider2')
var slider3 = multiItemSlider('.slider3')
var slider4 = multiItemSlider('.slider4')


/* home social tabs */
    $('.tab-a').click(function () {
        $(".tab").removeClass('tab-active');
        $(".tab[data-id='" + $(this).attr('data-id') + "']").addClass("tab-active");
        $(".tab-a").removeClass('active-a');
        $(this).parent().find(".tab-a").addClass('active-a');
    });




//cdp tags 

//nexa on social
$(document).on('click','.nexasocial ul li a', function() {
    var HeadeType = $(this).text().trim();
    var LabelText  = $(this).text().trim();
          if(HeadeType=='ALL'){
    
                    var event = "Nexa on Social";
                    var eventCategory = "Home-Nexa on social-All";
                    var eventAction = "Click";
                    var eventLabel = LabelText;
                    CommonCDPtracking(event,eventCategory,eventAction,eventLabel); 
                        
                    }else if(HeadeType=='Twitter'){
                    var event = "Nexa on Social";
                    var eventCategory = "Home-Nexa on social-Twitter";
                    var eventAction = "Click";
                    var eventLabel = LabelText;
                    CommonCDPtracking(event,eventCategory,eventAction,eventLabel); 
                        
                    }else if(HeadeType=='Facebook'){
                    var event = "Nexa on Social";
                    var eventCategory = "Home-Nexa on social-Facebook";
                    var eventAction = "Click";
                    var eventLabel = LabelText;
                    CommonCDPtracking(event,eventCategory,eventAction,eventLabel); 
                        
                  }else if(HeadeType=='Youtube'){
                    var event = "Nexa on Social";
                    var eventCategory = "Home-Nexa on social-Youtube";
                    var eventAction = "Click";
                    var eventLabel = LabelText;
                    CommonCDPtracking(event,eventCategory,eventAction,eventLabel); 
              
                  }

                  var event = "Nexa on Social";
                  var eventCategory = "Home-Nexa on social";
                  var eventAction = "Click";
                  var eventLabel = LabelText;
                  CommonCDPtracking(event,eventCategory,eventAction,eventLabel); 

    });

//Home banner tags
    $(document).on('click','.homebanner .mySlides a img', function() {
        var imageName = $(this).attr('src').split('/').pop().split('.').slice(0, -1).join('.').trim();
        var event = "Top Banner";
        var eventCategory = "Nexa Homepage Top Banner";
        var eventAction = "Click";
        var eventLabel = 'Participate Now-'+imageName;
        CommonCDPtracking(event,eventCategory,eventAction,eventLabel); 
       });

 //Home banner cta
 $(document).on('click','.homebanner .bannercontent ul li a ', function() {
    var imageName = $(this).parent().parent().parent().parent().parent().find('.mySlides a img').attr('src').split('/').pop().split('.').slice(0, -1).join('.').trim();
    var cta  = $(this).text().trim();
    var event = "Top Banner";
    var eventCategory = "Nexa Homepage Top Banner";
    var eventAction = "Click";
    var eventLabel = imageName+'-'+cta;
    CommonCDPtracking(event,eventCategory,eventAction,eventLabel); 
});      

//car tile cdp tags
$(document).on('click','.cartiles .tilectas li a', function() {
    var _cta = $(this).text().trim();
    var _model = $(this).attr('data-model').trim();
    var event = "Car Tiles";
    var eventCategory = "Homepage-Nexa Cars";
    var eventAction = "Click";
    var eventLabel = _cta+' - '+_model;
    CommonCDPtracking(event,eventCategory,eventAction,eventLabel); 
    });    
    
$(document).on('click','._downloadsec ._downloadbrchr', function() {
    var _model = $(this).attr('data-model').trim();
    var event = "Car Tiles";
    var eventCategory = "Homepage-Nexa Cars";
    var eventAction = "Click";
    var eventLabel = 'Static Download Brochure - '+_model;
    CommonCDPtracking(event,eventCategory,eventAction,eventLabel); 
});      

$(document).on('click','.cartiles ._cartile .w-full img', function() {
    var _title = $(this).attr('title');
    var event = "Car Tiles";
    var eventCategory = "Homepage-Nexa Cars";
    var eventAction = "Click";
    var eventLabel = _title;
    CommonCDPtracking(event,eventCategory,eventAction,eventLabel); 
    });      

//dice box cdp

$(document).on('click','._dicepopup ul li ._dicebox', function() {
    var _text = $(this).text().trim()
    var event = 'Popup-menu';
    var eventCategory = 'Popup-menu';
    var eventAction = "Click";
    var eventLabel = _text;
    CommonCDPtracking(event,eventCategory,eventAction,eventLabel); 
    });      
    
//  //view all article tags
 $(document).on('click','._viewarticle', function() {
    var _text = $(this).text().trim()
    var event = 'HomePage - Nexa World';
    var eventCategory = 'HomePage - Nexa World';
    var eventAction = "Click";
    var eventLabel = _text;
    CommonCDPtracking(event,eventCategory,eventAction,eventLabel); 
    });      
 
//  //nexaworld ctas
 $(document).on('click','._articleknowmore a', function() {
    var _title = $(this).parent().parent().parent().find('h4 ').html().trim()
    var _text = $(this).attr('data-cta');
    var event = 'Nexa world-Article|Video';
    var eventCategory = 'Nexa world-Article|Video';
    var eventAction = "Click";
    var eventLabel = _title+' - '+_text;
    CommonCDPtracking(event,eventCategory,eventAction,eventLabel); 
    });               

//  //our philosphy   
 $(document).on('click','.our_philosophy ._philosphykMore', function() {
    var _text = $(this).parent().parent().parent().find('h4 ').html().trim()
    var event = 'Nexa Philosophy|Video';
    var eventCategory = 'Nexa Philosophy|Video';
    var eventAction = "Click";
    var eventLabel = _text+' - KnowMore';
    CommonCDPtracking(event,eventCategory,eventAction,eventLabel); 
    });      










})();













