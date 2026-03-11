import type { CookieConsentConfig } from 'vanilla-cookieconsent';

export const cookieConsentConfig: CookieConsentConfig = {
	guiOptions: {
		consentModal: {
			layout: 'bar',
			position: 'bottom'
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
		functional: {
			enabled: false,
			readOnly: false
		},
		analytics: {
			enabled: false,
			readOnly: false,
			autoClear: {
				cookies: [{ name: /^_pk_/ }, { name: /^mtm_/ }, { name: /^MATOMO_/ }]
			}
		}
	},

	language: {
		default: 'de',
		translations: {
			de: {
				consentModal: {
					title: 'Cookie-Einstellungen',
					description: 'Diese Website verwendet Cookies, um dir die bestmoegliche Erfahrung zu bieten. Notwendige Cookies sind fuer die Funktion der Website erforderlich.',
					acceptAllBtn: 'Alle akzeptieren',
					acceptNecessaryBtn: 'Nur notwendige',
					showPreferencesBtn: 'Einstellungen',
					footer: '<a href="/datenschutz">Datenschutz</a><span class="mx-2">·</span><a href="/impressum">Impressum</a>'
				},
				preferencesModal: {
					title: 'Cookie-Einstellungen',
					acceptAllBtn: 'Alle akzeptieren',
					acceptNecessaryBtn: 'Nur notwendige',
					savePreferencesBtn: 'Einstellungen speichern',
					closeIconLabel: 'Schliessen',
					sections: [
						{
							title: 'Cookie-Nutzung',
							description: 'Wir verwenden Cookies, um die grundlegenden Funktionen der Website zu gewaehrleisten und dein Surferlebnis zu verbessern.'
						},
						{
							title: 'Notwendige Cookies',
							description: 'Diese Cookies sind fuer die ordnungsgemaesse Funktion der Website unerlasslich und koennen nicht deaktiviert werden.',
							linkedCategory: 'necessary'
						},
						{
							title: 'Funktionale Cookies',
							description: 'Diese Cookies speichern deine Einstellungen lokal in deinem Browser.',
							linkedCategory: 'functional'
						},
						{
							title: 'Analyse-Cookies',
							description: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren, und ermoeglichen es uns, sie zu verbessern.',
							linkedCategory: 'analytics',
							cookieTable: {
								headers: {
									name: 'Name',
									description: 'Beschreibung',
									duration: 'Dauer'
								},
								body: [
									{
										name: '_pk_id',
										description: 'Speichert eine eindeutige Besucher-ID fuer Matomo',
										duration: '13 Monate'
									},
									{
										name: '_pk_ses',
										description: 'Speichert temporaere Sitzungsdaten fuer Matomo',
										duration: '30 Minuten'
									},
									{
										name: '_pk_ref',
										description: 'Speichert die Referrer-URL des Besuchers',
										duration: '6 Monate'
									},
									{
										name: 'mtm_*',
										description: 'Matomo Tag Manager Cookies',
										duration: 'Variabel'
									}
								]
							}
						}
					]
				}
			}
		}
	}
};
