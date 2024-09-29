import { draftMode } from 'next/headers';
// eslint-disable-next-line no-restricted-imports
import { redirect } from 'next/navigation';

export async function GET() {
	draftMode().enable();
	redirect(`/`);
}
