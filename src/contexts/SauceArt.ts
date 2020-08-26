import {
    SauceContext,
    ContextFactoryOptions,
    ContextFactoryPayload
} from './SauceContext';

import { ISauceContextHeader } from './SauceHeaderContext';

import { AllowArray } from '../Types';

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
  
export interface ISauceArtContextData {
    title: string;
    author: string;
    material: string;
    characters: AllowArray<string>;
    source: string;
};

export type SauceArtContextOptions = 
    ContextFactoryOptions<ContextFactoryPayload<ISauceContextHeader, ISauceArtContextData>>;

class SauceArtContext
    extends SauceContext<
        ISauceContextHeader,
        ISauceArtContextData,
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
        return this.payload.data.title;
    }

    /**
     * Returns the author
     */
    public get author(): string {
        return this.payload.data.author;
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
    public get characters(): AllowArray<string> {
        return this.payload.data.characters;
    }

    /**
     * Returns the source
     */
    public get source(): string {
        return this.payload.data.source;
    }
}

export { SauceArtContext };