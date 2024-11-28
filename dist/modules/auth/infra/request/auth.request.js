"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRequest = void 0;
const class_validator_1 = require("class-validator");
var AuthRequest;
(function (AuthRequest) {
    class Signup {
        constructor(firstName, lastName, email, password, password_confirm) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.password = password;
            this.password_confirm = password_confirm;
        }
        getFirstName() {
            return this.firstName;
        }
        setFirstName(firstName) {
            this.firstName = firstName;
        }
        getLastName() {
            return this.lastName;
        }
        setLastName(lastName) {
            this.lastName = lastName;
        }
        getEmail() {
            return this.email;
        }
        setEmail(email) {
            this.email = email;
        }
        getPassword() {
            return this.password;
        }
        setPassword(password) {
            this.password = password;
        }
        getPasswordConfirm() {
            return this.password_confirm;
        }
        setPasswordConfirm(password_confirm) {
            this.password_confirm = password_confirm;
        }
    }
    __decorate([
        (0, class_validator_1.MaxLength)(32),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], Signup.prototype, "firstName", void 0);
    __decorate([
        (0, class_validator_1.MaxLength)(32),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], Signup.prototype, "lastName", void 0);
    __decorate([
        (0, class_validator_1.MaxLength)(100),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsEmail)(),
        __metadata("design:type", String)
    ], Signup.prototype, "email", void 0);
    __decorate([
        (0, class_validator_1.MaxLength)(100),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], Signup.prototype, "password", void 0);
    __decorate([
        (0, class_validator_1.MaxLength)(100),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], Signup.prototype, "password_confirm", void 0);
    AuthRequest.Signup = Signup;
})(AuthRequest || (exports.AuthRequest = AuthRequest = {}));
//# sourceMappingURL=auth.request.js.map