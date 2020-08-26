export interface IContextHeaderOptions<
    H
> {
    header: H;
}

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

export type SauceHeaderContextOptions = IContextHeaderOptions<ISauceContextHeader>;

class SauceHeaderContext {
    protected payload: ISauceContextHeader;

    constructor(options: SauceHeaderContextOptions) {
        this.payload = options.header;
    }

    /**
     * Returns the user id
     */
    public get userId(): string {
        return this.payload.user_id;
    }

    /**
     * Returns the account type 
     */
    public get accountType(): string {
        return this.payload.account_type;
    }

    /**
     * Returns the short limit
     */
    public get shortLimit(): string {
        return this.payload.short_limit;
    }

    /**
     * Returns the long limit
     */
    public get longLimit(): string {
        return this.payload.long_limit;
    }

    /**
     * Returns the long remaining
     */
    public get longRemaining(): number {
        return this.payload.long_remaining;
    }

    /**
     * Returns the short remaining
     */
    public get shortRemaining(): number {
        return this.payload.short_remaining;
    }

    /**
     * Returns the status
     */
    public get status(): number {
        return this.payload.status;
    }

    /**
     * Returns the number of requested results
     */
    public get resultsRequested(): number {
        return this.payload.results_requested;
    }

    /**
     * Returns the index
     */
    public get index(): ISauceHeaderIndex {
        return this.payload.index;
    }

    /**
     * Returns the search depth
     */
    public get searchDepth(): number {
        return this.payload.search_depth;
    }

    /**
     * Returns the minimum similarity
     */
    public get minimumSimilarity(): number {
        return this.payload.minimum_similarity;
    }

    /**
     * Returns the query image display
     */
    public get queryImageDisplay(): string {
        return this.payload.query_image_display;
    }

    /**
     * Returns the query image
     */
    public get queryImage(): string {
        return this.payload.query_image;
    }

    /**
     * Returns the number of returned results
     */
    public get resultsReturned(): number {
        return this.payload.results_returned
    }

}

export { SauceHeaderContext };