var canvas = document.getElementById('algorithm_id')
var ctx = canvas.getContext('2d')
var color = '#000000'
var side = 20
var rows = canvas.clientHeight/side, colums = canvas.clientWidth/side
var time = 300
var array = []

function SetRandom(min, max, length){
    array = new Array(length)
    for(var index = 0; index < array.length; index++)
        array[index]= GetRandomIn(min, max)
}

function GetRandomIn(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function BottomUpMerge(array, leftPosition, chunkSize, workArray) {
    var index
    var rightPosition = leftPosition + chunkSize
    var endPosition = Math.min(leftPosition + chunkSize * 2 - 1,
                             array.length - 1)
    var leftIndex = leftPosition
    var rightIndex = rightPosition

    var timeCounter = 1

    for (index = 0; index <= endPosition - leftPosition; index++) {
        if (leftIndex < rightPosition && (rightIndex > endPosition ||
            array[leftIndex] <= array[rightIndex])) {
            workArray[index] = array[leftIndex++];
        }else workArray[index] = array[rightIndex++]
        StopAndDraw(workArray.slice(), timeCounter++)
    }

    for (index = leftPosition; index <= endPosition; index++) {
        array[index] = workArray[index - leftPosition]
    }
}

function StopAndDraw(inputArray, counter){
    setTimeout(function(){Draw(inputArray)}, time*counter)
}

function Sort(array) {
    var workArray = new Array(array.length)
    var chunkSize = 1
    while (chunkSize < array.length) {
        var index = 0
        while (index < array.length - chunkSize) {
            BottomUpMerge(array, index, chunkSize, workArray)
            index += chunkSize * 2
        }
        chunkSize *= 2
    }
    return array
}

function Draw(inputArray){
    ctx.fillStyle = color
    ctx.clearRect(0,0,side*colums,side*rows)
    var counter = 1
    var valueSide
    var diff;
    for(var index = 0; index < inputArray.length; index++){
        valueSide = inputArray[index]
        diff=(rows-valueSide)*side
        ctx.fillRect(side*counter-side, diff, side, valueSide*side)
        counter++
    }
}

SetRandom(1,rows,colums)
Draw(array)

document.addEventListener('keydown', function(event) {
    if(event.which == 13 || event.which == 32)
        Sort(array)
})
