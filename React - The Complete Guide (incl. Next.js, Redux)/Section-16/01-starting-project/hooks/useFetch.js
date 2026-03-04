import { useEffect, useState } from 'react';

export default function useFetch(fetchFn, initialValue) {
    const [isFetching, setIsFetching] = useState();
    const [fetchedData, setFetchedData] = useState(initialValue);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchPlaces() {
            setIsFetching(true);
            try {
                const places = await fetchFn();
                setFetchedData(places);
            } catch (error) {
                setError({ message: error.message || 'Failed to fetch data.' });
            } finally {
                setIsFetching(false);
            }
        }

        fetchPlaces();
    }, [fetchFn]);

    return {
        isFetching,
        fetchedData,
        error,
        setFetchedData
    }
}