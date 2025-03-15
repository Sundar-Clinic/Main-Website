import Image from 'next/image';
import { urlForImage } from './image';
import { PortableTextReactComponents } from '@portabletext/react';

export const ptComponents: Partial<PortableTextReactComponents> = {
	marks: {
		left: ({ children }: any) => (
			<div className='text-left'>{children}</div>
		),
		center: ({ children }: any) => (
			<div className='text-center w-full'>{children}</div>
		),
		right: ({ children }: any) => (
			<div className='text-right'>{children}</div>
		),
		justify: ({ children }: any) => (
			<div className='text-justify'>{children}</div>
		),
	},
	types: {
		image: ({
			value,
		}: {
			value: {
				asset: { _ref: string };
				alt?: string;
				height?: number;
				width?: number;
			};
		}) => {
			if (!value?.asset?._ref) {
				return null;
			}

			return (
				<Image
					alt={value.alt || ' '}
					loading='lazy'
					height={value.height || 500}
					width={value.width || 500}
					src={urlForImage(value).format('webp').url()}
					style={{
						width: '100%',
						marginBottom: '24px',
					}}
					className='max-w-3xl rounded-lg mx-auto'
				/>
			);
		},
	},
};
