import React from 'react';
import Header from './Header';

export default ({ children }) => {
    return (
        <div className="wrapper">
            <Header />
            {children}
        </div>
    );
}