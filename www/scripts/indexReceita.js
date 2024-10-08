import { createDatabase, insertReceita, getReceita } from "./database.js";

document.addEventListener("DOMContentLoaded", (event) => {
    createDatabase();
    receitas = document.getElementById("receitas-root");
    const receitaDiv = document.createElement("div");
    receitaDiv.classList.add("col-12");

    try{
        values = getReceita();
        values.forEach(value => {
            const corpo = `
                <h2>${value.nome}</h2>
                <h3>${value.ingredientes}</h3>
                <h3>${value.utensilios}</h3>
                <h3>${value.modo}</h3>
            `;
            receitaDiv.innerHTML = corpo;
        });
    }catch (err) {
        receitaDiv.innerHTML = "<h3>Não há nenhuma receita registrada</h3>";        
    }

    receitas.append(receitaDiv);
});

document.getElementById("Form-receita").addEventListener("submit", (event) => {
    insertReceita(event);
});