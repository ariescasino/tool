/******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
      /******/
    }
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
      /******/
    };
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
    /******/
  }
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/
    }
    /******/
  };
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function (exports) {
/******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/
    }
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  };
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function (value, mode) {
/******/ 		if (mode & 1) value = __webpack_require__(value);
/******/ 		if (mode & 8) return value;
/******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
    /******/
  };
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
    /******/
  };
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
  /******/
})
/************************************************************************/
/******/({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function (module, exports) {

      // ================ BANNER ================
      var swiper1 = new Swiper(".mySwiper1", {
        cssMode: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: ".mySwiper1 .swiper-button-next",
          prevEl: ".mySwiper1 .swiper-button-prev"
        },
        pagination: {
          el: ".mySwiper1 .swiper-pagination"
        },
        mousewheel: true,
        keyboard: true
      }); // ================ END BANNER ================
      // ================ HOME-QUICK-BOX ================

      var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 6,
        spaceBetween: 15,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".mySwiper2 .swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".mySwiper2 .swiper-button-next",
          prevEl: ".mySwiper2 .swiper-button-prev"
        }
      }); // ================ END-HOME-QUICK-BOX ================

      var swiper3 = new Swiper(".mySwiper3", {
        cssMode: true,
        mousewheel: true,
        keyboard: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      }); // ================ END-LEFT ================

      var swiper4 = new Swiper(".mySwiper4", {
        direction: "vertical",
        slidesPerView: 3,
        pagination: {
          el: ".mySwiper4 .swiper-pagination",
          clickable: true
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      }); // ================ END-RIGHT ================

      var swiper5 = new Swiper(".mySwiper5", {
        effect: "cards",
        grabCursor: true,
        navigation: {
          nextEl: ".swiper-box .mySwiper5 .swiper-button-next",
          prevEl: ".swiper-box .mySwiper5 .swiper-button-prev"
        },
        pagination: {
          el: ".swiper-box .mySwiper5 .swiper-pagination"
        }
      }); // ================ PPROMOTION ================
      //popup

      $(document).ready(function () {
        $(".head .fa-xmark").click(function () {
          $("#body-web-promotion .promo-popup").addClass("active");
        });
        $(".promo-item").click(function () {
          $("#body-web-promotion .promo-popup").removeClass("active");
        });
        $(".left .toggle-icon").click(function () {
          $(".left").toggleClass("active");
          $(".left h3").toggleClass("active");
          $(this).children().toggleClass("active");
        });
      }); //================ LOGIN POPUP ===============





      $(".popup-login .fa-xmark").click(function () {
        $(".popup-login").addClass("active");
      });


      $(".popup-login .fa-eye").click(function () {
        $(".fa-eye-slash").removeClass("active");
        $(".fa-eye").addClass("active");
        $("#customform_Password").attr("type", "text");
      });


      $(".popup-login .fa-eye-slash").click(function () {
        $(".fa-eye").removeClass("active");
        $(".fa-eye-slash").addClass("active");
        $("#customform_Password").attr("type", "password");
      });



      $('#customform_UserName').on('input', function () {
        x = $('#customform_UserName').val();
        if (!x == "") {
          $(".popup-login dd small.username-msg-invalid").css("opacity", "0");
        } else {
          $(".popup-login dd small.username-msg-invalid").css("opacity", "1");
        }
      });


      $('#customform_Password').on('input', function () {
        x = $('#customform_Password').val();
        if (!x == "") {
          $(".popup-login dd small.pass-msg-invalid").css("opacity", "0");
        } else {
          $(".popup-login dd small.pass-msg-invalid").css("opacity", "1");
        }
      }); // REGISTER FORM

      $('#groupUsername #registerform_UserName').on('input', function () {
        a = $('#registerform_UserName').val().length; // b = $('#registerform_UserName').length;
        if (a < 5) {
          console.log(2);
          $("#body-web-register .register-block span.remind").css("color", "red");
          $("#body-web-register .register-block span.remind").text("Dài hơn 5 ký tự");
        } else if (a >= 5 && a <= 12) {
          console.log(1);
          $("#body-web-register .register-block span.remind").css("color", "green");
          $("#body-web-register .register-block span.remind").text("Hợp lệ");
        } else {
          $("#body-web-register .register-block span.remind").css("color", "red");
          $("#body-web-register .register-block span.remind").text("Không quá 12 ký tự");
        }
      });


      $('#groupComfirmPassword,#groupPassword').on('input', function () {
        x = $('#registerform_Password').val();
        y = $('#registerform_CPassword').val();

        if (x == y) {
          $("#body-web-register .register-block span.warning").css("color", "green");
          $("#body-web-register .register-block span.warning").text("Mật khẩu đã khớp");
        } else {
          $("#body-web-register .register-block span.warning").css("color", "red");
          $("#body-web-register .register-block span.warning").text("Mật khẩu không khớp");
        }
      });


      $('#groupFullName #registerform_FullName').keyup(function () {
        $(this).val($(this).val().toUpperCase());
      }); // MESSAGING TAB

      function showContent(evt, messDtail) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("mess-detail");

        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        } // tablinks = document.getElementsByClassName("tablinks");
        // for (i = 0; i < tablinks.length; i++) {
        //   tablinks[i].className = tablinks[i].className.replace(" active", "");
        // }

        document.getElementById(messDtail).style.display = "block";
        evt.currentTarget.className += " active";
      }

      $(document).ready(function () {
        $(".close-popup .icon-close i").click(function () {
          $(".popup-center").addClass("hide-popup-img");
        });
        $(".annou-header .close-icon").click(function () {
          $(".announcement-list").addClass("hide-popup-img");
        });
        $(".popup-select .select-item").click(function () {
          $(".popup-center-content .right img").addClass("hide-popup-img");
          $(".popup-select .select-item").removeClass("current-popup");
          $(this).addClass("current-popup");

          if ($(this).hasClass("item-0")) {
            $(".popup-center-content .right .img-0").removeClass("hide-popup-img");
          } else if ($(this).hasClass("item-1")) {
            $(".popup-center-content .right .img-1").removeClass("hide-popup-img");
          } else if ($(this).hasClass("item-2")) {
            $(".popup-center-content .right .img-2").removeClass("hide-popup-img");
          } else if ($(this).hasClass("item-3")) {
            $(".popup-center-content .right .img-3").removeClass("hide-popup-img");
          } else if ($(this).hasClass("item-4")) {
            $(".popup-center-content .right .img-4").removeClass("hide-popup-img");
          }
        }); // after login

        $(".annou-menu ul .menu-item").click(function () {
          $(".annou-menu ul .menu-item").removeClass("current-annou");
          $(".annou-content .wrapper").addClass("hide-annou-content");
          $(this).addClass("current-annou");

          if ($(this).hasClass("item-0")) {
            $(".annou-content .wrap-0").removeClass("hide-annou-content");
          } else if ($(this).hasClass("item-1")) {
            $(".annou-content .wrap-1").removeClass("hide-annou-content");
          } else if ($(this).hasClass("item-2")) {
            $(".annou-content .wrap-2").removeClass("hide-annou-content");
          }
        });
      }); // show pass in change-pass

      $("#body-web-change-pass .input-field .fa-eye").click(function () {
        $(this).toggleClass("active");
        var a = $(this).parents().prev().children("input").attr("type");

        if (a === "password") {
          $(this).parents().prev().children("input").attr("type", "text");
        } else {
          $(this).parents().prev().children("input").attr("type", "password");
        }
      }); // show pass in layout-web

      $(" .input-wrap.password .fa-eye").click(function () {
        $(this).toggleClass("active");
        var show = $(this).prev("input").attr("type");

        if (show === "password") {
          $(this).prev("input").attr("type", "text");
        } else {
          $(this).prev("input").attr("type", "password");
        }
      }); // FORGET-PASS

      $(".container-web .right a.forget-pass").click(function () {
        $(".popup-forgetPass").removeClass("active");
      });
      $(".popup-forgetPass .head .fa-xmark").click(function () {
        $(".popup-forgetPass").addClass("active");
      });

      /***/
    }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function (module, exports) {

      // removed by extract-text-webpack-plugin

      /***/
    }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

      __webpack_require__(/*! D:\docker-ace\src\resources\js\app.js */"./resources/js/app.js");
      module.exports = __webpack_require__(/*! D:\docker-ace\src\resources\sass\app.scss */"./resources/sass/app.scss");


      /***/
    })

  /******/
});