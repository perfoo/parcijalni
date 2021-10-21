import { useState } from "react";
import "./Form.css";





function Form() {
    const [data, setData] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(data);
        setData("neki-value");
       

    };

    return (
        <form onSubmit={submitHandler}>
            <label>GitHub username:
              <input type="text"></input>
            </label>
            <button>GO!</button>
        </form>
    )
};

export default Form;