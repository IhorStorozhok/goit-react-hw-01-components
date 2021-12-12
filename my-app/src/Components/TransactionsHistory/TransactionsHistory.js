import OneTransaction from "./OneTransaction";
import s from "./TransactionHistory.module.css";

export default function TransactionHistory({ array }) {
  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th className={s.kolumn}>Type</th>
          <th className={s.kolumn}>Amount</th>
          <th className={s.kolumn}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {array.map((transaction) => (
          <OneTransaction
            key={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        ))}
      </tbody>
    </table>
  );
}
