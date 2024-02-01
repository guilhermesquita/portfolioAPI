import { Knex, knex } from "knex";
import dotenv from 'dotenv';

dotenv.config();

export abstract class BaseDatabase {
    protected static connection: Knex = knex({
        client: "postgresql",
        connection: {
            host: 'localhost',
            port: process.env.DB_PORT as unknown as number || 5432,
            user: process.env.DB_USER || 'postgres',
            password: process.env.DB_PASSWORD || 'postgres' || undefined,
            database: process.env.DATABASE || 'portfolio'
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: './src/database/migrations',
        },
        useNullAsDefault: true,
        pool: { 
            min: 0,
            max: 1,
        }
    })
}