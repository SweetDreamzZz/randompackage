import { Context, IContextPayload, ContextFactoryOptions } from './context';

export type DrawrContextType = 'art';

export type DrawrContextSubType = 'drawr';

export interface IDrawrContextData {
    ext_urls: string[];
    title: string;
    drawr_id: number;
    member_name: string;
    member_id: number;
};

export type IDrawrContextPayload =
    IContextPayload<IDrawrContextData>

export type DrawrContextOptions = 
    ContextFactoryOptions<IDrawrContextPayload>;

class DrawrContext 
    extends Context<
        IDrawrContextPayload, 
        DrawrContextType,
        DrawrContextSubType
    > {
    constructor(options: DrawrContextOptions) {
        super({
            ...options,

            type: "art",
            subTypes: [
                options.responseType as DrawrContextSubType
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
    public get drawrId(): number {
        return this.payload.data.drawr_id;
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

export { DrawrContext };