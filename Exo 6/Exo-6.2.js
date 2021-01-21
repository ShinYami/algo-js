
class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length){
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }

    collides(otherRectangle){
        if((this.topLeftXPos + this.width <= otherRectangle.topLeftXPos) 
        &&
        (this.topLeftYPos + this.length <= otherRectangle.topLeftYPos)
        &&
        (this.topLeftXPos + this.width >= otherRectangle.width) 
        &&
        (this.topLeftYPos + this.length >= otherRectangle.length)
            ){
                return false;
            } else{
                return true;
            }
    }
}     
let rectangle1 = new Rectangle(5,6,4,8);
let rectangle2 = new Rectangle(12,14,5,9);
console.log(rectangle1.collides(rectangle2));