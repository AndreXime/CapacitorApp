import { createDatabase, insertIngrediente, getIngrediente } from "./database.js";

document.addEventListener('DOMContentLoaded', async () => {
    await createDatabase();
    const ingre = document.getElementById('ingre-root');
    const ingreDiv = document.createElement("div");
    ingreDiv.classList.add("col-12");

    try{
        const values = await getIngrediente();
        values.forEach(value => {
            const corpo = `
                <h2>${value.nome}</h2>
                <h3>${value.ingredientes}</h3>
            `;
            ingreDiv.innerHTML += corpo;
        });
    }catch (err) {
        ingreDiv.innerHTML = "<h3>Não há nenhum ingrediente</h3>";        
    }

    ingre.append(ingreDiv);
});

document.getElementById("Form-receita").addEventListener("submit", (event) => {
    event.preventDefault();
    insertIngrediente(event);
});