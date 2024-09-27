import React, { createContext, useEffect, useRef, useState } from 'react';
import { ClassForm } from '../../constants/Components';
import { createDate } from '../../utils/CreateDate';
import { localStorageCall, updateClasses } from '../../utils/LocalStorageCall';
import { nanoid } from 'nanoid';
import { capitalizeWord } from '../../utils/StringCheck';
import { GiConsoleController } from 'react-icons/gi';

export const classContext = createContext()


const CreateClass = () => {
  const dateOfCreation = createDate();
  const auth_user = localStorageCall('auth_user')

  const [tempStudentIds,setTempIds] = useState([])
  const [subjects, setSubjects] = useState([]);
  console.log(tempStudentIds)
  const [classDetails, setClassDetails] = useState({
    classId: nanoid(),
    name: '',
    subject: [],
    students: [],
    dateCreated: '',
    dateUpdated: '',
    performance: '',
    professor: '',
    schedule: '',
    location: '',
    classSizeLimit: 0,
  });
 

  const handleInput = (e) => {
    const { name, value, type } = e.target;
    const input = (type === 'text' || type === 'number' || name === 'location') ? capitalizeWord(value) : '';
    setClassDetails({ ...classDetails, [name]: input });
  };

  const chooseSubject = (id) => {
    setSubjects([...subjects, id]);
  };
  const getIds = (id) => {
    const result = tempStudentIds.includes(id)
    !result &&
    setTempIds([...tempStudentIds, id])
    result &&
    setTempIds(tempStudentIds.filter((Id) => Id !== id)) 
  }

  const createClass = () => {
    updateClasses(classDetails, tempStudentIds)
    setClassDetails({
      classId: nanoid(),
      name: '',
      subject: [],
      students: [],
      dateCreated: '',
      dateUpdated: '',
      performance: '',
      professor: '',
      schedule: '',
      location: '',
      classSizeLimit: 0,
    });
    setSubjects([]);
  };

  useEffect(() => {
    setClassDetails({
      ...classDetails,
      subject: subjects,
      dateCreated: dateOfCreation,
      dateUpdated: dateOfCreation,
      professor: auth_user.UserName
    })}, [subjects]);

  return (
    <>
      <classContext.Provider value={{classDetails, handleInput, chooseSubject, create: createClass, tempStudentIds, getIds}}>
      <ClassForm
      />
      </classContext.Provider>
    </>
  );
};

export default CreateClass;
