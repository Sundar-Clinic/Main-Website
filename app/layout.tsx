import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Sundar Clinic',
	description:
		'Not just a better healthcare, but a better healthcare experience.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
