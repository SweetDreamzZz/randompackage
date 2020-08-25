import { Middleware, compose, noopNext } from 'middleware-io'

import {
    ISauceDefaultSearchOptions,
    AllowArray
} from "../Types";

import { SearchHandler } from './SearchHandler';
import { Composer } from '../structures/composer';

import {
    SauceContext,
    SauceAnimeContext,
    SauceArtContext,
    SauceMangaContext,

    SauceAnimeContextType,
    SauceArtContextType,
    SauceMangaContextType,

    SauceAnimeContextSubType,
    SauceArtContextSubType,
    SauceMangaContextSubType
} from '../contexts';

export type ContextTypes = 
    SauceAnimeContextType
    | SauceArtContextType
    | SauceMangaContextType;

export type ContextSubTypes = 
    SauceAnimeContextSubType
    | SauceArtContextSubType
    | SauceMangaContextSubType;

export type ContextPossibleTypes = ContextTypes | ContextSubTypes | string;

class SauceSearch extends SearchHandler {
    private composer = Composer.builder<SauceContext>()
        .caught((_context, error) => {
            console.error(error);
        });

    private composed!: Middleware<SauceContext>;

    constructor(search_options: ISauceDefaultSearchOptions) {
        super(search_options);

        this.recompose();
    }

    public use<T = {}>(middleware: Middleware<SauceContext & T>): this {
        if (typeof middleware !== 'function') {
            throw new TypeError('Middleware must be a function');
        }

        this.composer.use(middleware);

        this.recompose();

        return this;

    }

    public on<T = {}>(
        types: AllowArray<SauceMangaContextType | SauceMangaContextSubType>,
        handler: AllowArray<Middleware<SauceMangaContext & T>>
    ): this
    public on<T = {}>(
        types: AllowArray<SauceArtContextType | SauceArtContextSubType>,
        handler: AllowArray<Middleware<SauceArtContext & T>>
    ): this
    public on<T = {}>(
        types: AllowArray<SauceAnimeContextType | SauceAnimeContextSubType>,
        handler: AllowArray<Middleware<SauceAnimeContext & T>>
    ): this
    public on<T = {}>(
        rawTypes: AllowArray<ContextPossibleTypes>,
        rawHandlers: AllowArray<Middleware<SauceContext & T>>
    ): this {
        const types = !Array.isArray(rawTypes)
            ? [rawTypes]
            : rawTypes;

        const hasTypes = types.every(Boolean);

        if (!hasTypes) {
            throw new Error('Types should be not empty');
        }

        const handler = Array.isArray(rawHandlers)
            ? compose(rawHandlers)
            : rawHandlers;

        if (typeof handler !== 'function') {
            throw new TypeError('Handler must be a function');
        }

        return this.use((context, next) => (
                context.is(types)

                    // @ts-expect-error
                    ? handler(context, next)
                    : next() 
        ));
    }

    public getSauce(url: string): Promise<void> {

        const SearchContext = new SauceArtContext({
            payload: {
                author: 'test',
                title: 'test',
                characters: 'test',
                material: 'test',
                source: 'test'
            },
            responseType: 'art'
        });

        return this.dispatchMiddleware(SearchContext);
    }

    /**
     * Calls up the middleware chain
     */
    protected dispatchMiddleware(context: SauceContext): Promise<void> {
        return this.composed(context, noopNext) as Promise<void>;
    }

    /**
     * Reloads middleware
     */
    protected recompose(): void {
        this.composed = this.composer.compose();
    }

}

export { SauceSearch };