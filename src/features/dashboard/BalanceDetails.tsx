import { Ellipsis, Wallet } from "../../ui/Icons";

export function BalanceDetails({ value }: { value: string }) {
    return (
        <div className="flex flex-col mt-4 mb-8 md:bg-blue-100 md:rounded-lg md:w-4/12 md:h-40">
            <div className="flex justify-between md:bg-blue-200 md:py-2 md:px-2 md:rounded-lg">
                <div className="hidden md:flex flex-col ml-4">
                    {/* Icon wallet */}
                    <i>
                        <Wallet />
                    </i>
                    <h4 className="opacity-80 text-base font-semibold">Balance</h4>
                </div>

                {/* Icon Ellipsis */}
                <i>
                    <Ellipsis />
                </i>

                <h4 className="opacity-80 text-lg md:hidden">Balance</h4>
                <button className="block md:hidden">Enero</button>
            </div>
            <span className="text-4xl md:text-3xl text-center mt-5">${value}</span>
        </div>
    );
}
