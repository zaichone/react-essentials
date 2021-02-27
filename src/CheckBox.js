import React, { useReducer } from 'react'

function CheckBox() {
    const [checked, toggle] = useReducer(
        (checked) => !checked,
        false
    );
    console.log('Checkbox is ', checked);
    return (
        <>
            
            <input type="checkbox" id="checkbox" value={checked} onChange={toggle} />
            <label htmlFor="checkbox">
                { checked? " Checked" : " Not checked" }
            </label>
        </>
    )
}

export default CheckBox
