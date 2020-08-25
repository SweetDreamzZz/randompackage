import { Context, IContextPayload, ContextFactoryOptions } from './context';

export type YandereContextType = 'art';

export type YandereContextSubType = 'yandere';

export interface IYandereContextData {
    ext_urls: string[];
    yandere_id: number;
    creator: string;
    material: string;
    characters: string;
    source: string;
};

export type IYandereContextPayload =
    IContextPayload<IYandereContextData>

export type YandereContextOptions = 
    ContextFactoryOptions<IYandereContextPayload>;

class YandereContext 
    extends Context<
        IYandereContextPayload, 
        YandereContextType,
        YandereContextSubType
    > {
    constructor(options: YandereContextOptions) {
        super({
            ...options,

            type: "art",
            subTypes: [
                options.responseType as YandereContextSubType
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
     * Returns the yandere id
     */
    public get yandereId(): number {
        return this.payload.data.yandere_id;
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

export { YandereContext };