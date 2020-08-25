import { Context, IContextPayload, ContextFactoryOptions } from './context';

export type PixivContextType = 'art';

export type PixivContextSubType = 'pixiv';

export interface IPixivContextData {
    ext_urls: string[];
    title: string;
    pixiv_id: number;
    member_name: string;
    member_id: number;
};

export type IPixivContextPayload =
    IContextPayload<IPixivContextData>

export type PixivContextOptions = 
    ContextFactoryOptions<IPixivContextPayload>;

class PixivContext 
    extends Context<
        IPixivContextPayload, 
        PixivContextType,
        PixivContextSubType
    > {
    constructor(options: PixivContextOptions) {
        super({
            ...options,

            type: "art",
            subTypes: [
                options.responseType as PixivContextSubType
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
     * Returns the pixiv id
     */
    public get pixivId(): number {
        return this.payload.data.pixiv_id;
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

export { PixivContext };