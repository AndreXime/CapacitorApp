import { CapacitorSQLite, SQLiteConnection } from '@capacitor-community/sqlite';

const sqlite = new SQLiteConnection(CapacitorSQLite);
let db;

export async function createDatabase(){
    try {
        db = await sqlite.createConnection("mydatabase.db", false, "no-encryption", 1);
        await db.open();

        // Criação de tabela
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

        console.log('Database and table created');
    } catch (error) {
        console.error('Error creating database:', error);
    }
};

export async function insertReceita(nome){
    try {
        const result = await db.query("SELECT * FROM receitas");

        return result.values;
    } catch (error) {
        console.error('Error inserting receitas:', error);
    }
};

export async function getReceita() {
    try {
        const result = await db.query("SELECT * FROM receitas");

        return result.values;
    } catch (error) {
        console.error('Error inserting receitas:', error);
    }
};

export async function insertIngrediente(nome){
    try {
        const result = await db.query("SELECT * FROM receitas");

        return result.values;
    } catch (error) {
        console.error('Error inserting receitas:', error);
    }
};

export async function getIngrediente() {
    try {
        const result = await db.query("SELECT * FROM ingredientes");

        return result.values;
    } catch (error) {
        console.error('Error inserting receitas:', error);
    }
};

