'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ``;

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {

    const type = mov > 0 ? `deposit` : `withdrawal`;
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__date">3 days ago</div>
      <div class="movements__value">${mov} EUR</div>
    </div>`;

    containerMovements.insertAdjacentHTML(`afterbegin`, html)
  });
}


const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
}


const calcDisplaySummary = function (acc) {
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} EUR`;

  const out = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} EUR`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * acc.interestRate / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${Math.abs(interest)} EUR`;
}

const user = `Steven Thomas Williams`;
const createUsernames = function (acc) {
  acc.forEach(function (acc) {
    acc.username = acc.owner.toLowerCase().split(` `).map(name => name[0]).join(``);
  });
}

createUsernames(accounts);

function updateUI(acc) {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
}

let currentAccount;
btnLogin.addEventListener(`click`, function (e) {
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

  if (currentAccount?.pin == inputLoginPin.value) {
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(` `)[0]}`

    containerApp.style.opacity = 100;

    inputLoginUsername.value = inputLoginPin.value = ``;
    inputLoginPin.blur();

    updateUI(currentAccount);
  };
});

btnTransfer.addEventListener(`click`, function (e) {
  e.preventDefault();// za da ne reloadva postoqnno stranicata sled click na butona
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  inputTransferAmount.value = inputTransferTo.value = ``;

  if (amount > 0
    && receiverAcc
    && currentAccount.balance >= amount
    && receiverAcc.username != currentAccount.username) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(+amount);

    updateUI(currentAccount);
  }
});

btnLoan.addEventListener(`click`, function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
  }
  updateUI(currentAccount);
  inputLoanAmount.value = ``;
})
btnClose.addEventListener(`click`, function (e) {
  e.preventDefault();

  if (currentAccount.username == inputCloseUsername.value && currentAccount.pin == inputClosePin.value) {
    const index = accounts.findIndex(acc => acc.username == currentAccount.username);
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = ``;
})

let sorted = false;
btnSort.addEventListener(`click`, function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements.forEach(movement => movement > 0 ? console.log(`You deposited ${movement}`) : console.log(movement));

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// })

// console.log(question.get(answer == 3));

// const balance = account1.movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

// labelBalance.addEventListener(`click`, function () {
//   const movementsUI = Array.from(document.querySelectorAll(`.move__value`));
// })

// let bankDepositSum = accounts
// .flatMap(ac => ac.movements)
// .filter(a => a > 0)
// .reduce((acc, elem) => acc + elem, 0);
// console.log(bankDepositSum);

// const numDeposits1000 = accounts
//   .flatMap(a => a.movements)
//   .reduce((acc, is1000) => is1000 >= 1000 ? acc + 1 : acc, 0)
// console.log(numDeposits1000);

// let { deposits, withdraws } = accounts
//   .flatMap(a => a.movements)
//   .reduce((acc, e) => {
//     if (e > 0)
//       acc.deposits += e;
//     else
//       acc.withdraws += e;
//     return acc;
//   }
//     , { deposits: 0, withdraws: 0 })

// console.log(deposits, withdraws);

// const convertTitleCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1)

//   const eceptions = [`a`, `an`, `and`, `the`, `but`, `or`, `on`, `in`, `with`];

//   const titleCase = title
//     .toLowerCase()
//     .split(` `)
//     .map(word => eceptions.includes(word) ?
//       word : word[0].toUpperCase() + word.slice(1))
//     .join(` `)
//   return capitalize(titleCase)
// }
// console.log(convertTitleCase(`This is a nice title`));