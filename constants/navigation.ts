// Navigation Data

interface Navdata {
	name: Record<LocaleLanguages, string>;
	url: string;
	target: '_blank' | '_self';
}

type NavdataCollection = ReadonlyArray<Navdata>;

const COMMON_NAVIGATION: NavdataCollection = [
	{
		name: {
			en: 'Home',
			ta: 'முகப்பு',
			hi: 'होम',
		},
		url: '/',
		target: '_self',
	},
	{
		name: {
			en: 'Services',
			ta: 'சேவைகள்',
			hi: 'सेवाएं',
		},
		url: '/#services',
		target: '_self',
	},
	{
		name: {
			en: 'Contact',
			ta: 'தொடர்பு',
			hi: 'संपर्क',
		},
		url: '/contact',
		target: '_self',
	},
	{
		name: {
			en: 'About',
			ta: 'பற்றி',
			hi: 'के बारे में',
		},
		url: '/about',
		target: '_self',
	},
	{
		name: {
			en: 'Gallery',
			ta: 'கேலரி',
			hi: 'गैलरी',
		},
		url: '/gallery',
		target: '_self',
	},
	{
		name: {
			en: 'Blog',
			ta: 'செய்தி',
			hi: 'समाचार',
		},
		url: '/blogs',
		target: '_self',
	},
];

export const NAVBAR_NAVIGATION: NavdataCollection = [...COMMON_NAVIGATION];

export const FOOTER_NAVIGATION: NavdataCollection = [
	...COMMON_NAVIGATION,
	{
		name: {
			en: 'Team',
			ta: 'அணி',
			hi: 'टीम',
		},
		url: '/team',
		target: '_self',
	},
	{
		name: {
			en: 'Terms & Conditions',
			ta: 'விதிகள் மற்றும் நிபந்தனைகள்',
			hi: 'शर्तें और नियम',
		},
		url: '/terms-and-conditions',
		target: '_self',
	},
	{
		name: {
			en: 'Privacy Policy',
			ta: 'தனியுரிமை கொள்கை',
			hi: 'गोपनीयता नीति',
		},
		url: '/privacy-policy',
		target: '_self',
	},
	{
		name: {
			en: 'Legal',
			ta: 'சட்டம்',
			hi: 'कानूनी',
		},
		url: '/legal',
		target: '_self',
	},
];
