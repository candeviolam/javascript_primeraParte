// EXPORT E IMPORT

const tipos = {
  MAGIA: "magia",
  MAQUINA: "máquina",
  OSCURO: "oscuro",
  HABIL: "hábil",
  MUTANTE: "mutante",
};


const characters = [
  {
    id: 1, 
    nombre_heroe: "Iron Man",
    super_poder: "Inteligencia",
    hp: 2500,
    mp: 2500,
    tipo: tipos.HABIL,
  },
  {
    id: 2,
    nombre_heroe: "Thor",
    super_poder: "Dios del trueno",
    hp: 2000,
    mp: 3000,
    tipo: tipos.MAGIA,
  },
  {
    id: 3,
    nombre_heroe: "Wolverine",
    super_poder: "Garras Inmortalidad",
    hp: 3500,
    mp: 1200,
    tipo: tipos.HABIL,
  },
  {
    id: 4,
    nombre_heroe: "Dead Pool",
    super_poder: "Inmortalidad",
    hp: 4000,
    mp: 0,
    tipo: tipos.HABIL,
  },
];

export { tipos, characters };
