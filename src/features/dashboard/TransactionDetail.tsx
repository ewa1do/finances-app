import { Ellipsis } from "../../ui/Icons";

interface ITransaction {
    title: string;
    value: string;
    transactionType: "income" | "expenses";
    border?: boolean;
}

export function TransactionDetail({ title, value, transactionType, border = true }: ITransaction) {
    return (
        <div
            className={`flex flex-col mt-4 mb-8 ${
                transactionType === "income" ? "md:bg-green-100" : "md:bg-red-100"
            } md:rounded-lg md:w-4/12 md:h-40`}
        >
            <div
                className={`flex justify-between mb-5 pb-3 ${
                    transactionType === "income" ? "md:bg-green-200" : "md:bg-red-200"
                } md:py-2 md:px-2 md:rounded-lg ${border && "border-b-2 md:border-none"}`}
            >
                <div className="hidden md:flex flex-col ml-4">
                    <i>
                        {transactionType === "income" ? (
                            <ArrowSquareInSVG />
                        ) : (
                            <ArrowSquareOutSVG />
                        )}
                    </i>
                    <h4 className="opacity-80 text-base font-semibold">{title}</h4>
                </div>
                <i>
                    <Ellipsis />
                </i>
                <h4 className="text-lg opacity-80 md:hidden">{title}</h4>
                <div className="flex md:hidden items-center">
                    <span className="text-4xl md:text-3xl text-center mt-5">${value}</span>

                    <i className="md:hidden">
                        {transactionType === "income" ? <CaretUpSVG /> : <CaretDownSVG />}
                    </i>
                </div>
            </div>
            <span className="hidden md:flex md:text-3xl justify-center">${value}</span>
        </div>
    );
}

function CaretUpSVG() {
    return (
        <svg
            className="fill-green-600"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#000000"
            viewBox="0 0 256 256"
        >
            <path d="M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z"></path>
        </svg>
    );
}

function CaretDownSVG() {
    return (
        <svg
            className="fill-red-500"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
        >
            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
        </svg>
    );
}

function ArrowSquareInSVG() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
        >
            <path d="M128,136v64a8,8,0,0,1-16,0V155.32L45.66,221.66a8,8,0,0,1-11.32-11.32L100.68,144H56a8,8,0,0,1,0-16h64A8,8,0,0,1,128,136ZM208,32H80A16,16,0,0,0,64,48V96a8,8,0,0,0,16,0V48H208V176H160a8,8,0,0,0,0,16h48a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z"></path>
        </svg>
    );
}

function ArrowSquareOutSVG() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
        >
            <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
        </svg>
    );
}
