import { AllowArray } from "../Types";

export interface IContextOptions<
    P,
    Type extends string = string,
    SubType extends string = string
> {
    type: Type;
    subTypes: SubType[];

    payload: P;

    responseType: 'art' | 'anime' | 'manga';
}

export type ContextFactoryOptions<P, H> =
	Omit<IContextOptions<P>, 'type' | 'subTypes'>;

class SauceContext<
    P = {},
    Type extends string = string,
    SubType extends string = string
> {
    public type: Type;

    public subTypes: SubType[];

    protected payload: P;

    constructor(options: IContextOptions<P, Type, SubType>) {
        this.payload = options.payload;
        this.type = options.type;
        this.subTypes = options.subTypes;
    }

    public is(rawTypes: AllowArray<Type | SubType>): boolean {
        const types = !Array.isArray(rawTypes)
            ? [rawTypes]
            : rawTypes;

        return [this.type, ...this.subTypes].some((type): boolean => (
            types.includes(type)
        ));
    }
}

export { SauceContext };