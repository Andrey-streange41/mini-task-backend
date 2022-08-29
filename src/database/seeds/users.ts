import { Knex } from "knex";
import { faker } from '@faker-js/faker';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("authors").del();

    // Inserts seed entries
    await knex("authors").insert([
        { nickname: faker.internet.userName(),avatar:faker.internet.avatar() },
        { nickname: faker.internet.userName(),avatar:faker.internet.avatar() },
        { nickname: faker.internet.userName(),avatar:faker.internet.avatar() },
        { nickname: faker.internet.userName(),avatar:faker.internet.avatar() },
        { nickname: faker.internet.userName(),avatar:faker.internet.avatar() },
        { nickname: faker.internet.userName(),avatar:faker.internet.avatar() },
        { nickname: faker.internet.userName(),avatar:faker.internet.avatar() },
        { nickname: faker.internet.userName(),avatar:faker.internet.avatar() },
        { nickname: faker.internet.userName(),avatar:faker.internet.avatar() },
        { nickname: faker.internet.userName(),avatar:faker.internet.avatar() },
        { nickname: faker.internet.userName(),avatar:faker.internet.avatar() },
        { nickname: faker.internet.userName(),avatar:faker.internet.avatar() },
        { nickname: faker.internet.userName(),avatar:faker.internet.avatar() },
        { nickname: faker.internet.userName(),avatar:faker.internet.avatar() },
        { nickname: faker.internet.userName(),avatar:faker.internet.avatar() },
        { nickname: faker.internet.userName(),avatar:faker.internet.avatar() },
        { nickname: faker.internet.userName(),avatar:faker.internet.avatar() },
        { nickname: faker.internet.userName(),avatar:faker.internet.avatar() },
        { nickname: faker.internet.userName(),avatar:faker.internet.avatar() },
        { nickname: faker.internet.userName(),avatar:faker.internet.avatar() },
        { nickname: faker.internet.userName(),avatar:faker.internet.avatar() },
        { nickname: faker.internet.userName(),avatar:faker.internet.avatar() },
        { nickname: faker.internet.userName(),avatar:faker.internet.avatar() },
        { nickname: faker.internet.userName(),avatar:faker.internet.avatar() }
    ]);
};
