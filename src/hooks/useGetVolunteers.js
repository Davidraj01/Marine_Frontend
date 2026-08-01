import { useEffect, useState } from 'react';
import { BASE_URL } from '../utils/contants';
import axios from 'axios';

export default function useGetVolunteers(open) {
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!open) return;

    setLoading(true);
    setError(null);

    // 1️⃣ Using axios.get instead of fetch
    axios
      .get(BASE_URL + '/volunteers')
      .then((response) => {
        const data = response.data;
        setVolunteers(data.data || []);
      })
      .catch((err) => {
        console.error('Error fetching volunteers:', err);
        if (err.response) {
          // Server responded with a non-2xx status
          setError(err.response.data?.error || err.response.statusText);
        } else if (err.request) {
          // Request made but no response
          setError('Server not responding. Check backend.');
        } else {
          // Something else
          setError(err.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [open]);

  return { volunteers, loading, error };
}
