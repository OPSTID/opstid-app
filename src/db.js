/**
 * DB Initializer
 */
import Dexie from "dexie"

const db = new Dexie("OPSTID_DB")
const version = 1

// create tables
db.version(version).stores({
    "myProfiles":"id,profileData",
    "follows":"id,profileData",
    "blockedProfiles":"id,name"
})

export default db