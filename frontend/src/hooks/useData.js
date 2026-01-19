import { useState, useEffect } from 'react';

const API_BASE_URL = 'http://localhost:5000/api';

export const useData = (endpoint, filters = {}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const queryParams = new URLSearchParams();
                Object.entries(filters).forEach(([key, value]) => {
                    if (value) queryParams.append(key, value);
                });

                const url = `${API_BASE_URL}/${endpoint}?${queryParams.toString()}`;
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Error fetching data: ${response.statusText}`);
                }

                const result = await response.json();
                setData(result.data || []);
                setError(null);
            } catch (err) {
                setError(err.message);
                console.error("Fetch error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint, JSON.stringify(filters)]);

    return { data, loading, error };
};
