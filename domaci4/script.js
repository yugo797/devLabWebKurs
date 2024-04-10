/*
Dat je niz objekata koji predstavljaju učenike.

[
  {
    ime: “Ana”,
    prezime: “Kovačević”,
    godina_rodjenja: 2005,
    pol: “ženski”,
    ocjene: {
      matematika: 4,
      maternji_jezik: 5,
      engleski_jezik: 3,
      biologija: 4,
      likovna_kultura: 5
    }
  },
  {
    ime: “Marko”,
    prezime: “Petrović”,
    godina_rodjenja: 2006,
    pol: “muški”,
    ocjene: {
      matematika: 5,
      maternji_jezik: 4,
      engleski_jezik: 5,
      biologija: 3,
      likovna_kultura: 4
    }
  },
  {
    ime: “Elena”,
    prezime: “Jovanović”,
    godina_rodjenja: 2005,
    pol: “ženski”,
    ocjene: {
      matematika: 3,
      maternji_jezik: 5,
      engleski_jezik: 4,
      biologija: 4,
      likovna_kultura: 4
    }
  },
  {
    ime: “Ivan”,
    prezime: “Popović”,
    godina_rodjenja: 2007,
    pol: “muški”,
    ocjene: {
      matematika: 5,
      maternji_jezik: 4,
      engleski_jezik: 5,
      biologija: 5,
      likovna_kultura: 3
    }
  },
  {
    ime: “Jelena”,
    prezime: “Nikolić”,
    godina_rodjenja: 2006,
    pol: “ženski”,
    ocjene: {
      matematika: 4,
      maternji_jezik: 3,
      engleski_jezik: 5,
      biologija: 4,
      likovna_kultura: 4
    }
  },
  {
    ime: “Stefan”,
    prezime: “Stojanović”,
    godina_rodjenja: 2007,
    pol: “muški”,
    ocjene: {
      matematika: 5,
      maternji_jezik: 4,
      engleski_jezik: 5,
      biologija: 3,
      likovna_kultura: 5
    }
  },
  {
    ime: “Milica”,
    prezime: “Simić”,
    godina_rodjenja: 2005,
    pol: “ženski”,
    ocjene: {
      matematika: 4,
      maternji_jezik: 5,
      engleski_jezik: 4,
      biologija: 3,
      likovna_kultura: 4
    }
  },
  {
    ime: “Nikola”,
    prezime: “Pavlović”,
    godina_rodjenja: 2006,
    pol: “muški”,
    ocjene: {
      matematika: 3,
      maternji_jezik: 4,
      engleski_jezik: 5,
      biologija: 5,
      likovna_kultura: 4
    }
  },
  {
    ime: “Sara”,
    prezime: “Ilić”,
    godina_rodjenja: 2007,
    pol: “ženski”,
    ocjene: {
      matematika: 5,
      maternji_jezik: 3,
      engleski_jezik: 5,
      biologija: 4,
      likovna_kultura: 3
    }
  },
  {
    ime: “Luka”,
    prezime: “Đorđević”,
    godina_rodjenja: 2005,
    pol: “muški”,
    ocjene: {
      matematika: 4,
      maternji_jezik: 4,
      engleski_jezik: 4,
      biologija: 5,
      likovna_kultura: 5
    }
  }
]




Svakom objektu dodijeliti atribut izracunajProsjek, koji predstavlja funkciju koja računa prosječnu ocjenu učenika, dodjeljuje tu vrijednost novom atributu prosjek i vraća je. Metod napraviti tako da radi nezavisno od broja i naziva predmeta. Pomoć.
Svakom objektu dodijeliti atribut uspjeh koji u zavisnosti od prosjeka i pola štampa string u formatu: ‘{ime} {prezime} je {uspjeh}.’
Npr: ‘Ana Kovačević je odlična.’
Napisati funkciju statistikaUspjeha. Funkcija kao argument prihvata niz objekata, a kreira i vraća objekat čiji su ključevi: odličan, vrlodobar, dobar, dovoljan i nedovoljan, a vrijednosti broj učenika sa tim uspjehom.
Napisati funkciju sortirajUčenike koja kao argument prihvata niz objekata, a vraća niz sortiran po prezimenima.


*/
