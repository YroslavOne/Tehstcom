import { RootState } from "../../store/store";
import SummaMonth from "../SummaMonth/SummaMonth";
import styles from "./Statistics.module.css";
import { useSelector } from "react-redux";

function Statistics() {
  const { our_account, paymentsErrorMessage, isLoading } = useSelector(
    (s: RootState) => s.payments
  );
  const { elements } = useSelector((s: RootState) => s.payments);

  function threeMonth(): Date {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() - 3);
    currentDate.setHours(0, 0, 0, 0);
    return currentDate;
  }

  function getFirstDayOfCurrentMonth(): Date {
    const currentDate = new Date();
    return new Date(currentDate.getFullYear(), currentDate.getMonth(), 1); // Устанавливаем день на 1
  }
  const payedMonth = SummaMonth(elements, getFirstDayOfCurrentMonth());
  const payed3Month = SummaMonth(elements, threeMonth());

  return (
    <div className={styles["statistics"]}>
      <h3 className={styles["statistics__h3"]}>Статистика</h3>

      {isLoading ? (
        <div>Загрузка...</div>
      ) : paymentsErrorMessage ? (
        <div>Ошибка: {paymentsErrorMessage}</div>
      ) : (
        <div>
          <div className={styles["statistics__name"]}>
            <h4 className={styles["statistics__name-h4"]}>
              {our_account?.name}
            </h4>
            <p className={styles["statistics__name-inn"]}>
              {our_account?.account}
            </p>
          </div>

          <div className={styles["statistics__month"]}>
            <p className={styles["statistics__month-title"]}>
              За текущий месяц
            </p>
            <p className={styles["statistics__month-money"]}>{payedMonth}</p>
          </div>

          <div className={styles["statistics__month"]}>
            <p className={styles["statistics__month-title"]}>За 3 месяца</p>
            <p className={styles["statistics__month-money"]}>{payed3Month}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Statistics;
