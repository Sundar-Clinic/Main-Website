import { revalidateTag } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';
import { parseBody } from 'next-sanity/webhook';

import {
	type SanityDocumentType,
	type CacheTag,
	createCollectionTag,
	createDocumentTag,
} from '@/lib/cache-tags';

// Webhook payload type
type WebhookPayload = {
	_id: string;
	_type: SanityDocumentType;
	slug?: string;
};

export async function POST(req: NextRequest) {
	try {
		const { body, isValidSignature } = await parseBody<WebhookPayload>(
			req,
			process.env.SANITY_WEBHOOK_SECRET,
		);

		// Validate the webhook signature
		if (!isValidSignature) {
			const message = 'Invalid signature';
			return new NextResponse(JSON.stringify({ message, isValidSignature }), {
				status: 401,
			});
		}

		if (!body?._type) {
			const message = 'Bad Request: Missing _type';
			return new NextResponse(JSON.stringify({ message }), { status: 400 });
		}

		// Revalidate based on document type
		const tags: CacheTag[] = [];
		const { _type, slug } = body;

		switch (_type) {
			case 'post':
				tags.push(createCollectionTag('post'));
				if (slug) {
					tags.push(createDocumentTag('post', slug));
				}
				break;
			case 'category':
				tags.push(createCollectionTag('category'));
				// Revalidate all posts since categories are linked to them
				tags.push(createCollectionTag('post'));
				break;
			case 'team':
				tags.push(createCollectionTag('team'));
				if (slug) {
					tags.push(createDocumentTag('team', slug));
				}
				// Revalidate all posts since team members are authors
				tags.push(createCollectionTag('post'));
				break;
			case 'lab-tests':
				tags.push(createCollectionTag('lab-tests'));
				if (slug) {
					tags.push(createDocumentTag('lab-tests', slug));
				}
				break;
			case 'siteConfig':
				// Site config affects all pages
				tags.push(createCollectionTag('siteConfig'));
				break;
			case 'faq':
				tags.push(createCollectionTag('faq'));
				break;
			case 'gallery':
				tags.push(createCollectionTag('gallery'));
				break;
			case 'partner-labs':
				tags.push(createCollectionTag('partner-labs'));
				break;
			case 'testimonial':
				tags.push(createCollectionTag('testimonial'));
				break;
			default:
				// Unknown type, log it but don't fail
				console.warn(`Unknown document type: ${body._type}`);
		}

		// Revalidate all relevant tags
		for (const tag of tags) {
			revalidateTag(tag);
		}

		return NextResponse.json({
			success: true,
			revalidated: tags,
			now: Date.now(),
		});
	} catch (err: unknown) {
		console.error('Webhook error:', err);
		const message =
			err instanceof Error ? err.message : 'Internal Server Error';
		return new NextResponse(JSON.stringify({ message }), { status: 500 });
	}
}
