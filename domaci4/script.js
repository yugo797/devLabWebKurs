"use strict";

const ucenici = [
  {
    ime: "Ana",
    prezime: "Kovačević",
    godina_rodjenja: 2005,
    pol: "ženski",
    ocjene: {
      matematika: 4,
      maternji_jezik: 5,
      engleski_jezik: 3,
      biologija: 4,
      likovna_kultura: 5,
    },
  },
  {
    ime: "Marko",
    prezime: "Petrović",
    godina_rodjenja: 2006,
    pol: "muški",
    ocjene: {
      matematika: 5,
      maternji_jezik: 4,
      engleski_jezik: 5,
      biologija: 3,
      likovna_kultura: 4,
    },
  },
  {
    ime: "Elena",
    prezime: "Jovanović",
    godina_rodjenja: 2005,
    pol: "ženski",
    ocjene: {
      matematika: 3,
      maternji_jezik: 5,
      engleski_jezik: 4,
      biologija: 4,
      likovna_kultura: 4,
    },
  },
  {
    ime: "Ivan",
    prezime: "Popović",
    godina_rodjenja: 2007,
    pol: "muški",
    ocjene: {
      matematika: 5,
      maternji_jezik: 4,
      engleski_jezik: 5,
      biologija: 5,
      likovna_kultura: 3,
    },
  },
  {
    ime: "Jelena",
    prezime: "Nikolić",
    godina_rodjenja: 2006,
    pol: "ženski",
    ocjene: {
      matematika: 4,
      maternji_jezik: 3,
      engleski_jezik: 5,
      biologija: 4,
      likovna_kultura: 4,
    },
  },
  {
    ime: "Stefan",
    prezime: "Stojanović",
    godina_rodjenja: 2007,
    pol: "muški",
    ocjene: {
      matematika: 5,
      maternji_jezik: 4,
      engleski_jezik: 5,
      biologija: 3,
      likovna_kultura: 5,
    },
  },
  {
    ime: "Milica",
    prezime: "Simić",
    godina_rodjenja: 2005,
    pol: "ženski",
    ocjene: {
      matematika: 4,
      maternji_jezik: 5,
      engleski_jezik: 4,
      biologija: 3,
      likovna_kultura: 4,
    },
  },
  {
    ime: "Nikola",
    prezime: "Pavlović",
    godina_rodjenja: 2006,
    pol: "muški",
    ocjene: {
      matematika: 3,
      maternji_jezik: 4,
      engleski_jezik: 5,
      biologija: 5,
      likovna_kultura: 4,
    },
  },
  {
    ime: "Sara",
    prezime: "Ilić",
    godina_rodjenja: 2007,
    pol: "ženski",
    ocjene: {
      matematika: 5,
      maternji_jezik: 3,
      engleski_jezik: 5,
      biologija: 4,
      likovna_kultura: 3,
    },
  },
  {
    ime: "Luka",
    prezime: "Đorđević",
    godina_rodjenja: 2005,
    pol: "muški",
    ocjene: {
      matematika: 4,
      maternji_jezik: 4,
      engleski_jezik: 4,
      biologija: 5,
      likovna_kultura: 5,
    },
  },
];

/*
  for (let i = 0; i < ucenici.length; i++) {
    let sumaOcjena = 0;
    let brPredmeta = 0;
    for (let ocjena in ucenici[i].ocjene) {
      sumaOcjena += ucenici[i].ocjene[`${ocjena}`];
      brPredmeta++;
    }
    let ukupanProsjek = sumaOcjena / brPredmeta;
    ucenici[i].prosjek = ukupanProsjek;
  }
*/
const izracunajProsjekFunc = (ucenik) => {
  let sumaOcjena = 0;
  let brPredmeta = 0;
  for (let ocjena in ucenik.ocjene) {
    sumaOcjena += ucenik.ocjene[`${ocjena}`];
    brPredmeta++;
  }
  let ukupanProsjek = sumaOcjena / brPredmeta;
  ucenik.prosjek = ukupanProsjek;
  return ukupanProsjek;
};

for (let i = 0; i < ucenici.length; i++) {
  ucenici[i]["izRacunajProsjek"] = izracunajProsjekFunc(ucenici[i]);
}
console.log(ucenici);
/*
function izracunajProsjek(obj) {
  console.log("OVO JE OB JEKAT" + obj);
  let ocjeneSuma = 0;
  let brPredm = 0;

  for (let j = 0; j < obj.ocjene.length; j++) {
    ocjeneSuma += obj.ocjene[j];
    brPredm++;
    //console.log(ocjeneSuma);
  }

  let prosjekU = ocjeneSuma / brPredm;
  //console.log(prosjekU);
  obj.prosjek = prosjekU;
  return prosjekU;
}
for (let i = 0; i < ucenici.length; i++) {
  izracunajProsjek(ucenici[i]);
  /*ucenici[i].izracunajProsjek = () => {
    let ocjeneSuma = 0;
    let brPredm = 0;

    for (let j = 0; j < this.ocjene.length; j++) {
      ocjeneSuma += this.ocjene[j];
      brPredm++;
    }

    let prosjekU = ocjeneSuma / brPredm;
    this.prosjek = prosjekU;
    return prosjekU;
  };
}*/
//console.log(ucenici);

//for (let ucenik in ucenici) console.log(ucenik);
/*
ucenici[i]["uspjeh"] = function () {};

*/
/*
Svakom objektu dodijeliti atribut izracunajProsjek, 
koji predstavlja funkciju koja računa prosječnu ocjenu učenika, 
dodjeljuje tu vrijednost novom atributu prosjek i vraća je. 
Metod napraviti tako da radi nezavisno od broja i naziva predmeta. 
Pomoć.
Svakom objektu dodijeliti atribut uspjeh koji u zavisnosti od prosjeka i pola štampa string u formatu: ‘{ime} {prezime} je {uspjeh}.’
Npr: ‘Ana Kovačević je odlična.’
Napisati funkciju statistikaUspjeha. Funkcija kao argument prihvata niz objekata, a kreira i vraća objekat čiji su ključevi: odličan, vrlodobar, dobar, dovoljan i nedovoljan, a vrijednosti broj učenika sa tim uspjehom.
Napisati funkciju sortirajUčenike koja kao argument prihvata niz objekata, a vraća niz sortiran po prezimenima.


*/
