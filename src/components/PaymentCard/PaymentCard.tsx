import { PaymentCardProps } from "../Payments/Payments.props";
import styles from './PaymentCard.module.css'

function PaymentCard({
  index,
  correspondent,
  inn,
  summa,
  s_date,
}: PaymentCardProps) {
  const rubles = (summa / 100).toLocaleString('ru-RU');
  return (
    <tr className={styles['payment__card']} key={index}>
      <td className={styles['payment__number']}>{index + 1}</td>
      <td className={styles['payment__correspondent']}>{correspondent}</td>
      <td className={styles['payment__inn']}>{inn}</td>
      <td className={styles['payment__rubles']}>{rubles} Рублей</td>
      <td className={styles['payment__date']}>{s_date}</td>
    </tr>
  );
}
export default PaymentCard;
