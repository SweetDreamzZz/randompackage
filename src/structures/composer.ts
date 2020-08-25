import { Composer as MiddlewareComposer } from 'middleware-io';

import { SauceContext } from '../contexts';

// @ts-expect-error
export class Composer<T extends SauceContext> extends MiddlewareComposer<T> {
	/**
	 * Create new `Composer` instance
	 */
	public static builder<T extends SauceContext>(): Composer<T> {
		return new Composer<T>();
	}
}