import styles from "./AccountCard.module.css";
import Dollar from "../../../public/img/dollar.svg";
import DownRight from "../../../public/img/down-right.svg";
import Ruble from "../../../public/img/ruble.svg";
import { AccountCardProps } from "./AccountCard.props";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { selectThisId } from "../../store/selectedId";
import cn from "classnames";

function AccountCard({ summa, name, account, idAccount }: AccountCardProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useSelector((s: RootState) => s.selectedId);
  const formattedNumber = (summa/100).toLocaleString("ru-RU");
  const openAccount = () => {
    dispatch(selectThisId(idAccount));
  };
  return (
    <li onClick={openAccount} className={id === idAccount ? cn(styles["account-card__li"], styles["account-card__li-active"]) : styles["account-card__li"]}>
      <div className={styles["account-card"]}>
        <div className={styles["account-card__head"]}>
          <img src={Dollar} alt="Dollar" />
          <img src={DownRight} alt="DownRight" />
        </div>
        <p className={styles["account-card__summa"]}>
          {formattedNumber}{" "}
          <img
            src={Ruble}
            className={styles["account-card__summa-img"]}
            alt=""
          />
        </p>
        <p className={styles["account-card__name"]}>{name}</p>
        <p className={styles["account-card__account"]}>{account}</p>
      </div>
    </li>
  );
}
export default AccountCard;
