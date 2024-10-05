import { CapacitorSQLite } from 'capacitor-sqlite';
const createDatabase = async () => {
    try {
        const result = await CapacitorSQLite.createConnection({
            database: 'mydatabase.db',
            version: 1,
            encrypted: false,
            mode: 'no-encryption',
            multiInstance: false,
            location: 'default',
        });
        await result.open();

        // Criação de tabela
        await result.execute(`
            CREATE TABLE IF NOT EXISTS user (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL
            );
        `);

        await result.execute(`
            CREATE TABLE IF NOT EXISTS receita (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                ingredientes TEXT NOT NULL,
                utensilios TEXT NOT NULL,
                modo TEXT NOT NULL
            );
        `);

        await result.execute(`
            CREATE TABLE IF NOT EXISTS ingrediente (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                qtd INTEGER NOT NULL,
                validade DATE NOT NULL
            );
        `);

        console.log('Database and table created');
    } catch (error) {
        console.error('Error creating database:', error);
    }
};

const insertUser = async (name) => {
    try {
        const result = await CapacitorSQLite.runSQL({
            database: 'mydatabase.db',
            statement: 'INSERT INTO users (name) VALUES (?)',
            values: [name],
        });
        console.log('User inserted:', result);
    } catch (error) {
        console.error('Error inserting user:', error);
    }
};

const getUsers = async () => {
    try {
        const result = await CapacitorSQLite.runSQL({
            database: 'mydatabase.db',
            statement: 'SELECT * FROM users',
            values: [],
        });
        console.log('Users:', result.values);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};

// Exportar as funções para uso em outros arquivos
export { createDatabase, insertUser, getUsers };
