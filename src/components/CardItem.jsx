import { useState } from "react";
import { FaThumbtack } from "react-icons/fa";
import { a } from "../services/axiosInstance";

function CardItem({ post }) {
    const [isPinned, setIsPinned] = useState(post.is_pinned);

    async function togglePin() {
        try {
            await a.patch(`items/toggle-pin/${post.id}/`);
            setIsPinned(!isPinned);
        } catch (error) {
            console.log("Ошибка:", error);
        }
    }

    return (
        <div className={`card-item ${isPinned ? "pinned" : ""}`}>
            <button className="pin-button" onClick={togglePin}>
                <FaThumbtack color={isPinned ? "gold" : "gray"} />
            </button>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
}

export default CardItem;
