import { Context, IContextPayload, ContextFactoryOptions } from './context';

export type DanbooruContextType = 'art';

export type DanbooruContextSubType = 'danbooru';

export interface IDanbooruContextData {
    ext_urls: string[];
    danbooru_id: number;
    gelbooru_id: number;
    sankaku_id: number;
    creator: string;
    material: string;
    characters: string;
    source: string;
};

export type IDanbooruContextPayload =
    IContextPayload<IDanbooruContextData>

export type DanbooruContextOptions = 
    ContextFactoryOptions<IDanbooruContextPayload>;

class DanbooruContext 
    extends Context<
        IDanbooruContextPayload, 
        DanbooruContextType,
        DanbooruContextSubType
    > {
    constructor(options: DanbooruContextOptions) {
        super({
            ...options,

            type: "art",
            subTypes: [
                options.responseType as DanbooruContextSubType
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
     * Returns the danbooru id
     */
    public get danbooruId(): number {
        return this.payload.data.danbooru_id;
    }

    /**
     * Returns the gelbooru id
     */
    public get gelbooruId(): number {
        return this.payload.data.gelbooru_id;
    }

    /**
     * Returns the sankaku id
     */
    public get sankakuId(): number {
        return this.payload.data.sankaku_id;
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

export { DanbooruContext };