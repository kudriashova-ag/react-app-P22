import React from 'react';

const IsFive = ({ value }) => {
    console.log('IsFive');
    

    const getResult = () => { 
        let i = 0;
        while (i < 1000000000) { i++ }
        
        return value === 5 ? "Is five" : "Is not five";
    }

    return (
        <div>
            { getResult() }
        </div>
    );
}

export default React.memo(IsFive, (prev, next) => { 
    if(next.value === 5 || prev.value === 5) { return false }
    return true
});
