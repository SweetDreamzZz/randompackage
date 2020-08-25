import { Context, IContextPayload, ContextFactoryOptions } from './context';

export type BcyContextType = 'art';

export type BcyContextSubType = 'bcy';

export interface IBcyContextData {
    ext_urls: string[];
    title: string;
    bcy_id: number;
    member_name: string;
    member_id: number;
    member_link_id: number;
    bcy_type: string;
};

export type IBcyContextPayload =
    IContextPayload<IBcyContextData>

export type BcyContextOptions = 
    ContextFactoryOptions<IBcyContextPayload>;

class BcyContext 
    extends Context<
        IBcyContextPayload, 
        BcyContextType,
        BcyContextSubType
    > {
    constructor(options: BcyContextOptions) {
        super({
            ...options,

            type: "art",
            subTypes: [
                options.responseType as BcyContextSubType
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
     * Returns the title
     */
    public get title(): string {
        return this.payload.data.title;
    }

    /**
     * Returns the bcy id
     */
    public get bcyId(): number {
        return this.payload.data.bcy_id;
    }

    /**
     * Returns the author
     */
    public get author(): string {
        return this.payload.data.member_name;
    }

    /**
     * Returns the author id
     */
    public get authorId(): number {
        return this.payload.data.member_id;
    }

    /**
     * Returns the author link id
     */
    public get authorLinkId(): number {
        return this.payload.data.member_link_id;
    }
    
    /**
     * Returns the bcy type
     */
    public get bcyType(): string {
        return this.payload.data.bcy_type;
    }
}

export { BcyContext };