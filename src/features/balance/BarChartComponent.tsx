import {
    BarChart,
    Bar,
    Rectangle,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Mayorista Verde",
        precio: 100,
    },
    {
        name: "Frutas del Sol",
        precio: 200,
    },
    {
        name: "Hortalizas Frescas",
        precio: 150,
    },
    {
        name: "El Huerto",
        precio: 50,
    },
    {
        name: "La Huerta",
        precio: 70,
    },
    {
        name: "Mercado Central",
        precio: 300,
    },
    {
        name: "Frutería del Barrio",
        precio: 120,
    },
    {
        name: "Verdulería Ecológica",
        precio: 350,
    },
    {
        name: "El Rincón de las Verduras",
        precio: 220,
    },
    {
        name: "El Mercado",
        precio: 130,
    },
];

export default function BarChartComponent() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                    dataKey="precio"
                    fill="#8884d8"
                    activeBar={<Rectangle fill="pink" stroke="blue" />}
                />
            </BarChart>
        </ResponsiveContainer>
    );
}
