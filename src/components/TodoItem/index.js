// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteUser} = props
  const {id, title} = todoDetails
  onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="list-container">
      <div className="container">
        <p className="para">{title}</p>
        <button className="button" type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
