'use strict'

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

// spendinglimits.jay = 200;

const getLimit = user => spendingLimits?.[user] ?? 0;

const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  if (!user) user = 'jonas';
  const cleanUser = user.toLowerCase();

  value <= getLimit(cleanUser) ? [...state, {
    value: -value, description, user: cleanUser
  }] : state;

};

const newBudget1 = addExpense(budget, spendingLimits, 100000, 'Pizza 🍕');
console.log(newBudget1);

addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
addExpense(budget, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
addExpense(budget, spendingLimits, 200, 'Stuff', 'Jay');

const checkExpenses = function () {
  for (const entry of budget) {
    if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
  }
};
checkExpenses();

const logBigExpenses = function (bigLimit) {
  let output = '';
  for (const entry of budget) {
    if (entry.value <= -bigLimit) {
      output += `${entry.description.slice(-2)} / `; // Emojis are 2 chars
    }
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

console.log(budget);
logBigExpenses(500);
