import { depositCheck, depositSubtract } from "../money/depositMoney.js";
import { checkColaName, checkColaPrice, checkColaCount } from "./checkCola.js";
import { copyDisplayColaBtn } from "../component/colaButton.js";

// export const subtractDeposit = () => {
//   콜라의 가격을 가지고 온다.
//   디파짓에서 콜라의 가격을 뺀다.
//   뺸 금액을 디파짓에 보여준다.
// }

export const insertCola = () => {
  const cola = document.querySelectorAll(
    ".vending-machine > .items > ul > li > button"
  );

  cola.forEach((colaBtn) => {
    colaBtn.addEventListener("click", (e) => {
      const deposit = depositCheck();

      if (deposit < 1000) {
        alert("잔액을 확인해주세요.");
      } else {
        depositSubtract(checkColaPrice(colaBtn));

        let display = document.querySelector(".display");

        const colaName = colaBtn.children[1].innerHTML;
        let flag = false;
        Array.from(display.children).forEach((displayBtn) => {
          if (checkColaName(displayBtn) === colaName) {
            displayBtn.children[2].innerHTML = checkColaCount(displayBtn) + 1;
            flag = true;
          }
        });

        if (!flag) {
          const displayColaBtn = copyDisplayColaBtn(colaBtn);
          display.append(displayColaBtn);
        }
      }
    });
  });
};
