import React from 'react';
import { Post } from '@/@types/cms';
import LocationCTA from './LocationCTA';
import WhatsAppChannelCTA from './WhatsAppChannel';
import NewsLetterCTA from './NewsletterCTA';

interface Props extends React.ComponentProps<'section'> {
	cta: Post['cta'];
}

const CTA: React.FC<Props> = ({ cta, ...props }) => {
	switch (cta) {
		case 'location': {
			return <LocationCTA {...props} />;
		}
		case 'whatsapp-channel': {
			return <WhatsAppChannelCTA {...props} />;
		}
		case 'newsletter': {
			return <NewsLetterCTA {...props} />;
		}
		default: {
			return null;
		}
	}
};

export default CTA;
