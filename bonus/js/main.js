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

function innerImage(){
    document.querySelector(".card").innerHTML = `<img src="./img/${team[0].image}">`
    document.querySelector(".card-1").innerHTML = `<img src="./img/${team[1].image}">`
    document.querySelector(".card-2").innerHTML = `<img src="./img/${team[2].image}">`
    document.querySelector(".card-3").innerHTML = `<img src="./img/${team[3].image}">`
    document.querySelector(".card-4").innerHTML = `<img src="./img/${team[4].image}">`
    document.querySelector(".card-5").innerHTML = `<img src="./img/${team[5].image}">`
}

function innerTitle(){
    document.querySelector(".card-body").innerHTML = `<h5 class="card-text">${team[0].nome}</h5>`
    document.querySelector(".card-body").innerHTML = `<h5 class="card-text">${team[1].nome}</h5>`
    document.querySelector(".card-body").innerHTML = `<h5 class="card-text">${team[2].nome}</h5>`
    document.querySelector(".card-body").innerHTML = `<h5 class="card-text">${team[3].nome}</h5>`
    document.querySelector(".card-body").innerHTML = `<h5 class="card-text">${team[4].nome}</h5>`
    document.querySelector(".card-body").innerHTML = `<h5 class="card-text">${team[5].nome}</h5>`
}

innerImage()
innerTitle()