import { SauceSearchTypes, AllowArray, ISauceDefaultSearchOptions } from "../Types";
import { Helper } from "./helper";
import { SauceContext } from "../contexts";

class SearchHandler {
    private search_options: ISauceDefaultSearchOptions;
    private helper: Helper;

    constructor(search_options: ISauceDefaultSearchOptions) {
        this.search_options = search_options;

        this.helper = new Helper();
    }

    protected async handleSauceResponse(url: string): Promise<any> {
        const responses: SauceContext = await this.getSauceData(url);
        

    }

    private async getSauceData(url: string): Promise<any> {
        const sauceResponse = this.helper.fetch(url, 'json');
        
        
    }
}

export { SearchHandler };