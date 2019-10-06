(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/css/queries.css":
/*!********************************!*\
  !*** ./assets/css/queries.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var swup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swup */ "./node_modules/swup/lib/index.js");
/* harmony import */ var swup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(swup__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _swup_overlay_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swup/overlay-theme */ "./node_modules/@swup/overlay-theme/lib/index.js");
/* harmony import */ var _swup_overlay_theme__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_swup_overlay_theme__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _swup_debug_plugin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swup/debug-plugin */ "./node_modules/@swup/debug-plugin/lib/index.js");
/* harmony import */ var _swup_debug_plugin__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_swup_debug_plugin__WEBPACK_IMPORTED_MODULE_11__);










__webpack_require__(/*! ../css/app.css */ "./assets/css/app.css");

__webpack_require__(/*! ../css/queries.css */ "./assets/css/queries.css");





if (document.URL.includes('/admin')) {
  var tabs = Array.from(document.querySelectorAll('.tab'));
  tabs.map(function (tab) {
    tab.addEventListener('click', function () {
      if (document.querySelector('.dropdown')) {
        document.querySelector('.dropdown').classList.toggle('dropdown');
      }

      this.lastElementChild.classList.toggle('dropdown');
    });
  });
}

if (document.location.pathname == '/admin/illustration/add') {
  $(document).ready(function () {
    $('textarea.ckeditor').ckeditor();
  });
}

if (document.querySelector('.sidenav-icon')) {
  var toggleNav = function toggleNav() {
    document.querySelector('.sidenav').classList.toggle('sidenavToggle');
    this.classList.toggle('sidenavIconToggle');
  };

  var icon = document.querySelector('.sidenav-icon');
  icon.addEventListener('click', toggleNav);
} //fetch three articles with axios


function onClickArticle(e) {
  e.preventDefault();
  var url = this.href;
  axios.get(url).then(function (res) {
    var html = res.data.html;
    document.querySelector('.button').insertAdjacentHTML('beforebegin', html);
  })["catch"](function (err) {
    if (err.response.status == 404) {
      var button = document.querySelector('.button');
      var p = document.createElement('p').innerHTML = 'Il n\'y a pas d\'autre articles';
      button.insertAdjacentHTML('beforebegin', p);
      button.style.display = 'none';
    }
  });
  var iterable = 1;
  iterable++;
  this.search = this.search.replace(/count=1/g, "count=".concat(iterable));
}

function init() {
  if (document.querySelector('#nav-icon')) {
    document.querySelector('#nav-icon').addEventListener('click', function () {
      this.classList.toggle('open');
      var menu = Array.from(document.querySelectorAll('#menu-tab'));
      menu.map(function (tab) {
        tab.classList.toggle('menu-dropdown-a');
      });
      document.querySelector('.menu-container').classList.toggle('menu-dropdown');
    });
  }

  if (document.querySelector('.img-container')) {
    //lance slider avec un compte a rebours et permet de faire pause ou reprendre
    var finalcountdown = function finalcountdown(exit) {
      timer = setInterval(function () {
        plusDivs(1);
        console.log("ok");
      }, 6000);
    };

    var event = function event(exit) {
      if (exit === true) return; //Fleche change le compteur +1 à droite -1 à gauche

      document.addEventListener('keydown', function (e) {
        if (e.key == 'ArrowRight') {
          plusDivs(1);
        }
      });
      document.addEventListener('keydown', function (e) {
        if (e.key == 'ArrowLeft') {
          plusDivs(-1);
        }
      });
      var imgs = Array.from(document.querySelectorAll('.img-container img'));
      imgs.map(function (img) {
        img.addEventListener('click', function () {
          plusDivs(1);
        });
      });
    };

    var plusDivs = function plusDivs(n) {
      if (n === null) return;
      showDivs(count += n);
    };

    var showDivs = function showDivs(n) {
      if (n === null) return;
      var i;
      var divs = Array.from(document.querySelectorAll('.img-container')); //si on arrive au bout du diaporama => revenir au début

      if (n > divs.length) {
        count = 1;
      } //si on va à la première image et backward => montré la dernière


      if (n < 1) {
        count = divs.length;
      }

      ;

      for (i = 0; i < divs.length; i++) {
        divs[i].classList.add('not-selected');
        divs[i].classList.remove('selected');
      }

      if (exit !== true) {
        divs[count - 1].classList.add('selected');
        divs[count - 1].classList.remove('not-selected');
      }
    };

    count = 1;
    exit = false;
    showDivs(count);
    finalcountdown(exit);
    event(exit);
  }

  if (document.querySelector('.main .article-container')) {
    var axiosScript = script('https://unpkg.com/axios/dist/axios.min.js');
    axiosScript.addEventListener('load', function () {
      document.querySelector('.button').addEventListener('click', onClickArticle);
    });
  }

  if (document.querySelector('#checkout')) {
    if (!document.querySelector('.stripe')) {
      var stripeScript = script('https://js.stripe.com/v3/');
      stripeScript.addEventListener('load', function () {
        var stripe = Stripe('pk_test_SJ2a6jFKQeWCM47U3qbGHjfP00txxh25Je');
        var session = document.querySelector('#checkout').dataset.stripe;
        document.querySelector('#checkout').addEventListener('click', function () {
          stripe.redirectToCheckout({
            sessionId: session
          }).then(function (result) {// If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
          });
        });
      });
    }
  }
}

function unload() {
  if (document.querySelector('.img-container')) {
    count = null;
    exit = true;
    clearInterval(timer);
  }

  if (document.querySelector('.main .article-container')) {
    document.querySelector('.button').removeEventListener('click', onClickArticle);
  }
}

function script(src) {
  var script = document.createElement('script');
  script.src = src;
  script.classList.add('stripe');
  document.head.appendChild(script);
  return script;
}

var timer;
var exit;
var count;
var swup = new swup__WEBPACK_IMPORTED_MODULE_9___default.a({
  plugins: [new _swup_overlay_theme__WEBPACK_IMPORTED_MODULE_10___default.a({
    color: '#DD2772'
  }), new _swup_debug_plugin__WEBPACK_IMPORTED_MODULE_11___default.a()]
});
init();
unload();
swup.on('pageView', init);
swup.on('willReplaceContent', unload);

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9xdWVyaWVzLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJkb2N1bWVudCIsIlVSTCIsImluY2x1ZGVzIiwidGFicyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtYXAiLCJ0YWIiLCJhZGRFdmVudExpc3RlbmVyIiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImxhc3RFbGVtZW50Q2hpbGQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiJCIsInJlYWR5IiwiY2tlZGl0b3IiLCJ0b2dnbGVOYXYiLCJpY29uIiwib25DbGlja0FydGljbGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1cmwiLCJocmVmIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiaHRtbCIsImRhdGEiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJlcnIiLCJyZXNwb25zZSIsInN0YXR1cyIsImJ1dHRvbiIsInAiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwic3R5bGUiLCJkaXNwbGF5IiwiaXRlcmFibGUiLCJzZWFyY2giLCJyZXBsYWNlIiwiaW5pdCIsIm1lbnUiLCJmaW5hbGNvdW50ZG93biIsImV4aXQiLCJ0aW1lciIsInNldEludGVydmFsIiwicGx1c0RpdnMiLCJjb25zb2xlIiwibG9nIiwiZXZlbnQiLCJrZXkiLCJpbWdzIiwiaW1nIiwibiIsInNob3dEaXZzIiwiY291bnQiLCJpIiwiZGl2cyIsImxlbmd0aCIsImFkZCIsInJlbW92ZSIsImF4aW9zU2NyaXB0Iiwic2NyaXB0Iiwic3RyaXBlU2NyaXB0Iiwic3RyaXBlIiwiU3RyaXBlIiwic2Vzc2lvbiIsImRhdGFzZXQiLCJyZWRpcmVjdFRvQ2hlY2tvdXQiLCJzZXNzaW9uSWQiLCJyZXN1bHQiLCJ1bmxvYWQiLCJjbGVhckludGVydmFsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNyYyIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInN3dXAiLCJTd3VwIiwicGx1Z2lucyIsIlN3dXBPdmVybGF5VGhlbWUiLCJjb2xvciIsIlN3dXBEZWJ1Z1BsdWdpbiIsIm9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQUEsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLG9EQUFELENBQVA7O0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQUlDLFFBQVEsQ0FBQ0MsR0FBVCxDQUFhQyxRQUFiLENBQXNCLFFBQXRCLENBQUosRUFBcUM7QUFDakMsTUFBTUMsSUFBSSxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBV0wsUUFBUSxDQUFDTSxnQkFBVCxDQUEwQixNQUExQixDQUFYLENBQWI7QUFDQUgsTUFBSSxDQUFDSSxHQUFMLENBQVMsVUFBQUMsR0FBRyxFQUFJO0FBQ1pBLE9BQUcsQ0FBQ0MsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsWUFBWTtBQUN0QyxVQUFJVCxRQUFRLENBQUNVLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBSixFQUF5QztBQUNyQ1YsZ0JBQVEsQ0FBQ1UsYUFBVCxDQUF1QixXQUF2QixFQUFvQ0MsU0FBcEMsQ0FBOENDLE1BQTlDLENBQXFELFVBQXJEO0FBQ0g7O0FBQ0QsV0FBS0MsZ0JBQUwsQ0FBc0JGLFNBQXRCLENBQWdDQyxNQUFoQyxDQUF1QyxVQUF2QztBQUNILEtBTEQ7QUFNSCxHQVBEO0FBUUg7O0FBQ0QsSUFBSVosUUFBUSxDQUFDYyxRQUFULENBQWtCQyxRQUFsQixJQUE4Qix5QkFBbEMsRUFBNkQ7QUFDekRDLEdBQUMsQ0FBQ2hCLFFBQUQsQ0FBRCxDQUFZaUIsS0FBWixDQUFrQixZQUFZO0FBQzFCRCxLQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QkUsUUFBdkI7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QVEsQ0FBQ1UsYUFBVCxDQUF1QixTQUF2QixFQUFrQ29FLG1CQUFsQyxDQUFzRCxPQUF0RCxFQUErRHpELGNBQS9EO0FBQ0g7QUFDSjs7QUFFRCxTQUFTOEMsTUFBVCxDQUFnQlksR0FBaEIsRUFBcUI7QUFDakIsTUFBTVosTUFBTSxHQUFHbkUsUUFBUSxDQUFDc0MsYUFBVCxDQUF1QixRQUF2QixDQUFmO0FBQ0E2QixRQUFNLENBQUNZLEdBQVAsR0FBYUEsR0FBYjtBQUNBWixRQUFNLENBQUN4RCxTQUFQLENBQWlCcUQsR0FBakIsQ0FBcUIsUUFBckI7QUFDQWhFLFVBQVEsQ0FBQ2dGLElBQVQsQ0FBY0MsV0FBZCxDQUEwQmQsTUFBMUI7QUFDQSxTQUFPQSxNQUFQO0FBQ0g7O0FBQ0QsSUFBSWxCLEtBQUo7QUFDQSxJQUFJRCxJQUFKO0FBQ0EsSUFBSVksS0FBSjtBQUVBLElBQU1zQixJQUFJLEdBQUcsSUFBSUMsMkNBQUosQ0FBUztBQUNsQkMsU0FBTyxFQUFFLENBQ0wsSUFBSUMsMkRBQUosQ0FBcUI7QUFDakJDLFNBQUssRUFBRTtBQURVLEdBQXJCLENBREssRUFJTCxJQUFJQywwREFBSixFQUpLO0FBRFMsQ0FBVCxDQUFiO0FBU0ExQyxJQUFJO0FBQ0orQixNQUFNO0FBQ05NLElBQUksQ0FBQ00sRUFBTCxDQUFRLFVBQVIsRUFBb0IzQyxJQUFwQjtBQUNBcUMsSUFBSSxDQUFDTSxFQUFMLENBQVEsb0JBQVIsRUFBOEJaLE1BQTlCLEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwicmVxdWlyZSgnLi4vY3NzL2FwcC5jc3MnKTtcbnJlcXVpcmUoJy4uL2Nzcy9xdWVyaWVzLmNzcycpO1xuaW1wb3J0IFN3dXAgZnJvbSAnc3d1cCc7XG5pbXBvcnQgU3d1cE92ZXJsYXlUaGVtZSBmcm9tICdAc3d1cC9vdmVybGF5LXRoZW1lJztcbmltcG9ydCBTd3VwRGVidWdQbHVnaW4gZnJvbSAnQHN3dXAvZGVidWctcGx1Z2luJztcblxuXG5pZiAoZG9jdW1lbnQuVVJMLmluY2x1ZGVzKCcvYWRtaW4nKSkge1xuICAgIGNvbnN0IHRhYnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKSk7XG4gICAgdGFicy5tYXAodGFiID0+IHtcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bicpKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duJykuY2xhc3NMaXN0LnRvZ2dsZSgnZHJvcGRvd24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QudG9nZ2xlKCdkcm9wZG93bicpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5pZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUgPT0gJy9hZG1pbi9pbGx1c3RyYXRpb24vYWRkJykge1xuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgndGV4dGFyZWEuY2tlZGl0b3InKS5ja2VkaXRvcigpO1xuICAgIH0pO1xufVxuXG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZW5hdi1pY29uJykpIHtcbiAgICBmdW5jdGlvbiB0b2dnbGVOYXYoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlbmF2JykuY2xhc3NMaXN0LnRvZ2dsZSgnc2lkZW5hdlRvZ2dsZScpO1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ3NpZGVuYXZJY29uVG9nZ2xlJyk7XG4gICAgfVxuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZW5hdi1pY29uJyk7XG5cbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTmF2KTtcbn1cblxuLy9mZXRjaCB0aHJlZSBhcnRpY2xlcyB3aXRoIGF4aW9zXG5mdW5jdGlvbiBvbkNsaWNrQXJ0aWNsZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgdXJsID0gdGhpcy5ocmVmO1xuICAgIGF4aW9zLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBjb25zdCBodG1sID0gcmVzLmRhdGEuaHRtbDtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uJykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmViZWdpbicsIGh0bWwpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKGVyci5yZXNwb25zZS5zdGF0dXMgPT0gNDA0KSB7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykuaW5uZXJIVE1MID0gJ0lsIG5cXCd5IGEgcGFzIGRcXCdhdXRyZSBhcnRpY2xlcyc7XG5cbiAgICAgICAgICAgIGJ1dHRvbi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWJlZ2luJywgcCk7XG4gICAgICAgICAgICBidXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBpdGVyYWJsZSA9IDE7XG4gICAgaXRlcmFibGUrKztcbiAgICB0aGlzLnNlYXJjaCA9IHRoaXMuc2VhcmNoLnJlcGxhY2UoL2NvdW50PTEvZywgYGNvdW50PSR7aXRlcmFibGV9YCk7XG59XG5cblxuXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LWljb24nKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LWljb24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICAgICAgICAgICAgY29uc3QgbWVudSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI21lbnUtdGFiJykpO1xuICAgICAgICAgICAgbWVudS5tYXAodGFiID0+IHtcbiAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1kcm9wZG93bi1hJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtY29udGFpbmVyJykuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1kcm9wZG93bicpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWctY29udGFpbmVyJykpIHtcbiAgICAgICAgLy9sYW5jZSBzbGlkZXIgYXZlYyB1biBjb21wdGUgYSByZWJvdXJzIGV0IHBlcm1ldCBkZSBmYWlyZSBwYXVzZSBvdSByZXByZW5kcmVcbiAgICAgICAgZnVuY3Rpb24gZmluYWxjb3VudGRvd24oZXhpdCkge1xuICAgICAgICAgICAgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcGx1c0RpdnMoMSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJva1wiKTtcbiAgICAgICAgICAgIH0sIDYwMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZXZlbnQoZXhpdCkge1xuICAgICAgICAgICAgaWYgKGV4aXQgPT09IHRydWUpIHJldHVybjtcbiAgICAgICAgICAgIC8vRmxlY2hlIGNoYW5nZSBsZSBjb21wdGV1ciArMSDDoCBkcm9pdGUgLTEgw6AgZ2F1Y2hlXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsdXNEaXZzKDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PSAnQXJyb3dMZWZ0Jykge1xuICAgICAgICAgICAgICAgICAgICBwbHVzRGl2cygtMSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjb25zdCBpbWdzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW1nLWNvbnRhaW5lciBpbWcnKSk7XG4gICAgICAgICAgICBpbWdzLm1hcChpbWcgPT4ge1xuICAgICAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcGx1c0RpdnMoMSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHBsdXNEaXZzKG4pIHtcbiAgICAgICAgICAgIGlmIChuID09PSBudWxsKSByZXR1cm47XG4gICAgICAgICAgICBzaG93RGl2cyhjb3VudCArPSBuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNob3dEaXZzKG4pIHtcbiAgICAgICAgICAgIGlmIChuID09PSBudWxsKSByZXR1cm47XG5cbiAgICAgICAgICAgIGxldCBpO1xuICAgICAgICAgICAgY29uc3QgZGl2cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmltZy1jb250YWluZXInKSk7XG4gICAgICAgICAgICAvL3NpIG9uIGFycml2ZSBhdSBib3V0IGR1IGRpYXBvcmFtYSA9PiByZXZlbmlyIGF1IGTDqWJ1dFxuICAgICAgICAgICAgaWYgKG4gPiBkaXZzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvdW50ID0gMVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9zaSBvbiB2YSDDoCBsYSBwcmVtacOocmUgaW1hZ2UgZXQgYmFja3dhcmQgPT4gbW9udHLDqSBsYSBkZXJuacOocmVcbiAgICAgICAgICAgIGlmIChuIDwgMSkge1xuICAgICAgICAgICAgICAgIGNvdW50ID0gZGl2cy5sZW5ndGhcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGl2cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGRpdnNbaV0uY2xhc3NMaXN0LmFkZCgnbm90LXNlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgZGl2c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV4aXQgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBkaXZzW2NvdW50IC0gMV0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICBkaXZzW2NvdW50IC0gMV0uY2xhc3NMaXN0LnJlbW92ZSgnbm90LXNlbGVjdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb3VudCA9IDE7XG4gICAgICAgIGV4aXQgPSBmYWxzZTtcbiAgICAgICAgc2hvd0RpdnMoY291bnQpO1xuICAgICAgICBmaW5hbGNvdW50ZG93bihleGl0KTtcbiAgICAgICAgZXZlbnQoZXhpdCk7XG4gICAgfVxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbiAuYXJ0aWNsZS1jb250YWluZXInKSkge1xuICAgICAgICBjb25zdCBheGlvc1NjcmlwdCA9IHNjcmlwdCgnaHR0cHM6Ly91bnBrZy5jb20vYXhpb3MvZGlzdC9heGlvcy5taW4uanMnKTtcbiAgICAgICAgYXhpb3NTY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tBcnRpY2xlKTtcbiAgICAgICAgfSlcblxuICAgIH1cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoZWNrb3V0JykpIHtcbiAgICAgICAgaWYoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdHJpcGUnKSkge1xuICAgICAgICAgICAgY29uc3Qgc3RyaXBlU2NyaXB0ID0gc2NyaXB0KCdodHRwczovL2pzLnN0cmlwZS5jb20vdjMvJyk7XG4gICAgICAgICAgICBzdHJpcGVTY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RyaXBlID0gU3RyaXBlKCdwa190ZXN0X1NKMmE2akZLUWVXQ000N1UzcWJHSGpmUDAwdHh4aDI1SmUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZXNzaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoZWNrb3V0JykuZGF0YXNldC5zdHJpcGU7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoZWNrb3V0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmlwZS5yZWRpcmVjdFRvQ2hlY2tvdXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbklkOiBzZXNzaW9uLFxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGByZWRpcmVjdFRvQ2hlY2tvdXRgIGZhaWxzIGR1ZSB0byBhIGJyb3dzZXIgb3IgbmV0d29ya1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXJyb3IsIGRpc3BsYXkgdGhlIGxvY2FsaXplZCBlcnJvciBtZXNzYWdlIHRvIHlvdXIgY3VzdG9tZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVzaW5nIGByZXN1bHQuZXJyb3IubWVzc2FnZWAuXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1bmxvYWQoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWctY29udGFpbmVyJykpIHtcbiAgICAgICAgY291bnQgPSBudWxsO1xuICAgICAgICBleGl0ID0gdHJ1ZTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG5cbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluIC5hcnRpY2xlLWNvbnRhaW5lcicpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24nKS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tBcnRpY2xlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNjcmlwdChzcmMpIHtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgIHNjcmlwdC5jbGFzc0xpc3QuYWRkKCdzdHJpcGUnKTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgcmV0dXJuIHNjcmlwdDtcbn1cbnZhciB0aW1lcjtcbnZhciBleGl0O1xudmFyIGNvdW50O1xuXG5jb25zdCBzd3VwID0gbmV3IFN3dXAoe1xuICAgIHBsdWdpbnM6IFtcbiAgICAgICAgbmV3IFN3dXBPdmVybGF5VGhlbWUoe1xuICAgICAgICAgICAgY29sb3I6ICcjREQyNzcyJyxcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBTd3VwRGVidWdQbHVnaW4oKVxuICAgIF0sXG59KVxuXG5pbml0KCk7XG51bmxvYWQoKTtcbnN3dXAub24oJ3BhZ2VWaWV3JywgaW5pdCk7XG5zd3VwLm9uKCd3aWxsUmVwbGFjZUNvbnRlbnQnLCB1bmxvYWQpOyJdLCJzb3VyY2VSb290IjoiIn0=