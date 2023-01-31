export default function updateStudentGradeByCity(students, city, grades) {
  return students.filter((student) => student.location === city).map((student) => {
    for (const newGrade of grades) {
      if (student.id === newGrade.studentId) {
        if (newGrade.grade !== 'undefined') {
          return {
            id: student.id,
            firstName: student.firstName,
            location: student.location,
            grade: newGrade.grade,
          };
        }
      }
    }
    return {
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: 'N/A',
    };
  });
}
