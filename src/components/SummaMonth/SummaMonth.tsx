import { Payment } from "../../interface/payment.interface";

function SummaMonth(data: Payment[] | string, period: Date): string {
    function parseCustomDate(dateString: string): Date {
        const [day, month, year] = dateString.split('.').map(Number);
        return new Date(year, month - 1, day);
      }
    
  function calculateSumBasedOnDate(dataArray: Payment[]): string {
    const dateThreshold = period;
    let totalSum = 0;
    
    dataArray.forEach((item) => {
      const itemDate = parseCustomDate(item.s_date);
      if (itemDate >= dateThreshold) {
        totalSum += item.summa;
      }
    });
    const rubles = (totalSum / 100).toLocaleString("ru-RU");
    return rubles;
  }
  if (Array.isArray(data)) {
    return calculateSumBasedOnDate(data);
  } else {
    return "0";
  }
}

export default SummaMonth;
