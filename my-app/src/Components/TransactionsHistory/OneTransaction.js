import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";
export default function OneTransaction({ id, type, amount, currency }) {
  return (
    <tr>
      <td className={s.kolumn}>{type}</td>
      <td className={s.kolumn}>{amount}</td>
      <td className={s.kolumn}>{currency}</td>
    </tr>
  );
}
OneTransaction.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
