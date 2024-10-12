// Since schemas are code, we can programmatically build
// fields to hold translated values. We'll use this array
// of languages to determine which fields to define.
export const supportedLanguages = [
	{ id: 'en', title: 'English', isDefault: true },
	{ id: 'ta', title: 'Tamil' },
	{ id: 'hi', title: 'Hindi' },
];

export const baseLanguage = supportedLanguages.find((l) => l.isDefault);
