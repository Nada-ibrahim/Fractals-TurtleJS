function getMid(p1, p2) {
    return [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2];
}

function triangle(points, depth) {
    pu();
    setPosition(points[0][0], points[0][1])
    pd();
    setPosition(points[1][0], points[1][1])
    setPosition(points[2][0], points[2][1])
    setPosition(points[0][0], points[0][1])

    if (depth > 0) {
        triangle([points[0], getMid(points[0], points[1]), getMid(points[0], points[2])], depth - 1)
        triangle([points[1], getMid(points[0], points[1]), getMid(points[1], points[2])], depth - 1)
        triangle([points[2], getMid(points[2], points[1]), getMid(points[0], points[2])], depth - 1)
    }
}

function drawTriangle() {
    // clear("white");
    let depth = parseInt(document.getElementById("triangleDepth").value);
    setSpeed(Math.pow(3, depth));
    setColor(255, 0, 0, 1);

    points = [[-300, -125], [0, 300], [300, -125]];

    triangle(points, depth);

}



//////////////////////////////////////////////////////////////
// function sierpinski_carpet(depth, box_size){
//     if (depth == 0){
//         setColor('black');
//         startFill('black');
//         for(let i = 0; i < 4; ++i){
//             fd(box_size);
//             lt(90);
//         }
//         endFill();
//     }
//     else{
//         for(let i = 0; i < 4; ++i){
//             // first rectangle
//             sierpinski_carpet(depth - 1, box_size / 3)
//             fd(box_size / 3)
//             // second rectangle
//             sierpinski_carpet(depth - 1, box_size / 3)
//             fd(box_size / 3)
//             // go to next corner
//             fd(box_size / 3)
//             lt(90)
//         }
//         //turtle.Screen().update()
//     }
// }

// setSpeed(1)
// pu()
// setPosition(-200,-200)
// // pd()
// // turtle.Screen().tracer(0)
// sierpinski_carpet(3, 400)

/////////////////////////////////////////////////////////////////////////
// function box(box_size){
//     setColor('black');
//         startFill('black');
//         for(let i = 0; i < 4; ++i){
//             fd(box_size);
//             rt(90);
//         }
//         endFill();
// }

// function sierpinski_carpet(depth, box_size){
//     if (depth >= 0){
//         let x = getX();
//         let y = getY();
//         box(box_size);
//         setPosition(x - 2*box_size/3, y + box_size/3);
//         sierpinski_carpet(depth-1, box_size/3);
//         setPosition(x - 2*box_size/3, y - 2*box_size/3);
//         sierpinski_carpet(depth-1, box_size/3);
//         setPosition(x - 2*box_size/3, y + 4*box_size/3);
//         sierpinski_carpet(depth-1, box_size/3);

//         setPosition(x + 4*box_size/3, y + box_size/3);
//         sierpinski_carpet(depth-1, box_size/3);
//         setPosition(x + 4*box_size/3, y - 2*box_size/3);
//         sierpinski_carpet(depth-1, box_size/3);
//         setPosition(x + 4*box_size/3, y + 4*box_size/3);
//         sierpinski_carpet(depth-1, box_size/3);

//         setPosition(x + box_size/3, y - 2*box_size/3);
//         sierpinski_carpet(depth-1, box_size/3);
//         setPosition(x + box_size/3, y + 4*box_size/3);
//         sierpinski_carpet(depth-1, box_size/3);

//     }

// }

// d = 6
// setSpeed(Math.pow(4,d))
// pu()
// setPosition(-200,-200)
// // pd()
// // turtle.Screen().tracer(0)
// sierpinski_carpet(d, 400)

//////////////////////////////////////////////////////////////////

// clear("black");

// setSpeed(5);

// // Create a list of colors
// sfcolor = [ "blue","blue", "#73bdec", "white"]

// // This function creates one branch of the snowflake
// function branch(size){
//     for (let i =0; i < 3; ++i){
//         for (let i =0; i < 3; ++i){
//             fd(10.0 * size / 3);
//             bk(10.0 * size / 3);
//             lt(45);
//         }
//         rt(90);
//         bk(10.0 * size / 3);
//         rt(45);
//     }
//     lt(90)
//     fd(10.0 * size)
// }

// // Define a function to create different sized snowflakes
// function snowflake(size){
//     pu();
//     fd(10 * size);
//     rt(45)
//     pd()
//     setColor(sfcolor[Math.floor(Math.random() * sfcolor.length)])
//     // draw branch 8 times to make a snowflake
//     for (let i =0; i < 8; ++i){
//         branch(size)
//         rt(45)
//     }
// }





// for (let i =0; i < 6; ++i){
//     let max = 200;
//     let min = -200;
//     let x = Math.random() * (max - min) + min;
//     let y = Math.random() * (max - min) + min;
//     sfsize = Math.random() * (4 - 1) + 1;
//     pu();
//     setPosition(x, y);
//     pd();
//     snowflake(sfsize);
// }


//////////////////////////////////////////////////////

// WIDTH=1000
// function getPixelColor(c, lim=50){
//     let limit = lim;
//     let colormap = ['black','white'];
//     let cardinality = lim;
//     let z = 0;
//     for (let i = 0; i < limit; ++i){
//         z = math.add(math.multiply(z,z), c)
//         if (math.abs(z) > 2) {
//             cardinality = i
//             break;
//         }
//     }
//     if (cardinality == limit){
//         return colormap[0];
//     }
//     return colormap[1]
// }

// function turtleConvert(x,y){ //converts from turtle pixels to the complex plane
//     return math.complex((x/WIDTH)*4,(y/WIDTH)*4)
// }

// // self.t = turtle.Turtle()
// // self.t.ht();self.t.turtlesize(1)
// setSpeed(2000)
// for (let x = -WIDTH/2; x < WIDTH/5+1; ++x){ 
//     for (let y = -WIDTH/3; y < WIDTH/3+1; ++y){
//         setColor(getPixelColor(turtleConvert(x,y), 10));
//         setPosition(x+WIDTH/6,y);
//     }   
//     pu();
//     setPosition(x + WIDTH/6 + 1, -150);
//     pd();
// }
