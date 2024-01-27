abstract class Shape {
    abstract calcArea(): number;
}

class Rectangle extends Shape {
    constructor(public width: number, public height: number) {
        super();
    }
    public calcArea(): number {
        return this.width * this.height
    }
}

class Square extends Shape {
    constructor(public side: number) {
       super()
    }
    public calcArea(): number {
        return this.side * this.side
    }
}

function area(shape: Shape) {
    return shape.calcArea()
} 

let rectangle = new Rectangle(10, 25);
let square    = new Square(10)

let rectangleArea = area(rectangle)
let squareArea    = area(square)

console.log('rectangleArea --->', rectangleArea)
console.log('squareArea --->',    squareArea)

