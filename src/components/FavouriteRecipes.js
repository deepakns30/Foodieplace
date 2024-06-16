import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

const FavoriteRecipes = () => {
  const [user] = useAuthState(auth);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      const fetchFavorites = async () => {
        const q = query(collection(db, 'favorites'), where('userId', '==', user.uid));
        const querySnapshot = await getDocs(q);
        const favoritesArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setFavorites(favoritesArray);
        setLoading(false);
      };

      fetchFavorites();
    }
  }, [user]);

  if (loading) {
    return <p>Loading favorite recipes...</p>;
  }

  return (
    <div>
      <h2>Your Favorite Recipes</h2>
      {favorites.map(favorite => (
        <div key={favorite.id}>
          <h3>{favorite.title}</h3>
          <p><strong>Ingredients:</strong> {favorite.ingredients}</p>
          <p><strong>Instructions:</strong> {favorite.instructions}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoriteRecipes;
