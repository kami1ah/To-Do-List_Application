import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TodoProvider, FilterProvider } from './contexts';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <TodoProvider>
            <FilterProvider>
                <App />
            </FilterProvider>
        </TodoProvider>
    </React.StrictMode>
)
