import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please Enter Options to get Started!</p>}
        {
            props.options.map((item)=> (
            <Option 
                key={item} 
                optionText={item}
                handleDeleteOption = {props.handleDeleteOption}
                />

        ))
    }
        
    </div>
);

export default Options;