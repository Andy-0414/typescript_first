var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this.x = 0;
        this.y = 0;
    }
    Point.prototype.setPos = function (_x, _y) {
        this.x = _x;
        this.y = _y;
    };
    Point.prototype.setX = function (_x) {
        this.x = _x;
    };
    Point.prototype.setY = function (_y) {
        this.y = _y;
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    return Point;
}());
var p = new Point(10, 10);
console.log(this.getX(), this.getY());
