import { createConnection } from "mysql2/promise";

import * as env from "../config/config.service.js";

const db = await createConnection({
  host: env.host,
  port: env.db_port,
  user: env.user,
  password: env.password,
  database: env.database,
}).catch((err) => console.error(`DB error ❌❌: ${err.message}`));

if (db) console.log("Connected To DB successfully 🟢");

export default db;
