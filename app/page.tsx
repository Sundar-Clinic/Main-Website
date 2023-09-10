import Contact from '@/components/home/Contact';
import FAQ from '@/components/home/FAQ';
import Gallery from '@/components/home/Gallery';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
	return (
		<main className=''>
			<Hero />
			<Services />
			<Gallery />
			<Testimonials />
			<Contact />
			<FAQ />
		</main>
	);
}
