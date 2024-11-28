"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthResponse = void 0;
var AuthResponse;
(function (AuthResponse) {
    class Signup {
        constructor(firstName, lastName, email, isActive, isAmbassador, createdAt, updatedAt) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.isActive = isActive;
            this.isAmbassador = isAmbassador;
            this.createdAt = createdAt;
            this.updatedAt = updatedAt;
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
        isIsActive() {
            return this.isActive;
        }
        setIsActive(isActive) {
            this.isActive = isActive;
        }
        isIsAmbassador() {
            return this.isAmbassador;
        }
        setIsAmbassador(isAmbassador) {
            this.isAmbassador = isAmbassador;
        }
        getCreatedAt() {
            return this.createdAt;
        }
        setCreatedAt(createdAt) {
            this.createdAt = createdAt;
        }
        getUpdatedAt() {
            return this.updatedAt;
        }
        setUpdatedAt(updatedAt) {
            this.updatedAt = updatedAt;
        }
    }
    AuthResponse.Signup = Signup;
})(AuthResponse || (exports.AuthResponse = AuthResponse = {}));
//# sourceMappingURL=auth.response.js.map