import { SauceContext, ContextFactoryOptions } from './SauceContext';
import { SauceHeaderContext } from './SauceHeaderContext';

export type SauceAnimeContextType = 'anime';

export type SauceAnimeContextSubType = 'anime';

export interface ISauceAnimeContextTitle {
    original: string;
    russian: string;
};

export interface ISauceAnimeContextEpisodes {
    total: number;
    aired: number;
    current: string | number;
};

export interface ISauceAnimeContextDate {
    release: string;
    aired: string;
};

export interface ISauceAnimeContextPayload {
    title: ISauceAnimeContextTitle;
    episode: ISauceAnimeContextEpisodes;
    date: ISauceAnimeContextDate;
    est_time: string;
};

export type SauceAnimeContextOptions = 
    ContextFactoryOptions<ISauceAnimeContextPayload, SauceHeaderContext>;

class SauceAnimeContext 
    extends SauceContext<
        ISauceAnimeContextPayload,
        SauceAnimeContextType,
        SauceAnimeContextSubType
    > {
    constructor(options: SauceAnimeContextOptions) {
        super({
            ...options,

            type: "anime",
            subTypes: [
                options.responseType as SauceAnimeContextSubType
            ]
        });
    }

    /**
     * Returns the titles
     */
    public get title(): ISauceAnimeContextTitle {
        return this.payload.title;
    }


    /**
     * Returns the episode
     */
    public get episode(): ISauceAnimeContextEpisodes {
        return this.payload.episode;
    }

    /**
     * Returns the date
     */
    public get date(): ISauceAnimeContextDate {
        return this.payload.date;
    }

    /**
     * Returns the estimate time
     */
    public get estimatedTime(): string {
        return this.payload.est_time;
    }

}

export { SauceAnimeContext };