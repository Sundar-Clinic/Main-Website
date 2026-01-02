"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/routing";

interface CookieConsentProps extends React.HTMLAttributes<HTMLDivElement> {
	demo?: boolean;
	onAcceptCallback?: () => void;
	onDeclineCallback?: () => void;
}

const CookieConsent = React.forwardRef<HTMLDivElement, CookieConsentProps>(
	(
		{
			demo = false,
			onAcceptCallback = () => {},
			onDeclineCallback = () => {},
			className,
			...props
		},
		ref,
	) => {
		const t = useTranslations("cookieConsent");
		const [isOpen, setIsOpen] = React.useState(false);
		const [hide, setHide] = React.useState(false);

		const handleAccept = React.useCallback(() => {
			setIsOpen(false);
			document.cookie =
				"cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
			setTimeout(() => {
				setHide(true);
			}, 700);
			onAcceptCallback();
		}, [onAcceptCallback]);

		const handleDecline = React.useCallback(() => {
			setIsOpen(false);
			setTimeout(() => {
				setHide(true);
			}, 700);
			onDeclineCallback();
		}, [onDeclineCallback]);

		React.useEffect(() => {
			try {
				setIsOpen(true);
				if (document.cookie.includes("cookieConsent=true") && !demo) {
					setIsOpen(false);
					setTimeout(() => {
						setHide(true);
					}, 700);
				}
			} catch (error) {
				console.warn("Cookie consent error:", error);
			}
		}, [demo]);

		if (hide) return null;

		const containerClasses = cn(
			"fixed z-50 transition-all duration-700",
			!isOpen ? "translate-y-full opacity-0" : "translate-y-0 opacity-100",
			className,
		);

		const commonWrapperProps = {
			ref,
			className: cn(
				containerClasses,
				"left-0 right-0 sm:left-4 bottom-4 w-full sm:max-w-3xl",
			),
			...props,
		};

		return (
			<div {...commonWrapperProps}>
				<Card className="mx-3 p-0 py-3 shadow-lg">
					<CardContent className="sm:flex grid gap-4 p-0 px-3.5">
						<CardDescription className="text-xs sm:text-sm flex-1">
							{t("description")}{" "}
							<Link
								href="/privacy-policy"
								className="text-xs text-primary underline underline-offset-4 hover:no-underline"
							>
								{t("learnMore")}
							</Link>
						</CardDescription>
						<div className="flex items-center gap-2 justify-end sm:gap-3">
							<Button
								onClick={handleDecline}
								size="sm"
								variant="secondary"
								className="text-xs h-7"
							>
								{t("decline")}
								<span className="sr-only sm:hidden">{t("decline")}</span>
							</Button>
							<Button onClick={handleAccept} size="sm" className="text-xs h-7">
								{t("accept")}
								<span className="sr-only sm:hidden">{t("accept")}</span>
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		);
	},
);

CookieConsent.displayName = "CookieConsent";
export { CookieConsent };
export default CookieConsent;
