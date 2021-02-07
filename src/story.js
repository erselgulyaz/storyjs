class storyjs {
  constructor(options = {}) {
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

    const defaults = {
      items: null,
      selector: "#storyjs-selector",
    };

    const extend = Object.assign(defaults, options);

    for (const key in extend) {
      if (extend.hasOwnProperty(key)) {
        this[key] = extend[key];
      }
    }
    if (document.querySelector(this.selector)) {
      this.init();
    }
  }

  init() {
    /* inner wrapper created */
    const inner = document.createElement("div");
    inner.classList.add(this.innerEl);
    document.querySelector(this.selector).appendChild(inner);

    /* created scroll container (for mobile devices and fields longer than containers)  */
    const scroller = document.createElement("div");
    scroller.classList.add(this.scrollerEl);
    document.querySelector(`.${this.innerEl}`).appendChild(scroller);

    this.renderItems();
    this.renderModalBase();
  }

  renderItems() {
    if (this.items !== null && this.items.length > 0) {
      this.items.map((item) => {
        this.output += `
          <div class="${this.storyItemEl}" data-item-id="${item.id}" data-item-modal="${item.modalPic}" data-item-time=${item.time}>
              <img
                  class="storyjs__user-photo"
                  src="${item.profilePic}"
                  alt="${item.title}"
              />
          </div>
        `;
      });
      document.querySelector(`.${this.scrollerEl}`).innerHTML = this.output;

      this.handleStoryItem();
    }
  }

  renderModalBase() {
    /* created modal wrapper */
    const modal = document.createElement("div");
    modal.classList.add(this.modalEl);
    document.body.appendChild(modal);

    const band = document.createElement("div");
    band.classList.add(this.modalBandEl);
    document.querySelector(`.${this.modalEl}`).appendChild(band);

    const content = document.createElement("div");
    content.classList.add(this.modalContentEl);
    document.querySelector(`.${this.modalEl}`).appendChild(content);

    const closer = document.createElement("div");
    closer.classList.add(this.modalCloserEl);
    document.querySelector(`.${this.modalContentEl}`).appendChild(closer);

    const prevArrow = document.createElement("div");
    prevArrow.classList.add(this.modalArrowEl, this.modalArrowPrevEl);
    document.querySelector(`.${this.modalContentEl}`).appendChild(prevArrow);

    const nextArrow = document.createElement("div");
    nextArrow.classList.add(this.modalArrowEl, this.modalArrowNextEl);
    document.querySelector(`.${this.modalContentEl}`).appendChild(nextArrow);

    const line = document.createElement("div");
    line.classList.add(this.modalLineEl);
    document.querySelector(`.${this.modalContentEl}`).appendChild(line);

    const lineInner = document.createElement("div");
    lineInner.classList.add(this.modalLineInnerEl);
    document.querySelector(`.${this.modalLineEl}`).appendChild(lineInner);

    const box = document.createElement("div");
    box.classList.add(this.modalBoxEl);
    document.querySelector(`.${this.modalContentEl}`).appendChild(box);

    const inner = document.createElement("div");
    inner.classList.add(this.modalBoxInnerEl);
    document.querySelector(`.${this.modalBoxEl}`).appendChild(inner);

    this.handleModalClose();
    this.handleModalArrow();
    this.handleBandClose();
  }

  handleStoryItem() {
    const selector = document.querySelector(this.selector);
    const els = selector.querySelectorAll(`.${this.storyItemEl}`);
    els.forEach((el) => {
      el.addEventListener("click", () => {
        this.setModalMedia(el.dataset.itemModal);
        document.body.classList.add("storyjs__modal__opened");
        this.party(el.dataset.itemTime, el.dataset.itemId);
      });
    });
  }

  party(time, idSelector) {
    this.activeId = idSelector;
    this.setLineStyles(time);

    this.interval = setInterval(() => {
      const filteredItems = this.getFilteredItem(1);
      if (
        filteredItems.length > 0 &&
        document.body.classList.contains("storyjs__modal__opened")
      ) {
        return new Promise(function (resolve) {
          document.querySelector(`.storyjs__modal-line__inner`).style = "";
          setTimeout(resolve, 100);
        }).then(() => {
          this.setModalMedia(filteredItems[0].modalPic);
          clearInterval(this.interval);
          this.party(filteredItems[0].time, filteredItems[0].id);
        });
      } else {
        this.closeActions();
      }
    }, `${time}000`);
  }

  handleModalArrow() {
    const selector = document.querySelector(`.${this.modalEl}`);
    const els = selector.querySelectorAll(`.${this.modalArrowEl}`);
    els.forEach((el) => {
      el.addEventListener("click", () => {
        clearInterval(this.interval);

        const direction = el.classList.contains(this.modalArrowNextEl);
        return new Promise(function (resolve) {
          document.querySelector(`.storyjs__modal-line__inner`).style = "";
          setTimeout(resolve, 100);
        }).then(() => {
          const number = direction ? 1 : -1;
          const filteredItems = this.getFilteredItem(number);
          if (filteredItems.length > 0) {
            this.setLineStyles(filteredItems[0].time);
            this.setModalMedia(filteredItems[0].modalPic);
            this.party(filteredItems[0].time, filteredItems[0].id);
          } else {
            this.closeActions();
          }
        });
      });
    });
  }

  setModalMedia(media) {
    document.querySelector(
      `.${this.modalBoxInnerEl}`
    ).style.background = `url(${media}) no-repeat center center`;
    document.querySelector(`.${this.modalBoxInnerEl}`).style.backgroundSize =
      "cover";
  }

  setLineStyles(time) {
    document.querySelector(
      `.${this.modalLineInnerEl}`
    ).style.transition = `all ${time}s ease-in`;
    document.querySelector(`.${this.modalLineInnerEl}`).style.width = "100%";
  }

  getFilteredItem(parameter) {
    return this.items.filter(
      (x) => x.id === parseInt(this.activeId) + parameter
    );
  }

  handleModalClose() {
    document
      .querySelector(`.${this.modalCloserEl}`)
      .addEventListener("click", () => {
        this.closeActions();
      });
  }

  handleBandClose() {
    document
      .querySelector(`.${this.modalBandEl}`)
      .addEventListener("click", () => {
        this.closeActions();
      });
  }

  closeActions() {
    document.body.classList.remove("storyjs__modal__opened");
    document.querySelector(`.${this.modalBoxInnerEl}`).style = "";
    document
      .querySelector(`.${this.modalLineInnerEl}`)
      .removeAttribute("style");
    clearInterval(this.interval);
  }
}

module.exports = storyjs;
