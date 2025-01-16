import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./features/dashboard/Dashboard";
import Balance from "./features/balance/Balance";
import Ledger from "./features/ledger/Ledger";
import Credit from "./features/credit/Credit";

interface IRoute {
    path: string;
    element: JSX.Element;
}

const routes: IRoute[] = [
    { path: "/", element: <Dashboard /> },
    { path: "/balance", element: <Balance /> },
    { path: "/credit", element: <Credit /> },
    { path: "/ledger", element: <Ledger /> },
];

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route) => {
                    return <Route path={route.path} element={route.element} />;
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
