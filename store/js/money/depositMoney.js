import { makeKoreaUnit, attachNode } from "../common/changeText.js";

export const depositMoney = () => {
  const depositBtn = document.querySelector(".balance-container > button");

  depositBtn.addEventListener("click", () => {
    const leftMoneyNode = document.querySelector(".my-left-money").children[1];
    const leftMoney = Number(leftMoneyNode.innerHTML.split(" ")[0]);
    if (!leftMoney) {
      alert("잔액을 확인해주세요.");
    } else {
      const myMoney = Number(localStorage.getItem("money"));
      localStorage.setItem("money", myMoney + leftMoney);

      const myMoneyNode = document.querySelector(".my-money").children[1];
      attachNode(myMoneyNode, makeKoreaUnit(myMoney, leftMoney));

      alert("거스름돈 반환이 정상적으로 처리되었습니다. 소지금을 확인하세요.");

      leftMoneyNode.innerHTML = "0 원";
    }
  });
};
