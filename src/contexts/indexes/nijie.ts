import { Context, IContextPayload, ContextFactoryOptions } from './context';

export type NijieContextType = 'art';

export type NijieContextSubType = 'nijie';

export interface INijieContextData {
    ext_urls: string[];
    title: string;
    nijie_id: number;
    member_name: string;
    member_id: number;
};

export type INijieContextPayload =
    IContextPayload<INijieContextData>

export type NijieContextOptions = 
    ContextFactoryOptions<INijieContextPayload>;

class NijieContext 
    extends Context<
        INijieContextPayload, 
        NijieContextType,
        NijieContextSubType
    > {
    constructor(options: NijieContextOptions) {
        super({
            ...options,

            type: "art",
            subTypes: [
                options.responseType as NijieContextSubType
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
     * Returns the nijie id
     */
    public get nijieId(): number {
        return this.payload.data.nijie_id;
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

}

export { NijieContext };