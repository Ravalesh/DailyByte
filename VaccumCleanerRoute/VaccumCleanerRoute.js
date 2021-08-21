var pathCircular = (path) =>
{
    //Example: path: "RUULLDRD"
    var pathArray = path.toUpperCase().split('');
    var x = 0;
    var y = 0;

    pathArray.forEach(point => {
        if(point === "R"){
            x += 1;
        }else if(point === "L"){
            x -= 1;
        }else if(point === "U"){
            y += 1;
        }else if(point === "D"){
            y -= 1;
        }else{
            //Invalid input
        }
        console.log(`Current (x,y) = (${x},${y})`);
    });

    if(x === 0 && y === 0){
        return true;
    }else{
        return false;
    }
}

var input = `RUULLDRD`;
var isPathCircular = pathCircular(input);
if(isPathCircular){
    console.log(`The Vaccum clear has come back!`);
}else{
    console.log(`The Vaccum clear has NOT come back!`);
}
