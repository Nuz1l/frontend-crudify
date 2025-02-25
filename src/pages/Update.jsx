import { Link } from "react-router-dom";
import backIcon from "../assets/images/back.svg";
import UpdateCardForm from "../components/UpdateCardForm";
import { HOME } from "../services/consts";

function Update () {
    return (
      <div className="block">
        <div className="container">
          <Link to={HOME} className="fixed-top-left">
            <img src={backIcon} alt="Back"/>
          </Link>
          <h1 className="title">Изменить заметку</h1>
          <UpdateCardForm />
        </div>
      </div> 
         );
}

export default Update;