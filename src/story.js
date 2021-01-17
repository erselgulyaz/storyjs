class storyjs {
  constructor(options = {}) {
    this.output = "";
    this.innerEl = "storyjs__inner";
    this.scrollerEl = "storyjs__scroller";
    this.storyItemEl = "storyjs__item";
    this.modalEl = "storyjs__modal";
    this.modalBandEl = "storyjs__modal-band";
    this.modalContentEl = "storyjs__modal-content";
    this.modalCloserEl = "storyjs__modal-closer";
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
    this.handleBandClose();
  }

  handleStoryItem() {
    const selector = document.querySelector(this.selector);
    const els = selector.querySelectorAll(`.${this.storyItemEl}`);
    els.forEach((el) => {
      el.addEventListener("click", () => {
        document.querySelector(
          `.${this.modalBoxInnerEl}`
        ).style.background = `url(${el.dataset.itemModal}) no-repeat center center`;
        document.querySelector(
          `.${this.modalBoxInnerEl}`
        ).style.backgroundSize = "cover";

        document.body.classList.add("storyjs__modal__opened");
        this.party(el.dataset.itemTime, el.dataset.itemId);
      });
    });
  }

  party(time, idSelector) {
    document.querySelector(`.${this.modalLineInnerEl}`).style.width = "100%";
    document.querySelector(
      `.${this.modalLineInnerEl}`
    ).style.transition = `all ${time}s ease-in`;
    setTimeout(() => {
      document.querySelector(`.${this.modalLineInnerEl}`).style = "";
    }, `${time}000`);
    setTimeout(() => {
      const filteredItems = this.items.filter(
        (x) => x.id === parseInt(idSelector) + 1
      );
      if (filteredItems.length > 0) {
        document.querySelector(
          `.${this.modalBoxInnerEl}`
        ).style.background = `url(${filteredItems[0].modalPic}) no-repeat center center`;
        document.querySelector(
          `.${this.modalBoxInnerEl}`
        ).style.backgroundSize = "cover";

        this.party(filteredItems[0].time, filteredItems[0].id);
      } else {
        this.closeActions();
      }
    }, `${time}005`);
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
  }
}

export default storyjs;
