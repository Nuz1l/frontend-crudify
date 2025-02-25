import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { a } from "../services/axiosInstance";
import { HOME } from "../services/consts";
function UpdateCardForm () {

    const{id} = useParams();
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchPost() {
            try {
                const res = await a.get(`items/deteil/${id}/`);
                setContent(res.data.content);
            }catch (e) {
                console.log(e);
            }
        }
        fetchPost();
    }, [id]);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await a.put(`items/post/update/${id}/`, {content});
            navigate(HOME)
        }catch (err) {
            console.log(err);
        }
    }

    return(
        <form className="form" onSubmit={handleSubmit}>
            <textarea 
            value={content}
            onChange={(e) =>setContent(e.target.valu)}
            className="form-control" 
            rows="30" cols="10" 
            placeholder="Напишите свой план на сегодня">
            </textarea>
            <button className="submit-primary-button" type="submit">Сохранить изменения</button>
        </form>
    );
}
export default UpdateCardForm;