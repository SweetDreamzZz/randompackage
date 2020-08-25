import { SauceContext, ContextFactoryOptions } from './SauceContext';
import { SauceHeaderContext } from './SauceHeaderContext';

export type SauceMangaContextType = 'manga';

export type SauceMangaContextSubType = 
    'fakku'
    | 'hmisc'
    | '2dmarket'
    | 'madokami'
    | 'mangadex';

export interface ISauceMangaContextPayload {
    title: string;
    author: string;
    episode: string;
}

export type ISauceMangaContextOptions = 
    ContextFactoryOptions<ISauceMangaContextPayload, SauceHeaderContext>;

class SauceMangaContext
    extends SauceContext<
        ISauceMangaContextPayload,
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
        return this.payload.title
    }

    /**
     * Returns the author
     */
    public get author() : string {
        return this.payload.author
    }

    /**
     * Returns the episode
     */
    public get episode() : string {
        return this.payload.episode
    }
    
}

export { SauceMangaContext };