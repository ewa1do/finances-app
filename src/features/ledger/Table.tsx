import { IExpenseResponse } from "../../models/IExpenseResponse";

export default function Table({ header, body }: { header: string[]; body: IExpenseResponse[] }) {
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                <thead className="bg-base-300">
                    <tr>
                        {header.map((value) => (
                            <th key={value}>{value}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {body.map((value) => {
                        return (
                            <tr>
                                <td>{value.date}</td>
                                <td>{value.provider}</td>
                                <td>{value.ammount}</td>
                                <td>{value.credit}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
