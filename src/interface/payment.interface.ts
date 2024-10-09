export interface Payment{
    id: number,
    s_is_supplier: string,
    s_date: string,
    document: string,
    correspondent: string,
    inn: string,
    summa: number,
    payed: number,
    not_payed: number,
}