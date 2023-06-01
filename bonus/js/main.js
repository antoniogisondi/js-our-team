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
for(key in team){
    console.log(team[key].name)
    console.log(team[key].role)
    console.log(team[key].image)
}

// MILESTONE 2, BONUS 1, BONUS 2
function innerContent(){
    document.querySelector(".card").innerHTML = `<img src="./img/${team[0].image}">
                                                <h5 class="card-title d-flex justify-content-center">${team[0].nome}</h5>
                                                <p class="card-text d-flex justify-content-center">${team[0].role}</p>`
    document.querySelector(".card-1").innerHTML = `<img src="./img/${team[1].image}">
                                                    <h5 class="card-title d-flex justify-content-center">${team[1].nome}</h5>
                                                    <p class="card-text d-flex justify-content-center">${team[1].role}</p>`
    document.querySelector(".card-2").innerHTML = `<img src="./img/${team[2].image}">
                                                    <h5 class="card-title d-flex justify-content-center">${team[2].nome}</h5>
                                                    <p class="card-text d-flex justify-content-center">${team[2].role}</p>`
    document.querySelector(".card-3").innerHTML = `<img src="./img/${team[3].image}">
                                                    <h5 class="card-title d-flex justify-content-center">${team[3].nome}</h5>
                                                    <p class="card-text d-flex justify-content-center">${team[3].role}</p>`
    document.querySelector(".card-4").innerHTML = `<img src="./img/${team[4].image}">
                                                    <h5 class="card-title d-flex justify-content-center">${team[4].nome}</h5>
                                                    <p class="card-text d-flex justify-content-center">${team[4].role}</p>`
    document.querySelector(".card-5").innerHTML = `<img src="./img/${team[5].image}">
                                                    <h5 class="card-title d-flex justify-content-center">${team[5].nome}</h5>
                                                    <p class="card-text d-flex justify-content-center">${team[5].role}</p>`
}


innerContent()
