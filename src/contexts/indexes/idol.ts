import { Context, IContextPayload, ContextFactoryOptions } from './context';

export type IdolContextType = 'art';

export type IdolContextSubType = 'idol';

export interface IIdolContextData {
    ext_urls: string[];
    idol_id: number;
    creator: string;
    material: string;
    characters: string;
    source: string;
};

export type IIdolContextPayload =
    IContextPayload<IIdolContextData>

export type IdolContextOptions = 
    ContextFactoryOptions<IIdolContextPayload>;

class IdolContext 
    extends Context<
        IIdolContextPayload, 
        IdolContextType,
        IdolContextSubType
    > {
    constructor(options: IdolContextOptions) {
        super({
            ...options,

            type: "art",
            subTypes: [
                options.responseType as IdolContextSubType
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
     * Returns the idol id
     */
    public get idolId(): number {
        return this.payload.data.idol_id;
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

export { IdolContext };