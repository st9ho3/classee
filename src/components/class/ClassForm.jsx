import React, { useContext, useState } from 'react'
import { Store } from '../../constants/Components'
import { GiOpenBook } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { GrSchedule } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import { totalContext } from '../../App';

const ClassForm = ({ handleInput, classDetails, create, chooseSubject }) => {
  const {close} = useContext(totalContext)
  const [clicked, setClicked] = useState({})

 const openClicked = (field) => {
  setClicked((prevClicked) => ({[field]:true}))
 }

  const closeStore = () => {
    setClicked(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    create()
    closeStore()
  }

  return (
    <>
      <form 
        onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="Enter Name"
          className='input'
          onChange={handleInput}
          value={classDetails.name}
          name='name'
        />
        <div
          className="subject option"
          onClick={() => clicked.Subject ? closeStore() : openClicked('Subject')}
          value='Subject'
          style={clicked.Subject ? {backgroundColor: 'rgb(139, 142, 237)', color: 'white'} : null }>
        
          <GiOpenBook style={clicked.Subject ? {color: 'white'}:{color: '877def'}}  className='formIcon' />
          Subject
        </div>
        {clicked.Subject &&
            <Store
              chooseGoodie={chooseSubject} 
              closeStore={closeStore}
              Goods = 'Subjects' />}
        <div
          className="students option"
          onClick={() => clicked.Students ? closeStore() : openClicked('Students')}
          style={clicked.Students ? {backgroundColor: 'rgb(139, 142, 237)', color: 'white'} : null }>
          
          <PiStudent style={clicked.Students ? {color: 'white'}:{color: '877def'}} className='formIcon' />
          Students
        </div>
        {clicked.Students &&
            <Store
             closeStore={closeStore}
             Goods='Students' />}
        <input
          required
          type="text"
          placeholder="Professor's Name"
          className='input'
          onChange={handleInput}
          value={classDetails.professor}
          name='professor'
        />
        <div
          className="Schedule option"
          onClick={() => clicked.Schedule ? closeStore() : openClicked('Schedule')}
          style={clicked.Schedule ? {backgroundColor: 'rgb(139, 142, 237)', color: 'white'} : null }>
          <GrSchedule style={clicked.Schedule ? {color: 'white'}:{color: '877def'}} className='formIcon' />   
          Schedule
        </div>
        {clicked.Schedule &&
            <Store
             closeStore={closeStore}
             Goods='Schedule'  />}
        <select required onChange={handleInput} value={classDetails.location} className='location' name="location">
          <option>Location</option>
          <option value="online">Online</option>
          <option value="onSite">On Site</option>
        </select>
        <input
          required
          type="number"
          placeholder="Class Size"
          className='input'
          onChange={handleInput}
          value={classDetails.classSizeLimit > 0 ? classDetails.classSizeLimit : ''}
          name='classSizeLimit'
        />
        <button
         className='createClassButton'
          >Create Class</button>
        <IoClose className='closeClassForm' onClick={close}/>
      </form>
    </>
  )
}

export default ClassForm