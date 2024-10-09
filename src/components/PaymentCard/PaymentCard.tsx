function PaymentCard({index, correspondent, inn, summa, s_date}){

    const rubles = (summa/100).toLocaleString("ru-RU")
    console.log(rubles)
return(
    <tr key={index+1}>
    <td className="center">{index}</td>
    <td>{correspondent}</td>
    <td>{inn}</td>
    <td>{rubles} Рублей</td>
    <td>{s_date}</td>
</tr>
)
}
export default PaymentCard