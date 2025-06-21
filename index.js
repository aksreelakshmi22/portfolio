var a=document.getElementById("a")
var b=document.getElementById("b")
function call(exp){
    var ans= eval(a.value + exp + b.value)
    document.getElementById("Result").innerHTML=ans
}

// written by ak