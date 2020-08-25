import { Context, IContextPayload, ContextFactoryOptions } from './context';

export type Market2DContextType = 'manga';

export type Market2DContextSubType = '2dmarket';

export interface IMarket2DContextData {
    ext_urls: string[];
    creator: string;
    source: string;
};

export type IMarket2DContextPayload =
    IContextPayload<IMarket2DContextData>

export type Market2DContextOptions = 
    ContextFactoryOptions<IMarket2DContextPayload>;

class Market2DContext 
    extends Context<
        IMarket2DContextPayload, 
        Market2DContextType,
        Market2DContextSubType
    > {
    constructor(options: Market2DContextOptions) {
        super({
            ...options,

            type: "manga",
            subTypes: [
                options.responseType as Market2DContextSubType
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
        return this.payload.data.source;
    }

    /**
     * Returns the author
     */
    public get author(): string {
        return this.payload.data.creator;
    }

}

export { Market2DContext };