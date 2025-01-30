// import { Sizes } from "../../models/";
// import { Alert, Card } from "../../ui/";
import { BalanceDetails, TransactionDetail } from "./";

export default function Dashboard() {
    return (
        <>
            {/* TODO: Move this section into navbar */}
            {/* <section>
                <div className="hidden md:block mb-10 text-2xl my-6">Bienvenido, Jesus</div>
            </section> */}
            <h3 className="hidden md:flex text-2xl font-semibold mt-5">Resumen</h3>
            <section className="flex flex-col md:flex-row md:gap-x-5 w-12/12 mb-6">
                <BalanceDetails value="390.00" />

                <TransactionDetail
                    {...{
                        title: "Ingresos",
                        transactionType: "income",
                        value: "2890",
                    }}
                />

                <TransactionDetail
                    {...{
                        border: false,
                        title: "Gastos",
                        transactionType: "expenses",
                        value: "1350",
                    }}
                />
            </section>
            <section className="flex flex-col-reverse md:flex-row md:gap-x-6 mb-8">
                <Transactions transactions={transactions} />
                <Shortcuts />
            </section>

            {/* <section className="flex gap-x-4">
                <Card title="Ultimos Abonos" size={Sizes.small}>
                    <Alert />
                    <Alert />
                    <Alert />
                </Card>

                <Card title="Acciones Pendientes" size={Sizes.small}>
                    <Alert />
                    <Alert />
                    <Alert />
                </Card>
            </section> */}
        </>
    );
}

function Shortcuts() {
    return (
        <article className="w-12/12 md:w-9/12 mb-10">
            <h3 className="opacity-80 flex text-xl font-semibold mt-5 md:mt-0 mb-3">Atajos</h3>

            <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-2 md:grid-cols-4 gap-5 ">
                <ShortcutButton icon={<TrendUp />} value="Abonar" />
                <ShortcutButton icon={<TrendUp />} value="Agregar Contacto" />
                <ShortcutButton icon={<TrendUp />} value="Agregar a Libro" />
                <ShortcutButton icon={<TrendUp />} value="Ir a contactos" />
                <ShortcutButton icon={<TrendUp />} value="Ver grafica" />
                <ShortcutButton icon={<TrendUp />} value="Revisar Balance" />
            </div>
        </article>
    );
}

function ShortcutButton({ icon, value }: { icon: JSX.Element; value: string }) {
    return (
        <button className="border bg-slate-50 border-slate-50 rounded-lg p-3 shadow-sm cursor-pointer">
            <i>{icon}</i>
            <h4 className="font-semibold">{value}</h4>
        </button>
    );
}

function TrendUp() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
        >
            <path d="M240,56v64a8,8,0,0,1-16,0V75.31l-82.34,82.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,212.69,64H168a8,8,0,0,1,0-16h64A8,8,0,0,1,240,56Z"></path>
        </svg>
    );
}

interface ITransaction {
    type: "received" | "sent";
    sender: string;
    bill: number;
}

const transactions: ITransaction[] = [
    {
        type: "sent",
        sender: "Eduardo Vera",
        bill: 130,
    },
    {
        type: "received",
        sender: "Eduardo Vera",
        bill: 130,
    },
    {
        type: "sent",
        sender: "Eduardo Vera",
        bill: 130,
    },
    {
        type: "received",
        sender: "Eduardo Vera",
        bill: 130,
    },
];

function Transactions({ transactions }: { transactions: ITransaction[] }) {
    return (
        <div className="flex flex-col min-w-80 max-w-96 md:w-6/12 mb-6">
            <h3 className="opacity-80 flex text-xl font-semibold md:mb-3">Transacciones</h3>
            <div className=" md:border-2 md:border-slate-50 md:rounded-lg md:p-3 md:bg-slate-50 md:shadow-md">
                <h5 className="mt-6">Hoy</h5>

                {transactions.map((transaction) => (
                    <article className="p-4">
                        <div className="flex justify-between">
                            <span className="text-lg">
                                {transaction.type == "sent" ? "Abono Enviado" : "Abono Recibido"}
                            </span>
                            <span
                                className={`text-lg ${transaction.type === "sent" && "opacity-70"}`}
                            >
                                {transaction.type === "sent" ? "-" : "+"}
                                {transaction.bill}
                            </span>
                        </div>
                        <span className={`text-sm opacity-70`}>{transaction.sender}</span>
                    </article>
                ))}
            </div>
        </div>
    );
}
