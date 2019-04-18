class Point {
    constructor(_x, _y) {
        this.x = 0;
        this.y = 0;
    }
    setPos(_x, _y) {
        this.x = _x;
        this.y = _y;
    }
    setX(_x) {
        this.x = _x;
    }
    setY(_y) {
        this.y = _y;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
}
const p = new Point(10, 10);
console.log(this.getX(), this.getY());
