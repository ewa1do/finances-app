import { Sizes } from "../../models/ESizes";
import Alert from "../../ui/Alert";
import Card from "../../ui/Card";

export default function Dashboard() {
    return (
        <>
            <section>
                <div className="mb-10 text-3xl">Bienvenido, Jesus</div>
            </section>
            <section className="flex gap-x-3">
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
            {/* <section className="flex justify-evenly text-neutral-700 p-5 mb-20">
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
            </section> */}

            <section className="flex gap-x-4">
                <Card title="Ultimos Abonos" size={Sizes.small}>
                    {/* <div className="border-b-2 p-3 mb-5"> */}
                    {/* <h3 className="text-2xl">Ultimos Abonos</h3> */}
                    {/* </div> */}

                    <Alert />
                    {/* <br /> */}
                    <Alert />
                    {/* <br /> */}
                    <Alert />
                    {/* <br /> */}
                </Card>

                {/* <section className="border-2 rounded-md p-3 shadow-xl mb-20">
                <div className="border-b-2 p-3 mb-5">
                    <h3 className="text-2xl">Ultimos Abonos</h3>
                </div>

                <Alert />
                <br />
                <Alert />
                <br />
                <Alert />
                <br />
            </section> */}

                <Card title="Acciones Pendietes" size={Sizes.small}>
                    {/* <section className="border-2 rounded-md p-3 shadow-xl"> */}
                    {/* <div className="border-b-2 p-3 mb-5">
                    <h3 className="text-2xl">Acciones Pendientes</h3>
                </div> */}

                    <Alert />
                    {/* <br /> */}
                    <Alert />
                    {/* <br /> */}
                    <Alert />
                    {/* <br /> */}
                    {/* </section> */}
                </Card>
            </section>
        </>
    );
}
