import { makeKoreaUnit, attachNode } from "../text/changeText.js";

const insertBtn = document.querySelector(".insert-money-btn");

const leftMoneyChange = (insertMoney) => {
  const leftMoneyNode = document.querySelector(".my-left-money").children[1];
  const leftMoney = leftMoneyNode.innerHTML.split(" ")[0];

  attachNode(leftMoneyNode, makeKoreaUnit(leftMoney, insertMoney));
};

export const insertMoney = () => {
  insertBtn.addEventListener("click", () => {
    const insertMoneyInput = document.querySelector(
      ".insert-money-input"
    ).value;
    const myMoney = Number(localStorage.getItem("money"));

    if (!insertMoneyInput) {
      alert("입금액을 입력해주세요.");
      return false;
    } else {
      if (myMoney < insertMoneyInput) {
        alert("소지금이 부족합니다.");
        return false;
      } else {
        const totalLeftMoney = myMoney - insertMoneyInput;
        localStorage.setItem("money", totalLeftMoney);

        const myMoneyNode = document.querySelector(".my-money").children[1];
        attachNode(myMoneyNode, makeKoreaUnit(totalLeftMoney));

        leftMoneyChange(insertMoneyInput);
        alert("입금이 완료되었습니다. 잔액과 소지금을 확인해주세요.");
      }
    }
  });
};
