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

export interface IContextPayload<
    H,
    D
> {
    header: H;

    data: D;
};

export interface ISauceHeaderIndexPayload {
    status: number;
    parent_id: number;
    id: number;
    results: number;
};

export interface ISauceHeaderIndex {
    [index_id: string]: ISauceHeaderIndexPayload;
};

export interface ISauceContextHeader {
    user_id: string;
    account_type: string;
    short_limit: string;
    long_limit: string;
    long_remaining: number;
    short_remaining: number;
    status: number;
    results_requested: number;
    index: ISauceHeaderIndex;
    search_depth: number;
    minimum_similarity: number;
    query_image_display: string;
    query_image: string;
    results_returned: number;
};

export type ContextFactoryPayload<H, D> =
    IContextPayload<H, D>;

export type ContextFactoryOptions<P> =
	Omit<IContextOptions<P>, 'type' | 'subTypes'>;

class SauceContext<
    H extends ISauceContextHeader = ISauceContextHeader,
    D = {},
    Type extends string = string,
    SubType extends string = string
> {
    public type: Type;

    public subTypes: SubType[];

    protected payload: IContextPayload<H, D>;

    constructor(options: IContextOptions<IContextPayload<H, D>, Type, SubType>) {
        this.payload = options.payload;
        this.type = options.type;
        this.subTypes = options.subTypes;
    }

    /**
     * Returns the user id
     */
    public get userId(): string {
        return this.payload.header.user_id;
    }

    /**
     * Returns the account type 
     */
    public get accountType(): string {
        return this.payload.header.account_type;
    }

    /**
     * Returns the short limit
     */
    public get shortLimit(): string {
        return this.payload.header.short_limit;
    }

    /**
     * Returns the long limit
     */
    public get longLimit(): string {
        return this.payload.header.long_limit;
    }

    /**
     * Returns the long remaining
     */
    public get longRemaining(): number {
        return this.payload.header.long_remaining;
    }

    /**
     * Returns the short remaining
     */
    public get shortRemaining(): number {
        return this.payload.header.short_remaining;
    }

    /**
     * Returns the status
     */
    public get status(): number {
        return this.payload.header.status;
    }

    /**
     * Returns the number of requested results
     */
    public get resultsRequested(): number {
        return this.payload.header.results_requested;
    }

    /**
     * Returns the index
     */
    public get index(): ISauceHeaderIndex {
        return this.payload.header.index;
    }

    /**
     * Returns the search depth
     */
    public get searchDepth(): number {
        return this.payload.header.search_depth;
    }

    /**
     * Returns the minimum similarity
     */
    public get minimumSimilarity(): number {
        return this.payload.header.minimum_similarity;
    }

    /**
     * Returns the query image display
     */
    public get queryImageDisplay(): string {
        return this.payload.header.query_image_display;
    }

    /**
     * Returns the query image
     */
    public get queryImage(): string {
        return this.payload.header.query_image;
    }

    /**
     * Returns the number of returned results
     */
    public get resultsReturned(): number {
        return this.payload.header.results_returned
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