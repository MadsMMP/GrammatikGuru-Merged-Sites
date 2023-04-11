import { useState } from 'react';
// import * as Icon from 'react-feather';

export default function QuantityInput() {
    const [value, setValue] = useState(1);

    const handleUpClick = () => {
        setValue(value + 1);
    };

    const handleDownClick = () => {
        setValue(value - 1);
    };

    return (
        <>
            <div className="field-input quantity">
                <div className="quantity-nav">
                    <div className="quantity-button quantity-up" onClick={handleUpClick}><i className="las la-plus" /></div>
                    <div className="quantity-button quantity-down" onClick={handleDownClick}><i className="las la-minus" /></div>
                </div>
                <input type="number" min={1}  value={value} onChange={(e) => setValue(e.target.value)} name="qty" />
            </div>
        </>
    );
};