import dotenv from 'dotenv'
dotenv.config()

const conf = {
    JWT_SECRET: String(process.env.JWT_SECRET),
    SALT: Number(process.env.SALT_ROUNDS),
    DB_URL: String(process.env.DB_URL),
    PORT: Number(process.env.PORT),
}

export default conf
