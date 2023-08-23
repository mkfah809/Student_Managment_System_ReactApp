import axios from "axios";
const ADD_STUDENT_API_BASE_URL = "http://localhost:8080/api/v1/add/students";
const VIEW_STUDENT_API_BASE_URL = "http://localhost:8080/api/v1/view/students";

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
    
    return axios.post(ADD_STUDENT_API_BASE_URL,student)
  }

  viewStudent() {
    console.log("view student function");
    return axios.get(VIEW_STUDENT_API_BASE_URL)
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new StudentService();
