// const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i)).map((value) => {
//     return {
//         letter: value,
//         items: [],
//         disabled: true,
//     };
// });

import { generateFakeContacts } from "../../utils/generateFakeContacts";

export default function Contacts() {
    return (
        <div className="mt-7">
            <h3 className="text-2xl">
                Contacts <span className="text-gray-400">4</span>
            </h3>
            <section className="flex justify-evenly gap-5">
                <Card>
                    <ul>
                        {generateFakeContacts().map(([letter, contacts]) => {
                            return (
                                <li className="p-3">
                                    <span>{letter.toUpperCase()}</span>

                                    {contacts.map((contact) => (
                                        <h5>{contact.fullName}</h5>
                                    ))}
                                </li>
                            );
                        })}
                    </ul>
                </Card>
                <Card></Card>
                <Card></Card>
                {/* <div className="card bg-neutral text-neutral-content w-1/3 h-screen">
                    <ul>
                        {generateFakeContacts().map((contact) => {
                            return <li>{contact.fullName}</li>;
                        })}
                    </ul>
                </div> */}
            </section>
        </div>
    );
}

function Card({ children }: { children?: React.ReactNode }) {
    return (
        <div className="card bg-neutral text-neutral-content w-1/3 h-screen  overflow-scroll">
            {children}
        </div>
    );
}
