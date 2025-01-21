import { NavLink, Outlet, Route, Routes, useLocation } from "react-router";
import { IRoute } from "../models/IRoute";
import Navbar from "./NavBar";
import Sidebar from "./Sidebar";

interface Props {
    routes: IRoute[];
}

export default function Layout({ routes }: Props) {
    const { pathname } = useLocation();

    const isRouteNested = pathname.split("/").filter((el) => el !== "").length > 1;

    return (
        <div className="flex flex-col p-3">
            <Navbar />

            <div className="flex bg-slate-50">
                <Sidebar>
                    {routes.map((route) => {
                        if (route.children) {
                            return (
                                <div>
                                    <li key={route.title} className="text-lg">
                                        <NavLink to={route.path}>{route.title}</NavLink>
                                    </li>
                                    {route.children.map((child) => (
                                        <li key={"child_" + child.title} className="mt-1 ml-3">
                                            <NavLink to={`${route.path}/${child.path}`}>
                                                {child.title}
                                            </NavLink>
                                        </li>
                                    ))}
                                </div>
                            );
                        }

                        return (
                            <li key={route.title} className="text-lg">
                                <NavLink to={route.path}>{route.title}</NavLink>
                            </li>
                        );
                    })}
                </Sidebar>

                <div className="px-3 w-11/12">
                    <div className="">
                        <Routes>
                            {routes.map((route) => {
                                if (route.children && route.children.length > 0) {
                                    return (
                                        <Route
                                            key={`route_${route.path}`}
                                            path={route.path}
                                            element={
                                                !isRouteNested ? (
                                                    route.element
                                                ) : (
                                                    <>
                                                        <Outlet />
                                                    </>
                                                )
                                            }
                                        >
                                            {route?.children?.map((child) => {
                                                return (
                                                    <Route
                                                        key={`child_route_${child.path}`}
                                                        path={child.path}
                                                        element={<>{child.element}</>}
                                                    />
                                                );
                                            })}
                                        </Route>
                                    );
                                }

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
