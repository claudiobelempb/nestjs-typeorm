"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
const use_entity_1 = require("../../domain/entities/use.entity");
const user_response_1 = require("../response/user.response");
class UserMapper {
    static toEntity(response) {
        const entity = new use_entity_1.UserEntity();
        entity.id = response.id;
        entity.firstName = response.firstName;
        entity.lastName = response.lastName;
        entity.email = response.email;
        entity.send = response.send;
        entity.received = response.received;
        entity.isActive = response.isActive;
        entity.createdAt = response.createdAt;
        entity.updatedAt = response.updatedAt;
        return entity;
    }
    static toResponse(entity) {
        const response = new user_response_1.UserResponse.User(entity.id, entity.firstName, entity.lastName, entity.email, entity.send, entity.received, entity.isActive, entity.isAmbassador, entity.createdAt, entity.updatedAt);
        return response;
    }
}
exports.UserMapper = UserMapper;
//# sourceMappingURL=user.mapper.js.map