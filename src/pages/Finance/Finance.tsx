import styles from "./Finance.module.css";
import Accounts from "../../components/Accounts/Accounts";
import Paymants from "../../components/Payments/Payments";

function Finance() {
  return (
    <div className={styles["finance"]}>
      <h1 className={styles["finance__h1"]}>Финансы</h1>
      <p className={styles["finance__p"]}>
        Текущая информация по остаткам денежных средств
      </p>
      <Accounts />
      <div>
        <Paymants/>
      </div>
      <div className={styles["finance__payment-static"]}></div>
    </div>
  );
}
export default Finance;
