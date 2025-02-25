import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { a } from "../services/axiosInstance";
import { HOME } from "../services/consts";
function CardForm () {

    const [content, setContent] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await a.post('items/post/', {content});
            navigate(HOME)
        }catch (err) {
            console.log(err);
        }
    }

    return(
        <form className="form" onSubmit={handleSubmit}>
            <textarea 
            value={content}
            onChange={(e) =>setContent(e.target.value)}
            className="form-control" 
            rows="30" cols="10" 
            placeholder="Напишите свой план на сегодня">
            </textarea>
            <button className="submit-primary-button" type="submit">Сохранить</button>
        </form>
    );
}
export default CardForm;