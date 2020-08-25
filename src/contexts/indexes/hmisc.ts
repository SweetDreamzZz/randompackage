import { Context, IContextPayload, ContextFactoryOptions } from './context';

export type HmiscContextType = 'manga';

export type HmiscContextSubType = 'hmisc';

export interface IHmiscContextData {
    source: string;
    creator: string[];
    eng_name: string;
    jp_name: string;
};

export type IHmiscContextPayload =
    IContextPayload<IHmiscContextData>

export type HmiscContextOptions = 
    ContextFactoryOptions<IHmiscContextPayload>;

class HmiscContext 
    extends Context<
        IHmiscContextPayload, 
        HmiscContextType,
        HmiscContextSubType
    > {
    constructor(options: HmiscContextOptions) {
        super({
            ...options,

            type: "manga",
            subTypes: [
                options.responseType as HmiscContextSubType
            ]
        });
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
    public get author(): string[] {
        return this.payload.data.creator;
    }

    /**
     * Returns the eng name
     */
    public get engName(): string {
        return this.payload.data.eng_name;
    }

    /**
     * Returns the jp name
     */
    public get jpName(): string {
        return this.payload.data.jp_name;
    }

}

export { HmiscContext };