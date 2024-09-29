class MegjelenitSor {
    #adat = {};
    #adatkezelo
    sorElem;
    keszElem;
    torolElem;
 
    constructor(adat, szuloElem) {
        this.#adat = adat;
        this.tablaElem = szuloElem;
        this.#sor();
        this.#torolesemeny();
        this.#keszesemeny();
    }

    #sor() {
        let txt = "";
        if(this.#adat["kesz"]){
            txt+=`<tr class="zold">`;
        }else{
            txt +="<tr>";
        }
        for (const key in this.#adat){
            if(key !== "kesz"){
                txt += `<td>${this.#adat[key]}</td>`;
                
            }
        }
        // console.log(this.#adat)
        
        txt += `<td><span class="kesz">✔️</span> <span class="torol">🗑</span></td>`;
        txt += "</tr>";

        this.tablaElem.append(txt);

        /** eseménykezelők a kész és a törlés gombokhoz */
        this.sorElem = this.tablaElem.children("tr:last-child");
        this.keszElem = this.sorElem.children("td").children(".kesz");
        this.torolElem = this.sorElem.children("td").children(".torol");
    }

    #torolesemeny(){
        this.torolElem.on("click", () => {
            const melyikSorTorol = this.tablaElem.children("tr").index(this.sorElem);
            const myEvent = new CustomEvent("torles", {detail:{index: melyikSorTorol}});
            window.dispatchEvent(myEvent);
        });
    }

    #keszesemeny(){
        this.keszElem.on("click", () => {
            const melyikSorKesz = this.tablaElem.children("tr").index(this.sorElem);
            const myEvent = new CustomEvent("kesz", {detail:{index: melyikSorKesz}});
            window.dispatchEvent(myEvent);
            
            this.sorElem.addClass('zold');
            console.log(this.sorElem.addClass('zold'));
        })
    }

}
export default MegjelenitSor;