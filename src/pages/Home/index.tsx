import React, { ChangeEvent, MouseEvent, useState } from 'react';
import swal from 'sweetalert';

import './style.css';

const App = () => {
    const [tlBorder, setTlBorder] = useState(0);
    const [trBorder, setTrBorder] = useState(0);
    const [blBorder, setBlBorder] = useState(0);
    const [brBorder, setBrBorder] = useState(0);

    function handleOnChangeTopLeft(event: ChangeEvent<HTMLInputElement>) {
        console.log(event.target);
        const { value } = event.target;
        setTlBorder(parseInt(value));
    }

    function handleOnChangeTopRight(event: ChangeEvent<HTMLInputElement>) {
        const { value } = event.target;
        setTrBorder(parseInt(value));
    }

    function handleOnChangeBottomLeft(event: ChangeEvent<HTMLInputElement>) {
        const { value } = event.target;
        setBlBorder(parseInt(value));
    }

    function handleOnChangeBottomRight(event: ChangeEvent<HTMLInputElement>) {
        const { value } = event.target;
        setBrBorder(parseInt(value));
    }

    function handleNumberChange(event: ChangeEvent<HTMLInputElement>) {
        const regex = /^(\s*|[0-1]+)$/;
        const value = event.target.value;
        if (value.length > 16 || !regex.test(value)) {
            alert('Only binary numbers allowed. [0-1]');
            return;
        }
    }

    function handleBoxClick(event: MouseEvent<HTMLParagraphElement>) {
        const css = event.currentTarget.innerText || '';
        navigator.clipboard.writeText(css);
        swal({
            title: 'CSS copiado',
            text: css,
            icon: 'success',
        });
    }

    return (
        <div className="container">
            <div className="topinputs">
                <input
                    type="text"
                    name="topleft"
                    id="topleft"
                    value={tlBorder}
                    onChange={handleOnChangeTopLeft}
                />
                <input
                    type="text"
                    name="topright"
                    id="topright"
                    value={trBorder}
                    onChange={handleOnChangeTopRight}
                />
            </div>

            <div
                className="box"
                style={{
                    borderTopLeftRadius: tlBorder,
                    borderTopRightRadius: trBorder,
                    borderBottomLeftRadius: blBorder,
                    borderBottomRightRadius: brBorder,
                }}
            >
                <p onClick={handleBoxClick}>
                    border-radius: {tlBorder}px {trBorder}px {brBorder}px{' '}
                    {blBorder}px;
                    <br />
                    -moz-border-radius: {tlBorder}px {trBorder}px {brBorder}px{' '}
                    {blBorder}px;
                    <br />
                    -webkit-border-radius: {tlBorder}px {trBorder}px {brBorder}
                    px {blBorder}px;
                </p>
            </div>
            <div className="bottominputs">
                <input
                    type="text"
                    name="bottomleft"
                    id="bottomleft"
                    value={blBorder}
                    onChange={handleOnChangeBottomLeft}
                />
                <input
                    type="text"
                    name="bottomright"
                    id="bottomright"
                    value={brBorder}
                    onChange={handleOnChangeBottomRight}
                />
            </div>
        </div>
    );
};

export default App;
