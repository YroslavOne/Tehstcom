import { RootState } from '../../store/store';
import styles from './Statistics.module.css';
import { useSelector } from 'react-redux';

function Statistics() {
  const { our_account, paymentsErrorMessage, isLoading } = useSelector(
    (s: RootState) => s.payments
  );
  console.log(our_account);

  return (
    <div className={styles['statistics']}>
      <h3 className={styles['statistics__h3']}>Статистика</h3>
      {isLoading ? (
        <div>Загрузка...</div>
      ) : (
        <div>
          <div className={styles['statistics__name']}>
            <h4 className={styles['statistics__name-h4']}>
              {our_account?.name}
            </h4>
            <p className={styles['statistics__name-inn']}>
              {our_account?.account}
            </p>
          </div>
          <div className={styles['statistics__month']}>
            <p className={styles['statistics__month-title']}>
              За текущий месяц
            </p>
            <p className={styles['statistics__month-money']}>
              {our_account
                ? (our_account.summa / 100).toLocaleString('ru-RU')
                : 0}
            </p>
          </div>
          <div className={styles['statistics__month']}>
            <p className={styles['statistics__month-title']}>За 3 месяца</p>
            <p className={styles['statistics__month-money']}>
              {our_account
                ? (our_account.current_summa / 100).toLocaleString('ru-RU')
                : 0}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
export default Statistics;
