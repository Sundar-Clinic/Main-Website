import Image from 'next/image';
import React from 'react';

type TeamMemberCardProps = React.ComponentProps<'div'> & {
	member: TeamMemberData[number];
};

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
	return (
		<div className='w-full overflow-hidden rounded-lg group bg-slate-100 z-20'>
			<div className='relative'>
				<span className='absolute bottom-4 left-4 bg-white text-slate-500 border border-slate-300 px-4 py-2 rounded-xl font-medium z-20'>
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
			</div>
		</div>
	);
};

export default TeamMemberCard;
