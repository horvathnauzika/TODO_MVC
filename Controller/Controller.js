import { TODOLIST2 } from "../adatok.js";
import Megjelenit from "../View/Megjelenit.js";
import Adatkezelo from "../Modell/Adatkezelo.js";

class Controller{
    
    constructor(){
        const szuloELEM = $('.tarolo');
        const adatkezelo = new Adatkezelo(TODOLIST2);

        new Megjelenit(TODOLIST2, szuloELEM);

        $(window).on("torles", (event) =>{
            //console.log(event.detail);
            adatkezelo.torles(event.detail.index);
            //console.log(TODOLIST2);
            szuloELEM.empty();
            new Megjelenit(TODOLIST2, szuloELEM)
        })

        $(window).on("kesz", (event)=>{
            adatkezelo.kesz(event.detail.index)
            
        })
    
    }
}
export default Controller;