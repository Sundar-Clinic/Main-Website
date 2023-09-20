import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
	return (
		<main>
			<section className='max-w-5xl mx-auto w-full p-4 mt-8 grid grid-cols-1 md:grid-cols-2 gap-4'>
				<div className='flex flex-col gap-4'>
					<Skeleton className='w-full h-16 rounded-lg bg-slate-300' />
					<Skeleton className='w-full h-12 rounded-lg bg-slate-300' />
					<div className='flex items-center gap-4'>
						<Skeleton className='w-full h-8 rounded-lg bg-slate-300' />
						<Skeleton className='w-full h-8 rounded-lg bg-slate-300' />
					</div>
				</div>
				<div>
					<Skeleton className='w-full h-full rounded-lg bg-slate-300' />
				</div>
			</section>
			<section className='max-w-5xl mx-auto w-full p-4 mt-8 flex flex-col gap-4'>
				{Array(4)
					.fill(true)
					.map((_, i) => (
						<Skeleton
							key={i}
							className='w-full h-10 rounded-lg bg-slate-300'
						/>
					))}
			</section>
		</main>
	);
}
