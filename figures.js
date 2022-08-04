const triangle = document.querySelector('[name="triangle"]');
const result = document.querySelector(".result");
triangle.addEventListener("click", function (event) {
    let n = 5;
    let string = "";
    for (let i = 1; i <= n; i++) {
    for (let k = 0; k < i; k++) {
        string += "*";
    }
        string += "\n";
        string += "<br>";
        result.innerHTML = string;
    }
    console.log(string);
  });

const pyramid = document.querySelector('[name="pyramid"]');
const result1 = document.querySelector(".result");
pyramid.addEventListener('click', function(event){
    let n = 5;
    let string = "";
    for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        string += " ";
}
    for (let k = 0; k < 2 * i - 1; k++) {
        string += "*";
}
        string += "\n";
        string += "<br>";
        result.innerHTML = string; 
}
console.log(string);
});

const reversepyramid = document.querySelector('[name="reverse-pyramid"]');
const result2 = document.querySelector(".result");
reversepyramid.addEventListener('click', function(event){
    let n = 5;
    let string = "";
    for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
        string += " ";
}
    for (let k = 0; k < 2 * (n-i) - 1; k++) {
        string += "*";
}
        string += "\n";
        string += "<br>";
        result.innerHTML = string;
}
console.log(string);
});


function clearScreen(){
    document.getElementsByClassName(".result").innerHTML = ""
}