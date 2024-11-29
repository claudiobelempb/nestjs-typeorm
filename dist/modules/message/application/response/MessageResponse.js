"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageResponse = void 0;
var MessageResponse;
(function (MessageResponse) {
    class Message {
        constructor(id, text, from, to, isRead, isActive, createdAt, updatedAt) {
            this.id = id;
            this.text = text;
            this.from = from;
            this.to = to;
            this.isRead = isRead;
            this.isActive = isActive;
            this.createdAt = createdAt;
            this.updatedAt = updatedAt;
        }
    }
    MessageResponse.Message = Message;
    class Create {
        constructor(text, from, to) {
            this.text = text;
            this.from = from;
            this.to = to;
        }
    }
    MessageResponse.Create = Create;
    class Update {
        constructor(text, from, to) {
            this.text = text;
            this.from = from;
            this.to = to;
        }
    }
    MessageResponse.Update = Update;
})(MessageResponse || (exports.MessageResponse = MessageResponse = {}));
//# sourceMappingURL=MessageResponse.js.map