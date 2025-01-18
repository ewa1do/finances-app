import { BrowserRouter } from "react-router";
import Dashboard from "./features/dashboard/Dashboard";
import Balance from "./features/balance/Balance";
import Ledger from "./features/ledger/Ledger";
import Credit from "./features/credit/Credit";
import { IRoute } from "./models/IRoute";
import Layout from "./ui/Layout";

const routes: IRoute[] = [
    { path: "/", element: <Dashboard />, title: "Inicio" },
    { path: "/balance", element: <Balance />, title: "Balance" },
    { path: "/credit", element: <Credit />, title: "Abonos" },
    {
        path: "/ledger",
        element: <Ledger />,
        title: "Libros",
        children: [
            {
                path: "ingresos",
                element: <div>Ingresos</div>,
                title: "Ingresos",
            },
            {
                path: "gastos",
                element: <div>Gastos</div>,
                title: "Gastos",
            },
            {
                path: "fiados",
                element: <div>Fiados</div>,
                title: "Fiados",
            },
        ],
    },
];

function App() {
    return (
        <BrowserRouter>
            <Layout routes={routes} />
        </BrowserRouter>
    );
}

export default App;
