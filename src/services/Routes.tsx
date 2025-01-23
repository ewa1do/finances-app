import { IRoute } from "../models/";

import Balance from "../features/balance/Balance";
import Contacts from "../features/contacts/Contacts";
import Credit from "../features/credit/Credit";
import Dashboard from "../features/dashboard/Dashboard";
import Expenses from "../features/ledger/Expenses";
import Income from "../features/ledger/Income";
import Ledger from "../features/ledger/Ledger";
import Lend from "../features/ledger/Lend";

export const routes: IRoute[] = [
    { path: "/", element: <Dashboard />, title: "Inicio" },
    { path: "/balance", element: <Balance />, title: "Balance" },
    { path: "/credit", element: <Credit />, title: "Abonos" },
    { path: "/contacts", element: <Contacts />, title: "Contactos" },
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
