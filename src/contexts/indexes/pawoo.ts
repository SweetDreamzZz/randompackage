import { Context, IContextPayload, ContextFactoryOptions } from './context';

export type PawooContextType = 'art';

export type PawooContextSubType = 'pawoo';

export interface IPawooContextData {
    ext_urls: string[];
    created_at: string;
    pawoo_id: number;
    pawoo_user_acct: string;
    pawoo_user_username: string;
    pawoo_user_display_name: string;
};

export type IPawooContextPayload =
    IContextPayload<IPawooContextData>

export type PawooContextOptions = 
    ContextFactoryOptions<IPawooContextPayload>;

class PawooContext 
    extends Context<
        IPawooContextPayload, 
        PawooContextType,
        PawooContextSubType
    > {
    constructor(options: PawooContextOptions) {
        super({
            ...options,

            type: "art",
            subTypes: [
                options.responseType as PawooContextSubType
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
     * Returns the pawoo id
     */
    public get pawooId(): number {
        return this.payload.data.pawoo_id;
    }

    /**
     * Returns the author
     */
    public get author(): string {
        return this.payload.data.pawoo_user_display_name;
    }

    /**
     * Returns the author username
     */
    public get authorUserName(): string {
        return this.payload.data.pawoo_user_acct || this.payload.data.pawoo_user_username;
    }

}

export { PawooContext };