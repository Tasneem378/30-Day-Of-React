//Question1_Create an object literal called personAccount. It has firstName, lastName, incomes,
//expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense
//and accountBalance methods. Incomes is a set of incomes and its description and expenses is a
//set of incomes and its description.
const personAccount = {
  firstName: "",
  lastName: "",
  incomes: [],
  expenses: [],
  totalIncome: function () {
    let total = 0;
    for (const income of this.incomes) {
      total += income.amount;
    }
    return total;
  },
  totalExpense: function () {
    let total = 0;
    for (const expense of this.expenses) {
      total += expense.amount;
    }
    return total;
  },
  accountInfo: function () {
    return `Account Information for ${this.firstName} ${
      this.lastName
    }:\nTotal Income: $${this.totalIncome()}\nTotal Expenses: $${this.totalExpense()}\nAccount Balance: $${this.accountBalance()}`;
  },
  addIncome: function (description, amount) {
    this.incomes.push({ description, amount });
  },
  addExpense: function (description, amount) {
    this.expenses.push({ description, amount });
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
};
personAccount.firstName = "John";
personAccount.lastName = "Doe";
personAccount.addIncome("Salary", 3000);
personAccount.addExpense("Rent", 1000);
personAccount.addExpense("Utilities", 200);
console.log(personAccount.accountInfo());
