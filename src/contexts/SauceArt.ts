import { SauceContext, ContextFactoryOptions } from './SauceContext';
import { AllowArray } from '../Types';
import { SauceHeaderContext } from './SauceHeaderContext';

export type SauceArtContextType = 'art';

export type SauceArtContextSubType = 
    'pixiv' 
    | 'seiga' 
    | 'danbooru' 
    | 'drawr' 
    | 'nijie' 
    | 'yandere' 
    | 'medibang' 
    | 'gelbooru' 
    | 'konachan' 
    | 'sankaku'
    | 'anime_pictures'
    | 'e621'
    | 'bcy'
    | 'deviant'
    | 'pawoo';
  
export interface ISauceArtContextPayload {
    title: string;
    author: string;
    material: string;
    characters: AllowArray<string>;
    source: string;
};

export type SauceArtContextOptions = 
    ContextFactoryOptions<ISauceArtContextPayload, SauceHeaderContext>;

class SauceArtContext
    extends SauceContext<
        ISauceArtContextPayload,
        SauceArtContextType,
        SauceArtContextSubType
    > {
    constructor(options: SauceArtContextOptions) {
        super({
            ...options,

            type: "art",
            subTypes: [
                options.responseType as SauceArtContextSubType
            ]
        });
    }

    /**
     * Returns the title
     */
    public get title(): string {
        return this.payload.title;
    }

    /**
     * Returns the author
     */
    public get author(): string {
        return this.payload.author;
    }

    /**
     * Returns the material
     */
    public get material(): string {
        return this.payload.material;
    }

    /**
     * Returns the characters
     */
    public get characters(): AllowArray<string> {
        return this.payload.characters;
    }

    /**
     * Returns the source
     */
    public get source(): string {
        return this.payload.source;
    }
}

export { SauceArtContext };