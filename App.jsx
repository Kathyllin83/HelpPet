import React, { useState } from 'react';
import Services from './App.jsx'; 
import AdoptAnimal from './Services/AdoptAnimal.jsx';
import TemporaryHome from './Services/TemporaryHome.jsx';
import RegisterAnimal from './Services/RegisterAnimal.jsx';

function App() {
    const [currentPage, setCurrentPage] = useState('services');

    const renderPage = () => {
        switch (currentPage) {
            case 'adopt':
                return <AdoptAnimal />;
            case 'temporary':
                return <TemporaryHome />;
            case 'register':
                return <RegisterAnimal />;
            default:
                return <Services setCurrentPage={setCurrentPage} />;
        }
    };

    return (
        <div>
            {renderPage()}
        </div>
    );
}

export default App;
