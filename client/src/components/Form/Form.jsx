import React from 'react'
import { Link } from "react-router-dom";

const Form = (props) => {
    return (
        <form id={props.id} >
        {/* <div > */}
          <input
            onChange={(event) => props.setState1(event.target.value)}
            placeholder={props.pHolder1}
            type="text"
          />
        {/* </div> */}
        {/* <div> */}
          <input
            onChange={(event) => props.setState2(event.target.value)}
            placeholder={props.pHolder2}
            type="text"
          />
        {/* </div> */}
        <Link
          onClick={(event) =>
            !props.input1 || !props.input2 ? event.preventDefault() : ""
          }
          to={`/chat?name=${props.input1}&chatRoom=${props.input2}`}
        >
          <button className="" type="submit">
            {props.text}
          </button>
        </Link>
      </form>    )
}

export default Form
