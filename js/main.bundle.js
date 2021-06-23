"use strict";

var _this = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

var navSlide = function navSlide() {
  var _this2 = this;

  _newArrowCheck(this, _this);

  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav-links');
  var navLinks = document.querySelectorAll('.nav-links li');

  var navFadeRemove = function navFadeRemove(navLinkA) {
    var _this3 = this;

    _newArrowCheck(this, _this2);

    var navLinksA = document.querySelector(".".concat(navLinkA));
    navLinksA.addEventListener('click', function () {
      var _this4 = this;

      _newArrowCheck(this, _this3);

      nav.classList.remove('nav-active');
      navLinks.forEach(function (link, index) {
        _newArrowCheck(this, _this4);

        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = "navLinkFade 0.5s ease forwards ".concat(index / 4 + 0.5, "s");
        }
      }.bind(this));
      burger.classList.remove('toggle');
    }.bind(this));
  }.bind(this);

  var sections = ['inicio', 'metodo', 'coach', 'testimonios', 'contacto'];

  for (var i = 0; i < sections.length; i++) {
    navFadeRemove(sections[i]);
  }

  burger.addEventListener('click', function () {
    var _this5 = this;

    _newArrowCheck(this, _this2);

    nav.classList.toggle('nav-active');
    navLinks.forEach(function (link, index) {
      _newArrowCheck(this, _this5);

      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = "navLinkFade 0.5s ease forwards ".concat(index / 4 + 0.5, "s");
      }
    }.bind(this));
    burger.classList.toggle('toggle');
  }.bind(this));
}.bind(void 0);

navSlide();
var sections = document.querySelectorAll(".section");

var verifyVisibility = function verifyVisibility(entries) {
  _newArrowCheck(this, _this);

  var _iterator = _createForOfIteratorHelper(entries),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var entry = _step.value;

      if (entry.isIntersecting) {
        var menu = document.querySelector(".".concat(entry.target.id));
        menu.style.color = "#26E573";
      } else {
        var _menu = document.querySelector(".".concat(entry.target.id));

        _menu.style.color = "";
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}.bind(void 0);

var anchoTotal = screen.width;
var mqw;

if (anchoTotal < 900) {
  mqw = "-150px";
}

if (anchoTotal > 900) {
  mqw = "-200px";
}

if (anchoTotal > 1400) {
  mqw = "-300px";
}

var options = {
  rootMargin: mqw,
  treshold: 0.5
};
var observer = new IntersectionObserver(verifyVisibility, options);

var _iterator2 = _createForOfIteratorHelper(sections),
    _step2;

try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var section = _step2.value;
    observer.observe(section);
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}

var swiper = new Swiper(".mySwiper", {
  speed: 600,
  parallax: true,
  autoplay: {
    delay: 30000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});