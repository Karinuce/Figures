const triangle = document.querySelector('[name="triangle"]');
triangle.addEventListener('click', function(event){
let n = 5;
let string = "";
    for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
        string += " ";
    }
    for (let k = 0; k < i; k++) {
        string += "*";
    }
    string += "\n";
    }
});

const pyramid = document.querySelector('[name="pyramid"]');
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
}
console.log(string);
});

const reversepyramid = document.querySelector('[name="reverse-pyramid"]');
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
}
console.log(string);
});