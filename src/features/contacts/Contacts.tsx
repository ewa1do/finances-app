// const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i)).map((value) => {
//     return {
//         letter: value,
//         items: [],
//         disabled: true,
//     };
// });

import { useEffect, useState } from "react";
import { Contact as IContact } from "../../models";
import { generateFakeContacts } from "../../utils/generateFakeContacts";

// TODO: Change state for context

export default function Contacts() {
    const [contactList, setContactList] = useState<IContact[]>([] as IContact[]);
    const [activeContact, setActiveContact] = useState<IContact>();

    function onActive(contact: IContact) {
        setActiveContact(contact);
    }

    useEffect(() => {
        const contacts = Object.entries(generateFakeContacts()).sort();

        const firstContactInList = contacts[0][1][0];

        setContactList(contacts);
        setActiveContact(firstContactInList);
    }, []);

    const contactsLength = contactList.flat(2).filter((value) => typeof value === "object").length;

    return (
        <div className="mt-7">
            <h3 className="text-2xl">
                Contactos <span className="text-gray-400">{contactsLength}</span>
            </h3>
            <section className="flex justify-evenly gap-5">
                <Card>
                    <ContactList contactList={contactList} onActive={onActive} />
                </Card>
                <Card>
                    <ExpandedContact activeContact={activeContact} />
                </Card>
                <Card>
                    <h3 className="text-2xl p-4">Historial de Abonos</h3>

                    <div className="flex flex-col mb-5">
                        <span className="ml-2 mb-3 opacity-80">24/05/2024</span>

                        <div className="bg-gray-800 rounded-xl p-2 ml-3 mb-2">
                            Abono enviado por 300$
                        </div>
                        <div className="bg-gray-800 rounded-xl p-2 ml-3">
                            Abono enviado por 300$
                        </div>
                    </div>

                    <div className="flex flex-col mb-5">
                        <span className="ml-2 mb-3 opacity-80">24/05/2024</span>

                        <div className="bg-gray-800 rounded-xl p-2 ml-3 mb-2">
                            Abono enviado por 300$
                        </div>
                        <div className="bg-gray-800 rounded-xl p-2 ml-3">
                            Abono enviado por 300$
                        </div>
                    </div>

                    <div className="flex flex-col mb-5">
                        <span className="ml-2 mb-3 opacity-80">24/05/2024</span>

                        <div className="bg-gray-800 rounded-xl p-2 ml-3 mb-2">
                            Abono enviado por 300$
                        </div>
                        <div className="bg-gray-800 rounded-xl p-2 ml-3">
                            Abono enviado por 300$
                        </div>
                    </div>
                </Card>
            </section>
        </div>
    );
}

function ExpandedContact({ activeContact }: { activeContact: IContact }) {
    const divClass = "bg-gray-800 rounded-xl p-4 mt-4 ml-3 shadow-xl";

    return (
        <section>
            <div className={`flex flex-col ${divClass}`}>
                <div className="flex mb-7">
                    <img src={activeContact?.avatar} className="max-w-20 max-h-20 rounded-full" />
                    <div className="flex flex-col justify-center pl-4">
                        <h3 className="text-xl">{activeContact?.fullName}</h3>
                        <span className="capitalize opacity-75 py-1">{activeContact?.bio}</span>
                        <span
                            className={`text-xs w-fit p-1 ${
                                activeContact?.tags.includes("Cliente")
                                    ? "bg-purple-300"
                                    : "bg-teal-300"
                            }  opacity-90 rounded-2xl`}
                        >
                            <h6
                                className={`${
                                    activeContact?.tags.includes("Cliente")
                                        ? "text-purple-900"
                                        : "text-teal-900"
                                }`}
                            >
                                {activeContact?.tags}
                            </h6>
                        </span>
                    </div>
                </div>
                <button className="border p-2 w-10/12 btn btn-neutral self-center">
                    Ver Abonos
                </button>
            </div>

            <div className={`${divClass}`}>
                <h5 className="opacity-80 text-md">Telefono</h5>
                <span>{activeContact?.phoneNumber}</span>
            </div>

            <div className={`${divClass}`}>
                <h5 className="opacity-80 text-md">Email</h5>
                <span>{activeContact?.email}</span>
            </div>
        </section>
    );
}

// TODO: Make searchbar and filters for contact list

function ContactList({
    contactList,
    onActive,
    activeContact,
}: {
    contactList: IContact[];
    onActive: () => void;
    activeContact: IContact;
}) {
    return (
        <ul>
            {contactList.map(([letter, contacts]) => {
                return (
                    <li className="p-3">
                        <span>{letter.toUpperCase()}</span>

                        {contacts.map((contact) => (
                            <Contact
                                contact={contact}
                                onActive={onActive}
                                isActive={contact?.uuid === activeContact?.uuid}
                            />
                        ))}
                    </li>
                );
            })}
        </ul>
    );
}

function Card({ children }: { children?: React.ReactNode }) {
    return (
        <div className="card bg-neutral text-neutral-content w-1/3 h-screen overflow-scroll">
            {children}
        </div>
    );
}

function Contact({
    contact,
    onActive,
    isActive,
}: {
    contact: IContact;
    onActive: (contact: IContact) => void;
    isActive: boolean;
}) {
    console.log(isActive);

    return (
        <div
            className={`flex justify-between p-2 cursor-pointer ${isActive ? "border-2" : ""}`}
            onClick={() => onActive(contact)}
        >
            <h5 className="text-md">{contact.fullName}</h5>
            <i className="">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#000000"
                    viewBox="0 0 256 256"
                >
                    <path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"></path>
                </svg>
            </i>
        </div>
    );
}
