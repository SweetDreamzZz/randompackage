import { Context, IContextPayload, ContextFactoryOptions } from './context';

export type DeviantContextType = 'art';

export type DeviantContextSubType = 'deviant';

export interface IDeviantContextData {
    ext_urls: string[];
    title: string;
    da_id: number;
    author_name: string;
    author_url: string;
};

export type IDeviantContextPayload =
    IContextPayload<IDeviantContextData>

export type DeviantContextOptions = 
    ContextFactoryOptions<IDeviantContextPayload>;

class DeviantContext 
    extends Context<
        IDeviantContextPayload, 
        DeviantContextType,
        DeviantContextSubType
    > {
    constructor(options: DeviantContextOptions) {
        super({
            ...options,

            type: "art",
            subTypes: [
                options.responseType as DeviantContextSubType
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
     * Returns the deviant art id
     */
    public get daId(): number {
        return this.payload.data.da_id;
    }

    /**
     * Returns the author
     */
    public get author(): string {
        return this.payload.data.author_name;
    }

    /**
     * Returns the author
     */
    public get authorUrl(): string {
        return this.payload.data.author_url;
    }

}

export { DeviantContext };