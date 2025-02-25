import { useState } from "react";
import { FaThumbtack } from "react-icons/fa";
import { a } from "../services/axiosInstance";
import { Link } from "react-router-dom";
import { READ } from "../services/consts";

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
        <Link to={READ.substring(0, READ.length -3) + post.id} className="card-item">
            <button className="pin-button" onClick={togglePin}>
                <FaThumbtack color={isPinned ? "gold" : "gray"} />
            </button>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </Link>
    );
}

export default CardItem;
