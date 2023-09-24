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
	Github,
	Eye,
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
	codeRepositoryURL: string;
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
		'1195A, Nehru Street, Chennai, Bengaluru - Chennai Highway, Pappanchathiram, Chennai, Tamil Nadu - 600123.',
	email: 'sundarclinic@gmail.com',
	codeRepositoryURL: 'https://github.com/Sundar-Clinic/Main-Website',
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
	{
		name: 'GitHub',
		Icon: Github,
		url: 'https://github.com/Sundar-Clinic',
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
		title: 'Beds',
		description:
			'We offer beds for your comfort during outpatient visits, ensuring a convenient and comfortable experience.',
		Icon: Bed,
	},
	{
		title: 'Lab Tests',
		description:
			'Access cutting-edge diagnostic tests and screenings to aid in accurate diagnoses and treatment plans.',
		Icon: TestTube,
	},
	{
		title: 'Observation',
		description:
			'Our Observation service provides medical supervision for patients with specific conditions or post-procedural recovery.',
		Icon: Eye,
	},
	{
		title: 'Additional Services',
		description:
			'Explore the full scope of our offerings by visiting us. We are continuously expanding our services to better serve you.',
		Icon: BadgePlus,
	},
];

export const TERMS_AND_CONDITIONS: TermsAndConditionsData = [
	{
		title: 'Use of Website',
		descriptions: [
			'This website is intended for informational purposes only. It is not a substitute for professional medical advice or diagnosis.',
			"You agree to use this website responsibly and not engage in any activities that may harm, disrupt, or impair the site's functionality.",
		],
	},
	{
		title: 'Intellectual Property',
		descriptions: [
			'All content on this website, including text, graphics, logos, images, and software, is protected by intellectual property rights. You may not reproduce, distribute, or use any content without our prior written consent.',
		],
	},
	{
		title: 'Disclaimer',
		descriptions: [
			"The content on this website is provided 'as is,' and we make no warranties, express or implied, regarding its accuracy, completeness, or suitability for any purpose. Your use of this website is at your own risk.",
		],
	},
	{
		title: 'Privacy',
		descriptions: [
			'Your use of this website is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information.',
		],
	},
	{
		title: 'Third-Party Links',
		descriptions: [
			'This website may contain links to third-party websites. We are not responsible for the content or practices of these external websites. Use them at your own discretion.',
		],
	},
	{
		title: 'Changes to Terms and Conditions',
		descriptions: [
			'We reserve the right to modify these Terms and Conditions at any time without notice. Please review this page periodically for updates.',
		],
	},
	{
		title: 'Contact Us',
		descriptions: [
			`If you have any questions or concerns regarding these Terms and Conditions, please contact us at ${CONTACTS.email} or ${CONTACTS.phone}.`,
		],
	},
];

export const PRIVACY_POLICY: PrivacyPolicyData = [
	{
		title: 'Information We Collect',
		descriptions: [
			'When you use our contact form, we may collect the following personal information:',
			'- Name',
			'- Email Address',
			'- Phone Number',
			'- Subject',
			'- Message',
			'We collect this information solely for the purpose of responding to your inquiries and providing you with the necessary assistance. We do not share your personal information with third parties unless required by law.',
		],
	},
	{
		title: 'How We Use Your Information',
		descriptions: [
			'We use the information you provide through our contact form to:',
			'- Respond to your inquiries and requests.',
			'- Communicate with you regarding your appointments or healthcare services.',
			'- Improve our website and services based on your feedback.',
		],
	},
	{
		title: 'Data Security',
		descriptions: [
			'We take appropriate measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. Our website employs industry-standard security protocols to safeguard your data.',
		],
	},
	{
		title: 'Third-Party Links',
		descriptions: [
			'Our website may contain links to third-party websites. Please note that we do not control the privacy practices of these external websites. We encourage you to review the privacy policies of any website you visit via our links.',
		],
	},
	{
		title: 'Changes to Privacy Policy',
		descriptions: [
			'We may update our Privacy Policy to reflect changes in our practices or legal requirements. Any updates will be posted on this page, and the effective date will be modified accordingly.',
		],
	},
	{
		title: 'Contact Us',
		descriptions: [
			`If you have any questions or concerns regarding our Privacy Policy, please contact us at ${CONTACTS.email} or ${CONTACTS.phone}.`,
		],
	},
];
