import { useDispatch, useSelector } from "react-redux";
import styles from "./Accounts.module.css";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import { getAccounts } from "../../store/accounts";
import AccountCard from "../AccountCard/AccountCard";
import { selectThisId } from "../../store/selectedId";
import { getPayments } from "../../store/payment";

function Accounts() {
  const dispatch = useDispatch<AppDispatch>();

  const { accounts, accountsErrorMessage } = useSelector(
    (s: RootState) => s.account
  );
  const { id } = useSelector(
    (s: RootState) => s.selectedId
  );
  useEffect(() => {
    dispatch(getAccounts());
  }, [dispatch]);

  useEffect(() => {
    if (accounts.length > 0) {
      dispatch(selectThisId(accounts[0].id));
    }
  }, [accounts]);
  useEffect(() => {
    dispatch(getPayments(id));
  }, [id]);

  return (
    <div className={styles["accounts"]}>
      {!accountsErrorMessage ? (
        <ul className={styles["finance__accounts"]}>
          {accounts.map((item) => (
            <AccountCard
              account={item.account}
              name={item.name}
              idAccount={item.id}
              summa={item.summa}
              key={item.id}
            />
          ))}
        </ul>
      ) : (
        <div>{accountsErrorMessage}</div>
      )}
    </div>
  );
}
export default Accounts;
