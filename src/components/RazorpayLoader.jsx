import { useEffect } from 'react';

const RazorpayLoader = () => {
  useEffect(() => {
    if (document.getElementById('razorpay-script')) return;

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.id = 'razorpay-script';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Optional: Cleanup if necessary, though usually we want to keep it once loaded
    };
  }, []);

  return null;
};

export default RazorpayLoader;
