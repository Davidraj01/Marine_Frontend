// Google Analytics 4
export const GA_TRACKING_ID = 'G-MGTPSRLENQ';

// Facebook Pixel
export const FB_PIXEL_ID = 'XXXXXXXXXXXXXXX'; // Replace with actual ID

export const pageview = (url) => {
  if (window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
  if (window.fbq) {
    window.fbq('track', 'PageView');
  }
};

export const event = ({ action, category, label, value }) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
