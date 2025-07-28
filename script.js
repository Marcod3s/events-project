let aquaButton = document.querySelector('#aqua')
let tealButton = document.querySelector('#teal')
let pinkButton = document.querySelector('#pink')
let purpleButton = document.querySelector('#purple')
let noColorButton = document.querySelector('#colorless')
let colorBox = document.querySelector('#color-display')
let showButton = document.querySelector('#show')

aquaButton.onclick = function(){
    colorBox.style['background-color'] = 'aqua'
    colorBox.innerText = 'aqua'
}

tealButton.onclick = function(){
    colorBox.style['background-color'] = 'teal'
    colorBox.innerText = 'teal'
}

pinkButton.onclick = function(){
    colorBox.style['background-color'] = 'pink'
    colorBox.innerText = 'pink'
}

purpleButton.onclick = function(){
    colorBox.style['background-color'] = 'purple'
    colorBox.innerText = 'purple'
}

noColorButton.onclick = function(){
    colorBox.style['background-color'] = 'white'
    colorBox.innerText = 'colorless'
}

showButton.onclick = function(){
    if (colorBox.style.display != 'none'){
        colorBox.style.display = 'none'
        showButton.innerText = 'Show'
    }
    else {
        colorBox.style.display = 'flex'
        showButton.innerText = 'Hide'
    }
}