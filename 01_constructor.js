/**
 * 1. Naming convention of constructor function is that it's first letter is capital
 */

function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;

  this.deposit = function (amount) {
    this.balance += amount;
  };

  this.withdraw = (amount) => {
    this.balance -= amount;
  };
}

const johnAccount = new BankAccount("John Doe", 1000);

const janeAccount = new BankAccount("Jane Doe");

// johnAccount.deposit(5000);

// janeAccount.deposit(10000);

// johnAccount.withdraw(2000);

// console.log("John Account", johnAccount);

// console.log("Jane Account", janeAccount);

// ++++++++++++++++++++++++++++++++++

const accounts = [];
const accountForm = document.getElementById("account-form");
const customerName = document.getElementById("customer-name");
const balance = document.getElementById("balance");

accountForm.addEventListener("submit", (e) => {
  e.preventDefault();

  accountForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const account = new BankAccount(customerName.value, +balance.value);
    accounts.push(account);
    console.log(accounts);
  });
});

depositForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = accounts.find(
    (account) => account.accountNumber === +accountNumber.value
  );
  account.deposit(+amount.value);
  console.log(accounts);
});
