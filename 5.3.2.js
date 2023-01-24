let x = 2;
let type = typeof x
switch (type){
    case "number":
        console.log("x - число");
        break;
    case "string":
        console.log("x- строка");
        break;
    case "boolean":
        console.log("x - false");
        break;
    case "undefined":
        console.log("тип не определен");
        break;       
}


// done