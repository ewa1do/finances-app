import { Sizes } from "../../models/ESizes";
import { Alert, Card } from "../../ui/";

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

            <section className="flex gap-x-4">
                <Card title="Ultimos Abonos" size={Sizes.small}>
                    <Alert />
                    <Alert />
                    <Alert />
                </Card>

                <Card title="Acciones Pendietes" size={Sizes.small}>
                    <Alert />
                    <Alert />
                    <Alert />
                </Card>
            </section>
        </>
    );
}
