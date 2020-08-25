import { Context, IContextPayload, ContextFactoryOptions } from './context';

export type SankakuContextType = 'art';

export type SankakuContextSubType = 'sankaku';

export interface ISankakuContextData {
    ext_urls: string[];
    sankaku_id: number;
    creator: string;
    material: string;
    characters: string;
    source: string;
};

export type ISankakuContextPayload =
    IContextPayload<ISankakuContextData>

export type SankakuContextOptions = 
    ContextFactoryOptions<ISankakuContextPayload>;

class SankakuContext 
    extends Context<
        ISankakuContextPayload, 
        SankakuContextType,
        SankakuContextSubType
    > {
    constructor(options: SankakuContextOptions) {
        super({
            ...options,

            type: "art",
            subTypes: [
                options.responseType as SankakuContextSubType
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

export { SankakuContext };