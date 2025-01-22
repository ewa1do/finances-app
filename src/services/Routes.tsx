import Balance from "../features/balance/Balance";
import Credit from "../features/credit/Credit";
import Dashboard from "../features/dashboard/Dashboard";
import Expenses from "../features/ledger/Expenses";
import Income from "../features/ledger/Income";
import Ledger from "../features/ledger/Ledger";
import Lend from "../features/ledger/Lend";
import { IRoute } from "../models/IRoute";

export const routes: IRoute[] = [
    { path: "/", element: <Dashboard />, title: "Inicio" },
    { path: "/balance", element: <Balance />, title: "Balance" },
    { path: "/credit", element: <Credit />, title: "Abonos" },
    { path: "/contacts", element: <div>Contactos</div>, title: "Contactos" },
    {
        path: "/ledger",
        element: <Ledger />,
        title: "Libros",
        children: [
            {
                path: "ingresos",
                element: <Income />,
                title: "Ingresos",
            },
            {
                path: "gastos",
                element: <Expenses />,
                title: "Gastos",
            },
            {
                path: "fiados",
                element: <Lend />,
                title: "Fiados",
            },
        ],
    },
];
