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
} from 'lucide-react';

interface SocialData {
	name: string;
	Icon: LucideIcon;
	url: string;
}

export const CONTACTS = {
	phone: '+918939881708',
	googleLocation: 'https://goo.gl/maps/qp2T6itZ5gp7wCJr8',
	address:
		'1195A, Nehru Street, Bangalore, Bengaluru - Chennai Hwy, Pappanchathiram, Chennai, Tamil Nadu - 600123.',
	email: 'sundarclinic@gmail.com',
};

export const SOCIALS: ReadonlyArray<SocialData> = [
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
