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
      this.parentElement.classList.toggle('menu-dropdown');
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
        var stripe = Stripe('pk_live_hALK0BHcqzSdZDYe7iXoFDEA00IxhQUvex');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9xdWVyaWVzLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJkb2N1bWVudCIsIlVSTCIsImluY2x1ZGVzIiwidGFicyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtYXAiLCJ0YWIiLCJhZGRFdmVudExpc3RlbmVyIiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImxhc3RFbGVtZW50Q2hpbGQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiJCIsInJlYWR5IiwiY2tlZGl0b3IiLCJ0b2dnbGVOYXYiLCJpY29uIiwib25DbGlja0FydGljbGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1cmwiLCJocmVmIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiaHRtbCIsImRhdGEiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJlcnIiLCJyZXNwb25zZSIsInN0YXR1cyIsImJ1dHRvbiIsInAiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwic3R5bGUiLCJkaXNwbGF5IiwiaXRlcmFibGUiLCJzZWFyY2giLCJyZXBsYWNlIiwiaW5pdCIsIm1lbnUiLCJwYXJlbnRFbGVtZW50IiwiZmluYWxjb3VudGRvd24iLCJleGl0IiwidGltZXIiLCJzZXRJbnRlcnZhbCIsInBsdXNEaXZzIiwiY29uc29sZSIsImxvZyIsImV2ZW50Iiwia2V5IiwiaW1ncyIsImltZyIsIm4iLCJzaG93RGl2cyIsImNvdW50IiwiaSIsImRpdnMiLCJsZW5ndGgiLCJhZGQiLCJyZW1vdmUiLCJheGlvc1NjcmlwdCIsInNjcmlwdCIsInN0cmlwZVNjcmlwdCIsInN0cmlwZSIsIlN0cmlwZSIsInNlc3Npb24iLCJkYXRhc2V0IiwicmVkaXJlY3RUb0NoZWNrb3V0Iiwic2Vzc2lvbklkIiwicmVzdWx0IiwidW5sb2FkIiwiY2xlYXJJbnRlcnZhbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzcmMiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJzd3VwIiwiU3d1cCIsInBsdWdpbnMiLCJTd3VwT3ZlcmxheVRoZW1lIiwiY29sb3IiLCJTd3VwRGVidWdQbHVnaW4iLCJvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUFBLG1CQUFPLENBQUMsNENBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyxvREFBRCxDQUFQOztBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFJQyxRQUFRLENBQUNDLEdBQVQsQ0FBYUMsUUFBYixDQUFzQixRQUF0QixDQUFKLEVBQXFDO0FBQ2pDLE1BQU1DLElBQUksR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVdMLFFBQVEsQ0FBQ00sZ0JBQVQsQ0FBMEIsTUFBMUIsQ0FBWCxDQUFiO0FBQ0FILE1BQUksQ0FBQ0ksR0FBTCxDQUFTLFVBQUFDLEdBQUcsRUFBSTtBQUNaQSxPQUFHLENBQUNDLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQVk7QUFDdEMsVUFBSVQsUUFBUSxDQUFDVSxhQUFULENBQXVCLFdBQXZCLENBQUosRUFBeUM7QUFDckNWLGdCQUFRLENBQUNVLGFBQVQsQ0FBdUIsV0FBdkIsRUFBb0NDLFNBQXBDLENBQThDQyxNQUE5QyxDQUFxRCxVQUFyRDtBQUNIOztBQUNELFdBQUtDLGdCQUFMLENBQXNCRixTQUF0QixDQUFnQ0MsTUFBaEMsQ0FBdUMsVUFBdkM7QUFDSCxLQUxEO0FBTUgsR0FQRDtBQVFIOztBQUNELElBQUlaLFFBQVEsQ0FBQ2MsUUFBVCxDQUFrQkMsUUFBbEIsSUFBOEIseUJBQWxDLEVBQTZEO0FBQ3pEQyxHQUFDLENBQUNoQixRQUFELENBQUQsQ0FBWWlCLEtBQVosQ0FBa0IsWUFBWTtBQUMxQkQsS0FBQyxDQUFDLG1CQUFELENB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USxDQUFDVSxhQUFULENBQXVCLFNBQXZCLEVBQWtDcUUsbUJBQWxDLENBQXNELE9BQXRELEVBQStEMUQsY0FBL0Q7QUFDSDtBQUNKOztBQUVELFNBQVMrQyxNQUFULENBQWdCWSxHQUFoQixFQUFxQjtBQUNqQixNQUFNWixNQUFNLEdBQUdwRSxRQUFRLENBQUNzQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQThCLFFBQU0sQ0FBQ1ksR0FBUCxHQUFhQSxHQUFiO0FBQ0FaLFFBQU0sQ0FBQ3pELFNBQVAsQ0FBaUJzRCxHQUFqQixDQUFxQixRQUFyQjtBQUNBakUsVUFBUSxDQUFDaUYsSUFBVCxDQUFjQyxXQUFkLENBQTBCZCxNQUExQjtBQUNBLFNBQU9BLE1BQVA7QUFDSDs7QUFDRCxJQUFJbEIsS0FBSjtBQUNBLElBQUlELElBQUo7QUFDQSxJQUFJWSxLQUFKO0FBRUEsSUFBTXNCLElBQUksR0FBRyxJQUFJQywyQ0FBSixDQUFTO0FBQ2xCQyxTQUFPLEVBQUUsQ0FDTCxJQUFJQywyREFBSixDQUFxQjtBQUNqQkMsU0FBSyxFQUFFO0FBRFUsR0FBckIsQ0FESyxFQUlMLElBQUlDLDBEQUFKLEVBSks7QUFEUyxDQUFULENBQWI7QUFTQTNDLElBQUk7QUFDSmdDLE1BQU07QUFDTk0sSUFBSSxDQUFDTSxFQUFMLENBQVEsVUFBUixFQUFvQjVDLElBQXBCO0FBQ0FzQyxJQUFJLENBQUNNLEVBQUwsQ0FBUSxvQkFBUixFQUE4QlosTUFBOUIsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJyZXF1aXJlKCcuLi9jc3MvYXBwLmNzcycpO1xucmVxdWlyZSgnLi4vY3NzL3F1ZXJpZXMuY3NzJyk7XG5pbXBvcnQgU3d1cCBmcm9tICdzd3VwJztcbmltcG9ydCBTd3VwT3ZlcmxheVRoZW1lIGZyb20gJ0Bzd3VwL292ZXJsYXktdGhlbWUnO1xuaW1wb3J0IFN3dXBEZWJ1Z1BsdWdpbiBmcm9tICdAc3d1cC9kZWJ1Zy1wbHVnaW4nO1xuXG5cbmlmIChkb2N1bWVudC5VUkwuaW5jbHVkZXMoJy9hZG1pbicpKSB7XG4gICAgY29uc3QgdGFicyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpKTtcbiAgICB0YWJzLm1hcCh0YWIgPT4ge1xuICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duJykpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24nKS5jbGFzc0xpc3QudG9nZ2xlKCdkcm9wZG93bicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sYXN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC50b2dnbGUoJ2Ryb3Bkb3duJyk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cbmlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSA9PSAnL2FkbWluL2lsbHVzdHJhdGlvbi9hZGQnKSB7XG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCd0ZXh0YXJlYS5ja2VkaXRvcicpLmNrZWRpdG9yKCk7XG4gICAgfSk7XG59XG5cbmlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlbmF2LWljb24nKSkge1xuICAgIGZ1bmN0aW9uIHRvZ2dsZU5hdigpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGVuYXYnKS5jbGFzc0xpc3QudG9nZ2xlKCdzaWRlbmF2VG9nZ2xlJyk7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnc2lkZW5hdkljb25Ub2dnbGUnKTtcbiAgICB9XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlbmF2LWljb24nKTtcblxuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVOYXYpO1xufVxuXG4vL2ZldGNoIHRocmVlIGFydGljbGVzIHdpdGggYXhpb3NcbmZ1bmN0aW9uIG9uQ2xpY2tBcnRpY2xlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB1cmwgPSB0aGlzLmhyZWY7XG4gICAgYXhpb3MuZ2V0KHVybCkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIGNvbnN0IGh0bWwgPSByZXMuZGF0YS5odG1sO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24nKS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWJlZ2luJywgaHRtbCk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoZXJyLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDQpIHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24nKTtcblxuICAgICAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKS5pbm5lckhUTUwgPSAnSWwgblxcJ3kgYSBwYXMgZFxcJ2F1dHJlIGFydGljbGVzJztcblxuICAgICAgICAgICAgYnV0dG9uLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlYmVnaW4nLCBwKTtcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgbGV0IGl0ZXJhYmxlID0gMTtcbiAgICBpdGVyYWJsZSsrO1xuICAgIHRoaXMuc2VhcmNoID0gdGhpcy5zZWFyY2gucmVwbGFjZSgvY291bnQ9MS9nLCBgY291bnQ9JHtpdGVyYWJsZX1gKTtcbn1cblxuXG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXYtaWNvbicpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXYtaWNvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG4gICAgICAgICAgICBjb25zdCBtZW51ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbWVudS10YWInKSk7XG4gICAgICAgICAgICBtZW51Lm1hcCh0YWIgPT4ge1xuICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LWRyb3Bkb3duLWEnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1kcm9wZG93bicpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWctY29udGFpbmVyJykpIHtcbiAgICAgICAgLy9sYW5jZSBzbGlkZXIgYXZlYyB1biBjb21wdGUgYSByZWJvdXJzIGV0IHBlcm1ldCBkZSBmYWlyZSBwYXVzZSBvdSByZXByZW5kcmVcbiAgICAgICAgZnVuY3Rpb24gZmluYWxjb3VudGRvd24oZXhpdCkge1xuICAgICAgICAgICAgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcGx1c0RpdnMoMSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJva1wiKTtcbiAgICAgICAgICAgIH0sIDYwMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZXZlbnQoZXhpdCkge1xuICAgICAgICAgICAgaWYgKGV4aXQgPT09IHRydWUpIHJldHVybjtcbiAgICAgICAgICAgIC8vRmxlY2hlIGNoYW5nZSBsZSBjb21wdGV1ciArMSDDoCBkcm9pdGUgLTEgw6AgZ2F1Y2hlXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsdXNEaXZzKDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PSAnQXJyb3dMZWZ0Jykge1xuICAgICAgICAgICAgICAgICAgICBwbHVzRGl2cygtMSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjb25zdCBpbWdzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW1nLWNvbnRhaW5lciBpbWcnKSk7XG4gICAgICAgICAgICBpbWdzLm1hcChpbWcgPT4ge1xuICAgICAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcGx1c0RpdnMoMSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHBsdXNEaXZzKG4pIHtcbiAgICAgICAgICAgIGlmIChuID09PSBudWxsKSByZXR1cm47XG4gICAgICAgICAgICBzaG93RGl2cyhjb3VudCArPSBuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNob3dEaXZzKG4pIHtcbiAgICAgICAgICAgIGlmIChuID09PSBudWxsKSByZXR1cm47XG5cbiAgICAgICAgICAgIGxldCBpO1xuICAgICAgICAgICAgY29uc3QgZGl2cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmltZy1jb250YWluZXInKSk7XG4gICAgICAgICAgICAvL3NpIG9uIGFycml2ZSBhdSBib3V0IGR1IGRpYXBvcmFtYSA9PiByZXZlbmlyIGF1IGTDqWJ1dFxuICAgICAgICAgICAgaWYgKG4gPiBkaXZzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvdW50ID0gMVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9zaSBvbiB2YSDDoCBsYSBwcmVtacOocmUgaW1hZ2UgZXQgYmFja3dhcmQgPT4gbW9udHLDqSBsYSBkZXJuacOocmVcbiAgICAgICAgICAgIGlmIChuIDwgMSkge1xuICAgICAgICAgICAgICAgIGNvdW50ID0gZGl2cy5sZW5ndGhcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGl2cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGRpdnNbaV0uY2xhc3NMaXN0LmFkZCgnbm90LXNlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgZGl2c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV4aXQgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBkaXZzW2NvdW50IC0gMV0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICBkaXZzW2NvdW50IC0gMV0uY2xhc3NMaXN0LnJlbW92ZSgnbm90LXNlbGVjdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb3VudCA9IDE7XG4gICAgICAgIGV4aXQgPSBmYWxzZTtcbiAgICAgICAgc2hvd0RpdnMoY291bnQpO1xuICAgICAgICBmaW5hbGNvdW50ZG93bihleGl0KTtcbiAgICAgICAgZXZlbnQoZXhpdCk7XG4gICAgfVxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbiAuYXJ0aWNsZS1jb250YWluZXInKSkge1xuICAgICAgICBjb25zdCBheGlvc1NjcmlwdCA9IHNjcmlwdCgnaHR0cHM6Ly91bnBrZy5jb20vYXhpb3MvZGlzdC9heGlvcy5taW4uanMnKTtcbiAgICAgICAgYXhpb3NTY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tBcnRpY2xlKTtcbiAgICAgICAgfSlcblxuICAgIH1cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoZWNrb3V0JykpIHtcbiAgICAgICAgaWYoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdHJpcGUnKSkge1xuICAgICAgICAgICAgY29uc3Qgc3RyaXBlU2NyaXB0ID0gc2NyaXB0KCdodHRwczovL2pzLnN0cmlwZS5jb20vdjMvJyk7XG4gICAgICAgICAgICBzdHJpcGVTY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RyaXBlID0gU3RyaXBlKCdwa19saXZlX2hBTEswQkhjcXpTZFpEWWU3aVhvRkRFQTAwSXhoUVV2ZXgnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZXNzaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoZWNrb3V0JykuZGF0YXNldC5zdHJpcGU7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoZWNrb3V0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmlwZS5yZWRpcmVjdFRvQ2hlY2tvdXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbklkOiBzZXNzaW9uLFxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGByZWRpcmVjdFRvQ2hlY2tvdXRgIGZhaWxzIGR1ZSB0byBhIGJyb3dzZXIgb3IgbmV0d29ya1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXJyb3IsIGRpc3BsYXkgdGhlIGxvY2FsaXplZCBlcnJvciBtZXNzYWdlIHRvIHlvdXIgY3VzdG9tZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVzaW5nIGByZXN1bHQuZXJyb3IubWVzc2FnZWAuXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1bmxvYWQoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWctY29udGFpbmVyJykpIHtcbiAgICAgICAgY291bnQgPSBudWxsO1xuICAgICAgICBleGl0ID0gdHJ1ZTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG5cbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluIC5hcnRpY2xlLWNvbnRhaW5lcicpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24nKS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tBcnRpY2xlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNjcmlwdChzcmMpIHtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgIHNjcmlwdC5jbGFzc0xpc3QuYWRkKCdzdHJpcGUnKTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgcmV0dXJuIHNjcmlwdDtcbn1cbnZhciB0aW1lcjtcbnZhciBleGl0O1xudmFyIGNvdW50O1xuXG5jb25zdCBzd3VwID0gbmV3IFN3dXAoe1xuICAgIHBsdWdpbnM6IFtcbiAgICAgICAgbmV3IFN3dXBPdmVybGF5VGhlbWUoe1xuICAgICAgICAgICAgY29sb3I6ICcjREQyNzcyJyxcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBTd3VwRGVidWdQbHVnaW4oKVxuICAgIF0sXG59KVxuXG5pbml0KCk7XG51bmxvYWQoKTtcbnN3dXAub24oJ3BhZ2VWaWV3JywgaW5pdCk7XG5zd3VwLm9uKCd3aWxsUmVwbGFjZUNvbnRlbnQnLCB1bmxvYWQpOyJdLCJzb3VyY2VSb290IjoiIn0=