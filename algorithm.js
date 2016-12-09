var canvas = document.getElementById('algorithm_id')
var ctx = canvas.getContext('2d')
var color = '#000000'
var side = 20
var rows = canvas.clientHeight/side, colums = canvas.clientWidth/side
var array = []

function SetRandom(min, max, length){
    array = new Array(length)
    for(var index = 0; index < array.length; index++)
        array[index]= GetRandomIn(min, max)
}

function GetRandomIn(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function Draw(){
    ctx.fillStyle = color
    ctx.clearRect(0,0,side*colums,side*rows)
    var counter = 1
    var valueSide
    var diff;
    for(var index = 0; index < array.length; index++){
        valueSide = array[index]
        diff=(rows-valueSide)*side
        ctx.fillRect(side*counter-side, diff, side, valueSide*side)
        counter++
    }
}

function MergeSort(inputArray){
    if (inputArray.length < 2)
        return inputArray

    var middle = Math.floor(inputArray.length / 2)
    var left = inputArray.slice(0, middle)
    var right = inputArray.slice(middle)
    var params = Merge(MergeSort(left), MergeSort(right))

    params.unshift(0, inputArray.length)
    inputArray.splice.apply(inputArray, params)
    return inputArray
}

function Merge(left, right){
    var result = []
    var leftIndex = 0
    var rightIndex = 0

    while (leftIndex < left.length && rightIndex < right.length){
        if (left[leftIndex] < right[rightIndex])
            result.push(left[leftIndex++]);
        else
            result.push(right[rightIndex++]);
    }
    return result.concat(left.slice(leftIndex))
                 .concat(right.slice(rightIndex));
}

SetRandom(1,rows,colums)
//MergeSort(array)
Draw()

document.addEventListener('keydown', function(event) {
    if(event.which == 13){
        MergeSort(array)
        Draw()
    }
})
/*
mainGameCycle = setInterval(function(){
},moveTime)*/
