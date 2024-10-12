type LegalDataBase = Readonly<{
	title: Record<LocaleLanguages, string>;
	descriptions: Array<Record<LocaleLanguages, string>>;
}>;

type TermsAndConditionsData = ReadonlyArray<LegalDataBase>;

type PrivacyPolicyData = ReadonlyArray<LegalDataBase>;
