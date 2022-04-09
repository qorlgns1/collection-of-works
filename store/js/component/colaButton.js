export const copyDisplayColaBtn = (btn) => {
  let button = btn.cloneNode(true);
  button.classList.remove(...button.classList);
  let pTag = button.children[2];
  pTag.classList.remove("item-price");
  pTag.classList.add("item-count");
  pTag.innerText = "1";

  return button;
};
