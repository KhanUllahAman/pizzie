import React from 'react'

const Myinputs = ({myTypes, myText, myName, myOnChange, myOnBlur, myValues}) => {
    return (
        <>
            <div class="form-control">
                <input type={myTypes} name={myName} onChange={myOnChange} onBlur={myOnBlur} value={myValues}/>
                <label>{myText}</label>
            </div>
        </>
    )
}

export default Myinputs