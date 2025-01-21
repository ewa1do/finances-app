import AreaChartComponent from "./AreaChartComponent";
import BarChartComponent from "./BarChartComponent";
import PieChartComponent from "./PieChartComponent";

export default function Balance() {
    return (
        <>
            <section className="flex gap-x-1">
                <Card size={Sizes.extra_small} title="Ingresos" titleColor="text-[#229961]">
                    <span className="text-8xl text-[#229961] ">757</span>
                </Card>
                <Card size={Sizes.extra_small} title="Gastos" titleColor="text-[#dd3543]">
                    <span className="text-8xl text-[#dd3543]">757</span>
                </Card>
                <Card size={Sizes.extra_small} title="Balance" titleColor="text-[#1f86f3]">
                    <span className="text-8xl text-[#1f86f3]">757</span>
                </Card>
            </section>

            <Card title="Ventas Semanales vs Gastos">
                <AreaChartComponent />
            </Card>

            <section className="flex gap-x-3">
                <Card title="Clasificacion de gastos" size={Sizes.small}>
                    <PieChartComponent />
                </Card>

                <Card title="Comparacion de precio de proveedores" size={Sizes.small}>
                    <BarChartComponent />
                </Card>
            </section>
        </>
    );
}

enum Sizes {
    extra_small = "w-1/3",
    small = "w-1/2",
    full = "w-full",
}

function Card({
    title,
    size = Sizes.full,
    titleColor,
    children,
}: {
    title: string;
    size?: Sizes;
    titleColor?: string;
    children: React.ReactNode;
}) {
    return (
        <div className={`card bg-neutral text-neutral-content mb-8 ${size as string}`}>
            <div className="card-body items-center text-center">
                <h2 className={`card-title ${titleColor || ""} text-3xl`}>{title}</h2>
                {children}
            </div>
        </div>
    );
}
