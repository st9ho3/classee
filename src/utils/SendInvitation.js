import {nanoid} from 'nanoid'
import { localStorageSend } from './LocalStorageCall';

export const sendInvitation = (newClass, invitedStudents, students) => {
    const uniqueId = nanoid()
    const invitation = {
      id: uniqueId, // Unique identifier for the invitation
      professorId: newClass.professor, // ID of the professor creating the invitation
      studentId: "student789", // ID of the student being invited
      classId: newClass.classId, // ID of the class the student is invited to
      className: newClass.name, // Name of the class
      createdAt: new Date(), // Timestamp of when the invitation was created
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Expiration date (7 days from now)
      status: "pending" // Current status: "pending", "accepted", or "rejected"
    };
    
    const invited = students.map((student) => {
        if (invitedStudents.includes(student.UserId)) {
            const object = {
                ...student, Invitations:[...student.Invitations, invitation]
             }
             return object
        }
        return student
     
   })
   localStorageSend('Students', invited)
}
  