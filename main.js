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
var student = /** @class */ (function () {
    function student(stdName, stdage) {
        this.name = stdName, this.age = stdage;
    }
    student.prototype.canProgram = function () {
        console.log("this student can program");
    };
    return student;
}());
var s1 = new student("m tabiq", 24);
console.log(s1);
var takePhoto = /** @class */ (function () {
    function takePhoto(filName, brstNo) {
        this.filter = filName, this.brust = brstNo;
    }
    return takePhoto;
}());
//Inheritance
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram(filName, brstNo, reelTime) {
        var _this = this;
        _this = _super.call(this, filName, brstNo) || this,
            _this.reelTime = reelTime;
        return _this;
    }
    return Instagram;
}(takePhoto));
var Instapp = new Instagram("whitenes", 10, 10);
console.log(Instapp);
var perconalData = /** @class */ (function () {
    function perconalData(tname, tage, exp) {
        this.name = tname;
        this.age = tage;
        this.experience = exp;
    }
    return perconalData;
}());
var tdata1 = new perconalData("tabiq", 24, 3);
console.log(tdata1);
var GiaicAtm = /** @class */ (function () {
    function GiaicAtm(name, pin, balance) {
        this.name = name;
        this.pin = pin;
        this.balance = balance;
        this.logedIn = false;
    }
    GiaicAtm.prototype.login = function () {
        if (this.name === "tabiq" && this.pin === 8569) {
            this.logedIn = true;
            console.log("login Successful");
        }
        else {
            this.logedIn = false;
            console.log("login faild please check correct pin");
        }
    };
    GiaicAtm.prototype.deposit = function (amount) {
        if (this.logedIn) {
            this.balance += amount;
            return this.balance;
        }
        else {
            console.log("you must be logged in to deposit.");
            return this.balance;
        }
    };
    GiaicAtm.prototype.withdrawl = function (amount) {
        if (this.logedIn) {
            if (amount <= this.balance) {
                this.balance -= amount;
                return this.balance;
            }
            else {
                console.log("insufficiant funts");
                return this.balance;
            }
        }
        else {
            console.log("you must be logged in to withdrawl");
            return this.balance;
        }
    };
    return GiaicAtm;
}());
var tabiqTransaction = new GiaicAtm("tabiq", 8569, 50000);
tabiqTransaction.login();
console.log("balance after deposit", tabiqTransaction.deposit(5000));
console.log("balance after withdrawl", tabiqTransaction.withdrawl(20000));
