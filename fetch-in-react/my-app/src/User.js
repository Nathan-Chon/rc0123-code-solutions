/* eslint-disable no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import UserCard from './UserCard';

export default function User({ userId, onCancel }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [user, setUser] = useState();

  /* your code here (hint: useEffect) */
  useEffect(() => {
    async function fetchItems() {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!res.ok) throw new Error(`fetch Error ${res.status}`);
        const data = await res.json();
        setUser(data);
      } catch (err) {
        setError(err)
      }
      setIsLoading(false);
    }
    fetchItems();
  }, [userId]);


  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return <p>Error! {error.message}</p>;
  }

  return (
    <div>
      <button onClick={() => onCancel()}>Close</button>
      <UserCard user={user} />
    </div>
  );
}
