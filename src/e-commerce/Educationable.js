// src/components/EducationSection.js
import React from 'react';

const EducationSection = () => {
    return (
        <div className="education-section">
            <h2>Educational Commodities</h2>
            <div className="row">
                <div className="col-md-4">
                    <img src="https://source.unsplash.com/400x300/?books" className="img-fluid" alt="Books" />
                </div>
                <div className="col-md-4">
                    <img src="https://source.unsplash.com/400x300/?stationery" className="img-fluid" alt="Stationery" />
                </div>
                <div className="col-md-4">
                    <img src="https://source.unsplash.com/400x300/?laptop" className="img-fluid " alt="Laptops" />
                </div>
            </div>
        </div>
    );
};

export default EducationSection;
