import fetch, { RequestInfo, RequestInit } from 'node-fetch';
import { AllowArray } from '../Types';

class Helper {
    public async fetch(url: RequestInfo, response_type: 'text', init?: RequestInit): Promise<string>;
    public async fetch(url: RequestInfo, response_type: 'json', init?: RequestInit): Promise<any> ;
    public async fetch(url: RequestInfo, response_type: string, init?: RequestInit): Promise<string | any> {
        const response = await fetch(url, init);

        if (!response.ok)
            throw new Error('Fetch response is not ok');

        return response[response_type]()
    }

    public handleArray(rawData: AllowArray<any>): any[] {
        return !Array.isArray(rawData)
            ? [rawData]
            : rawData;
    }
}

export { Helper };