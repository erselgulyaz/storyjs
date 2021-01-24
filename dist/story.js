(()=>{var e={150:e=>{function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,e),this.output="",this.interval=null,this.innerEl="storyjs__inner",this.scrollerEl="storyjs__scroller",this.storyItemEl="storyjs__item",this.modalEl="storyjs__modal",this.modalBandEl="storyjs__modal-band",this.modalContentEl="storyjs__modal-content",this.modalCloserEl="storyjs__modal-closer",this.modalLineEl="storyjs__modal-line",this.modalLineInnerEl="storyjs__modal-line__inner",this.modalBoxEl="storyjs__modal-box",this.modalBoxInnerEl="storyjs__modal-box__inner";var o={items:null,selector:"#storyjs-selector"},l=Object.assign(o,n);for(var a in l)l.hasOwnProperty(a)&&(this[a]=l[a]);this.init()}var o,l;return o=e,(l=[{key:"init",value:function(){var e=document.createElement("div");e.classList.add(this.innerEl),document.querySelector(this.selector).appendChild(e);var t=document.createElement("div");t.classList.add(this.scrollerEl),document.querySelector(".".concat(this.innerEl)).appendChild(t),this.renderItems(),this.renderModalBase()}},{key:"renderItems",value:function(){var e=this;null!==this.items&&this.items.length>0&&(this.items.map((function(t){e.output+='\n          <div class="'.concat(e.storyItemEl,'" data-item-id="').concat(t.id,'" data-item-modal="').concat(t.modalPic,'" data-item-time=').concat(t.time,'>\n              <img\n                  class="storyjs__user-photo"\n                  src="').concat(t.profilePic,'"\n                  alt="').concat(t.title,'"\n              />\n          </div>\n        ')})),document.querySelector(".".concat(this.scrollerEl)).innerHTML=this.output,this.handleStoryItem())}},{key:"renderModalBase",value:function(){var e=document.createElement("div");e.classList.add(this.modalEl),document.body.appendChild(e);var t=document.createElement("div");t.classList.add(this.modalBandEl),document.querySelector(".".concat(this.modalEl)).appendChild(t);var n=document.createElement("div");n.classList.add(this.modalContentEl),document.querySelector(".".concat(this.modalEl)).appendChild(n);var o=document.createElement("div");o.classList.add(this.modalCloserEl),document.querySelector(".".concat(this.modalContentEl)).appendChild(o);var l=document.createElement("div");l.classList.add(this.modalLineEl),document.querySelector(".".concat(this.modalContentEl)).appendChild(l);var a=document.createElement("div");a.classList.add(this.modalLineInnerEl),document.querySelector(".".concat(this.modalLineEl)).appendChild(a);var r=document.createElement("div");r.classList.add(this.modalBoxEl),document.querySelector(".".concat(this.modalContentEl)).appendChild(r);var c=document.createElement("div");c.classList.add(this.modalBoxInnerEl),document.querySelector(".".concat(this.modalBoxEl)).appendChild(c),this.handleModalClose(),this.handleBandClose()}},{key:"handleStoryItem",value:function(){var e=this;document.querySelector(this.selector).querySelectorAll(".".concat(this.storyItemEl)).forEach((function(t){t.addEventListener("click",(function(){document.querySelector(".".concat(e.modalBoxInnerEl)).style.background="url(".concat(t.dataset.itemModal,") no-repeat center center"),document.querySelector(".".concat(e.modalBoxInnerEl)).style.backgroundSize="cover",document.body.classList.add("storyjs__modal__opened"),e.party(t.dataset.itemTime,t.dataset.itemId)}))}))}},{key:"party",value:function(e,t){var n=this;document.querySelector(".".concat(this.modalLineInnerEl)).style.transition="all ".concat(e,"s ease-in"),document.querySelector(".".concat(this.modalLineInnerEl)).style.width="100%",this.interval=setInterval((function(){var e=n.items.filter((function(e){return e.id===parseInt(t)+1}));if(e.length>0&&document.body.classList.contains("storyjs__modal__opened"))return new Promise((function(e,t){document.querySelector(".storyjs__modal-line__inner").style="",setTimeout(e,100)})).then((function(){document.querySelector(".".concat(n.modalBoxInnerEl)).style.background="url(".concat(e[0].modalPic,") no-repeat center center"),document.querySelector(".".concat(n.modalBoxInnerEl)).style.backgroundSize="cover",clearInterval(n.interval),n.party(e[0].time,e[0].id)}));n.closeActions()}),"".concat(e,"000"))}},{key:"handleModalClose",value:function(){var e=this;document.querySelector(".".concat(this.modalCloserEl)).addEventListener("click",(function(){e.closeActions()}))}},{key:"handleBandClose",value:function(){var e=this;document.querySelector(".".concat(this.modalBandEl)).addEventListener("click",(function(){e.closeActions()}))}},{key:"closeActions",value:function(){document.body.classList.remove("storyjs__modal__opened"),document.querySelector(".".concat(this.modalBoxInnerEl)).style="",document.querySelector(".".concat(this.modalLineInnerEl)).removeAttribute("style"),clearInterval(this.interval)}}])&&n(o.prototype,l),e}();e.exports=o}},t={};!function n(o){if(t[o])return t[o].exports;var l=t[o]={exports:{}};return e[o](l,l.exports,n),l.exports}(150)})();