let heroName = "Valkios"
let heroXP = 10002
let heroRank

for (let i = 0; i <= 1; i++) {

  if (heroXP <= 1000) {
    heroRank = "Ferro"

  } else if (heroXP >= 1001 && heroXP <= 2000) {
    heroRank = "Bronze"

  } else if (heroXP >= 2001 && heroXP <= 5000) {
    heroRank = "Prata"

  } else if (heroXP >= 5001 && heroXP <= 7000) {
    heroRank = "Ouro"

  } else if (heroXP >= 7001 && heroXP <= 8000) {
    heroRank = "Platina"

  } else if (heroXP >= 8001 && heroXP <= 9000) {
    heroRank = "Ascendente"

  } else if (heroXP >= 9001 && heroXP <= 10000) {
    heroRank = "Imortal"

  } else {
    heroRank = "Radiante" 
  }
}

console.log("O Herói de nome " + heroName + " está no nível de " + heroRank)