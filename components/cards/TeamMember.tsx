/**
 * Team Member Component
 */

// Dependencies
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import z from 'zod';
import { Button } from '@/components/ui/button';
import {
	LucideIcon,
	Instagram,
	Twitter,
	Linkedin,
	Mail,
	Globe,
	Youtube,
} from 'lucide-react';

type TeamMemberCardProps = React.ComponentProps<'div'> & {
	member: TeamMemberData[number];
};

const userSocials = z
	.array(
		z.object({ Icon: z.custom<LucideIcon>(), url: z.string().or(z.null()) })
	)
	.transform((val) =>
		val.filter((social) => social.url !== null && social.url.length !== 0)
	);

type UserSocials = z.infer<typeof userSocials>;

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
	const socials: UserSocials = userSocials.parse([
		{ Icon: Instagram, url: member.instagram },
		{ Icon: Linkedin, url: member.linkedin },
		{ Icon: Globe, url: member.website },
		{ Icon: Youtube, url: member.youtube },
		{ Icon: Twitter, url: member.twitter },
		{ Icon: Mail, url: member.email ? `mailto:${member.email}` : null },
	]);

	return (
		<div className='w-full overflow-hidden rounded-lg group bg-slate-100 z-20'>
			<div className='relative'>
				<span className='text-xs md:text-sm absolute bottom-4 left-4 bg-white text-slate-500 border border-slate-300 px-4 py-2 rounded-xl font-medium z-20'>
					{member.role}
				</span>
				<div className='w-full overflow-hidden z-10'>
					<Image
						src={member.image}
						alt={member.alt}
						width={100}
						height={100}
						className='w-full h-auto object-contain group-hover:scale-105 transition-all duration-300'
						priority
						unoptimized
					></Image>
				</div>
			</div>
			<div className='flex flex-col items-center justify-center p-4 text-center'>
				<h4 className='font-heading text-xl mt-4 font-medium'>
					{member.name}
				</h4>
				<p className='text-sm text-slate-500'>
					<span>{member.qualifications}</span>{' '}
					{member.registrationNo && (
						<>
							•{' '}
							<span title='Doctor Registration Number'>
								{member.registrationNo}
							</span>
						</>
					)}
				</p>
				<p className='mt-2'>{member.bio}</p>
				<p className='mt-2'>
					Languages spoken:{' '}
					<span className='font-medium'>
						{member.languages.join(', ')}
					</span>
				</p>
				<ul className='flex w-full gap-2 items-center justify-center mt-4'>
					{socials.map((social) => (
						<Link
							href={social.url!}
							target={'_blank'}
							key={`team-member-social-${member._id}-${social.url}`}
							title={social.url!}
							className='group/team'
						>
							<Button asChild size='icon' variant={'ghost'}>
								<li>
									<social.Icon
										strokeWidth={1.5}
										size={24}
										className='group-hover/team:text-primary-clinic transition-all'
									/>
								</li>
							</Button>
						</Link>
					))}
				</ul>
			</div>
		</div>
	);
};

export default TeamMemberCard;
