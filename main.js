"use strict";
/**********Users information */

const user1 = {
  name: "Mahmudur Rahman",
  medicineFee: [
    40, 50, 45, 30, 3, 35, 360, 280, -600, -310,
    -25, -600,
  ],
  id: 1000,
};
const user2 = {
  name: "Rafsan Rafin",
  medicineFee: [
    40, 50,3, 35, 360, 280, -600, -310,
    -25, -60,
  ],
 id: 2000,
};
const user3 = {
  name: "Imam Hossain",
  medicineFee: [
    40, 50, 45, 30, 3, 35, 360, 280, -600, -310,
    -25, -600
  ],
  id: 3000,
};


const users = [user1,user2,user3];

/////////////////////////////////////////////////
// Elements
/*******Login compelete */
const labelloginForm = document.querySelector(".login-screen");
const labelLogin = document.querySelector(".login");
const labelWelcome = document.querySelector(".welcome");
const labelBalance = document.querySelector(".balance__value");

/******Description****** */

const containerApp = document.querySelector(".app");
const containermedicineFee = document.querySelector(".medicineFee");
const btnLogin = document.querySelector(".login__btn");
const btnSort = document.querySelector(".btn--sort");
const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");


/*********Main Container******** */

const medicineFee = (fee, sort = false) => {
  containermedicineFee.innerHTML = "";
  const justSort = sort ? fee.slice().sort((a, b) => a - b) : fee;
  justSort.forEach((fees, i) => {
    const checkFees = fees > 0 ? "paid" : "unpaid";
    const div = `
    <div class="medicineFee__row">
    <div class="medicineFee__type medicineFee__type--${checkFees}">Item${
      i + 1
    }</div>
    <div class="medicineFee__value">${fees}€</div>
  </div>
    `;
    containermedicineFee.insertAdjacentHTML("beforeend", div);
  });
};

const stud = (stu) => {
  stu.map((stud) => {
    stud.user = stud.name
      .toLowerCase()
      .split(" ")
      .map((stude) => stude[0])
      .join("")
      .toLowerCase();
    console.log(stud);
  });
};
stud(users);
//Check Balance
const paidBalance = (bal) => {
  bal.totalpaid = bal.medicineFee.reduce((acc, bal) => acc + bal, 0);
  if(bal.totalpaid>0){
    labelBalance.textContent = `Total Paid ${bal.totalpaid}`;
  }
 else{
  {
    labelBalance.textContent = `Total Unpaid ${bal.totalpaid}`;
  }
 }
};
//login
let mdc;
btnLogin.addEventListener("click", (login) => {
  login.preventDefault();
  mdc = users.find((user) => user.user === inputLoginUsername.value);
  console.log(mdc);
  if (mdc?.id === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome dear, ${mdc.name.split(" ")[0]}`;
    paidBalance(mdc);
    medicineFee(mdc.medicineFee);
    labelLogin.style.opacity = 1;
    containerApp.style.opacity=1;
  }
});

