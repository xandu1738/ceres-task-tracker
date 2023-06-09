import React, { useState } from 'react'
import '../index.css'

const AddTask = ({onAdd}) => {

  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder ] = useState(false)

  const onSubmit = (e)=>{
    e.preventDefault()
    if(!text){
      alert('Please add text')
      return
    }
    onAdd({text,day,reminder})
    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} placeholder='Add Task' />
        </div>
        <div className="form-control">
            <label>Day & Time</label>
            <input type="text" value={day} onChange={(e)=>{setDay(e.target.value)}} placeholder='Add Day & Time' />
        </div>
        <div className="form-control form-control-check">
            <label>Set reminder</label>
            <input type="checkbox" value={reminder} checked={reminder} onChange={(e)=>{setReminder(e.currentTarget.checked)}}/>
        </div>
        <input type="submit" value="Save" className='btn btn-block'/>
    </form>
  )
}

export default AddTask