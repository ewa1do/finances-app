import AreaChartComponent from "./AreaChartComponent";
import BarChartComponent from "./BarChartComponent";
import PieChartComponent from "./PieChartComponent";

export default function Balance() {
    return (
        <>
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
    small = "w-1/2",
    full = "w-full",
}

function Card({
    title,
    size = Sizes.full,
    children,
}: {
    title: string;
    size?: Sizes;
    children: React.ReactNode;
}) {
    return (
        <div className={`card bg-neutral text-neutral-content mb-8 ${size as string}`}>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                {children}
            </div>
        </div>
    );
}
