import {
    SauceContext, 
    ContextFactoryOptions,
    ContextFactoryPayload
} from './SauceContext';

import { ISauceContextHeader } from './SauceHeaderContext';

export type SauceMangaContextType = 'manga';

export type SauceMangaContextSubType = 
    'fakku'
    | 'hmisc'
    | '2dmarket'
    | 'madokami'
    | 'mangadex';

export interface ISauceMangaContextData {
    title: string;
    author: string;
    episode: string;
}

export type ISauceMangaContextOptions = 
    ContextFactoryOptions<ContextFactoryPayload<ISauceContextHeader, ISauceMangaContextData>>;

class SauceMangaContext
    extends SauceContext<
        ISauceContextHeader,
        ISauceMangaContextData,
        SauceMangaContextType,
        SauceMangaContextSubType
    > {
    constructor(options: ISauceMangaContextOptions) {
        super({
            ...options,

            type: "manga",
            subTypes: [
                options.responseType as SauceMangaContextSubType
            ]
        });
    }

    /**
     * Returns the title
     */
    public get title() : string {
        return this.payload.data.title
    }

    /**
     * Returns the author
     */
    public get author() : string {
        return this.payload.data.author
    }

    /**
     * Returns the episode
     */
    public get episode() : string {
        return this.payload.data.episode
    }
    
}

export { SauceMangaContext };