import { NavLink, Route, Routes } from "react-router";
import { IRoute } from "../models/IRoute";
import Navbar from "./NavBar";
import Sidebar from "./Sidebar";

interface Props {
    routes: IRoute[];
}

export default function Layout({ routes }: Props) {
    return (
        <div className="flex flex-col p-3">
            <Navbar />

            <div className="flex">
                <Sidebar>
                    {routes.map((route) => (
                        <li key={route.title}>
                            <NavLink to={route.path}>{route.title}</NavLink>
                        </li>
                    ))}
                </Sidebar>

                <div className="px-3 w-11/12">
                    <div className="">
                        <Routes>
                            {routes.map((route) => {
                                return (
                                    <Route
                                        key={`route_${route.path}`}
                                        path={route.path}
                                        element={route.element}
                                    />
                                );
                            })}
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}
