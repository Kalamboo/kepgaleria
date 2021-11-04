$(function(){
    //a kártyák adatait beletesszük egy tömbe
    const kepAdat=[
        {
            cim:"1.kép címe",
            eleresiUt:"kepek/kep1.jpg",
            leiras:"1.kép részletes leírása"
        },
        {
            cim:"2.kép címe",
            eleresiUt:"kepek/kep2.jpg",
            leiras:"2.kép részletes leírása"
        },
        {
            cim:"3.kép címe",
            eleresiUt:"kepek/kep3.jpg",
            leiras:"3.kép részletes leírása"
        }
    ];
    let aktIndex = 0;
    //van egy sablonelemünk,
    //A sablon elemet klónozzuk 
    //és hozzá csatoljuk a szülő elemhez
    const szuloElem = $("#galeria");
    let sablonElem = $(".kartya");
    /*
    for(let i=0; i<kepAdat.length; i++){
        ujElem=sablonElem.clone().appendTo(szuloElem);
        const ujKartya=new Kartya(ujElem, kepAdat[i]);
    }
    */
    kepAdat.forEach(function(elem, index){
        let ujElem=sablonElem.clone().appendTo(szuloElem);
        const ujKartya=new Kartya(ujElem, elem, index);
    });
    

    const headElem = $("#fokep");
    let ujElem=sablonElem.clone().appendTo(headElem);
    const nagyKartya=new Kartya(ujElem, kepAdat[aktIndex], aktIndex);

    sablonElem.remove();

    $(window).on("kartyaraKattint", (event)=>{
        //console.log(event.detail);
        /*
        $("#fokep img").attr("src", event.detail.eleresiUt);
        $("#fokep h3").html(event.detail.cim);
        $("#fokep p").html(event.detail.leiras);
        */
        nagyKartya.setAdatok(event.detail);
        aktIndex=event.detail.index;
        console.log(aktIndex);
    })

    $("#bal").on("click", function () {
        aktIndex--;
        if(aktIndex<0){
            aktIndex=kepAdat.length-1;
        }
        nagyKartya.setAdatok(kepAdat[aktIndex]);
    });
    $("#jobb").on("click", function () {
        aktIndex++;
        if(aktIndex>kepAdat.length-1){
            aktIndex=0;
        }
        nagyKartya.setAdatok(kepAdat[aktIndex]);
    });
});