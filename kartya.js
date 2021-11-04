class Kartya{
    constructor(elem, adat, index){
        //letrehozunk valtozókat az új elemhez
        this.elem=elem;
        //változókat az elem egyes grafikus
        this.cim=this.elem.children("h3");
        this.kepHely=this.elem.children("img");
        this.leiras=this.elem.children("p");
        this.adat=adat;
        this.adat.index = index;
        //console.log(adat);
        //konkrét elemnek értéket adunk
        this.setAdatok(this.adat);
        this.elem.on("click", ()=>{
            this.sajatEsemeny();
        });
    }
    sajatEsemeny(){
        let esemeny = new CustomEvent("kartyaraKattint", {detail:this.adat});
        window.dispatchEvent(esemeny);
    }
    setAdatok(ertekek){
        this.cim.html(ertekek.cim);
        this.kepHely.attr("src", ertekek.eleresiUt);
        this.leiras.html(ertekek.leiras);
    }
}