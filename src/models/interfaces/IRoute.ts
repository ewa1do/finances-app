export interface IRoute {
    title: string;
    path: string;
    element: JSX.Element;
    children?: IRoute[];
}
