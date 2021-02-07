/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 150:
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var storyjs = /*#__PURE__*/function () {
  function storyjs() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, storyjs);

    this.output = "";
    this.interval = null;
    this.activeId = null;
    this.innerEl = "storyjs__inner";
    this.scrollerEl = "storyjs__scroller";
    this.storyItemEl = "storyjs__item";
    this.modalEl = "storyjs__modal";
    this.modalBandEl = "storyjs__modal-band";
    this.modalContentEl = "storyjs__modal-content";
    this.modalCloserEl = "storyjs__modal-closer";
    this.modalArrowEl = "storyjs__modal-arrow";
    this.modalArrowPrevEl = "storyjs__modal-arrow__prev";
    this.modalArrowNextEl = "storyjs__modal-arrow__next";
    this.modalLineEl = "storyjs__modal-line";
    this.modalLineInnerEl = "storyjs__modal-line__inner";
    this.modalBoxEl = "storyjs__modal-box";
    this.modalBoxInnerEl = "storyjs__modal-box__inner";
    var defaults = {
      items: null,
      selector: "#storyjs-selector"
    };
    var extend = Object.assign(defaults, options);

    for (var key in extend) {
      if (extend.hasOwnProperty(key)) {
        this[key] = extend[key];
      }
    }

    if (document.querySelector(this.selector)) {
      this.init();
    }
  }

  _createClass(storyjs, [{
    key: "init",
    value: function init() {
      /* inner wrapper created */
      var inner = document.createElement("div");
      inner.classList.add(this.innerEl);
      document.querySelector(this.selector).appendChild(inner);
      /* created scroll container (for mobile devices and fields longer than containers)  */

      var scroller = document.createElement("div");
      scroller.classList.add(this.scrollerEl);
      document.querySelector(".".concat(this.innerEl)).appendChild(scroller);
      this.renderItems();
      this.renderModalBase();
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this = this;

      if (this.items !== null && this.items.length > 0) {
        this.items.map(function (item) {
          _this.output += "\n          <div class=\"".concat(_this.storyItemEl, "\" data-item-id=\"").concat(item.id, "\" data-item-modal=\"").concat(item.modalPic, "\" data-item-time=").concat(item.time, ">\n              <img\n                  class=\"storyjs__user-photo\"\n                  src=\"").concat(item.profilePic, "\"\n                  alt=\"").concat(item.title, "\"\n              />\n          </div>\n        ");
        });
        document.querySelector(".".concat(this.scrollerEl)).innerHTML = this.output;
        this.handleStoryItem();
      }
    }
  }, {
    key: "renderModalBase",
    value: function renderModalBase() {
      /* created modal wrapper */
      var modal = document.createElement("div");
      modal.classList.add(this.modalEl);
      document.body.appendChild(modal);
      var band = document.createElement("div");
      band.classList.add(this.modalBandEl);
      document.querySelector(".".concat(this.modalEl)).appendChild(band);
      var content = document.createElement("div");
      content.classList.add(this.modalContentEl);
      document.querySelector(".".concat(this.modalEl)).appendChild(content);
      var closer = document.createElement("div");
      closer.classList.add(this.modalCloserEl);
      document.querySelector(".".concat(this.modalContentEl)).appendChild(closer);
      var prevArrow = document.createElement("div");
      prevArrow.classList.add(this.modalArrowEl, this.modalArrowPrevEl);
      document.querySelector(".".concat(this.modalContentEl)).appendChild(prevArrow);
      var nextArrow = document.createElement("div");
      nextArrow.classList.add(this.modalArrowEl, this.modalArrowNextEl);
      document.querySelector(".".concat(this.modalContentEl)).appendChild(nextArrow);
      var line = document.createElement("div");
      line.classList.add(this.modalLineEl);
      document.querySelector(".".concat(this.modalContentEl)).appendChild(line);
      var lineInner = document.createElement("div");
      lineInner.classList.add(this.modalLineInnerEl);
      document.querySelector(".".concat(this.modalLineEl)).appendChild(lineInner);
      var box = document.createElement("div");
      box.classList.add(this.modalBoxEl);
      document.querySelector(".".concat(this.modalContentEl)).appendChild(box);
      var inner = document.createElement("div");
      inner.classList.add(this.modalBoxInnerEl);
      document.querySelector(".".concat(this.modalBoxEl)).appendChild(inner);
      this.handleModalClose();
      this.handleModalArrow();
      this.handleBandClose();
    }
  }, {
    key: "handleStoryItem",
    value: function handleStoryItem() {
      var _this2 = this;

      var selector = document.querySelector(this.selector);
      var els = selector.querySelectorAll(".".concat(this.storyItemEl));
      els.forEach(function (el) {
        el.addEventListener("click", function () {
          _this2.setModalMedia(el.dataset.itemModal);

          document.body.classList.add("storyjs__modal__opened");

          _this2.party(el.dataset.itemTime, el.dataset.itemId);
        });
      });
    }
  }, {
    key: "party",
    value: function party(time, idSelector) {
      var _this3 = this;

      this.activeId = idSelector;
      this.setLineStyles(time);
      this.interval = setInterval(function () {
        var filteredItems = _this3.getFilteredItem(1);

        if (filteredItems.length > 0 && document.body.classList.contains("storyjs__modal__opened")) {
          return new Promise(function (resolve) {
            document.querySelector(".storyjs__modal-line__inner").style = "";
            setTimeout(resolve, 100);
          }).then(function () {
            _this3.setModalMedia(filteredItems[0].modalPic);

            clearInterval(_this3.interval);

            _this3.party(filteredItems[0].time, filteredItems[0].id);
          });
        } else {
          _this3.closeActions();
        }
      }, "".concat(time, "000"));
    }
  }, {
    key: "handleModalArrow",
    value: function handleModalArrow() {
      var _this4 = this;

      var selector = document.querySelector(".".concat(this.modalEl));
      var els = selector.querySelectorAll(".".concat(this.modalArrowEl));
      els.forEach(function (el) {
        el.addEventListener("click", function () {
          clearInterval(_this4.interval);
          var direction = el.classList.contains(_this4.modalArrowNextEl);
          return new Promise(function (resolve) {
            document.querySelector(".storyjs__modal-line__inner").style = "";
            setTimeout(resolve, 100);
          }).then(function () {
            var number = direction ? 1 : -1;

            var filteredItems = _this4.getFilteredItem(number);

            if (filteredItems.length > 0) {
              _this4.setLineStyles(filteredItems[0].time);

              _this4.setModalMedia(filteredItems[0].modalPic);

              _this4.party(filteredItems[0].time, filteredItems[0].id);
            } else {
              _this4.closeActions();
            }
          });
        });
      });
    }
  }, {
    key: "setModalMedia",
    value: function setModalMedia(media) {
      document.querySelector(".".concat(this.modalBoxInnerEl)).style.background = "url(".concat(media, ") no-repeat center center");
      document.querySelector(".".concat(this.modalBoxInnerEl)).style.backgroundSize = "cover";
    }
  }, {
    key: "setLineStyles",
    value: function setLineStyles(time) {
      document.querySelector(".".concat(this.modalLineInnerEl)).style.transition = "all ".concat(time, "s ease-in");
      document.querySelector(".".concat(this.modalLineInnerEl)).style.width = "100%";
    }
  }, {
    key: "getFilteredItem",
    value: function getFilteredItem(parameter) {
      var _this5 = this;

      return this.items.filter(function (x) {
        return x.id === parseInt(_this5.activeId) + parameter;
      });
    }
  }, {
    key: "handleModalClose",
    value: function handleModalClose() {
      var _this6 = this;

      document.querySelector(".".concat(this.modalCloserEl)).addEventListener("click", function () {
        _this6.closeActions();
      });
    }
  }, {
    key: "handleBandClose",
    value: function handleBandClose() {
      var _this7 = this;

      document.querySelector(".".concat(this.modalBandEl)).addEventListener("click", function () {
        _this7.closeActions();
      });
    }
  }, {
    key: "closeActions",
    value: function closeActions() {
      document.body.classList.remove("storyjs__modal__opened");
      document.querySelector(".".concat(this.modalBoxInnerEl)).style = "";
      document.querySelector(".".concat(this.modalLineInnerEl)).removeAttribute("style");
      clearInterval(this.interval);
    }
  }]);

  return storyjs;
}();

module.exports = storyjs;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__(150);
/******/ })()
;