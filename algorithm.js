var canvas = document.getElementById('algorithm_id')
var ctx = canvas.getContext('2d')
var color = '#000000'
var side = 20
var rows = canvas.clientHeight/side, colums = canvas.clientHeight/side
var array = []

function SetRandom(min, max, length){
    array = new Array(length)
    for(var index = 0; index < array.length; index++)
        array[index]= GetRandomIn(min, max)
}

function GetRandomIn(min, max){ return Math.floor(Math.random() * (max - min + 1)) + min }

function Draw(){
    ctx.fillStyle = color
    var counter = 1
    var valueSide
    var diff;
    for(var index = 0; index < array.length; index++){
        valueSide = array[index]
        diff=(colums-valueSide)*side
        ctx.fillRect(side*counter-side, diff, side, valueSide*side)
        counter++
    }
}

function Sort(){

}

SetRandom(1,9,40)
Draw()
