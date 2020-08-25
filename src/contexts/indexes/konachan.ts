import { Context, IContextPayload, ContextFactoryOptions } from './context';

export type KonachanContextType = 'art';

export type KonachanContextSubType = 'konachan';

export interface IKonachanContextData {
    ext_urls: string[];
    konachan_id: number;
    creator: string;
    material: string;
    characters: string;
    source: string;
};

export type IKonachanContextPayload =
    IContextPayload<IKonachanContextData>

export type KonachanContextOptions = 
    ContextFactoryOptions<IKonachanContextPayload>;

class KonachanContext 
    extends Context<
        IKonachanContextPayload, 
        KonachanContextType,
        KonachanContextSubType
    > {
    constructor(options: KonachanContextOptions) {
        super({
            ...options,

            type: "art",
            subTypes: [
                options.responseType as KonachanContextSubType
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
     * Returns the konachan id
     */
    public get konachanId(): number {
        return this.payload.data.konachan_id;
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

export { KonachanContext };