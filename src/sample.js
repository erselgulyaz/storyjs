import storyjs from "./story";
import items from "./../mock/stories";

window.addEventListener("load", function () {
  var el = new storyjs({
    items,
  });
});
