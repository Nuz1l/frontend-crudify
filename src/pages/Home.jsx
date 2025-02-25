import { useState } from "react";
import plusIcon from "../assets/images/plus.svg";
import { Link } from "react-router-dom";
import { CREATE } from "../services/consts";
import CardList from "../components/CardList";

function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("newest"); // Состояние сортировки

    return (
        <div className="block">
            <div className="container">
                <Link to={CREATE} className="fixed-bottom-right">
                    <img src={plusIcon} alt="Plus" width="20px" height="20px" />
                </Link>
                <h1 className="title">NuraNotes</h1>
                
                <input
                    type="text"
                    placeholder="Поиск..."
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                {/* Кнопки сортировки */}
                <div className="sort-buttons">
                    <button onClick={() => setSortOrder("newest")}>Новые</button>
                    <button onClick={() => setSortOrder("oldest")}>Старые</button>
                </div>

                {/* Передаем состояние сортировки */}
                <CardList searchTerm={searchTerm} sortOrder={sortOrder} />
            </div>
        </div>
    );
}

export default Home;
