import { Knex } from "knex";
import { faker } from '@faker-js/faker';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("posts").del();

    // Inserts seed entries
        await knex("posts").insert([
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        {title: faker.commerce.product() ,info:faker.lorem.paragraph(1),picture:faker.image.avatar() },
        ])
   
    
    
}