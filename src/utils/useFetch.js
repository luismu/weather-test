import { useState, useEffect } from 'react';

const useFetch = (address) => {
  const URL = '/api/Weather/forecast?address=';
  const getForecastUrl = `${URL}${address}`;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(getForecastUrl);
        const jsonData = await response.json();

        if (!response.ok) {
          throw new Error(jsonData.message || 'Error en la solicitud');
        }

        setData(jsonData);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError(error.message || 'Error en la solicitud');
        setLoading(false);
      }
    };

    if (address) {
      fetchData();
    }
  }, [address, getForecastUrl]);

  return { data, loading, error };
};

export default useFetch;
