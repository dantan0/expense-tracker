import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  let amounts= [];
  let income = [];
  let expense = [];
  let totalIncome = 0.00;
  let totalExpense = 0.00;

  if (transactions.length >= 1) {
    amounts = transactions.map(transaction => transaction.amount);
  }
  if (amounts.length >= 1) {
    income = amounts.filter(amount => amount > 0);
    expense = amounts.filter(amount => amount < 0);
  }
  if (income.length >= 1) {
    totalIncome = income
      .reduce((accum, val) => accum + val)
      .toFixed(2);
  }
  if (expense.length >= 1) {
    totalExpense = expense
      .reduce((accum, val) => accum + val)
      .toFixed(2);
  }
  return (
    <div>
      <div>
        <h4>Income</h4>
        <p>${totalIncome}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p>-${totalExpense}</p>
      </div>
    </div>
  )
}
