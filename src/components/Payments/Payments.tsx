import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import PaymentCard from "../PaymentCard/PaymentCard";
import { useEffect } from "react";
import { getPayments } from "../../store/payment";

function Paymants() {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useSelector((s: RootState) => s.selectedId);
  useEffect(() => {
    dispatch(getPayments(id));
  }, [dispatch]);
  const { elements, paymentsErrorMessage } = useSelector(
    (s: RootState) => s.payments
  );
  

  return (
    <div>
      <h3></h3>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Плательщик</th>
            <th>ИНН</th>
            <th>Сумма</th>
            <th>Дата</th>
          </tr>
        </thead>
        <tbody>{!paymentsErrorMessage ? elements.map((item, index)=>(<PaymentCard correspondent={item.correspondent} index={index} inn={item.inn} s_date={item.s_date} summa={item.summa} key={item.id} />)) : <div>{paymentsErrorMessage}</div>}</tbody>
      </table>
    </div>
  );
}
export default Paymants;
