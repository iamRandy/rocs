import './Hero.css'
import { useState } from 'react'
import Text from './Text'

function Hero() {
    const [val, setVal] = useState("Hello world");
    const change = event => {
        setVal(event.target.value);
    }
    return (
    <div class="body">
        <h1>Welcome to Reox</h1>
        <Text />
    </div>
    );
};

export default Hero;