"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Simplemiddleware = void 0;
class Simplemiddleware {
    use(req, res, next) {
        console.log('Simplemiddleware: Olá...');
        const authorization = req.headers?.authorization;
        if (authorization) {
            req['user'] = {
                firstName: 'Luiz',
                lastName: 'Otávio',
                role: 'admin',
            };
        }
        next();
    }
}
exports.Simplemiddleware = Simplemiddleware;
//# sourceMappingURL=Simple.middleware.js.map