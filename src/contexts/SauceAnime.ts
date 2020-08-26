import {
    SauceContext,
    ContextFactoryOptions,
    ContextFactoryPayload 
} from './SauceContext';

import { ISauceContextHeader } from './SauceHeaderContext';

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

export interface ISauceAnimeContextData {
    title: ISauceAnimeContextTitle;
    episode: ISauceAnimeContextEpisodes;
    date: ISauceAnimeContextDate;
    est_time: string;
};

export type SauceAnimeContextOptions = 
    ContextFactoryOptions<ContextFactoryPayload<ISauceContextHeader, ISauceAnimeContextData>>;

class SauceAnimeContext 
    extends SauceContext<
        ISauceContextHeader,
        ISauceAnimeContextData,
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
        return this.payload.data.title;
    }


    /**
     * Returns the episode
     */
    public get episode(): ISauceAnimeContextEpisodes {
        return this.payload.data.episode;
    }

    /**
     * Returns the date
     */
    public get date(): ISauceAnimeContextDate {
        return this.payload.data.date;
    }

    /**
     * Returns the estimate time
     */
    public get estimatedTime(): string {
        return this.payload.data.est_time;
    }

}

export { SauceAnimeContext };