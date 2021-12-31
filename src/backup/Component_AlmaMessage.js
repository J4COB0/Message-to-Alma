import React from 'react';

const AlmaMessage = ({text,color,handleMessage}) => {
    return (
        <div className='main-container'>
            <div className="card">
                <section className='container-message'>
                    <i className="fas fa-quote-left"></i>
                    <h2 className='message' style={{color}}>{text}</h2>
                </section>
                <button onClick={handleMessage} className='button-next' style={{background:color}}><i className="fas fa-angle-right fa-2x"></i></button>
            </div>
        </div>
    );
};

export default AlmaMessage;