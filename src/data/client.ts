// ===== SITE CONSTANTS =====
export const SITE = {
	title: "Cornerstone Painting Co.",
	tagline: "Trusted Since 1987",
	description: "Cornerstone Painting Co. is Chula Vista's trusted painting specialist for residential and commercial clients. Licensed, insured, and bonded — serving Greater San Diego since 1987.",
	url: "https://www.yourwebsite.com",
	author: "Cornerstone Painting Co.",
	locale: "en",
};

// ===== BUSINESS INFO =====
export const BUSINESS = {
	name: SITE.title,
	email: "info@example.com",
	phoneForTel: "555-555-5555",
	phoneFormatted: "(555) 555-5555",
	logo: "/assets/favicons/favicon.svg",
	address: {
		lineOne: "Chula Vista",
		lineTwo: "",
		city: "Chula Vista",
		state: "CA",
		zip: "91910",
		mapLink: "https://maps.google.com/?q=Chula+Vista,+CA+91910",
	},
	socials: {
		facebook: "https://www.facebook.com/CornerstonePaintingCoSD",
		instagram: "https://www.instagram.com/cornerstone_painting_co/",
	},
};

// ===== SEO DEFAULTS =====
export const SEO = {
	title: SITE.title,
	description: SITE.description,
};

// ===== OPEN GRAPH DEFAULTS =====
export const OG = {
	locale: "en_US",
	image: "/assets/social.jpg", // Default fallback social image located in public/
};
