declare global {
    namespace NodeJS {
        interface Global {
            _mongo: Promise<MongoClient>;
        }
    }
}
