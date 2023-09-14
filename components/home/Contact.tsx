'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
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
import { CONTACTS } from '@/constants/clinic';

const contactFormSchema = z.object({
	fullName: z.string(),
	email: z.string().email(),
	phone: z.string().max(10).optional(),
	subject: z.string(),
	message: z.string(),
});

const Contact = () => {
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

	function onSubmit(values: z.infer<typeof contactFormSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
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
					<div className='mt-4 rounded-lg overflow-hidden relative'>
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
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className='space-y-2 flex flex-col'
						>
							<FormField
								control={form.control}
								name='fullName'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Full Name</FormLabel>
										<FormControl>
											<Input
												placeholder='John Doe'
												type='text'
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
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email Address</FormLabel>
										<FormControl>
											<Input
												placeholder='doe@gmail.com'
												type='email'
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
											Enter your 10 digit mobile number.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='subject'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Subject</FormLabel>
										<FormControl>
											<Input
												placeholder='Subject'
												type='text'
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
								render={({ field }) => (
									<FormItem>
										<FormLabel>Message</FormLabel>
										<FormControl>
											<Textarea
												placeholder='Enter your message'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button type='submit' disabled className='!mt-4'>
								Submit
							</Button>
						</form>
					</Form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
