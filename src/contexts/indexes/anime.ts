import { Context, IContextPayload, ContextFactoryOptions } from './context';

export type AnimeContextType = 'anime';

export type AnimeContextSubType = 'anime';

export interface IAnimeContextData {
    ext_urls: string[];
    source: string;
    anidb_aid: number;
    part: string;
    year: string;
    est_time: string;
};

export type IAnimeContextPayload =
    IContextPayload<IAnimeContextData>

export type AnimeContextOptions = 
    ContextFactoryOptions<IAnimeContextPayload>;

class AnimeContext 
    extends Context<
        IAnimeContextPayload, 
        AnimeContextType,
        AnimeContextSubType
    > {
    constructor(options: AnimeContextOptions) {
        super({
            ...options,

            type: "anime",
            subTypes: [
                options.responseType as AnimeContextSubType
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
     * Returns the title
     */
    public get title(): string {
        return this.payload.data.source;
    }

    /**
     * Returns the anidb id
     */
    public get anidbId(): number {
        return this.payload.data.anidb_aid;
    }

    /**
     * Returns the part
     */
    public get part(): string {
        return this.payload.data.part;
    }

    /**
     * Returns the year
     */
    public get year(): string {
        return this.payload.data.year;
    }

    /**
     * Returns the estimated time
     */
    public get estimatedTime(): string {
        return this.payload.data.est_time;
    }

}

export { AnimeContext };