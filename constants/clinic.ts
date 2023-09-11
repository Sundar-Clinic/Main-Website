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

type FAQData = ReadonlyArray<
	Readonly<{
		question: string;
		answer: string;
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
		title: 'Inpatient Care',
		description:
			'Rest and recover in comfort with our inpatient facilities, ensuring a peaceful and nurturing environment during your stay.',
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

export const FAQS: FAQData = [
	{
		question: "What are your clinic's operating hours?",
		answer: 'Sundar Clinic is open Monday through Sunday from 9:00 AM to 1:30 PM and 4:00 PM to 9:30 PM.',
	},
	{
		question: 'How can I schedule an appointment?',
		answer: `You can schedule an appointment by calling our clinic during business hours at ${CONTACTS.phone}.`,
	},
	{
		question: 'What types of payment methods do you accept?',
		answer: 'We accept various payment methods, including cash, credit/debit cards, and UPI.',
	},
	{
		question: 'Are walk-in patients accepted?',
		answer: 'While we encourage scheduling appointments to ensure prompt service, we do accept walk-in patients. Please be aware that scheduled appointments may take priority.',
	},
	{
		question: 'What should I bring to my appointment?',
		answer: 'Please bring your photo ID, insurance card, a list of current medications, and any relevant medical records or test results to your appointment.',
	},
	{
		question: 'How can I request prescription refills?',
		answer: 'You can request prescription refills by calling our clinic, and our staff will assist you with the process. Please allow sufficient time for us to process your request.',
	},
	{
		question: 'Is parking available at the clinic?',
		answer: 'Yes, we have ample parking available for our patients at our clinic location.',
	},
	{
		question: 'What should I do in case of a medical emergency?',
		answer: 'In the event of a medical emergency, please call 112 (national helpline) or 102 (ambulance) immediately or go to the nearest emergency room. For non-emergency medical concerns, contact our clinic during business hours.',
	},
];
