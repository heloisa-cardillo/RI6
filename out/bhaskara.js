"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var calculo_1 = __importDefault(require("./calculo"));
var Bhaskara = /** @class */ (function (_super) {
    __extends(Bhaskara, _super);
    function Bhaskara() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bhaskara.prototype.calcular = function (a, b, c) {
        var delta = b * b - 4 * a * c;
        if (delta < 0) {
            return "A equação não possui raízes reais.";
        }
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
        if (delta === 0) {
            return [x1];
        }
        else {
            return [x1, x2];
        }
    };
    return Bhaskara;
}(calculo_1.default));
exports.default = Bhaskara;
