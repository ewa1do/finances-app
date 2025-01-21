import { Pie, PieChart, Legend, Cell, Tooltip } from "recharts";

const data01 = [
    { name: "Abonos", value: 400, fill: "#0088FE" },
    { name: "Transporte", value: 100, fill: "#00C49F" },
    { name: "Nomina", value: 300, fill: "#FF8042" },
    { name: "Alquiler", value: 200, fill: "#d51ec8" },
    { name: "Impuestos", value: 200, fill: "#572bcc" },
    { name: "Mantenimiento de equipos", value: 200, fill: "#1baad4" },
    { name: "Pago a proveedores", value: 200, fill: "#7d4d71" },
];

export default function PieChartComponent() {
    return (
        // <ResponsiveContainer>
        <PieChart width={400} height={400}>
            <Pie
                data={data01}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={3}
            />
            {data01.map((entry) => (
                <Cell fill={entry.fill} stroke={entry.fill} key={entry.fill} />
            ))}
            <Legend verticalAlign="bottom" height={36} />
            <Tooltip />
        </PieChart>
        // </ResponsiveContainer>
    );
}
