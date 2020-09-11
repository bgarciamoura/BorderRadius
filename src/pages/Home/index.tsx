import React from 'react';

import './style.css';

const App = () => {
    return (
        <div className="container">
            <div className="topinputs">
                <input type="text" name="topleft" id="topleft" />
                <input type="text" name="topright" id="topright" />
            </div>

            <div className="box">
                <p>
                    border-radius: 10px 10px 10px 10px;
                    <br />
                    -moz-border-radius: 10px 10px 10px 10px;
                    <br />
                    -webkit-border-radius: 10px 10px 10px 10px;
                </p>
            </div>
            <div className="bottominputs">
                <input type="text" name="bottomleft" id="bottomleft" />
                <input type="text" name="bottomright" id="bottomright" />
            </div>
        </div>
    );
};

export default App;
