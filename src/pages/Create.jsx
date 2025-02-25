import backIcon from "../assets/images/back.svg";
import CardForm from "../components/CardForm";
import { Link } from "react-router-dom";
import { HOME } from "../services/consts";

function Create () {
    return (
      <div className="block">
        <div className="container">
          <Link to={HOME} className="fixed-top-left">
            <img src={backIcon} alt="Back"/>
          </Link>
          <h1 className="title">Создать заметку</h1>
            <CardForm />
        </div>
      </div> 
         );
}

export default Create;