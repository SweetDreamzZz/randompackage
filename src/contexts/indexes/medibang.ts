import { Context, IContextPayload, ContextFactoryOptions } from './context';

export type MedibangContextType = 'art';

export type MedibangContextSubType = 'medibang';

export interface IMedibangContextData {
    ext_urls: string[];
    title: string;
    url: string;
    member_name: string;
    member_id: number;
};

export type IMedibangContextPayload =
    IContextPayload<IMedibangContextData>

export type MedibangContextOptions = 
    ContextFactoryOptions<IMedibangContextPayload>;

class MedibangContext 
    extends Context<
        IMedibangContextPayload, 
        MedibangContextType,
        MedibangContextSubType
    > {
    constructor(options: MedibangContextOptions) {
        super({
            ...options,

            type: "art",
            subTypes: [
                options.responseType as MedibangContextSubType
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
     * Returns the source
     */
    public get source(): string {
        return this.payload.data.url;
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

export { MedibangContext };