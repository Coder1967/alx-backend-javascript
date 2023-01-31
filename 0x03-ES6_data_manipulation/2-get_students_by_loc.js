/**
 * accepts an object of students and a city(string) as parameters
 * returns a list of students from that city
 */
export default function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city);
}
