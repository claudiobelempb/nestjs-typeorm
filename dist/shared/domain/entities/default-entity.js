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
exports.EntityDefault = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
class EntityDefault {
    constructor(props, id) {
        this.props = props;
        this._id = id || (0, uuid_1.v4)();
    }
    get id() {
        return this._id;
    }
    toJSON() {
        return {
            id: this._id,
            ...this.props,
        };
    }
}
exports.EntityDefault = EntityDefault;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], EntityDefault.prototype, "_id", void 0);
//# sourceMappingURL=default-entity.js.map