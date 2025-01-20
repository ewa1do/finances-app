import { Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

const areaData = [
    { week: "2024-01-01", ventas: 5000, gastos: 3000 },
    { week: "2024-01-08", ventas: 4500, gastos: 3700 },
    { week: "2024-01-15", ventas: 5200, gastos: 5400 },
    { week: "2024-01-22", ventas: 4800, gastos: 5000 },
    { week: "2024-01-29", ventas: 5300, gastos: 4900 },
    { week: "2024-02-05", ventas: 5500, gastos: 5800 },
    { week: "2024-02-12", ventas: 5700, gastos: 6000 },
    { week: "2024-02-19", ventas: 5900, gastos: 5900 },
    { week: "2024-02-26", ventas: 4500, gastos: 5000 },
    { week: "2024-03-04", ventas: 6700, gastos: 4200 },
    { week: "2024-03-11", ventas: 6500, gastos: 4700 },
    { week: "2024-03-18", ventas: 6700, gastos: 5600 },
    { week: "2024-03-25", ventas: 6200, gastos: 5800 },
    { week: "2024-04-01", ventas: 7100, gastos: 7000 },
    { week: "2024-04-08", ventas: 7300, gastos: 6500 },
    { week: "2024-04-15", ventas: 7500, gastos: 6800 },
    { week: "2024-04-22", ventas: 6700, gastos: 7300 },
    { week: "2024-04-29", ventas: 6700, gastos: 7200 },
    { week: "2024-05-06", ventas: 8100, gastos: 6400 },
    { week: "2024-05-13", ventas: 8300, gastos: 6000 },
    { week: "2024-05-20", ventas: 8500, gastos: 5800 },
    { week: "2024-05-27", ventas: 8700, gastos: 7700 },
    { week: "2024-06-03", ventas: 6900, gastos: 7900 },
    { week: "2024-06-10", ventas: 9100, gastos: 8600 },
    { week: "2024-06-17", ventas: 9300, gastos: 9400 },
    { week: "2024-06-24", ventas: 8800, gastos: 9000 },
    { week: "2024-07-01", ventas: 6500, gastos: 7200 },
    { week: "2024-07-08", ventas: 5400, gastos: 5800 },
    { week: "2024-07-15", ventas: 3700, gastos: 4800 },
    { week: "2024-07-22", ventas: 6600, gastos: 5300 },
    { week: "2024-07-29", ventas: 4800, gastos: 5600 },
    { week: "2024-08-05", ventas: 7200, gastos: 5900 },
    { week: "2024-08-12", ventas: 7700, gastos: 6000 },
    { week: "2024-08-19", ventas: 6000, gastos: 6900 },
    { week: "2024-08-26", ventas: 6800, gastos: 6700 },
    { week: "2024-09-02", ventas: 7300, gastos: 6800 },
    { week: "2024-09-09", ventas: 7900, gastos: 7000 },
    { week: "2024-09-16", ventas: 8700, gastos: 7500 },
    { week: "2024-09-23", ventas: 8100, gastos: 7900 },
    { week: "2024-09-30", ventas: 5400, gastos: 6200 },
    { week: "2024-10-07", ventas: 7000, gastos: 6700 },
    { week: "2024-10-14", ventas: 8000, gastos: 7300 },
    { week: "2024-10-21", ventas: 6200, gastos: 6900 },
    { week: "2024-10-28", ventas: 7600, gastos: 7100 },
    { week: "2024-11-04", ventas: 8500, gastos: 7600 },
    { week: "2024-11-11", ventas: 6800, gastos: 7200 },
    { week: "2024-11-18", ventas: 7500, gastos: 7400 },
    { week: "2024-11-25", ventas: 8800, gastos: 8500 },
    { week: "2024-12-02", ventas: 9600, gastos: 7800 },
    { week: "2024-12-09", ventas: 8300, gastos: 7400 },
    { week: "2024-12-16", ventas: 7200, gastos: 6700 },
    { week: "2024-12-23", ventas: 6600, gastos: 7100 },
    { week: "2024-12-30", ventas: 7900, gastos: 6800 },
];

export default function AreaChartComponent() {
    return (
        <>
            <h3>Ventas semanales vs gastos</h3>

            <AreaChart
                width={1000}
                height={400}
                data={areaData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
                {" "}
                <CartesianGrid strokeDasharray="3 3" /> <XAxis dataKey="week" /> <YAxis />{" "}
                <Tooltip /> <Legend />{" "}
                {/* <Area type="monotone" dataKey="ventas" stroke="#8884d8" fill="#8884d8" />{" "} */}
                <Area type="monotone" dataKey="ventas" stroke="#82ca9d" fill="#82ca9d" />{" "}
                <Area type="monotone" dataKey="gastos" stroke="#8884d8" fill="#8884d8" />{" "}
            </AreaChart>
        </>
    );
}
