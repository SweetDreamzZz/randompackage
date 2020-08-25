import { Context, IContextPayload, ContextFactoryOptions } from './context';

export type E621ContextType = 'art';

export type E621ContextSubType = 'e621';

export interface IE621ContextData {
    ext_urls: string[];
    e621_id: number;
    creator: string;
    material: string;
    characters: string;
    source: string;
};

export type IE621ContextPayload =
    IContextPayload<IE621ContextData>

export type E621ContextOptions = 
    ContextFactoryOptions<IE621ContextPayload>;

class E621Context 
    extends Context<
        IE621ContextPayload, 
        E621ContextType,
        E621ContextSubType
    > {
    constructor(options: E621ContextOptions) {
        super({
            ...options,

            type: "art",
            subTypes: [
                options.responseType as E621ContextSubType
            ]
        });
    }

    /**
     * Returns the external urls
     */
    public get externalUrls(): string[] {
        return this.payload.data.ext_urls;
    }

    /**
     * Returns the e621 id
     */
    public get e621Id(): number {
        return this.payload.data.e621_id;
    }

    /**
     * Returns the author
     */
    public get author(): string {
        return this.payload.data.creator;
    }

    /**
     * Returns the material
     */
    public get material(): string {
        return this.payload.data.material;
    }

    /**
     * Returns the characters
     */
    public get characters(): string {
        return this.payload.data.characters;
    }

    /**
     * Returns the source
     */
    public get source(): string {
        return this.payload.data.source;
    }
}

export { E621Context };