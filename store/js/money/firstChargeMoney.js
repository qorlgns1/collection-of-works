import { makeKoreaUnit, attachNode } from "../common/changeText.js";

export const firstVisitChargeMoney = () => {
  const myMoneyNode = document.querySelector(".my-money").children[1];

  let money = parseInt(localStorage.getItem("money"));
  if (!money) {
    localStorage.setItem("money", 10000);
    money = parseInt(localStorage.getItem("money"));
    attachNode(myMoneyNode, makeKoreaUnit(money));
  } else {
    attachNode(myMoneyNode, makeKoreaUnit(money));
  }
};
