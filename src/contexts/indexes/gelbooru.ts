import { Context, IContextPayload, ContextFactoryOptions } from './context';

export type GelbooruContextType = 'art';

export type GelbooruContextSubType = 'gelbooru';

export interface IGelbooruContextData {
    ext_urls: string[];
    gelbooru_id: number;
    creator: string;
    material: string;
    characters: string;
    source: string;
};

export type IGelbooruContextPayload =
    IContextPayload<IGelbooruContextData>

export type GelbooruContextOptions = 
    ContextFactoryOptions<IGelbooruContextPayload>;

class GelbooruContext 
    extends Context<
        IGelbooruContextPayload, 
        GelbooruContextType,
        GelbooruContextSubType
    > {
    constructor(options: GelbooruContextOptions) {
        super({
            ...options,

            type: "art",
            subTypes: [
                options.responseType as GelbooruContextSubType
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
     * Returns the gelbooru id
     */
    public get gelbooruId(): number {
        return this.payload.data.gelbooru_id;
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

export { GelbooruContext };