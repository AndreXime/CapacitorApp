import { insertIngrediente, getIngrediente } from "./database.js";

document.addEventListener('DOMContentLoaded', async () => {
   const root = document.getElementById('root');
   try{
      const values = await getIngrediente();
      values.forEach(value => {
        const addRoot = document.createElement("div");
        addRoot.classList.add("col-12");
        
        const corpo = `
            <h2>${value.nome}</h2>
            <h3>${value.ingredientes}</h3>
            <h3>${value.qtd}</h3>
        `;
        
        addRoot.innerHTML = corpo;        
        root.append(addRoot);
      });

   }catch(err){
      const addRoot = document.createElement("div");
      addRoot.classList.add("col-12");
      addRoot.innerHTML = "<h3>Não há nenhum ingrediente</h3>";        
      root.append(addRoot);
   }
});

document.getElementById("Form-receita").addEventListener("submit", (event) => {
    event.preventDefault();
    insertIngrediente(event);
});