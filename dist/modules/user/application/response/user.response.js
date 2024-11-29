"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponse = void 0;
var UserResponse;
(function (UserResponse) {
    class User {
        constructor(id, firstName, lastName, email, send, received, isActive, isAmbassador, createdAt, updatedAt) {
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.send = send;
            this.received = received;
            this.isActive = isActive;
            this.isAmbassador = isAmbassador;
            this.createdAt = createdAt;
            this.updatedAt = updatedAt;
        }
    }
    UserResponse.User = User;
    class UserMessage {
        constructor(id, firstName, lastName, email) {
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
        }
    }
    UserResponse.UserMessage = UserMessage;
})(UserResponse || (exports.UserResponse = UserResponse = {}));
//# sourceMappingURL=user.response.js.map