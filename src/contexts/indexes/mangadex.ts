import { Context, IContextPayload, ContextFactoryOptions } from './context';

export type MangadexContextType = 'manga';

export type MangadexContextSubType = 'mangadex';

export interface IMangadexContextData {
    ext_urls: string[];
    md_id: number;
    mu_id: number;
    mal_id: number;
    source: string;
    part: string;
    artist: string;
    author: string;
};

export type IMangadexContextPayload =
    IContextPayload<IMangadexContextData>

export type MangadexContextOptions = 
    ContextFactoryOptions<IMangadexContextPayload>;

class MangadexContext 
    extends Context<
        IMangadexContextPayload, 
        MangadexContextType,
        MangadexContextSubType
    > {
    constructor(options: MangadexContextOptions) {
        super({
            ...options,

            type: "manga",
            subTypes: [
                options.responseType as MangadexContextSubType
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
     * Returns the mangadex id
     */
    public get mdId(): number {
        return this.payload.data.md_id;
    }

    /**
     * Returns the manga updates id
     */
    public get muId(): number {
        return this.payload.data.mu_id;
    }

    /**
     * Returns the my anime list id
     */
    public get malId(): number {
        return this.payload.data.mal_id;
    }

    /**
     * Returns the title
     */
    public get title(): string {
        return this.payload.data.source;
    }

    /**
     * Returns the part
     */
    public get part(): string {
        return this.payload.data.part;
    }

    /**
     * Returns the author
     */
    public get author(): string {
        return this.payload.data.author || this.payload.data.artist;
    }

}

export { MangadexContext };