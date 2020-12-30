import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import SortingVisualizer from './components/SortingVisualizer';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <SortingVisualizer />
        </div>
    );
};

library.add(fab);

export default App;
