"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRequestMapper = void 0;
const MessageEntity_1 = require("../../domain/entities/MessageEntity");
class MessageRequestMapper {
    static toEntity(request) {
        const entity = new MessageEntity_1.MessageEntity();
        entity.text = request.text;
        entity.from.id = request.fromId;
        entity.to.id = request.toId;
        return entity;
    }
}
exports.MessageRequestMapper = MessageRequestMapper;
//# sourceMappingURL=MessageRequestMapper.js.map