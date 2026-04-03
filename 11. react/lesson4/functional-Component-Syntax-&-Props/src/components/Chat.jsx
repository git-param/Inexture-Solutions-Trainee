import { useState } from "react";

function Chat({ person }) 
{
    const [draft, setDraft] = useState("");

    return (
        <div>
        <h2>Chat with {person}</h2>
        <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Type a message..."
        />
        </div>
    );
}

export default Chat;