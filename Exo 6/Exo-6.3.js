class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length){
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }

    collides(otherRectangle){
       if (this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width && this.topLeftXPos + this.width > otherRectangle.topLeftXPos && this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length && this.topLeftYPos + this.length > otherRectangle.topLeftYPos)          
          {
            return true;
        } else {
            return false;
        }

    }
}

let rectangle1 = new Rectangle(20, 20, 60, 60);
console.log(rectangle1);


let rectangle2;
let i = 1;

while  (i <= 1000) {

    i = i + 1;

    rectangle2 = new Rectangle (
        Math.floor(Math.random() * 100 ) + 1,
        Math.floor(Math.random() * 100 ) + 1,
        Math.floor(Math.random() * 100 ) + 1,
        Math.floor(Math.random() * 100 ) + 1
        
    )
    console.log(rectangle2); 
    rectangle1.collides(rectangle2);
}