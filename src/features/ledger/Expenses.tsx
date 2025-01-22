import { IExpenseResponse } from "../../models/IExpenseResponse";
import { CaretButton, PlusButton } from "../../ui/Buttons/";
import { SearchBar } from "../../ui/SearchBar";
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
            <h3 className="text-2xl mt-3">Libro de Gastos</h3>

            <TableViewHeader />

            <Table header={expensesHeaders} body={expensesBody} />
        </>
    );
}

function TableViewHeader() {
    return (
        <div className="flex my-7">
            <span className="mr-4">
                <PlusButton size="md" />
            </span>
            <SearchBar size="lg" />
            <CaretButton {...{ placeholder: "Filtros", iconSize: "md" }} />
        </div>
    );
}
