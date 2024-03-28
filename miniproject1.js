var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Students = /** @class */ (function () {
    function Students(name, age, nationality, gender) {
        if (gender === void 0) { gender = "Female"; }
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
    }
    Students.prototype.getNationality = function () {
        console.log("The student's nationality is ".concat(this.nationality));
    };
    return Students;
}());
var Undergraduates = /** @class */ (function (_super) {
    __extends(Undergraduates, _super);
    function Undergraduates(name, age, nationality, batch, gender) {
        if (gender === void 0) { gender = "Male"; }
        var _this = _super.call(this, name, age, gender, nationality) || this;
        _this.batch = batch;
        return _this;
    }
    return Undergraduates;
}(Students));
var student1 = new Students("Jaira", 25, "Venezuelan");
var underGrad = new Undergraduates("Edward", 22, "Canadian", 1);
console.log(student1);
console.log(underGrad);
underGrad.getNationality();
