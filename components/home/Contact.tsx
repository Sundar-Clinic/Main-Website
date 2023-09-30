/**
 * Home Page - Contact Component
 * Form Page - Contact Component
 */

'use client';

// Dependencies
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { RotateCw } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { CONTACTS } from '@/constants/clinic';

type ContactProps = React.ComponentProps<'section'>;

const contactFormSchema = z.object({
	fullName: z.string(),
	email: z.string().email(),
	phone: z.string().max(10).optional(),
	subject: z.string(),
	message: z.string(),
});

const ALREADY_SUBMITTED_SESSION_STORAGE_KEY =
	'sundar-clinic-already-submitted-contact-form';

const Contact: React.FC<ContactProps> = () => {
	const [submitting, setSubmitting] = useState(false);
	const [alreadySubmitted, setAlreadySubmitted] = useState(
		typeof window !== 'undefined'
			? Boolean(
					window.sessionStorage.getItem(
						ALREADY_SUBMITTED_SESSION_STORAGE_KEY
					) === 'true'
			  )
			: false
	);
	const { toast } = useToast();

	const form = useForm<z.infer<typeof contactFormSchema>>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			fullName: '',
			email: '',
			phone: '',
			subject: '',
			message: '',
		},
	});

	async function onSubmit(values: z.infer<typeof contactFormSchema>) {
		try {
			setSubmitting(true);
			if (values?.phone && values?.phone.length !== 10) {
				form.setError('phone', {
					message: 'Phone no. must be contain 10 digits',
				});
				return;
			}
			const response = await axios.post<{ message: string }>(
				'/api/contact',
				values
			);
			if (
				response.data.message === 'contact/form-submitted-succeessfully'
			) {
				toast({
					title: 'Success',
					description:
						"Contact Form Submitted Successfully! We'll get back to you soon.",
				});
				setAlreadySubmitted(true);
				if (typeof window !== 'undefined') {
					window.sessionStorage.setItem(
						ALREADY_SUBMITTED_SESSION_STORAGE_KEY,
						'true'
					);
				}
			}
		} catch (error) {
			toast({
				title: 'Error',
				description:
					'Unable to submit form at the moment, try again later.',
				variant: 'destructive',
			});
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<section className='max-w-5xl mx-auto w-full p-4 mt-8'>
			<h3 className='text-2xl font-heading text-center font-medium'>
				Contact Us
			</h3>
			<hr className='border-b-4 max-w-[10rem] border-b-primary-clinic rounded-lg mx-auto mt-2' />
			<div className='grid grid-cols-1 md:grid-cols-2 mt-8 gap-4 md:gap-8'>
				<div className='w-full h-full flex flex-col items-center p-2'>
					<p className='text-lg font-heading font-medium w-full'>
						Let&apos;s connect, or got a query for us?
					</p>
					<p className='mt-2'>
						Call us at{' '}
						<Link
							href={`tel:${CONTACTS.phone}`}
							className='text-secondary-clinic underline underline-offset-2'
						>
							{CONTACTS.phone}
						</Link>{' '}
						or drop us an email at{' '}
						<Link
							href={`mailto:${CONTACTS.email}`}
							className='text-secondary-clinic underline underline-offset-2'
						>
							{CONTACTS.email}
						</Link>
						.
					</p>
					<div className='mt-4 rounded-lg overflow-hidden'>
						<Image
							src='/images/landing-contact.jpg'
							alt='Sundar Clinic - Contact Image'
							width={100}
							height={100}
							className='w-full object-contain'
							priority
							unoptimized
						/>
					</div>
				</div>
				<div className='w-full h-full p-2'>
					{alreadySubmitted ? (
						<div>
							<div className='mt-4 rounded-lg overflow-hidden'>
								<Image
									src='/images/landing-contact-success.png'
									alt='Sundar Clinic - Contact Image'
									width={100}
									height={100}
									className='w-full object-contain'
									priority
									unoptimized
								/>
							</div>
							<p className='font-heading text-xl font-medium text-center'>
								Submitted successfully!
							</p>
							<p className='text-lg text-center'>
								We&apos;ll get back to you soon.
							</p>
						</div>
					) : (
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className='gap-2 h-full flex flex-col'
							>
								<FormField
									control={form.control}
									name='fullName'
									disabled={submitting}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Full Name *</FormLabel>
											<FormControl>
												<Input
													placeholder='John Doe'
													type='text'
													required
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='email'
									disabled={submitting}
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												Email Address *
											</FormLabel>
											<FormControl>
												<Input
													placeholder='doe@gmail.com'
													type='email'
													required
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='phone'
									disabled={submitting}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Phone Number</FormLabel>
											<FormControl>
												<Input
													placeholder='8939881708'
													type='tel'
													{...field}
												/>
											</FormControl>
											<FormDescription>
												Enter your 10 digit mobile
												number.
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='subject'
									disabled={submitting}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Subject *</FormLabel>
											<FormControl>
												<Input
													placeholder='Subject'
													type='text'
													required
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='message'
									disabled={submitting}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Message *</FormLabel>
											<FormControl>
												<Textarea
													placeholder='Enter your message'
													{...field}
													required
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<p className='text-xs'>
									(*) marks as required fields
								</p>
								<Button
									type='submit'
									disabled={submitting}
									className='mt-auto gap-2'
								>
									{submitting && (
										<RotateCw
											size={16}
											className='animate-spin'
										/>
									)}
									{submitting ? 'Submitting...' : 'Submit'}
								</Button>
							</form>
						</Form>
					)}
				</div>
			</div>
		</section>
	);
};

export default Contact;
