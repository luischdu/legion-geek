import { useState } from 'react';
import { useSelector } from 'react-redux';
import { db } from '../firebase/firebase-config';


export const useFav = () => {
    
    const initialState = ""
    const [favorites, setFavorites] = useState(initialState);
    const uid = useSelector(state => state.auth.uid)
    
    const reset = () => {
        setValues( initialState );
    }
    const handleInputSave = (data) => {
        db.collection('')

    }
    return [ values, handleInputChange, reset ];
}