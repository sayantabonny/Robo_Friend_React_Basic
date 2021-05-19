import React from 'react';

const Card=(props)=>
{
    return(
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shawdow-5'>
            <img src={`https://robohash.org/${props.id}?set=set4&size=100x100`} alt='Robots'/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card;