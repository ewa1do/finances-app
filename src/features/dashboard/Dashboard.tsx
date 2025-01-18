import Alert from "../../ui/Alert";
import Card from "../../ui/Card";

export default function Dashboard() {
    return (
        <>
            <section>
                <div className="mb-10">Bienvenido, Jesus</div>
            </section>

            <section className="flex justify-evenly text-neutral-700 p-5 mb-20">
                <Card styles="bg-green-100">
                    <div>
                        <h1 className="text-4xl">Ingresos</h1>
                        <span className="text-8xl">757</span>
                    </div>
                </Card>
                <Card styles="bg-red-300">
                    <h1 className="text-4xl">Gastos</h1>
                    <span className="text-8xl">757</span>
                </Card>
                <Card styles="bg-blue-200">
                    <h1 className="text-4xl">Balance</h1>
                    <span className="text-8xl">757</span>
                </Card>
            </section>

            <section className="border-2 rounded-md p-3 shadow-xl mb-20">
                <div className="border-b-2 p-3 mb-5">
                    <h3 className="text-2xl">Ultimos Abonos</h3>
                </div>

                <Alert />
                <br />
                <Alert />
                <br />
                <Alert />
                <br />
            </section>
            <section className="border-2 rounded-md p-3 shadow-xl">
                <div className="border-b-2 p-3 mb-5">
                    <h3 className="text-2xl">Acciones Pendientes</h3>
                </div>

                <Alert />
                <br />
                <Alert />
                <br />
                <Alert />
                <br />
            </section>
        </>
    );
}
