import './Hero.css'
import { useState } from 'react'

function Hero() {
    const [val, setVal] = useState("Hello world");
    const change = event => {
        setVal(event.target.value);
    }
    return (
    <div class="body">
        <h1>Welcome to Reox</h1>
        <input onChange={change} className="doc" value = {val}/>
    </div>
    );
}

export default Hero;