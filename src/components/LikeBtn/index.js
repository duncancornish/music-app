import React, { useState } from 'react';

// btn-secondary
// btn-success

function LikeBtn() {
    const [liked, setLiked] = useState(true)
    const [btnText, setBtnText] = useState("Like")

    function likeBtnClick() {
        setLiked(!liked)
        if (liked) {
            setBtnText("Liked!")
        } else {
            setBtnText("Like")
        }
    }

    return(
        <div>
            <button
                className='btn btn-secondary'
                onClick={likeBtnClick}
            >
                {btnText}
            </button>
        </div>
    )
}

export default LikeBtn
