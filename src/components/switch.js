import React, { useRef, useEffect, useState } from 'react';
import '../css/switch.css';

function Switch() {
    const [cheked, setCkeked] = useState(false);
    const ref = useRef()
    function handleChange() {
        console.log(ref.current.checked);
        setCkeked(ref.current.checked);
        if (ref.current.checked) {
            document.body.classList.remove('is-dark-mode')
            document.body.classList.add('is-light-mode')
        } else {
            document.body.classList.remove('is-light-mode')
            document.body.classList.add('is-dark-mode')
        }
    }
    
    useEffect(() => {
        const mq = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (mq.matches) {
            setCkeked(true);
        }
    }, []);

    return (
        <div className="dark-mode">
            <p className="dark-mode-title">Dark Mode</p>
            <input ref={ref} onChange={handleChange} type="checkbox" cheked={cheked.toString()} className="checkbox" id="checkbox" />
            <label className="switch" htmlFor="checkbox">
            </label>
        </div>
    )
}

export default Switch;
