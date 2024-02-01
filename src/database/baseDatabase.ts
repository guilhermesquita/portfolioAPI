import { knex } from "knex"
import dotenv from 'dotenv'

dotenv.config()

export abstract class BaseDatabase {
    protected static connection = knex({
        client: "postgresql",
        connection: {
            host: 'db' || 'localhost',
            port: process.env.DB_PORT as unknown as number || 5432,
            user: process.env.DB_USER || 'postgres',
            password: process.env.DB_PASSWORD || 'postgre' || undefined,
            database: process.env.DATABASE
          },
        useNullAsDefault: true,
        pool: { 
            min: 0,
            max: 1,
            afterCreate: (conn: any, cb: any) => {
                conn.run("PRAGMA foreign_keys = ON", cb)
            }
        }
    })
}