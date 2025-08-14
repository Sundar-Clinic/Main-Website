/**
 * Contact Endpoint
 */

// Dependencies
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import z from "zod";
import NodeCache from "node-cache";
import { createRateLimiter } from "@/lib/rate-limit";
import { assertValue } from "@/lib/utils";

// Constants
const RECAPTCHA_SECRET_KEY = assertValue(
  process.env.RECAPTCHA_SECRET_KEY,
  "RECAPTCHA_SECRET_KEY is not set"
);
const GMAIL_EMAIL = assertValue(
  process.env.GMAIL_EMAIL,
  "GMAIL_EMAIL is not set"
);
const GMAIL_PASSWORD = assertValue(
  process.env.GMAIL_PASSWORD,
  "GMAIL_PASSWORD is not set"
);

// Rate limiter for revalidation (lax limit: 10 requests per minute)
const rateLimitCache = new NodeCache({ stdTTL: 60, checkperiod: 60 });
const rateLimiter = createRateLimiter(rateLimitCache, 10, 60);

const contactFormRequestSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  phone: z.string().max(10).optional(),
  subject: z.string(),
  message: z.string(),
  token: z.string(),
});

// Email Sender
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_EMAIL,
    pass: GMAIL_PASSWORD,
  },
});

// POST: /contact endpoint to send email when
// 		 someone submits contact form
export async function POST(request: Request) {
  // Extract IP address (adjust based on your deployment)
  const ip =
    request.headers.get("x-forwarded-for") ||
    request.headers.get("remote-addr") ||
    "unknown";

  // Check rate limit for revalidation endpoint
  if (!rateLimiter(ip)) {
    return NextResponse.json(
      { message: "contact/too-many-requests" },
      { status: 429 }
    );
  }

  const body = (await request.json()) as z.infer<
    typeof contactFormRequestSchema
  >;
  const { success } = contactFormRequestSchema.safeParse(body);

  if (!success) {
    return NextResponse.json(
      { message: "contact/invalid-request" },
      { status: 400 }
    );
  }

  const reCAPTCHAResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${body.token}`,
    { method: "POST" }
  );
  const reCAPTCHAData = await reCAPTCHAResponse.json();

  if (!reCAPTCHAData.success || reCAPTCHAData.score < 0.5) {
    return NextResponse.json(
      { message: "contact/failed-reCAPTCHA-validation" },
      { status: 400 }
    );
  }

  await transporter.sendMail({
    from: GMAIL_EMAIL,
    to: GMAIL_EMAIL,
    subject: `${body.fullName} - ${body.email} - ${body.subject}`,
    text: `${body.message}\nEmail: ${body.email}\nName:${body.fullName}\nPhone:${body.phone}\n\nThis message is sent from the websites contact form`,
  });
  return NextResponse.json(
    {
      message: "contact/form-submitted-succeessfully",
    },
    {
      status: 200,
    }
  );
}
