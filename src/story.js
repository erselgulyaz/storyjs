class storyjs {
  constructor(options = {}) {
    this.output = "";
    this.innerEl = "storyjs__inner";
    this.scrollerEl = "storyjs__scroller";
    this.storyItemEl = "storyjs__item";
    this.modalEl = "storyjs__modal";
    this.modalBandEl = "storyjs__modal__band";
    this.modalContentEl = "storyjs__modal__content";
    this.modalCloserEl = "storyjs__modal__closer";
    this.modalLineEl = "storyjs__modal__line";
    this.modalBoxEl = "storyjs__modal__box";
    this.modalBoxInnerEl = "storyjs__modal__box-inner";

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
    this.init();
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
          <div class="${this.storyItemEl}" data-item-id="${item.id}">
              <img
                  class="storyjs__user-photo"
                  src="${item.path}"
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

    const line = document.createElement("div");
    line.classList.add(this.modalLineEl);
    document.querySelector(`.${this.modalContentEl}`).appendChild(line);

    const box = document.createElement("div");
    box.classList.add(this.modalBoxEl);
    document.querySelector(`.${this.modalContentEl}`).appendChild(box);

    this.handleModalClose();
    this.handleBandClose();
  }

  handleStoryItem() {
    const selector = document.querySelector(this.selector);
    const els = selector.querySelectorAll(`.${this.storyItemEl}`);
    els.forEach((el) => {
      el.addEventListener("click", () => {
        document.body.classList.add("storyjs__modal__opened");
      });
    });
  }

  handleModalClose() {
    document
      .querySelector(`.${this.modalCloserEl}`)
      .addEventListener("click", () => {
        document.body.classList.remove("storyjs__modal__opened");
      });
  }

  handleBandClose() {
    document
      .querySelector(`.${this.modalBandEl}`)
      .addEventListener("click", () => {
        document.body.classList.remove("storyjs__modal__opened");
      });
  }
}

export default storyjs;
