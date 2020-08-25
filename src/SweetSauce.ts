import { ISauceOptions } from "./Types";
import { SauceSearch } from "./SauceSearch";

class SweetSauce {
    public options: ISauceOptions;
    public search: SauceSearch;

    constructor(options?: ISauceOptions) {
        this.options = options || {};

        this.search = new SauceSearch({
            api_key: this.options.api_key,
            ...this.options.search_options
        });
    }

    public setOptions(new_options: ISauceOptions): this {
        this.options = {
            ...this.options,
            ...new_options
        };
        
        return this;
    }
}

export { SweetSauce };