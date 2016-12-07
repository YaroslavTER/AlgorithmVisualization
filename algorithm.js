var canvas = document.getElementById('algorithm_id')
var ctx = canvas.getContext('2d')
var color = '#000000'
var rows = 10, colums = 20
var side = 20
var array = [1,2,3,4,5,6,7,8,9]

function Draw(){
    ctx.fillStyle = color
    var counter = 1
    for(var index = 0; index < array.length; index++){
        ctx.fillRect(side*counter, 0, side, array[index]*side)
        counter++
    }
}

function Sort(){

}

Draw()
