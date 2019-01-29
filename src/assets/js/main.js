const correct = /^[0-9()+\-*/.]+$/;
var calc = document.getElementById("inpu")

window.onload = function(){
    calc.focus();
}

calc.addEventListener('keydown', function(e){
    //var keytype = String.fromCharCode(e.keyCode);    
    // var str = document.getElementById("inpu").value;
    // console.log("aa "+str);
    // var sp = letterCount(str);
    // console.log(sp);
    // if(sp[0] != 'undefined'){
        
    //     console.log(sp[0].split(',')[1]);
    // }
    //test
    if (!correct.test(e.key)){
       e.preventDefault();
    }    
})
function evaluate(){
    var x = calc.value;    
    if (x != ""){
        var y = eval(x);  
        calc.value = y;
    }
}
var calculate = document.getElementById("calculate")
calculate.addEventListener('click' ,function(e){
    e.preventDefault();
    evaluate();
})



var number = document.querySelectorAll(".digits");
number.forEach(function(numbs){
    numbs.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        
        if(e.clientX != 0 && e.clientY != 0) {
            var numelem = e.target.innerHTML;
            var elem = document.getElementById("inpu");
            elem.value += numelem;
        }
    })        
})

var ac = document.getElementById('acBtn');
ac.addEventListener('click', function(e){
    calc.value = "";
})

function deleteString () {
    var strng = calc.value;
    calc.value = strng.substring(0,strng.length-1)
}
var back = document.getElementById('backBtn');
back.addEventListener('click', function(e){
    e.preventDefault();
    deleteString()
})

document.onkeydown = function (event) {
    event = event || window.event;
    if (event.keyCode === 8) {
        deleteString()
    }
    if (event.keyCode === 27) {
        calc.value = "";
    }
    if (event.keyCode === 13) {
        evaluate();
    }
};



// function check(){
//     var x = document.getElementById("inpu").value; 
//     // if (!correct.test(x)){
//     //     document.getElementById("alert").innerHTML = "wrong entry";
//     // }
//     // else{
//     //     document.getElementById("alert").innerHTML = ""; 
//     // }    
// }