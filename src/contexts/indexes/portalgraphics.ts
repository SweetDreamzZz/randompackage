import { Context, IContextPayload, ContextFactoryOptions } from './context';

export type PortalgraphicsContextType = 'art';

export type PortalgraphicsContextSubType = 'portalgraphics';

export interface IPortalgraphicsContextData {
    ext_urls: string[];
    pg_id: number;
    title: string;
    member_name: string;
    member_id: number;
};

export type IPortalgraphicsContextPayload =
    IContextPayload<IPortalgraphicsContextData>

export type PortalgraphicsContextOptions = 
    ContextFactoryOptions<IPortalgraphicsContextPayload>;

class PortalgraphicsContext 
    extends Context<
        IPortalgraphicsContextPayload, 
        PortalgraphicsContextType,
        PortalgraphicsContextSubType
    > {
    constructor(options: PortalgraphicsContextOptions) {
        super({
            ...options,

            type: "art",
            subTypes: [
                options.responseType as PortalgraphicsContextSubType
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
     * Returns the portal graphics id
     */
    public get pgId(): number {
        return this.payload.data.pg_id;
    }

    /**
     * Returns the title
     */
    public get title(): string {
        return this.payload.data.title;
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

export { PortalgraphicsContext };