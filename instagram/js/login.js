const loginForm = document.querySelector(".user-info");
const loginBtn = document.querySelector(".login-btn");
const userId = document.getElementById("userId");
const userPw = document.getElementById("userPw");

const checkLogin = (info) => {
  if (!info.value) {
    info.classList.add("placeholder-color-red");
    return false;
  } else {
    info.classList.remove("placeholder-color-red");
    return true;
  }
};

const activeBtn = (userInfo) => {
  userInfo[0].addEventListener("keyup", (e) => {
    if (e.target.value && userInfo[1].value) {
      loginBtn.classList.add("btn-active");
    } else {
      loginBtn.classList.remove("btn-active");
    }
  });
};

const resetUserInfo = (id, pw) => {
  id.value = "";
  pw.value = "";
  loginBtn.classList.remove("btn-active");
};

activeBtn([userId, userPw]);
activeBtn([userPw, userId]);

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (checkLogin(userId) && checkLogin(userPw)) {
    alert("로그인 성공");
    resetUserInfo(userId, userPw);
  } else {
    alert("로그인 실패");
  }
});
