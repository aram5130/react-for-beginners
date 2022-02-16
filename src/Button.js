import styled from "./Button.module.css"

function Button({ text }) {
  return <button className={styled.btn}> {text}</button>
}

export default Button;