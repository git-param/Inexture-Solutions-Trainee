import { useState } from "react";

function Profile({ name }) 
{
    const [likes, setLikes] = useState(0);

    return (
        <div>
        <h2>{name}</h2>
        <p>Likes: {likes}</p>
        <button onClick={() => setLikes(l => l + 1)}>
            Like
        </button>
        </div>
    );
}

export default Profile;