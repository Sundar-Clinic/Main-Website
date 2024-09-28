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
		title: Record<LocaleLanguages, string>;
		description: Record<LocaleLanguages, string>;
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
		title: {
			en: 'Consultation',
			ta: 'ஆலோசனை',
			hi: 'परामर्श',
		},
		description: {
			en: 'Receive expert medical guidance and personalized care from our dedicated healthcare team.',
			ta: 'எங்களது அர்ப்பணிக்கப்பட்ட சுகாதார குழுவிடமிருந்து நிபுணர் மருத்துவ வழிகாட்டல் மற்றும் தனிப்பயன் பராமரிப்பைப் பெறுங்கள்.',
			hi: 'हमारी समर्पित स्वास्थ्य टीम से विशेषज्ञ चिकित्सा मार्गदर्शन और व्यक्तिगत देखभाल प्राप्त करें।',
		},
		Icon: Plus,
	},
	{
		title: {
			en: 'Beds',
			ta: 'படுக்கைகள்',
			hi: 'बिस्तर',
		},
		description: {
			en: 'We offer beds for your comfort during outpatient visits, ensuring a convenient and comfortable experience.',
			ta: 'வெளிநோயாளி சந்திப்புகளின் போது உங்கள் வசதிக்காக படுக்கைகளை வழங்குகிறோம், இது வசதியான மற்றும் ஆறுதலான அனுபவத்தை உறுதிசெய்கிறது.',
			hi: 'हम बाह्य रोगी यात्राओं के दौरान आपकी सुविधा के लिए बिस्तर प्रदान करते हैं, यह एक सुविधाजनक और आरामदायक अनुभव सुनिश्चित करता है।',
		},
		Icon: Bed,
	},
	{
		title: {
			en: 'Lab Tests',
			ta: 'பயிர் பரிசோதனைகள்',
			hi: 'प्रयोगशाला परीक्षण',
		},
		description: {
			en: 'Access cutting-edge diagnostic tests and screenings to aid in accurate diagnoses and treatment plans.',
			ta: 'சரியான பரிசோதனைகளையும் சிகிச்சை திட்டங்களையும் ஆதரிக்க நவீன கண்டறிதல் பரிசோதனைகளையும் திரையிடல்களையும் அணுகுங்கள்.',
			hi: 'सटीक निदान और उपचार योजनाओं में सहायता के लिए अत्याधुनिक नैदानिक परीक्षणों और स्क्रीनिंग्स तक पहुंचें।',
		},
		Icon: TestTube,
	},
	{
		title: {
			en: 'Observation',
			ta: 'கவனிப்பு',
			hi: 'निरीक्षण',
		},
		description: {
			en: 'Our Observation service provides medical supervision for patients with specific conditions or post-procedural recovery.',
			ta: 'நாங்கள் வழங்கும் கவனிப்பு சேவை, குறிப்பிட்ட நிலைகளுடன் உள்ள நோயாளிகளுக்கு அல்லது சிகிச்சைக்குப் பிறகு மீட்கும் நோயாளிகளுக்கு மருத்துவ கண்காணிப்பை வழங்குகிறது.',
			hi: 'हमारी निरीक्षण सेवा विशिष्ट परिस्थितियों वाले रोगियों या प्रक्रियाओं के बाद की वसूली के लिए चिकित्सा पर्यवेक्षण प्रदान करती है।',
		},
		Icon: Eye,
	},
	{
		title: {
			en: 'Additional Services',
			ta: 'கூடுதல் சேவைகள்',
			hi: 'अतिरिक्त सेवाएँ',
		},
		description: {
			en: 'Explore the full scope of our offerings by visiting us. We are continuously expanding our services to better serve you.',
			ta: 'எங்களைச் சந்திப்பதன் மூலம் எங்களது அனைத்து சேவைகளையும் ஆராயுங்கள். உங்களை சிறப்பாகச் சேவையளிக்க எங்கள் சேவைகளை தொடர்ந்து விரிவாக்கி வருகின்றோம்.',
			hi: 'हमसे मिलकर हमारी सभी सेवाओं का पता लगाएं। आपकी बेहतर सेवा के लिए हम अपनी सेवाओं का लगातार विस्तार कर रहे हैं।',
		},
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
