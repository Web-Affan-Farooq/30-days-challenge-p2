import React, { createContext, useState } from 'react';

const recipeContext = createContext(null);

const recipeContextProvider = ({ children }) => {
    const [count, setcount] = useState(0);
    return (
        <recipeContext.Provider value={{ count, setcount }}>
            {children}
        </recipeContext.Provider>
    )
}

export default recipeContextProvider;