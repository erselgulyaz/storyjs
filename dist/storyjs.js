(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const o=function(){function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,o),this.output="",this.innerEl="storyjs__inner",this.scrollerEl="storyjs__scroller",this.storyItemEl="storyjs__item",this.modalEl="storyjs__modal",this.modalBandEl="storyjs__modal__band",this.modalContentEl="storyjs__modal__content",this.modalCloserEl="storyjs__modal__closer",this.modalLineEl="storyjs__modal__line",this.modalBoxEl="storyjs__modal__box",this.modalBoxInnerEl="storyjs__modal__box-inner";var n={items:null,selector:"#storyjs-selector"},l=Object.assign(n,e);for(var s in l)l.hasOwnProperty(s)&&(this[s]=l[s]);this.init()}var n,l;return n=o,(l=[{key:"init",value:function(){var t=document.createElement("div");t.classList.add(this.innerEl),document.querySelector(this.selector).appendChild(t);var e=document.createElement("div");e.classList.add(this.scrollerEl),document.querySelector(".".concat(this.innerEl)).appendChild(e),this.renderItems(),this.renderModalBase()}},{key:"renderItems",value:function(){var t=this;null!==this.items&&this.items.length>0&&(this.items.map((function(e){t.output+='\n          <div class="'.concat(t.storyItemEl,'" data-item-id="').concat(e.id,'">\n              <img\n                  class="storyjs__user-photo"\n                  src="').concat(e.path,'"\n                  alt="').concat(e.title,'"\n              />\n          </div>\n        ')})),document.querySelector(".".concat(this.scrollerEl)).innerHTML=this.output,this.handleStoryItem())}},{key:"renderModalBase",value:function(){var t=document.createElement("div");t.classList.add(this.modalEl),document.body.appendChild(t);var e=document.createElement("div");e.classList.add(this.modalBandEl),document.querySelector(".".concat(this.modalEl)).appendChild(e);var o=document.createElement("div");o.classList.add(this.modalContentEl),document.querySelector(".".concat(this.modalEl)).appendChild(o);var n=document.createElement("div");n.classList.add(this.modalCloserEl),document.querySelector(".".concat(this.modalContentEl)).appendChild(n);var l=document.createElement("div");l.classList.add(this.modalLineEl),document.querySelector(".".concat(this.modalContentEl)).appendChild(l);var s=document.createElement("div");s.classList.add(this.modalBoxEl),document.querySelector(".".concat(this.modalContentEl)).appendChild(s),this.handleModalClose(),this.handleBandClose()}},{key:"handleStoryItem",value:function(){document.querySelector(this.selector).querySelectorAll(".".concat(this.storyItemEl)).forEach((function(t){t.addEventListener("click",(function(){document.body.classList.add("storyjs__modal__opened")}))}))}},{key:"handleModalClose",value:function(){document.querySelector(".".concat(this.modalCloserEl)).addEventListener("click",(function(){document.body.classList.remove("storyjs__modal__opened")}))}},{key:"handleBandClose",value:function(){document.querySelector(".".concat(this.modalBandEl)).addEventListener("click",(function(){document.body.classList.remove("storyjs__modal__opened")}))}}])&&e(n.prototype,l),o}(),n=[{id:1,path:"http://projects.erselgulyaz.com/storyjs/horse.png",title:"Sample Item"},{id:2,path:"http://projects.erselgulyaz.com/storyjs/panda.png",title:"Sample Item"},{id:3,path:"http://projects.erselgulyaz.com/storyjs/penguen.png",title:"Sample Item"}];window.addEventListener("load",(function(){new o({items:n})}))})();