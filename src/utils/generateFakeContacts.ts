import { faker } from "@faker-js/faker";
import { AtoZ, Contact } from "../models/";

type FakeContact = Record<AtoZ, Contact[]>;

export function generateFakeContacts(): Contact[] {
    const fakeContacts: FakeContact = {} as FakeContact;

    for (let i = 0; i < 50; i++) {
        const person: Contact = {
            fullName: faker.person.fullName(),
            email: faker.internet.email(),
            phoneNumber: faker.phone.number(),
            uuid: faker.string.uuid(),
        };

        const letterIdx = person.fullName[0].toLowerCase() as AtoZ;

        if (!fakeContacts[letterIdx]) {
            fakeContacts[letterIdx] = [person];
        } else {
            fakeContacts[letterIdx].push(person);
        }
    }

    return fakeContacts;
    // return Object.entries(fakeContacts).sort();
}
