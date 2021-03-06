const loginForm = document.querySelector(".user-info");
const loginBtn = document.querySelector(".login-btn");
const userId = document.getElementById("userId");
const userFullName = document.getElementById("fullName");
const userName = document.getElementById("userName");
const userPw = document.getElementById("userPw");
const userInfo = [userId, userFullName, userName, userPw];

const checkLogin = (userInfo) => {
  let flag = true;

  userInfo.forEach((info) => {
    if (!info.value) {
      info.classList.add("placeholder-color-red");
      flag = false;
    } else {
      info.classList.remove("placeholder-color-red");
    }
  });

  return flag;
};

const validInfoCheck = (userInfo) => {
  let flag = true;

  userInfo.forEach((info) => {
    if (!info.value) {
      flag = false;
    }
  });

  return flag;
};

const activeBtn = (userInfo) => {
  userInfo.forEach((info) => {
    info.addEventListener("keyup", (e) => {
      if (e.target.value && validInfoCheck(userInfo)) {
        loginBtn.classList.add("btn-active");
      } else {
        loginBtn.classList.remove("btn-active");
      }
    });
  });
};

const resetUserInfo = (userInfo) => {
  userInfo.forEach((info) => {
    info.value = "";
  });
  loginBtn.classList.remove("btn-active");
};

activeBtn(userInfo);

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (checkLogin(userInfo)) {
    alert("회원가입 성공");
    resetUserInfo(userInfo);
  } else {
    alert("회원가입 실패");
  }
});
