import AreaChartComponent from "./AreaChartComponent";

export default function Balance() {
    return (
        <>
            <div className="card bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Ventas Semanales vs Gastos</h2>
                    <AreaChartComponent />
                </div>
            </div>
        </>
    );
}
