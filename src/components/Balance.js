import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  let amounts = [];
  let total = 0.00;
  if (transactions.length >= 1) {
    amounts = transactions.map(transaction => transaction.amount);
  }
  if (amounts.length >= 1) {
    total = amounts.reduce((accum, val) => accum + val);
  }
  return (
    <>
      <h4> Your Balance </h4>
      <h1> ${total} </h1>
    </>
  )
}
