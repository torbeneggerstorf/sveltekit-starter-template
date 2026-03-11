import type { CookieConsentConfig } from 'vanilla-cookieconsent';

// TODO: Adapt texts and categories to your project
export const cookieConsentConfig: CookieConsentConfig = {
	guiOptions: {
		consentModal: {
			layout: 'box inline',
			position: 'bottom left'
		},
		preferencesModal: {
			layout: 'box'
		}
	},
	categories: {
		necessary: {
			enabled: true,
			readOnly: true
		},
		analytics: {
			enabled: false,
			autoClear: {
				cookies: [{ name: /^_pk_/ }]
			}
		}
	},
	language: {
		default: 'de',
		translations: {
			de: {
				consentModal: {
					title: 'Cookies & Datenschutz',
					description: 'Diese Website verwendet Cookies, um die Nutzung der Seite zu analysieren und das Erlebnis zu verbessern. Du kannst deine Einstellungen jederzeit anpassen.',
					acceptAllBtn: 'Alle akzeptieren',
					acceptNecessaryBtn: 'Nur notwendige',
					showPreferencesBtn: 'Einstellungen'
				},
				preferencesModal: {
					title: 'Cookie-Einstellungen',
					acceptAllBtn: 'Alle akzeptieren',
					acceptNecessaryBtn: 'Nur notwendige',
					savePreferencesBtn: 'Einstellungen speichern',
					sections: [
						{
							title: 'Cookie-Nutzung',
							description: 'Wir verwenden Cookies, um grundlegende Funktionen der Website sicherzustellen und um zu verstehen, wie du unsere Website nutzt.'
						},
						{
							title: 'Notwendige Cookies',
							description: 'Diese Cookies sind fuer die Grundfunktionen der Website erforderlich und koennen nicht deaktiviert werden.',
							linkedCategory: 'necessary'
						},
						{
							title: 'Analyse-Cookies',
							description: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren. Alle Daten werden anonymisiert.',
							linkedCategory: 'analytics'
						}
					]
				}
			}
		}
	}
};
