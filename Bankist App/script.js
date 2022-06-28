'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  transactions: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  transactionDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  transactions: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  transactionDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerTransactions = document.querySelector('.transactions');

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

const computeUsername = accounts => {
  accounts.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(value => value[0])
      .join('');
  });
};
computeUsername(accounts);

const formatUSDAmount = function (amount) {
  const amountFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  return amountFormat.format(amount);
};

const displayTransactions = function (account, sort = false) {
  let html;
  let transactions;

  containerTransactions.innerHTML = '';

  if (account.transactions.length === 0) {
    html = `
    <div class="transactions__row">
      <div class="transactions__empty">No transactions to display.</div>
    </div>
  `;
    containerTransactions.insertAdjacentHTML('afterbegin', html);
  } else {
    transactions = sort
      ? account.transactions.slice().sort((a, b) => a - b) // you need .slice() to make a shallow copy
      : account.transactions;

    transactions.forEach(function (tran, i) {
      const typeTransaction = tran > 0 ? 'deposit' : 'withdrawal';
      const date = displayDateAndTime(account.transactionDates[i]);
      html = `
      <div class="transactions__row">
        <div class="transactions__type transactions__type--${typeTransaction}">
            ${i + 1} ${typeTransaction}
        </div>
        <div class="transactions__date">${date}</div>
        <div class="transactions__value">${
          typeTransaction === 'deposit' ? '' : '-'
        }${formatUSDAmount(Math.abs(tran))}</div>
      </div>
    `;
      containerTransactions.insertAdjacentHTML('afterbegin', html);
    });
  }
};

const calcTotalBalance = function (account) {
  account.balance = account.transactions.reduce((acc, val) => acc + val, 0);
  labelBalance.textContent = formatUSDAmount(account.balance);
  labelDate.textContent = displayDateAndTime(new Date());
};

const calcDisplaySummary = function (account) {
  const incomes = account.transactions
    .filter(tran => tran > 0)
    .reduce((acc, val) => acc + val, 0);
  labelSumIn.textContent = formatUSDAmount(incomes);

  const withdrawals = account.transactions
    .filter(tran => tran < 0)
    .reduce((acc, val) => acc + val, 0);
  labelSumOut.textContent = `${formatUSDAmount(Math.abs(withdrawals))}`;

  const interest = (incomes * account.interestRate) / 100;
  labelSumInterest.textContent = `${formatUSDAmount(interest)}`;
};

const findUser = function (username) {
  return accounts.find(account => account.username === username);
};

const displayDateAndTime = function (date) {
  const dateString = new Date(date);
  return `${(dateString.getMonth() + 1).toString().padStart(2, 0)}/${dateString
    .getDate()
    .toString()
    .padStart(2, 0)}/${dateString.getFullYear()}`;
};

const displayUpdateUI = function () {
  displayTransactions(currentAccount);
  calcTotalBalance(currentAccount);
  calcDisplaySummary(currentAccount);
};

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = findUser(inputLoginUsername.value);
  if (!currentAccount) alert('Incorrect Username!');
  else if (Number(inputLoginPin.value) !== currentAccount?.pin)
    alert('INCORRECT PIN!');
  else {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    // Show UI
    containerApp.style.opacity = 100;
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    // Takes focus off of input field
    inputLoginPin.blur();
    displayUpdateUI();
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const transTo = findUser(inputTransferTo.value);
  const transAmt = Number(inputTransferAmount.value);

  if (!transTo) alert('TRANSFER ACCOUNT NOT FOUND!');
  else if (transAmt > currentAccount.balance)
    alert('TRANSFER AMOUNT GREATER THAN ACCOUNT BALANCE!');
  else if (transAmt <= 0) alert('MUST TRANSFER AT LEAST $0.01');
  else if (transTo?.owner === currentAccount.owner)
    alert('YOU CANNOT SEND MONEY TO YOURSELF!');
  else {
    currentAccount.transactions.push(-transAmt);
    currentAccount.transactionDates.push(new Date().toISOString());
    transTo.transactions.push(transAmt);
    transTo.transactionDates.push(new Date().toISOString());
    inputTransferAmount.blur();
    inputTransferAmount.value = inputTransferTo.value = '';
    displayUpdateUI();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const loanAmt = Number(inputLoanAmount.value);

  if (loanAmt <= 0) alert('YOU MUST ASK FOR AT LEAST $0.01.');
  else if (!currentAccount.transactions.some(trans => trans >= loanAmt * 0.1))
    alert('YOU MUST HAVE A DEPOSIT THAT IS AT LEAST 10% OF THE LOAN AMOUNT!');
  else {
    currentAccount.transactions.push(loanAmt);
    currentAccount.transactionDates.push(new Date());
    inputLoanAmount.blur();
    inputLoanAmount.value = '';
    displayUpdateUI();
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  const closeUsername = findUser(inputCloseUsername.value);
  const closePin = Number(inputClosePin.value);

  if (!closeUsername) alert('USER ACCOUNT NOT FOUND!');
  else if (
    closeUsername !== currentAccount.username &&
    closePin !== currentAccount.pin
  )
    alert("YOU CANNOT CLOSE SOMEONE ELSE'S ACCOUNT!");
  else {
    const index = accounts.findIndex(
      account => account.username === currentAccount.username
    );
    accounts.splice(index, 1);
    labelWelcome.textContent = 'Log in to get started';
    containerApp.style.opacity = 0;
  }
  inputTransferAmount.value = inputTransferTo.value = '';
  currentAccount = 'No user logged in.';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayTransactions(currentAccount, !sorted);
  sorted = !sorted;
});
