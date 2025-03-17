/**
 * Contact Endpoint
 */

// Dependencies
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import z from 'zod';
import NodeCache from 'node-cache';
import { createRateLimiter } from '@/lib/rate-limit';

// Rate limiter for revalidation (lax limit: 10 requests per minute)
const rateLimitCache = new NodeCache({ stdTTL: 60, checkperiod: 60 });
const rateLimiter = createRateLimiter(rateLimitCache, 10, 60);

const contactFormRequestSchema = z.object({
	fullName: z.string(),
	email: z.string().email(),
	phone: z.string().max(10).optional(),
	subject: z.string(),
	message: z.string(),
});

// Email Sender
const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.GMAIL_EMAIL,
		pass: process.env.GMAIL_PASSWORD,
	},
});

// POST: /contact endpoint to send email when
// 		 someone submits contact form
export async function POST(request: Request) {
	// Extract IP address (adjust based on your deployment)
	const ip =
		request.headers.get('x-forwarded-for') ||
		request.headers.get('remote-addr') ||
		'unknown';

	// Check rate limit for revalidation endpoint
	if (!rateLimiter(ip)) {
		return NextResponse.json(
			{ message: 'contact/too-many-requests' },
			{ status: 429 }
		);
	}

	const body = await request.json();
	const { value, status } =
		z.OK<z.infer<typeof contactFormRequestSchema>>(body);
	if (status === 'valid') {
		await transporter.sendMail({
			from: process.env.GMAIL_EMAIL,
			to: process.env.GMAIL_EMAIL,
			subject: `${value.fullName} - ${value.email} - ${value.subject}`,
			text: `${value.message}\nEmail: ${value.email}\nName:${value.fullName}\nPhone:${value.phone}\n\nThis message is sent from the websites contact form`,
		});
		return NextResponse.json(
			{
				message: 'contact/form-submitted-succeessfully',
			},
			{
				status: 200,
			}
		);
	} else {
		return NextResponse.error();
	}
}
