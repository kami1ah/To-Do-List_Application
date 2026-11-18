import React, { useState, useContext, createContext } from "react";

const TodoContext = createContext();
const FilterContext = createContext();


export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
    
    return (
        <TodoContext.Provider value={{ todos, setTodos }}>
            {children}  
        </TodoContext.Provider>
    );
};
export const useTodo = () => useContext(TodoContext);


export const FilterProvider = ({ children }) => {
  const [filteredTodos, setFilteredTodos] = useState([]);
    
    return (
        <FilterContext.Provider value={{ filteredTodos, setFilteredTodos }}>
            {children}  
        </FilterContext.Provider>
    );
};
export const useFilter = () => useContext(FilterContext);