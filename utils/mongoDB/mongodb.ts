import { Db, MongoClient } from "mongodb";

const { MONGODB_URI, MONGODB_DB } = process.env;

type MongoConnection = {
  client: MongoClient;
  db: Db;
};

declare global {
  namespace NodeJS {
    interface Global {
      mongo: {
        conn: MongoConnection | null;
        promise: Promise<MongoConnection> | any;
      };
    }
  }
}

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

if (!MONGODB_DB) {
  throw new Error(
    "Please define the MONGODB_DB environment variable inside .env.local"
  );
}

let cached = global.mongo;

if (!cached) {
  cached = global.mongo = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = await MongoClient.connect(MONGODB_URI as string, opts)
      .then((client: { db: (arg0: string) => any }) => {
        return {
          client,
          db: client.db(MONGODB_URI as string),
        };
      })
      .catch(err => {
        console.log("This is the problem ====>>>", err);
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
