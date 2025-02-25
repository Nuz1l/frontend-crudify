import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CardItem from "./CardItem";
import { a } from "../services/axiosInstance";

function CardList({ searchTerm, sortOrder }) {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const res = await a.get("items/");
                setPosts(res.data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchPosts();
    }, []);

    useEffect(() => {
        let filtered = posts.filter(post => 
            (post.title && post.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (post.content && post.content.toLowerCase().includes(searchTerm.toLowerCase()))
        );

        if (sortOrder === "newest") {
            filtered.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        } else if (sortOrder === "oldest") {
            filtered.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
        }

        setFilteredPosts(filtered);
    }, [searchTerm, posts, sortOrder]);

    return (
        <div className="card-list">
            {filteredPosts.length > 0 ? (
                filteredPosts.map(post => (
                    <CardItem key={post.id} post={post} />
                ))
            ) : (
                <p>Ничего не найдено</p>
            )}
        </div>
    );
}

CardList.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    sortOrder: PropTypes.string.isRequired,
};

export default CardList;
