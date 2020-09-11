import React, { ChangeEvent, MouseEvent, useState } from 'react';
import swal from 'sweetalert';

import './style.css';

const App = () => {
    const [tlBorder, setTlBorder] = useState(0);
    const [trBorder, setTrBorder] = useState(0);
    const [blBorder, setBlBorder] = useState(0);
    const [brBorder, setBrBorder] = useState(0);

    function handleChangeInputValue(event: ChangeEvent<HTMLInputElement>) {
        const { id, value } = event.currentTarget;
        switch (id) {
            case 'topleft':
                setTlBorder(parseInt(value));
                break;
            case 'topright':
                setTrBorder(parseInt(value));
                break;
            case 'bottomleft':
                setBlBorder(parseInt(value));
                break;
            case 'bottomright':
                setBrBorder(parseInt(value));
                break;

            default:
                break;
        }
    }

    function handleNumberChange(event: ChangeEvent<HTMLInputElement>) {
        const regex = /\d+/g;
        const value = event.target.value;
        if (value.length >= 4 || !regex.test(value)) {
            swal('Only numbers with length less than 4 allowed.');
            return;
        }
        handleChangeInputValue(event);
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
                    onChange={handleNumberChange}
                />
                <input
                    type="text"
                    name="topright"
                    id="topright"
                    value={trBorder}
                    onChange={handleNumberChange}
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
                    onChange={handleNumberChange}
                />
                <input
                    type="text"
                    name="bottomright"
                    id="bottomright"
                    value={brBorder}
                    onChange={handleNumberChange}
                />
            </div>
        </div>
    );
};

export default App;
