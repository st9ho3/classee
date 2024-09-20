import React from 'react'
import { localStorageCall } from '../../utils/LocalStorageCall'

const Classes = () => {
  const saved = localStorageCall('Classes')
  return (
    <div className='classes'>
      {saved.map((sav) => (
        <div key={sav.classId} className="class">{sav.name}</div>
      ))}
    </div>
  )
}

export default Classes
