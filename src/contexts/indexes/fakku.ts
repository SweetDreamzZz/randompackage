import { Context, IContextPayload, ContextFactoryOptions } from './context';

export type FakkuContextType = 'manga';

export type FakkuContextSubType = 'fakku';

export interface IFakkuContextData {
    ext_urls: string[];
    creator: string;
    source: string;
};

export type IFakkuContextPayload =
    IContextPayload<IFakkuContextData>

export type FakkuContextOptions = 
    ContextFactoryOptions<IFakkuContextPayload>;

class FakkuContext 
    extends Context<
        IFakkuContextPayload, 
        FakkuContextType,
        FakkuContextSubType
    > {
    constructor(options: FakkuContextOptions) {
        super({
            ...options,

            type: "manga",
            subTypes: [
                options.responseType as FakkuContextSubType
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

export { FakkuContext };