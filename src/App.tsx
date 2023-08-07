import React from 'react';
import Calendar from './Calendar';

let App: React.FC = () => {
    return (
        <div className="h-screen overflow-hidden relative background opacity-90 flex flex-col justify-between">
            <h1 className="mt-10 text-white font-semibold text-lg text-center flex justify-center items-center">
                Quick calendar
            </h1>
            <Calendar />
            <footer className="text-white text-center mb-10">
                Made as fast as lightning
            </footer>
        </div>
    );
}

export default App;