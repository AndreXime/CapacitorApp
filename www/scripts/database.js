import { CapacitorSQLite, SQLiteConnection } from '@capacitor-community/sqlite';

const sqlite = new SQLiteConnection(CapacitorSQLite);
let db;

async function createDatabase(){
    try {
        db = await sqlite.createConnection("mydatabase.db", false, "no-encryption", 1);
        await db.open();

        await db.execute(`
            CREATE TABLE IF NOT EXISTS user (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL
            );
        `);

        await db.execute(`
            CREATE TABLE IF NOT EXISTS receita (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                ingredientes TEXT NOT NULL,
                utensilios TEXT NOT NULL,
                modo TEXT NOT NULL
            );
        `);

        await db.execute(`
            CREATE TABLE IF NOT EXISTS ingrediente (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                qtd INTEGER NOT NULL,
                validade DATE NOT NULL
            );
        `);

    } catch (error) {
        console.error('Database error:', error);
    }
};

// Assim que o modulo é carregado a função é chamada
(async () => {
    await createDatabase();
})();

//RECEITAS
export async function insertReceita(){
    try {
        const result = await db.query("SELECT * FROM receitas");

        return result.values;
    } catch (error) {
        console.error('Receitas error:', error);
    }
};
export async function getReceita(){
    try {
        const result = await db.query("SELECT * FROM receitas");

        return result.values;
    } catch (error) {
        console.error('Receitas error:', error);
    }
};

//INGREDIENTES
export async function insertIngrediente(){
    try {
        const result = await db.query("SELECT * FROM receitas");

        return result.values;
    } catch (error) {
        console.error('Ingredientes error:', error);
    }
};
export async function getIngrediente(){
    try {
        const result = await db.query("SELECT * FROM ingredientes");

        return result.values;
    } catch (error) {
        console.error('Ingredientes error:', error);
    }
};

