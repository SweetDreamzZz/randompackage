import { Context, IContextPayload, ContextFactoryOptions } from './context';

export type SeigaContextType = 'art';

export type SeigaContextSubType = 'seiga';

export interface ISeigaContextData {
    ext_urls: string[];
    title: string;
    seiga_id: number;
    member_name: string;
    member_id: number;
};

export type ISeigaContextPayload =
    IContextPayload<ISeigaContextData>

export type SeigaContextOptions = 
    ContextFactoryOptions<ISeigaContextPayload>;

class SeigaContext 
    extends Context<
        ISeigaContextPayload, 
        SeigaContextType,
        SeigaContextSubType
    > {
    constructor(options: SeigaContextOptions) {
        super({
            ...options,

            type: "art",
            subTypes: [
                options.responseType as SeigaContextSubType
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
     * Returns the seiga id
     */
    public get seigaId(): number {
        return this.payload.data.seiga_id;
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

export { SeigaContext };