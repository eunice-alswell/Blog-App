
import React, {useState} from 'react'

function Like() {
    const[count,setCounts] = useState(0)
    const like = () => {
        setCounts(count + 1) 
    }

    const dislike = () => {
        setCounts(count - 1)
    }
    return (
        <div>
            <p>{count}</p>
            <botton onClick = {like}>Like</botton>
            <botton onClick = {dislike}>Dislike</botton> 
        </div>
    )
}

export default Like
