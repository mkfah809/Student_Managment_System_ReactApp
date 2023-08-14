import axios from "axios";
const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1/students";

class StudentService {
  saveStudent(student) {
    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ title: 'React POST Request Example' })
    // };
    // fetch(STUDENT_API_BASE_URL, requestOptions)
    //     .then(response => response.json())
    //     .then(data => this.setState({ postId: data.id }));
    console.log("saveStudent function in the class")
    console.log("first name: ", student.firstName);
    console.log("last name: ", student.lastName);
    return axios.post(STUDENT_API_BASE_URL,student)
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new StudentService();
