import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db, auth } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

const AddRecipe = () => {
  const [user] = useAuthState(auth);
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [error, setError] = useState('');

  const handleAddRecipe = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const docRef = await addDoc(collection(db, 'recipes'), {
        title,
        ingredients,
        instructions,
        userId: user.uid,
      });
      await addDoc(collection(db, 'favorites'), {
        recipeId: docRef.id,
        userId: user.uid,
        title,
        ingredients,
        instructions,
      });
      setTitle('');
      setIngredients('');
      setInstructions('');
      alert('Recipe added and saved as favorite successfully!');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Add Recipe</h2>
      <form onSubmit={handleAddRecipe}>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Recipe Title" 
          required 
        />
        <textarea 
          value={ingredients} 
          onChange={(e) => setIngredients(e.target.value)} 
          placeholder="Ingredients" 
          required 
        />
        <textarea 
          value={instructions} 
          onChange={(e) => setInstructions(e.target.value)} 
          placeholder="Instructions" 
          required 
        />
        <button type="submit">Add Recipe</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default AddRecipe;
