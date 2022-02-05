import { useState } from "react"
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import styles from "./CardForm.module.scss";

const CardForm = props =>{
  const [title,setTitle] = useState('')
  const handleSubmit = e =>{
    e.preventDefault();
    props.action({title}, props.columnId)
    setTitle('');
  }
  return(
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput  value={title} onChange={e => setTitle(e.target.value)}/>
      <Button>Add card</Button>
    </form>
  )
}

export default CardForm;