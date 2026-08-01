import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ 
  title, 
  description, 
  canonical, 
  image, 
  type = 'website',
  schema 
}) => {
  const siteName = 'Marine Conservation Trust';
  const siteUrl = 'https://www.marinebiodiversityconservation.com';
  const defaultImage = '/img-1.webp';
  
  const fullTitle = title 
    ? `${title} — ${siteName}` 
    : 'Marine Conservation Trust — Protect Ocean Life & Reefs';
  const fullUrl = canonical || siteUrl;
  const metaImage = image 
    ? (image.startsWith('http') ? image : `${siteUrl}${image}`) 
    : `${siteUrl}${defaultImage}`;

  return (
    <Helmet>
      {/* Language */}
      <html lang="en" />

      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Marine Biodiversity Conservation Trust" />
      <meta name="theme-color" content="#002b36" />

      {/* Single Canonical (index.html has none — SEO.jsx is the sole source) */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${fullTitle} — Marine conservation`} />
      <meta property="og:site_name" content="Marine Biodiversity Conservation Trust" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImage} />

      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  canonical: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  schema: PropTypes.object
};

export default SEO;
