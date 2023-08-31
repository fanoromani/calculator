const games = [
  {
    name: "Speedrunners",
    price: 20,
    maxPlayers: 4,
    reviews: {
      bad: 10,
      medium: 20,
      good: 10,
    },
  },
  {
    name: "Rocket League",
    price: 0,
    maxPlayers: 4,
    reviews: {
      bad: 5,
      medium: 15,
      good: 25,
    },
  },
  {
    name: "God of War",
    price: 100,
    maxPlayers: 1,
    reviews: {
      bad: 25,
      medium: 5,
      good: 10,
    },
  },
  {
    name: "Guilty gear",
    price: 90,
    maxPlayers: 2,
    reviews: {
      bad: 10,
      medium: 15,
      good: 25,
    },
  },
];

function mostraJogo() {
  let nomes = [];
  let players = games.filter((element) => element.maxPlayers >= 2);
  players.forEach((element) => {
    nomes.push(element.name);
  });
  return nomes.join(", ");
}

function contaReview() {
  let reviews = 0;
  games.forEach((element) => {
    reviews +=
      element.reviews.bad + element.reviews.medium + element.reviews.good;
  });
  return reviews;
}
