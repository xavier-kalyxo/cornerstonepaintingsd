import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
	site: "http://cornerstonepaintingsd.com", // update me!
	redirects: {
		"/interior-residential-painting/": "/residential-painting/interior/",
		"/exterior-residential-painting/": "/residential-painting/exterior/",
		"/interior-commercial-painting/": "/commercial-painting/interior/",
		"/exterior-commercial-painting/": "/commercial-painting/exterior/",
		"/meet-the-owner/": "/about/",
		"/request-estimate-form/": "/contact/",
		"/faqs/": "/faq/",
	},
	integrations: [
		icon(),
		sitemap({
			filter: (page) => !page.includes("/admin"),
			changefreq: "weekly",
			priority: 0.7,
		}),
	],
	image: {
		layout: "constrained",
	},
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Barlow Condensed",
			cssVariable: "--font-heading",
			weights: [500, 600, 700],
		},
		{
			provider: fontProviders.google(),
			name: "Barlow",
			cssVariable: "--font-body",
			weights: [400, 500, 600],
		},
	],
});
