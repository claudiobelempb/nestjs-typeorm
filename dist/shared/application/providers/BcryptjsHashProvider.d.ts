import { HashProvider } from '../interfaces/hash.interface';
export declare class BcryptjsHashProvider implements HashProvider {
    generateHash(playload: string): Promise<string>;
    compareHash(playload: string, hash: string): Promise<boolean>;
}
