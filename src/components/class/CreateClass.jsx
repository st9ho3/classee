import React, { useEffect, useState } from 'react';
import { ClassForm } from '../../constants/Components';
import { createDate } from '../../utils/CreateDate';
import { localStorageCall, localStorageSend } from '../../utils/LocalStorageCall';
import { nanoid } from 'nanoid';
import { capitalizeWord } from '../../utils/StringCheck';

const CreateClass = () => {
  const dateOfCreation = createDate();

  const [classDetails, setClassDetails] = useState({
    classId: nanoid(),
    name: '',
    subject: [],
    students: [],
    dateCreated: dateOfCreation,
    dateUpdated: dateOfCreation,
    performance: '',
    professor: '',
    schedule: '',
    location: '',
    classSizeLimit: 0,
  });

  const [classes, setClasses] = useState(() => localStorageCall('Classes'));
  const [subjects, setSubjects] = useState([]);

  const handleInput = (e) => {
    const { name, value, type } = e.target;
    const input = (type === 'text' || type === 'number' || name === 'location') ? capitalizeWord(value) : '';
    setClassDetails({ ...classDetails, [name]: input });
  };

  const chooseSubject = (id) => {
    setSubjects([...subjects, id]);
  };

  const createClass = () => {
    setClasses([...classes, classDetails]);
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
    localStorageSend('Classes', classes);
  }, [classes]);

  useEffect(() => {
    setClassDetails({
      ...classDetails,
      subject: subjects,
      dateCreated: dateOfCreation,
      dateUpdated: dateOfCreation,
    });
  }, [subjects]);

  return (
    <>
      <ClassForm
        classDetails={classDetails}
        handleInput={handleInput}
        create={createClass}
        chooseSubject={chooseSubject}
      />
    </>
  );
};

export default CreateClass;