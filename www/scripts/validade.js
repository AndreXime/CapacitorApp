import { getIngrediente } from "./database";

document.addEventListener("DOMContentLoaded", async () => {
   try{
      date = new Date;
      values = getIngrediente();
      values.forEach(value => {
         
      });
   }catch(err){
      console.log(err);
   }
});