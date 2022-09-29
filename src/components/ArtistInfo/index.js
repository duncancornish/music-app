import React from 'react'

const ArtistInfo = (props) => {
    return(
    <div>
        <h1>{props.name}</h1>
        <p>Music Type: {props.mType}</p>
        <p>DragonForce are a British power metal band from London, England. The band was formed in 1999 by guitarists Herman Li and Sam Totman, and are known for their long and fast guitar solos, fantasy-themed lyrics and retro video game-influenced sound.</p>
    </div>
    )
}

export default ArtistInfo
