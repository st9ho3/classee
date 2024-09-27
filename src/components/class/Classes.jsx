import React from 'react';
import { localStorageCall } from '../../utils/LocalStorageCall';
import { Class } from '../../constants/Components';

const Classes = () => {
  const user = localStorageCall('auth_user');
  const classes = user?.Classes || []; // Use optional chaining to handle undefined
  

  return (
    <div className="classes">
      {classes.map((classItem) => (
        <Class 
          key={classItem.classId}
          item={classItem} 
        />
      ))}
    </div>
  );
};

export default Classes;