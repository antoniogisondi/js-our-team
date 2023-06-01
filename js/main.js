"use strict"
// MILESTONE 0
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

// MILESTONE 1
for(let key in team){
    console.log(team[key].nome)
    console.log(team[key].role)
    console.log(team[key].image)
}

// MILESTONE 2
let inner = document.querySelector(".container")
for(let i = 0; i<team.length; i++){
    inner.innerHTML += `${team[i].nome}`
    inner.innerHTML += `${team[i].role}`
    inner.innerHTML += `${team[i].image}`
}