import { IExpenseResponse } from "../../models/IExpenseResponse";
import { getDate } from "../../utils/getDate";
import Table from "./Table";

const expensesHeaders = ["Fecha", "Proveedor", "Monto", "Abonos"];

const expensesBody: IExpenseResponse[] = [
    {
        date: getDate(),
        provider: "Sepulveda",
        ammount: "780",
        credit: "0",
    },
    {
        date: getDate(),
        provider: "Fruteria Compadrito",
        ammount: "1200",
        credit: "300",
    },
    {
        date: getDate(),
        provider: "Agrobananas",
        ammount: "450",
        credit: "200",
    },
];

export default function Expenses() {
    return (
        <>
            <Table header={expensesHeaders} body={expensesBody} />
        </>
    );
}
