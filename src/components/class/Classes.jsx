import React from 'react'
import { localStorageCall } from '../../utils/LocalStorageCall'

const Classes = () => {
  const user = localStorageCall('auth_user')
  const classes = user?.Classes || [] // Use optional chaining to handle undefined
  console.log(classes)

  return (
    <div className='classes'>
      {classes.map(classItem => (
        <div key={classItem.classId}>{classItem.name}</div>
      ))}
    </div>
  )
}

export default Classes