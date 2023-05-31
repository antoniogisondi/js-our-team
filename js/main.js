"use strict"
let team = [
    {
        'nome': 'Wayne Barnett',
        'role': 'Founder & CEO',
        'image': 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'nome': 'Angela Caroll',
        'role': 'Chief Editor',
        'image': 'angela-caroll-chief-editor.jpg'
    },
    {
        'nome': 'Walter Gordon',
        'role': 'Office Manager',
        'image': 'walter-gordon-office-manager.jpg'
    },
    {
        'nome': 'Angela Lopez',
        'role': 'Social Media Manager',
        'image': 'angela-lopez-social-media-manager.jpg'
    },
    {
        'nome': 'Scott Estrada',
        'role': 'Developer',
        'image': 'scott-estrada-developer.jpg'
    },
    {
        'nome': 'Barbara Ramos',
        'role': 'Graphic Designer',
        'image': 'barbara-ramos-graphic-designer.jpg'
    },
]

console.log(team)

document.querySelector(".container").innerHTML = `Il risultato è: ${team[0].nome},  ${team[0].role}, ${team[0].image}`
document.querySelector(".container-1").innerHTML = `Il risultato è: ${team[1].nome},  ${team[1].role},  ${team[1].image}`
document.querySelector(".container-2").innerHTML = `Il risultato è: ${team[2].nome},  ${team[2].role},  ${team[2].image}`
document.querySelector(".container-3").innerHTML = `Il risultato è: ${team[3].nome},  ${team[3].role},  ${team[3].image}`
document.querySelector(".container-4").innerHTML = `Il risultato è: ${team[4].nome},  ${team[4].role},  ${team[4].image}`
document.querySelector(".container-5").innerHTML = `Il risultato è: ${team[5].nome},  ${team[5].role}, ${team[5].image}`