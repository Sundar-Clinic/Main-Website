import { NextResponse } from 'next/server';
import z from 'zod';

const contactFormRequestSchema = z.object({});

export async function POST(request: Request) {
	const body = await request.json();
	console.log(body);
	return NextResponse.json({
		message: 'contact/form-submitted-succeessfully',
	});
}
