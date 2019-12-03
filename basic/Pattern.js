class Pattern{
    constructor(params){
        this.name = params.name;
        this.stats = params.stats;
    }
}

//Warhammer
let wfrp_c = [
    new Pattern({name: "Akolita", stats:{"WW":5, "US":5, "ODP":5, "INT":10,"SW":10,"OGD":10,"ZYW":2}, pass:[1]}),
    new Pattern({name: "Banita", stats:{"WW":10, "US" :10, "ZR":10, "INT": 5, "A": 1, "ZYW": 2}, pass:[1,2,3,4]}),
    new Pattern({name: "Berserker z Norski", stats:{"WW": 15, "K" : 10, "ODP": 10, "SW": 10,  "ZYW": 2},}),
    new Pattern({name: "Chłop", stats:{"WW": 5, "US": 5, "K": 5, "ODP": 10, "ZR": 5,  "SW": 5,  "ZYW": 2}}),
    new Pattern({name: "Ciura Obozowa", stats:{"ODP": 5, "ZR": 10, "INT": 5, "SW": 5, "OGD": 10, "ZYW": 2}}),
    new Pattern({name: "Cyrkowiec", stats:{"WW": 5, "US": 10, "ZR": 10, "SW": 5, "OGD": 10, "ZYW": 2}}),
    new Pattern({name: "Cyrulik", stats:{"WW": 5, "ZR": 10, "INT": 10, "SW": 10, "OGD": 5, "ZYW": 2}}),
    new Pattern({name: "Fanatyk", stats:{"WW": 10, "K": 5, "ODP": 10, "SW": 10, "OGD": 5, "ZYW": 2}}),
    new Pattern({name: "Flisak", stats:{"WW": 10, "US": 5, "K": 5, "ODP": 5, "ZR": 10, "INT": 5, "ZYW": 2}}),
    new Pattern({name: "Giermek", stats:{"WW": 10, "US": 5, "K": 5, "ODP": 5, "ZR": 5, "OGD": 5, "A": 1, "ZYW": 2}}),
    new Pattern({name: "Gladiator", stats:{"WW": 15, "ODP": 10, "ZR": 10, "SW": 10, "ZYW": 2}}),
    new Pattern({name: "Goniec", stats:{"WW": 10, "K": 5, "ODP": 5, "ZR": 10, "INT": 5, "SW": 5, "ZYW": 2, "SZ": 1}}),
    new Pattern({name: "Górnik", stats:{"WW": 5, "US": 5, "K": 10, "ODP": 5, "INT": 5, "SW": 5, "ZYW": 2}}),
    new Pattern({name: "Guślarz", stats:{"ODP": 5, "ZR": 5, "INT": 5, "SW": 10, "OGD": 10, "ZYW": 2, "MAG": 1}}),
    new Pattern({name: "Hiena Cmentarna", stats:{"WW": 10, "ZR": 10, "INT": 10, "SW": 10, "OGD": 5, "ZYW": 2}}),
    new Pattern({name: "Kanciarz", stats:{"WW": 5, "US": 5, "ZR": 10, "INT": 5, "SW": 5, "OGD": 10, "ZYW": 2}}),
    new Pattern({name: "Kozak Kislevski", stats:{"WW": 10, "US": 10, "ODP": 10, "SW": 10, "ZYW": 2}}),
    new Pattern({name: "Leśnik", stats:{"WW": 10, "K": 10, "ZR": 5, "SW": 10, "ZYW": 3}}),
    new Pattern({name: "Łowca", stats:{"US": 15, "ODP": 5, "ZR": 10, "INT": 5, "ZYW": 3}}),
    new Pattern({name: "Łowca Nagród", stats:{"WW": 5, "US": 10, "K": 5, "ZR": 10, "SW": 5, "ZYW": 2}}),
    new Pattern({name: "Mieszczanin", stats:{"WW": 5, "ZR": 5, "INT": 10, "SW": 5, "OGD": 5, "ZYW": 2}}),
    new Pattern({name: "Mytnik", stats:{"WW": 10, "US": 5, "K": 5, "ODP": 10, "ZR": 5, "SW": 5, "ZYW": 2}}),
    new Pattern({name: "Najemnik", stats:{"WW": 10, "US": 10, "K": 5, "ODP": 5, "ZR": 5, "SW": 5, "A": 1, "ZYW": 2}}),
    new Pattern({name: "Ochotnik", stats:{"WW": 10, "US": 5, "K": 5, "ODP": 5, "ZR": 10, "ZYW": 2}}),
    new Pattern({name: "Ochroniarz", stats:{"WW": 10, "K": 5, "ODP": 5, "ZR": 5, "A": 1, "ZYW": 3}}),
    new Pattern({name: "Oprych", stats:{"WW": 10, "K": 5, "ODP": 5, "SW": 5, "OGD": 5, "A": 1, "ZYW": 2}}),
    new Pattern({name: "Paź", stats:{"ZR": 10, "INT": 10, "SW": 5, "OGD": 10, "ZYW": 2}}),
    new Pattern({name: "Podżegacz", stats:{"WW": 5, "US": 5, "ZR": 5, "INT": 10, "OGD": 10, "ZYW": 2}}),
    new Pattern({name: "Porywacz Zwłok", stats:{"WW": 5, "US": 5, "K": 5, "ZR": 10, "SW": 10, "ZYW": 2}}),
    new Pattern({name: "Posłaniec", stats:{"WW": 5, "US": 5, "ODP": 5, "ZR": 10, "INT": 5, "SW": 5, "ZYW": 2}}),
    new Pattern({name: "Przemytnik", stats:{"WW": 5, "US": 5, "ZR": 10, "INT": 10, "OGD": 10, "ZYW": 2}}),
    new Pattern({name: "Przepatrywacz", stats:{"WW": 5, "US": 10, "ZR": 10, "INT": 10, "SW": 5, "ZYW": 2}}),
    new Pattern({name: "Przewoznik", stats:{"WW": 5, "US": 5, "K": 10, "ODP": 5, "ZR": 5, "INT": 5, "ZYW": 2}}),
    new Pattern({name: "Rybak", stats:{"US": 5, "K": 10, "ODP": 5, "ZR": 10, "INT": 5, "ZYW": 2}}),
    new Pattern({name: "Rzecznik Rodu", stats:{"WW": 5, "US": 5, "ZR": 5, "INT": 10, "SW": 5, "OGD": 10, "ZYW": 2}}),
    new Pattern({name: "Rzemieślnik", stats:{"K": 5, "ODP": 10, "ZR": 10, "INT": 5, "SW": 10, "ZYW": 2}}),
    new Pattern({name: "Rzezimieszek", stats:{"WW": 10, "K": 10, "ZR": 10, "SW": 10, "A": 1, "ZYW": 2}}),
    new Pattern({name: "Skryba", stats:{"ZR": 10, "INT": 10, "SW": 10, "OGD": 5, "ZYW": 2}}),
    new Pattern({name: "Sługa", stats:{"WW": 5, "K": 5, "ZR": 10, "INT": 5, "SW": 10, "OGD": 5, "ZYW": 2}}),
    new Pattern({name: "Strażnik", stats:{"WW": 10, "US": 5, "K": 5, "ZR": 5, "INT": 10, "OGD": 5, "ZYW": 2}}),
    new Pattern({name: "Strażnik Dróg", stats:{"WW": 10, "US": 10, "K": 5, "ZR": 10, "INT": 5, "SW": 5, "ZYW": 2}}),
    new Pattern({name: "Strażnik Pól", stats:{"WW": 5, "US": 10, "ODP": 5, "ZR": 10, "SW": 10, "ZYW": 2}}),
    new Pattern({name: "Strażnik Więzienny", stats:{"WW": 10, "K": 10, "ODP": 10, "SW": 5, "ZYW": 3}}),
    new Pattern({name: "Szczurołap", stats:{"WW": 5, "US": 10, "ODP": 5, "ZR": 10, "SW": 10, "ZYW": 2}}),
    new Pattern({name: "Szermierz Estalijski", stats:{"WW": 15, "K": 5, "ODP": 5, "ZR": 10, "INT": 5, "A": 1, "ZYW": 2}}),
    new Pattern({name: "Szlachcic", stats:{"WW": 10, "US": 5, "ZR": 5, "INT": 5, "SW": 5, "OGD": 10, "ZYW": 2}}),
    new Pattern({name: "Smieciarz", stats:{"WW": 5, "K": 5, "ODP": 10, "ZR": 5, "SW": 5, "OGD": 5, "ZYW": 2}}),
    new Pattern({name: "Tarczownik", stats:{"WW": 10, "US": 5, "K": 5, "ODP": 5, "ZR": 10, "SW": 5, "A": 1, "ZYW": 2}}),
    new Pattern({name: "Uczeń Czarodzieja", stats:{"ZR": 5, "INT": 10, "SW": 15, "OGD": 5, "ZYW": 2, "MAG": 1}}),
    new Pattern({name: "Węglarz", stats:{"WW": 5, "K": 5, "ODP": 5, "ZR": 5, "INT": 5, "SW": 5, "OGD": 5, "ZYW": 2}}),
    new Pattern({name: "Włóczykij", stats:{"WW": 5, "US": 10, "ZR": 10, "INT": 5, "OGD": 5, "ZYW": 2}}),
    new Pattern({name: "Wojownik Klanowy", stats:{"WW": 5, "US": 5, "ZR": 10, "INT": 10, "SW": 5, "ZYW": 2}}),
    new Pattern({name: "Woźnica", stats:{"WW": 5, "US": 10, "ZR": 10, "SW": 5, "OGD": 5, "ZYW": 2}}),
    new Pattern({name: "Zabójca Trolli", stats:{"WW": 10, "K": 5, "ODP": 5, "ZR": 5, "SW": 10, "A": 1, "ZYW": 3}}),
    new Pattern({name: "Zarządca", stats:{"WW": 5, "US": 5, "K": 5, "INT": 10, "SW": 5, "OGD": 10, "ZYW": 2}}),
    new Pattern({name: "Złodziej", stats:{"WW": 5, "US": 5, "ZR": 15, "INT": 5, "OGD": 10, "ZYW": 2}}),
    new Pattern({name: "Żak", stats:{"ZR": 10, "INT": 10, "SW": 5, "OGD": 10, "ZYW": 2}}),
    new Pattern({name: "Żeglarz", stats:{"WW": 10, "US": 5, "K": 10, "ZR": 10, "A": 1, "ZYW": 2}}),
    new Pattern({name: "Żołnierz", stats:{"WW": 10, "US": 10, "ZR": 10, "SW": 5, "A": 1, "ZYW": 2}}),
    new Pattern({name: "Żołnierz Okrętowy", stats:{"WW": 10, "US": 10, "K": 10, "ZR": 5, "SW": 5, "A": 1, "ZYW": 3}}),
];

let secondPattern= {"A": 1, "ZYW": 0, "S": 0, "WT": 0, "SZ": 0, "MAG": 0,"PS": 0,"PP": 0};

module.exports = {wfrp_c,secondPattern, Pattern};