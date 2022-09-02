const heroes = [
  {
    name: 'Slate Slabrock',
    type: 'dwarf',
    damage: 5,
    health: 100,
    gold: 0,
    maxHealth: 100
  },
  {
    name: 'Flint Ironstag',
    type: 'elf',
    damage: 10,
    health: 50,
    gold: 0,
    maxHealth: 50
  }
]

const boss = {
  name: 'Stan',
  health: 100,
  maxHealth: 100,
  damage: 5,
  level: 1,
  isDead: false
}

// NOTE Heroes attacking Boss
function heroAttack(name) {
  if (boss.health > 0) {
    boss.health -= 5
    console.log(boss.health)
  }
  else {
    console.log('Boss Leveled Up!')
    levelUpBoss()
  }
// @ts-ignore
document.getElementById('stanHP').innerText = boss.health 
} 

// NOTE Boss attacking Heroes
function bossAttack() {
  heroes.forEach(h => {
    h.health -= 5
    console.log(h.health)
  })
}

// NOTE Boss levels Up
function levelUpBoss() {
  if (boss.health == 0) {
    heroes.forEach(h => {
      h.gold += 20
      console.log('this is my gold', h.gold)
      h.maxHealth += 10
      console.log('this is hero max health', h.maxHealth)
    })
    boss.level++
    boss.maxHealth += 10
    boss.health = boss.maxHealth
  }
  document.getElementById('stanLvl').innerText = boss.level 
}

// NOTE Heals Heroes
function healthPotion() {
  heroes.forEach(h => {
    if (h.gold < 30) {
      console.log('Broke')
    }
    if (h.gold >= 30) {
      h.health = h.maxHealth
      h.gold -= 30
    }

    if (h.gold < 0) {
      h.gold = 0
    }
    if (h.health == h.maxHealth) {
      h.health = h.maxHealth
    }
  }
  )
}

function drawHealth() {
  heroes.forEach(heroes => {
    // @ts-ignore
    document.getElementById(`${heroes.name}`).innerHTML =
      `<p class="fs-1">HP: ${heroes.health}</p>`
  })
}

"Slate Sabrok-health"
"Flint Ironstag-health"

// function drawHealth() {
//   heroes.forEach(h => {
//     document.getElementById('hero-health').innerHTML =
//       `<div class="fs-1">Red Team's Score: ${heroes.health}</div>`
//   }}
//   });
// }


// drawHealth()

// FIXME Remember to uncomment this for the boss to actually hurt heroes
// setInterval(bossAttack, 2000)