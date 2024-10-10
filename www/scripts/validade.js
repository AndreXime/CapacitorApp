import { getIngrediente } from "./database";

document.addEventListener("DOMContentLoaded", async () => {
   const root = document.getElementById('root');
   try{
      date = new Date;
      values = await getIngrediente();
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
      console.log(err);
   }
});