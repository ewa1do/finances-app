export function BalanceDetails({ value }: { value: string }) {
    return (
        <div className="flex flex-col mt-4 mb-8 md:bg-blue-100 md:rounded-lg md:w-4/12 md:h-40">
            <div className="flex justify-between md:bg-blue-200 md:py-2 md:px-2 md:rounded-lg">
                <div className="hidden md:flex flex-col ml-4">
                    {/* Icon wallet */}
                    <i>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="32"
                            fill="#000000"
                            viewBox="0 0 256 256"
                        >
                            <path d="M216,64H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,56V184a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64Zm0,128H56a8,8,0,0,1-8-8V78.63A23.84,23.84,0,0,0,56,80H216Zm-48-60a12,12,0,1,1,12,12A12,12,0,0,1,168,132Z"></path>
                        </svg>
                    </i>
                    <h4 className="opacity-80 text-base font-semibold">Balance</h4>
                </div>

                {/* Icon Ellipsis */}
                <i className="hidden md:flex cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="#000000"
                        viewBox="0 0 256 256"
                    >
                        <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM128,72a12,12,0,1,0-12-12A12,12,0,0,0,128,72Zm0,112a12,12,0,1,0,12,12A12,12,0,0,0,128,184Z"></path>
                    </svg>
                </i>
                <h4 className="opacity-80 text-lg md:hidden">Balance</h4>
                <button className="block md:hidden">Enero</button>
            </div>
            <span className="text-4xl md:text-3xl text-center mt-5">${value}</span>
        </div>
    );
}
