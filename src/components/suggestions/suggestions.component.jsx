import React from 'react'

const Suggestions = (props) => {
    const { suggestion, placeId, style } = props;
    
    return(
        <div style={style} key={placeId}>
            {suggestion.description}
        </div>
    )
}

export default Suggestions;