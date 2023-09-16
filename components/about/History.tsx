import React from 'react';

const History = () => {
	return (
		<section className='w-full mt-8 bg-slate-400/50' id='history'>
			<div className='p-4 max-w-7xl mx-auto grid grid-cols-1 place-items-center h-full min-h-[60vh]'>
				<div className='bg-white p-4 rounded-lg shadow-lg max-w-4xl flex flex-col gap-4'>
					<p className='font-medium text-lg md:text-xl'>History</p>
					<h1 className='font-heading font-medium text-2xl md:text-4xl max-w-3xl'>
						Welcome to Sundar Clinic: Where Healthcare Meets
						Exceptional Experience
					</h1>
					<p className='text-lg md:text-xl text-justify max-w-5xl text-slate-500'>
						At Sundar Clinic, we&apos;re not just about healthcare;
						we&apos;re about crafting a better healthcare
						experience. Since our establishment in 2013, we&apos;ve
						been a cornerstone of wellness in the vibrant community
						of Pappanchatiram. Our guiding individual is Dr. Ekta
						Bharti M.B.B.S., a dedicated general physician who has
						been leading the way to better health for our community.
					</p>
				</div>
			</div>
		</section>
	);
};

export default History;
