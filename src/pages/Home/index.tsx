import React from 'react';

import './style.css';

const App = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="box">
                    <p>
                        border-radius: px px px px;
                        <br />
                        -moz-border-radius: px px px px;
                        <br />
                        -webkit-border-radius: px px px px;
                    </p>
                </div>
                <input type="text" name="topleft" id="topleft" />
                <input type="text" name="topright" id="topright" />
                <input type="text" name="bottomleft" id="bottomleft" />
                <input type="text" name="bottomright" id="bottomright" />
            </div>
        </div>
    );
};

export default App;
