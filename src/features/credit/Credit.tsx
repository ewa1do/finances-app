import { useState } from "react";

interface PaymentDetail {
    paymentAmountBs: number; // Monto del pago en bolívares
    paymentDate: string; // Fecha del pago (en formato YYYY-MM-DD)
    reference: string; // Número de referencia de la transferencia bancaria
    exchangeRateBsUsd: number; // Tasa de cambio Bs/$
    bank: string; // Banco utilizado para el pago
}

interface SupplierPayment {
    supplier: string; // Nombre del proveedor
    dispatchDate: string; // Fecha de despacho (en formato YYYY-MM-DD)
    invoiceNumber: string; // Número de la factura
    creditDays: number; // Días de crédito otorgados
    invoiceAmount: number; // Monto total de la factura en bolívares (Bs)
    dueDate: string; // Fecha de vencimiento del pago (en formato YYYY-MM-DD)
    earlyPaymentDiscount: number; // Descuento por pronto pago (ejemplo: 0.05 para 5%)
    isPaymentCompleted: boolean; // Indica si el pago está completado
    paymentDetails: PaymentDetail[]; // Detalles de los pagos realizados
}

const pendingPayments: SupplierPayment[] = [
    {
        supplier: "Supplier A",
        dispatchDate: "2023-10-01",
        invoiceNumber: "F001-12345",
        creditDays: 30,
        invoiceAmount: 5000,
        dueDate: "2023-11-01",
        earlyPaymentDiscount: 0.05,
        isPaymentCompleted: false, // Pago pendiente
        paymentDetails: [
            {
                paymentAmountBs: 1000,
                paymentDate: "2023-10-05",
                reference: "T123456789",
                exchangeRateBsUsd: 35.5,
                bank: "Banco de Venezuela",
            },
        ],
    },
    {
        supplier: "Supplier B",
        dispatchDate: "2023-09-15",
        invoiceNumber: "F002-67890",
        creditDays: 60,
        invoiceAmount: 8000,
        dueDate: "2023-11-14",
        earlyPaymentDiscount: 0.03,
        isPaymentCompleted: false, // Pago pendiente
        paymentDetails: [
            {
                paymentAmountBs: 2000,
                paymentDate: "2023-09-20",
                reference: "T112233445",
                exchangeRateBsUsd: 34.8,
                bank: "Mercantil",
            },
        ],
    },
];

const completedPayments: SupplierPayment[] = [
    {
        supplier: "Supplier C",
        dispatchDate: "2024-08-20",
        invoiceNumber: "F003-54321",
        creditDays: 45,
        invoiceAmount: 12000,
        dueDate: "2023-10-04",
        earlyPaymentDiscount: 0.02,
        isPaymentCompleted: true, // Pago completado
        paymentDetails: [
            {
                paymentAmountBs: 5000,
                paymentDate: "2023-08-25",
                reference: "T334455667",
                exchangeRateBsUsd: 33.7,
                bank: "Mercantil",
            },
            {
                paymentAmountBs: 7000,
                paymentDate: "2023-09-10",
                reference: "T778899001",
                exchangeRateBsUsd: 34.0,
                bank: "Banco de Venezuela",
            },
        ],
    },
    {
        supplier: "Supplier D",
        dispatchDate: "2024-07-10",
        invoiceNumber: "F004-98765",
        creditDays: 30,
        invoiceAmount: 3000,
        dueDate: "2023-08-09",
        earlyPaymentDiscount: 0.05,
        isPaymentCompleted: true, // Pago completado
        paymentDetails: [
            {
                paymentAmountBs: 3000,
                paymentDate: "2023-07-15",
                reference: "T445566778",
                exchangeRateBsUsd: 32.5,
                bank: "Banesco",
            },
        ],
    },
];

const monthsOfYear = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];

const creditsInMonths = [
    ...new Set(completedPayments.map((payment) => Number(payment.dispatchDate.split("-")[1]))),
];

export default function Credit() {
    type CreditType = "pending" | "completed";

    const [creditType, setCreditType] = useState<CreditType>("completed");

    function onChangeTab(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const target = e.target as HTMLElement;
        setCreditType(() => target.dataset.status as CreditType);
    }

    return (
        <>
            <h1 className="text-2xl pb-4">Abonos</h1>

            <div className="flex w-full gap-x-3">
                <div
                    className="card bg-base-200 rounded-box grid h-6 flex-grow place-items-center cursor-pointer"
                    data-status="pending"
                    onClick={onChangeTab}
                >
                    Pendientes
                </div>

                <div
                    className="card bg-base-200 rounded-box grid  flex-grow place-items-center cursor-pointer"
                    data-status="completed"
                    onClick={onChangeTab}
                >
                    Completados
                </div>
            </div>

            {/* <CreditSection title="Completados" payments={pendingPayments} /> */}

            {creditType === "pending" ? (
                <CreditSection title="Pendientes" payments={pendingPayments} />
            ) : (
                <CreditSection title="Completados" payments={completedPayments} />
            )}
        </>
    );
}

function CreditSection({ title, payments }: { title: string; payments: SupplierPayment[] }) {
    return (
        <section className="w-12/12">
            <h4 className="pt-3 pb-6 text-xl">{title}</h4>

            {/* TODO: Fix month filter avoiding data to show */}
            <article className="">
                {/* {creditsInMonths.map((month) => { */}
                {/* return ( */}
                <article className="my-5 pb-4 ">
                    {/* <em key={monthsOfYear[month - 1]} className="text-sm">
                                {monthsOfYear[month - 1]}
                            </em> */}
                    {/* <PrintMonth month={month} /> */}

                    {payments
                        // .filter((payment) => Number(payment.dispatchDate.split("-")[1]) === month)
                        .map((payment) => (
                            <CreditInfo payment={payment} />
                        ))}
                </article>
                {/* ); */}
                {/* })} */}
            </article>
        </section>
    );
}

function PrintMonth({ month }: { month: number }) {
    return (
        <em key={monthsOfYear[month - 1]} className="text-sm">
            {monthsOfYear[month - 1]}
        </em>
    );
}

function CreditInfo({ payment }: { payment: SupplierPayment }) {
    const [showMore, setShowMore] = useState<boolean>(false);

    return (
        <div key={payment.invoiceNumber} className="ml-2 mt-3 border-b-2 py-2">
            <div className="flex justify-between items-baseline">
                <h4 className="text-xl">{payment.supplier}</h4>
                <span>{payment.dispatchDate}</span>
                <span>${payment.invoiceAmount}</span>
                <button onClick={() => setShowMore((prev) => !prev)} className="btn">
                    {showMore ? "Ocultar" : "Mostrar"} Detalles
                </button>
            </div>

            {showMore && <MoreInfo payment={payment} />}
        </div>
    );
}

function MoreInfo({ payment }: { payment: SupplierPayment }) {
    return (
        <div className="flex flex-col gap-y-2">
            <p className="mt-3">
                Ultimo pago: <span>{payment.dueDate}</span>
            </p>
            <p>
                Estatus:{" "}
                <span
                    className={`${payment.isPaymentCompleted ? "bg-green-200" : "bg-red-200"} p-1`}
                >
                    {payment.isPaymentCompleted ? "PAGADO" : "NO PAGADO"}
                </span>
            </p>
            <p>
                Dias de credito: <span>{payment.creditDays}</span>
            </p>
            <ul>
                <h4>Abonos Realizados:</h4>
                {payment.paymentDetails.map((details) => (
                    <PaymentDetails details={details} />
                ))}
            </ul>
        </div>
    );
}

function PaymentDetails({ details }: { details: PaymentDetail }) {
    return (
        <div className="flex flex-col p-2">
            <p>
                Tasa: <span>${details.exchangeRateBsUsd}</span>
            </p>{" "}
            <p>
                Banco: <span>{details.bank}</span>
            </p>
            <p>
                Monto en BS: <span>{details.paymentAmountBs}</span>
            </p>
            <p>
                Fecha: <span>{details.paymentDate}</span>
            </p>
            <p>
                Nro de Referencia: <span>{details.reference}</span>
            </p>
        </div>
    );
}
