type FAQData = ReadonlyArray<
	Readonly<{
		_id: string;
		question: string;
		answer: string;
	}>
>;

type TestimonailData = ReadonlyArray<
	Readonly<{
		_id: string;
		stars: number;
		name: string;
		review: string;
		link: string;
	}>
>;
