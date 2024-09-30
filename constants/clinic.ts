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
		title: {
			en: 'Use of Website',
			ta: 'வலைத்தளத்தின் பயன்பாடு',
			hi: 'वेबसाइट का उपयोग',
		},
		descriptions: [
			{
				en: 'This website is intended for informational purposes only. It is not a substitute for professional medical advice or diagnosis.',
				ta: 'இந்த வலைத்தளம் தகவல் உதவிக்காக மட்டும் உள்ளது. இது தொழில்முறை மருத்துவ ஆலோசனை அல்லது நோயறிதலுக்குப் பதிலாக இல்லை.',
				hi: 'यह वेबसाइट केवल सूचनात्मक उद्देश्यों के लिए है। यह पेशेवर चिकित्सा सलाह या निदान के लिए एक प्रतिस्थापन नहीं है।',
			},
			{
				en: "You agree to use this website responsibly and not engage in any activities that may harm, disrupt, or impair the site's functionality.",
				ta: 'இந்த வலைத்தளத்தை பொறுப்புடன் பயன்படுத்தவும், அதன் செயல்பாட்டிற்கு சேதம் செய்யக்கூடிய அல்லது இடையூறு ஏற்படுத்தக்கூடிய எந்தவொரு செயல்பாட்டிலும் ஈடுபட வேண்டாம் என்று ஒப்புக்கொள்கிறீர்கள்.',
				hi: 'आप सहमत हैं कि इस वेबसाइट का जिम्मेदारीपूर्वक उपयोग करें और साइट की कार्यक्षमता को नुकसान, व्यवधान या हानि पहुँचाने वाली किसी भी गतिविधि में शामिल न हों।',
			},
		],
	},
	{
		title: {
			en: 'Intellectual Property',
			ta: 'அறிவுசார் சொத்து',
			hi: 'बौद्धिक संपदा',
		},
		descriptions: [
			{
				en: 'All content on this website, including text, graphics, logos, images, and software, is protected by intellectual property rights. You may not reproduce, distribute, or use any content without our prior written consent.',
				ta: 'இந்த வலைத்தளத்தில் உள்ள அனைத்து உள்ளடக்கங்களும், உரை, விளக்கப்படங்கள், சின்னங்கள், படங்கள் மற்றும் மென்பொருள் ஆகியவை அறிவுசார் உரிமையினால் பாதுகாக்கப்பட்டுள்ளன. எங்கள் முன் எழுதப்பட்ட அனுமதி இன்றி நீங்கள் எந்த உள்ளடக்கத்தையும், உருவாக்கவோ, பகிரவோ அல்லது பயன்படுத்தவோ முடியாது.',
				hi: 'इस वेबसाइट की सभी सामग्री, जिसमें टेक्स्ट, ग्राफिक्स, लोगो, चित्र और सॉफ़्टवेयर शामिल हैं, बौद्धिक संपदा अधिकारों द्वारा संरक्षित है। हमारी पूर्व लिखित सहमति के बिना आप किसी भी सामग्री को पुनरुत्पादित, वितरित या उपयोग नहीं कर सकते।',
			},
		],
	},
	{
		title: {
			en: 'Disclaimer',
			ta: 'பொறுப்புத் துறப்பு',
			hi: 'अस्वीकरण',
		},
		descriptions: [
			{
				en: "The content on this website is provided 'as is,' and we make no warranties, express or implied, regarding its accuracy, completeness, or suitability for any purpose. Your use of this website is at your own risk.",
				ta: 'இந்த வலைத்தளத்தில் உள்ள உள்ளடக்கம் "இப்படியே" வழங்கப்படுகிறது, மேலும் அதன் துல்லியம், முழுமை, அல்லது ஏதேனும் நோக்கத்திற்கு ஏற்றதாக இருப்பதை பற்றி நாங்கள் உரிமம் கொடுக்க மாட்டோம். இந்த வலைத்தளத்தைப் பயன்படுத்துவது உங்கள் சொந்த ஆபத்தாகும்.',
				hi: 'इस वेबसाइट की सामग्री "जैसी है" प्रदान की जाती है, और हम इसकी सटीकता, पूर्णता या किसी उद्देश्य के लिए उपयुक्तता के संबंध में कोई वारंटी नहीं देते हैं। इस वेबसाइट का उपयोग आप अपने जोखिम पर करते हैं।',
			},
		],
	},
	{
		title: {
			en: 'Privacy',
			ta: 'தனியுரிமை',
			hi: 'गोपनीयता',
		},
		descriptions: [
			{
				en: 'Your use of this website is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information.',
				ta: 'இந்த வலைத்தளத்தின் பயன்பாடு எங்கள் தனியுரிமைக் கொள்கையினாலும் பராமரிக்கப்படுகிறது, இது உங்கள் தனிப்பட்ட தகவல்களை எவ்வாறு சேகரிக்கிறோம், பயன்படுத்துகிறோம் மற்றும் பாதுகாக்கிறோம் என்பதைக் குறிப்பிடுகிறது.',
				hi: 'इस वेबसाइट का उपयोग हमारी गोपनीयता नीति द्वारा भी शासित होता है, जिसमें यह बताया गया है कि हम आपकी व्यक्तिगत जानकारी को कैसे एकत्र करते हैं, उपयोग करते हैं और संरक्षित करते हैं।',
			},
		],
	},
	{
		title: {
			en: 'Third-Party Links',
			ta: 'மூன்றாம் தரப்பின் இணைப்புகள்',
			hi: 'तीसरे पक्ष के लिंक',
		},
		descriptions: [
			{
				en: 'This website may contain links to third-party websites. We are not responsible for the content or practices of these external websites. Use them at your own discretion.',
				ta: 'இந்த வலைத்தளம் மூன்றாம் தரப்பின் இணையதளங்களுக்கான இணைப்புகளைக் கொண்டிருக்கலாம். இந்த வெளிப்புற இணையதளங்களின் உள்ளடக்கம் அல்லது நடைமுறைகளுக்கு நாங்கள் பொறுப்பல்ல. அவற்றைப் பயன்படுத்துவது உங்கள் சொந்த விருப்பமாகும்.',
				hi: 'यह वेबसाइट तृतीय-पक्ष वेबसाइटों के लिंक प्रदान कर सकती है। हम इन बाहरी वेबसाइटों की सामग्री या प्रथाओं के लिए जिम्मेदार नहीं हैं। उनका उपयोग अपनी समझ से करें।',
			},
		],
	},
	{
		title: {
			en: 'Changes to Terms and Conditions',
			ta: 'விதிமுறைகளில் மாற்றங்கள்',
			hi: 'नियम और शर्तों में परिवर्तन',
		},
		descriptions: [
			{
				en: 'We reserve the right to modify these Terms and Conditions at any time without notice. Please review this page periodically for updates.',
				ta: 'இந்த விதிமுறைகளை எப்போது வேண்டுமானாலும் அறிவிப்பு இன்றி மாற்றக்கூடிய உரிமையை நாங்கள் வைத்திருக்கிறோம். புதுப்பிப்புகளுக்காக இந்தப் பக்கத்தை அவ்வப்போது சோதிக்கவும்.',
				hi: 'हम बिना किसी सूचना के इन नियमों और शर्तों में किसी भी समय संशोधन करने का अधिकार सुरक्षित रखते हैं। कृपया अद्यतनों के लिए इस पृष्ठ की समय-समय पर समीक्षा करें।',
			},
		],
	},
	{
		title: {
			en: 'Contact Us',
			ta: 'எங்களைத் தொடர்பு கொள்ளவும்',
			hi: 'हमसे संपर्क करें',
		},
		descriptions: [
			{
				en: `If you have any questions or concerns regarding these Terms and Conditions, please contact us at ${CONTACTS.email} or ${CONTACTS.phone}.`,
				ta: `இந்த விதிமுறைகள் தொடர்பாக ஏதேனும் கேள்விகள் அல்லது சந்தேகங்கள் இருப்பின், எங்களை ${CONTACTS.email} அல்லது ${CONTACTS.phone} என்ற முகவரியில் தொடர்பு கொள்ளவும்.`,
				hi: `यदि आपके पास इन नियमों और शर्तों के संबंध में कोई प्रश्न या चिंता है, तो कृपया ${CONTACTS.email} या ${CONTACTS.phone} पर हमसे संपर्क करें।`,
			},
		],
	},
];

export const PRIVACY_POLICY: PrivacyPolicyData = [
	{
		title: {
			en: 'Information We Collect',
			ta: 'நாங்கள் சேகரிக்கும் தகவல்கள்',
			hi: 'हम जो जानकारी एकत्र करते हैं',
		},
		descriptions: [
			{
				en: 'When you use our contact form, we may collect the following personal information:',
				ta: 'நீங்கள் எங்கள் தொடர்பு படிவத்தை பயன்படுத்தும் போது, நாங்கள் கீழ்க்கண்ட தனிப்பட்ட தகவல்களை சேகரிக்கக்கூடும்:',
				hi: 'जब आप हमारे संपर्क फ़ॉर्म का उपयोग करते हैं, तो हम निम्नलिखित व्यक्तिगत जानकारी एकत्र कर सकते हैं:',
			},
			{
				en: '- Name',
				ta: '- பெயர்',
				hi: '- नाम',
			},
			{
				en: '- Email Address',
				ta: '- மின்னஞ்சல் முகவரி',
				hi: '- ईमेल पता',
			},
			{
				en: '- Phone Number',
				ta: '- தொலைபேசி எண்',
				hi: '- फोन नंबर',
			},
			{
				en: '- Subject',
				ta: '- தலைப்பு',
				hi: '- विषय',
			},
			{
				en: '- Message',
				ta: '- செய்தி',
				hi: '- संदेश',
			},
			{
				en: 'We collect this information solely for the purpose of responding to your inquiries and providing you with the necessary assistance. We do not share your personal information with third parties unless required by law.',
				ta: 'இந்த தகவலை உங்கள் கேள்விகளுக்குப் பதிலளிப்பதற்கும், உங்களுக்கு தேவையான உதவியை வழங்குவதற்கும் மட்டுமே நாங்கள் சேகரிக்கிறோம். சட்டத்தின் கட்டாயமானதாக இல்லாதவரை, உங்கள் தனிப்பட்ட தகவல்களை நாங்கள் மூன்றாம் தரப்புகளுடன் பகிர்வதில்லை.',
				hi: 'हम यह जानकारी केवल आपकी पूछताछ का जवाब देने और आपको आवश्यक सहायता प्रदान करने के उद्देश्य से एकत्र करते हैं। कानून द्वारा आवश्यक होने पर ही हम आपकी व्यक्तिगत जानकारी को तृतीय पक्षों के साथ साझा करते हैं।',
			},
		],
	},
	{
		title: {
			en: 'How We Use Your Information',
			ta: 'நாங்கள் உங்கள் தகவல்களை எவ்வாறு பயன்படுத்துகிறோம்',
			hi: 'हम आपकी जानकारी का उपयोग कैसे करते हैं',
		},
		descriptions: [
			{
				en: 'We use the information you provide through our contact form to:',
				ta: 'நீங்கள் எங்கள் தொடர்பு படிவத்தின் மூலம் வழங்கிய தகவலை நாங்கள் பயன்படுத்துகிறோம்:',
				hi: 'हम आपके द्वारा हमारे संपर्क फ़ॉर्म के माध्यम से प्रदान की गई जानकारी का उपयोग करते हैं:',
			},
			{
				en: '- Respond to your inquiries and requests.',
				ta: '- உங்கள் கேள்விகளுக்கும் கோரிக்கைகளுக்கும் பதிலளிக்க.',
				hi: '- आपकी पूछताछ और अनुरोधों का जवाब देने के लिए।',
			},
			{
				en: '- Communicate with you regarding your appointments or healthcare services.',
				ta: '- உங்கள் நேரங்கள் அல்லது சுகாதார சேவைகள் குறித்து உங்களுடன் தொடர்பு கொள்ள.',
				hi: '- आपकी नियुक्तियों या स्वास्थ्य सेवाओं के संबंध में आपसे संपर्क करने के लिए।',
			},
			{
				en: '- Improve our website and services based on your feedback.',
				ta: '- உங்கள் கருத்துக்களின் அடிப்படையில் எங்கள் வலைத்தளத்தையும் சேவைகளையும் மேம்படுத்த.',
				hi: '- आपकी प्रतिक्रिया के आधार पर हमारी वेबसाइट और सेवाओं में सुधार करने के लिए।',
			},
		],
	},
	{
		title: {
			en: 'Data Security',
			ta: 'தரவுகள் பாதுகாப்பு',
			hi: 'डेटा सुरक्षा',
		},
		descriptions: [
			{
				en: 'We take appropriate measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. Our website employs industry-standard security protocols to safeguard your data.',
				ta: 'உங்கள் தனிப்பட்ட தகவல்களை அனுமதிக்கப்படாத அணுகல், வெளிப்படுத்தல், மாற்றம் அல்லது அழிப்பு ஆகியவற்றிலிருந்து பாதுகாக்க நாங்கள் பொருத்தமான நடவடிக்கைகளை எடுக்கிறோம். எங்கள் வலைத்தளம் உங்கள் தரவுகளைப் பாதுகாக்க தொழில்துறை தரநிலைகள் உள்ள பாதுகாப்பு நெறிமுறைகளைப் பயன்படுத்துகிறது.',
				hi: 'हम आपकी व्यक्तिगत जानकारी को अनधिकृत पहुंच, प्रकटीकरण, परिवर्तन या विनाश से बचाने के लिए उचित उपाय करते हैं। हमारी वेबसाइट आपके डेटा की सुरक्षा के लिए उद्योग-मानक सुरक्षा प्रोटोकॉल का उपयोग करती है।',
			},
		],
	},
	{
		title: {
			en: 'Third-Party Links',
			ta: 'மூன்றாம் தரப்பின் இணைப்புகள்',
			hi: 'तीसरे पक्ष के लिंक',
		},
		descriptions: [
			{
				en: 'Our website may contain links to third-party websites. Please note that we do not control the privacy practices of these external websites. We encourage you to review the privacy policies of any website you visit via our links.',
				ta: 'எங்கள் வலைத்தளம் மூன்றாம் தரப்பின் இணையதளங்களுக்கான இணைப்புகளைக் கொண்டிருக்கலாம். இந்த வெளிப்புற இணையதளங்களின் தனியுரிமை நடைமுறைகளை நாங்கள் கட்டுப்படுத்துவதில்லை என்பதை நினைவில் கொள்ளவும். எங்கள் இணைப்புகள் மூலம் நீங்கள் அணுகும் எந்தவொரு இணையதளத்தின் தனியுரிமைக் கொள்கைகளையும் நீங்கள் ஆய்வு செய்வதை நாங்கள் ஊக்குவிக்கிறோம்.',
				hi: 'हमारी वेबसाइट तृतीय-पक्ष वेबसाइटों के लिंक प्रदान कर सकती है। कृपया ध्यान दें कि हम इन बाहरी वेबसाइटों की गोपनीयता प्रथाओं को नियंत्रित नहीं करते हैं। हम आपको प्रोत्साहित करते हैं कि आप हमारी लिंक के माध्यम से विज़िट की गई किसी भी वेबसाइट की गोपनीयता नीतियों की समीक्षा करें।',
			},
		],
	},
	{
		title: {
			en: 'Changes to Privacy Policy',
			ta: 'தனியுரிமைக் கொள்கையில் மாற்றங்கள்',
			hi: 'गोपनीयता नीति में परिवर्तन',
		},
		descriptions: [
			{
				en: 'We may update our Privacy Policy to reflect changes in our practices or legal requirements. Any updates will be posted on this page, and the effective date will be modified accordingly.',
				ta: 'எங்கள் நடைமுறைகள் அல்லது சட்டப்பூர்வ தேவைகளைப் பிரதிபலிக்கும் வகையில் எங்கள் தனியுரிமைக் கொள்கையைப் புதுப்பிக்கலாம். புதுப்பிப்புகள் இந்தப் பக்கத்தில் இடப்படும், மேலும் செயல்படுத்தும் தேதி முறையாக மாற்றப்படும்.',
				hi: 'हम अपनी प्रथाओं या कानूनी आवश्यकताओं में बदलाव को दर्शाने के लिए अपनी गोपनीयता नीति को अपडेट कर सकते हैं। कोई भी अपडेट इस पृष्ठ पर पोस्ट किया जाएगा, और प्रभावी तिथि के अनुसार संशोधित की जाएगी।',
			},
		],
	},
	{
		title: {
			en: 'Contact Us',
			ta: 'எங்களைத் தொடர்பு கொள்ளவும்',
			hi: 'हमसे संपर्क करें',
		},
		descriptions: [
			{
				en: `If you have any questions or concerns regarding our Privacy Policy, please contact us at ${CONTACTS.email} or ${CONTACTS.phone}.`,
				ta: `எங்கள் தனியுரிமைக் கொள்கை தொடர்பாக ஏதேனும் கேள்விகள் அல்லது சந்தேகங்கள் இருப்பின், ${CONTACTS.email} அல்லது ${CONTACTS.phone} என்ற முகவரியில் எங்களைத் தொடர்பு கொள்ளவும்.`,
				hi: `यदि आपको हमारी गोपनीयता नीति के बारे में कोई प्रश्न या चिंता है, तो कृपया ${CONTACTS.email} या ${CONTACTS.phone} पर हमसे संपर्क करें।`,
			},
		],
	},
];
