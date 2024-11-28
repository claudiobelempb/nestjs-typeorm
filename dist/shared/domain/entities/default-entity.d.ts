export declare abstract class EntityDefault<T = any> {
    readonly _id: string;
    readonly props: T;
    constructor(props: T, id?: string);
    get id(): string;
    toJSON(): Required<{
        id: string;
    } & T>;
}
