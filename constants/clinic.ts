// Clinic Constant Data

// Dependencies
import {
	LucideIcon,
	Instagram,
	Twitter,
	Linkedin,
	Mail,
	Phone,
	PhoneCall,
	Plus,
	Bed,
	TestTube,
	BadgePlus,
} from 'lucide-react';

type SocialData = ReadonlyArray<
	Readonly<{
		name: string;
		url: string;
		Icon: LucideIcon;
	}>
>;

type ContactData = Readonly<{
	phone: string;
	googleLocation: string;
	address: string;
	email: string;
}>;

export type ServiceData = ReadonlyArray<
	Readonly<{
		title: string;
		description: string;
		Icon: LucideIcon;
	}>
>;

export const CONTACTS: ContactData = {
	phone: '+918939881708',
	googleLocation: 'https://goo.gl/maps/qp2T6itZ5gp7wCJr8',
	address:
		'1195A, Nehru Street, Bangalore, Bengaluru - Chennai Hwy, Pappanchathiram, Chennai, Tamil Nadu - 600123.',
	email: 'sundarclinic@gmail.com',
};

export const SOCIALS: SocialData = [
	{
		name: 'Instagram',
		Icon: Instagram,
		url: 'https://instagram.com/SundarClinic',
	},
	{
		name: 'Twitter',
		Icon: Twitter,
		url: 'https://twitter.com/SundarClinic',
	},
	{
		name: 'LinkedIn',
		Icon: Linkedin,
		url: 'https://linkedin.com/company/sundar-clinic',
	},
	{
		name: 'Email',
		Icon: Mail,
		url: `mailto:${CONTACTS.email}`,
	},
	{
		name: 'WhatsApp',
		Icon: Phone,
		url: `https://wa.me/${CONTACTS.phone}`,
	},
	{
		name: 'Phone',
		Icon: PhoneCall,
		url: `tel:${CONTACTS.phone}`,
	},
];

export const SERVICES: ServiceData = [
	{
		title: 'Consultation',
		description:
			'Receive expert medical guidance and personalized care from our dedicated healthcare team.',
		Icon: Plus,
	},
	{
		title: 'Cots and Beds',
		description:
			'We offer cots and beds for your comfort during outpatient visits, ensuring a convenient and comfortable experience.',
		Icon: Bed,
	},
	{
		title: 'Lab Tests',
		description:
			'Access cutting-edge diagnostic tests and screenings to aid in accurate diagnoses and treatment plans.',
		Icon: TestTube,
	},
	{
		title: 'Additional Services',
		description:
			'Explore the full scope of our offerings by visiting us. We are continuously expanding our services to better serve you.',
		Icon: BadgePlus,
	},
];
