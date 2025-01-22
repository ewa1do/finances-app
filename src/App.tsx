import { BrowserRouter } from "react-router";
import Layout from "./ui/Layout";
import { routes } from "./services/Routes";

function App() {
    return (
        <BrowserRouter>
            <Layout routes={routes} />
        </BrowserRouter>
    );
}

export default App;
