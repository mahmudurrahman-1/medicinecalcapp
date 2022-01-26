"use strict";
/**********Users information */

const user1 = {
  name: "Mahmudur Rahman",
  medicineName:[],
  medicineFee: [],
  id: 1000,
};
const user2 = {
  name: "Rafsan Rafin",
  medicineFee: [
   
  ],
 id: 2000,
 medicineName:[],

};
const user3 = {
  name: "Imam Hossain",
  medicineFee: [
   
  ],
  id: 3000,
  medicineName:[],

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


const btnTransfer = document.querySelector('.form__btn--transfer');
const inputTransferAmount = document.querySelector('.form__input--amount');


const inputTransferMedicine = document.querySelector('.form__input--medicine');
/*********Main Container******** */

const medicineFee = (fee, sort = false) => {
  containermedicineFee.innerHTML = "";
  const justSort = sort ? fee.medicineFee.slice().sort((a, b) => a - b) : fee.medicineFee;

  justSort.forEach((fees, i) => {
    const checkFees = fees >= 0 ? "paid" : "unpaid";
    const mname= fee.medicineName.map(medicine=> medicine);
    const div = `
    <div class="medicineFee__row">
    <div class="medicineFee__type medicineFee__type--${checkFees}">Medicine Name: ${mname} ${
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
    medicineFee(mdc);
    labelLogin.style.opacity = 1;
    containerApp.style.opacity=1;
  }
});


btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const cost= Number(inputTransferAmount.value);
  inputTransferAmount.value="";
  const medicineName= String(inputTransferMedicine.value);
  inputTransferMedicine.value='';
  if(true){
    mdc.medicineFee.push(cost);
    mdc.medicineName.push(medicineName);
  }
  paidBalance(mdc);
  medicineFee(mdc);
});

