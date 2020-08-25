import { AllowArray } from "../../Types";

export interface IContextOptions<
    P,
    Type extends string = string,
    SubType extends string = string
> {
    type: Type;
    subTypes: SubType[];

    payload: P;

    responseType: string | number;
}

export interface IContextPayloadHeader {
    similarity: string;
    thumbnail: string;
    index_id: number,
    index_name: string;
};

export interface IContextPayload<D = {}> {
    header: IContextPayloadHeader;
    data: D;
};

export type ContextFactoryOptions<P> =
	Omit<IContextOptions<P>, 'type' | 'subTypes'>;

class Context<
    P extends IContextPayload = IContextPayload,
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

    /**
     * Returns the similarity
     */
    public get similarity(): string {
        return this.payload.header.similarity;
    }

    /**
     * Returns the thumbnail
     */
    public get thumbnail(): string {
        return this.payload.header.thumbnail;
    }

    /**
     * Returns the index id
     */
    public get indexId(): number {
        return this.payload.header.index_id;
    }

    /**
     * Returns the index name
     */
    public get indexName(): string {
        return this.payload.header.index_name;
    }
}

export { Context };