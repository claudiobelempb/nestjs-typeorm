"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageMapper = void 0;
const user_response_1 = require("../../../user/application/response/user.response");
const MessageEntity_1 = require("../../domain/entities/MessageEntity");
const MessageResponse_1 = require("../response/MessageResponse");
class MessageMapper {
    static toEntity(response) {
        const entity = new MessageEntity_1.MessageEntity();
        entity.id = response.id;
        entity.text = response.text;
        entity.from = new user_response_1.UserResponse.UserMessage(response.from.id, response.from.firstName, response.from.lastName, response.from.email);
        entity.to = new user_response_1.UserResponse.UserMessage(response.to.id, response.to.firstName, response.to.lastName, response.to.email);
        entity.isRead = response.isRead;
        entity.isActive = response.isActive;
        entity.createdAt = response.createdAt;
        entity.updatedAt = response.updatedAt;
        return entity;
    }
    static toResponse(entity) {
        const response = new MessageResponse_1.MessageResponse.Message(entity.id, entity.text, new user_response_1.UserResponse.UserMessage(entity.from.id, entity.from.firstName, entity.from.lastName, entity.from.email), new user_response_1.UserResponse.UserMessage(entity.to.id, entity.to.firstName, entity.to.lastName, entity.to.email), entity.isRead, entity.isActive, entity.createdAt, entity.updatedAt);
        return response;
    }
}
exports.MessageMapper = MessageMapper;
//# sourceMappingURL=MessageMapper.js.map