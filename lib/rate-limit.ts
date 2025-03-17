import NodeCache from 'node-cache';

/**
 * Returns a rate limiter function.
 * @param cache A NodeCache instance defined at the route level.
 * @param limit Maximum allowed requests in the window.
 * @param windowSeconds The time window in seconds.
 */
export function createRateLimiter(
	cache: NodeCache,
	limit: number,
	windowSeconds: number
) {
	return function rateLimit(ip: string): boolean {
		const key = `rate_limit_${ip}`;
		const current = cache.get<number>(key) || 0;

		if (current >= limit) {
			return false;
		}

		// Increment the request count and ensure the TTL is set for the window.
		cache.set(key, current + 1, windowSeconds);
		return true;
	};
}
