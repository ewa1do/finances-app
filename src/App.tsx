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
    { path: "/ledger", element: <Ledger />, title: "Libros" },
];

function App() {
    return (
        <BrowserRouter>
            <Layout routes={routes} />
        </BrowserRouter>
    );
}

export default App;
