import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class Simplemiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Simplemiddleware: Olá...');
    const authorization = req.headers?.authorization;
    if (authorization) {
      req['user'] = {
        firstName: 'Luiz',
        lastName: 'Otávio',
        role: 'admin',
      };
    }
    // return res.status(404).send({
    //   message: 'Não encontrado...',
    // });
    next();
  }
}
