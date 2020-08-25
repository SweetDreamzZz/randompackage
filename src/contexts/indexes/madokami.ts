import { Context, IContextPayload, ContextFactoryOptions } from './context';

export type MadokamiContextType = 'manga';

export type MadokamiContextSubType = 'madokami';

export interface IMadokamiContextData {
    ext_urls: string[];
    mu_id: number;
    source: string;
    part: string;
    type: string;
};

export type IMadokamiContextPayload =
    IContextPayload<IMadokamiContextData>

export type MadokamiContextOptions = 
    ContextFactoryOptions<IMadokamiContextPayload>;

class MadokamiContext 
    extends Context<
        IMadokamiContextPayload, 
        MadokamiContextType,
        MadokamiContextSubType
    > {
    constructor(options: MadokamiContextOptions) {
        super({
            ...options,

            type: "manga",
            subTypes: [
                options.responseType as MadokamiContextSubType
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
     * Returns the manga updates id
     */
    public get muId(): number {
        return this.payload.data.mu_id;
    }

    /**
     * Returns the title
     */
    public get title(): string {
        return this.payload.data.source;
    }

    /**
     * Returns the part
     */
    public get part(): string {
        return this.payload.data.part;
    }

    /**
     * Returns the type
     */
    public get muType(): string {
        return this.payload.data.type;
    }

}

export { MadokamiContext };