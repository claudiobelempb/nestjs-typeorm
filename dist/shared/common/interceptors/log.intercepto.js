"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogIntercepto = void 0;
const rxjs_1 = require("rxjs");
class LogIntercepto {
    intercept(context, next) {
        const dt = Date.now();
        return next.handle().pipe((0, rxjs_1.tap)(() => {
            console.log('Execução levou: ', Date.now() - dt);
        }));
    }
}
exports.LogIntercepto = LogIntercepto;
//# sourceMappingURL=log.intercepto.js.map