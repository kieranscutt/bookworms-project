const { Pool } = require("pg");

const db = new Pool({
  connectionString: 'postgres://arvtrzhw:z5L1I_LTxj11xe5beSPsKTaHjW2iJ3Fw@tyke.db.elephantsql.com/arvtrzhw',
});

console.log("DB connection established.");

module.exports = db;