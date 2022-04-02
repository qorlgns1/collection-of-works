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

userId.addEventListener("keyup", (e) => {
  if (e.target.value && userPw.value) {
    loginBtn.classList.add("btn-active");
  } else {
    loginBtn.classList.remove("btn-active");
  }
});

userPw.addEventListener("keyup", (e) => {
  if (e.target.value) {
    loginBtn.classList.add("btn-active");
  } else {
    loginBtn.classList.remove("btn-active");
  }
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (checkLogin(userId) && checkLogin(userPw)) {
    userId.value = "";
    userPw.value = "";
    loginBtn.classList.remove("btn-active");
    alert("로그인 성공");
  } else {
    alert("로그인 실패");
  }
});
