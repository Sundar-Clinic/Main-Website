/**
 * Contact Endpoint
 */

// Dependencies
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import z from 'zod';

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
		return NextResponse.json({
			message: 'contact/form-submitted-succeessfully',
		});
	} else {
		return NextResponse.error();
	}
}
