import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import PaymentCard from "../PaymentCard/PaymentCard";
import styles from "./Payments.module.css";

function Paymants() {
  const { elements, paymentsErrorMessage, isLoading } = useSelector(
    (s: RootState) => s.payments
  );

  return (
    <div className={styles["paymants"]}>
      <h3 className={styles["paymants-h3"]}>Платежи</h3>
      {isLoading ? (
        <div>Загрузка...</div>
      ) : (
        <table role="rows" className={styles["paymants__table"]}>
          <thead>
            <tr className={styles["paymants__table-tr"]}>
              <th>№</th>
              <th>Плательщик</th>
              <th>Инн</th>
              <th>Сумма</th>
              <th>Дата</th>
            </tr>
          </thead>
          <tbody className={styles["paymants__tbody"]}>
            {!paymentsErrorMessage ? (
              Array.isArray(elements) ? (
                elements.map((item, index) => (
                  <PaymentCard
                    correspondent={item.correspondent}
                    index={index}
                    inn={item.inn}
                    s_date={item.s_date}
                    summa={item.summa}
                    key={item.id}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan={5}>Нет данных для отображения</td>
                </tr>
              )
            ) : (
              <div>{paymentsErrorMessage}</div>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default Paymants;
