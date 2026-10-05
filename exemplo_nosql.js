const database = 'exemplo_nosql';
const collection = 'usuario';

// Create a new database.
use(database);
    
// Create a new collection.
db.createCollection(collection);
    