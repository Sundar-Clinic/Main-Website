/* eslint-disable react/jsx-no-literals */
import { Link } from '@/lib/routing';

export default function NotFound() {
	return (
		<div>
			<h2>Not Found</h2>
			<p>Could not find requested resource</p>
			<Link href='/'>Return home</Link>
		</div>
	);
}
