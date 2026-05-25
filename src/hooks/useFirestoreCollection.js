import { useEffect, useState } from 'react';
import { onSnapshot } from 'firebase/firestore';

export const useFirestoreCollection = (query, options = {}) => {
  const { transform, onError } = options;
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) {
      setData([]);
      setError(null);
      setLoading(false);
      return undefined;
    }

    setLoading(true);
    const unsubscribe = onSnapshot(
      query,
      (snapshot) => {
        const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setData(transform ? transform(items) : items);
        setError(null);
        setLoading(false);
      },
      (snapshotError) => {
        setError(snapshotError);
        setLoading(false);
        if (onError) {
          onError(snapshotError);
        }
      }
    );

    return unsubscribe;
  }, [query, transform, onError]);

  return { data, error, loading };
};
