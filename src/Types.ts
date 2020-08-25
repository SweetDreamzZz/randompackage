export interface ISauceDefaultSearchOptions {
    api_key?: string;
    url?: string;
    output_type?: number;
    testmode?: number;
    dbmask?: string;
    dbmaski?: string;
    db?: number;
    numres?: number;
    depth?: number;
    minsim?: number
    bias?: number;
    biasmin?: number;
}

export type SauceSearchTypes = 'anime' | 'art' | 'manga';

export interface ISauceOptions {
    api_key?: string;
    search_options?: ISauceDefaultSearchOptions;
};

export type AllowArray<T> = T | T[];