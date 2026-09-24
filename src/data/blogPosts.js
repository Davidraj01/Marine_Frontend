/**
 * Posts published on the WordPress blog (a separate site on a subdomain).
 *
 * Single source of truth for anything the main site needs to know about them:
 *   - scripts/generate-sitemap.js lists them in sitemap.xml
 *   - pages/Home.jsx emits BLOG_SCHEMA as JSON-LD
 *
 * Values (headline, dates, author, image, section) were read from each live
 * post. To add a post, append an entry here and re-run the build.
 */

export const SITE_URL = "https://www.marinebiodiversityconservation.com";
export const BLOG_URL = "https://blog.marinebiodiversityconservation.com";
export const BLOG_SITEMAP_URL = `${BLOG_URL}/sitemap_index.xml`;

const ORGANIZATION_ID = `${SITE_URL}/#organization`;

const AUTHOR = {
  "@type": "Person",
  name: "S. David Raj",
  url: `${BLOG_URL}/author/marine_admin/`,
};

export const BLOG_POSTS = [
  {
    url: `${BLOG_URL}/marine-biodiversity-conservation-trust-tamil-nadu-guide/`,
    headline: "Marine Biodiversity Conservation Trust Tamil Nadu Guide",
    section: "Coastal Ecosystems",
    datePublished: "2026-09-22T06:54:20+00:00",
    dateModified: "2026-09-22T06:57:33+00:00",
    image: `${BLOG_URL}/wp-content/uploads/2026/09/MBCT.png`,
  },
  {
    url: `${BLOG_URL}/marine-conservation-ngo-tamil-nadu-protecting-oceans/`,
    headline: "Marine Conservation NGO Tamil Nadu – Protecting Oceans",
    section: "Conservation Action",
    datePublished: "2026-09-22T07:19:13+00:00",
    dateModified: "2026-09-22T07:19:13+00:00",
    image: `${BLOG_URL}/wp-content/uploads/2026/09/MBCT-1.png`,
  },
  {
    url: `${BLOG_URL}/ocean-conservation-tamil-nadu-ocean-awareness/`,
    headline: "Ocean Conservation Tamil Nadu – Ocean Awareness",
    section: "Ocean Threats",
    datePublished: "2026-09-23T05:43:04+00:00",
    dateModified: "2026-09-23T05:43:04+00:00",
    image: `${BLOG_URL}/wp-content/uploads/2026/09/MBCT-2.png`,
  },
  {
    url: `${BLOG_URL}/coastal-conservation-tamil-nadu-conservation-efforts/`,
    headline: "Coastal Conservation Tamil Nadu – Conservation Efforts",
    section: "Coral Reefs",
    datePublished: "2026-09-23T11:32:09+00:00",
    dateModified: "2026-09-23T11:32:09+00:00",
    image: `${BLOG_URL}/wp-content/uploads/2026/09/MBCT-3.png`,
  },
];

// Self-contained JSON-LD graph: a Blog entity plus one BlogPosting per post,
// published by the main-site Organization (@id matches index.html).
export const BLOG_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": `${BLOG_URL}/#blog`,
      url: `${BLOG_URL}/`,
      name: "Marine Biodiversity Conservation Blog",
      inLanguage: "en-US",
      publisher: {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: "Marine Biodiversity Conservation Trust",
        url: SITE_URL,
      },
      blogPost: BLOG_POSTS.map((post) => ({ "@id": `${post.url}#blogposting` })),
    },
    ...BLOG_POSTS.map((post) => ({
      "@type": "BlogPosting",
      "@id": `${post.url}#blogposting`,
      url: post.url,
      mainEntityOfPage: { "@type": "WebPage", "@id": post.url },
      headline: post.headline,
      articleSection: post.section,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      image: post.image,
      inLanguage: "en-US",
      author: AUTHOR,
      publisher: { "@id": ORGANIZATION_ID },
      isPartOf: { "@id": `${BLOG_URL}/#blog` },
    })),
  ],
};
