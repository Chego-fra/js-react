import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Prev } from 'react-bootstrap/esm/PageItem';
import Form from 'react-bootstrap/Form';
import {  ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const  Create = () =>{


  const [data, setData] = useState({
    title: "",
    author: "",
    body: ""
  })


  const handleChange = (e) => {
        const{name, value} = e.target;
        setData((Prev) =>{
            return{...Prev, [name]: value}
        })
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:4000/blogs", data)
    .then(res => {
        toast.success("Blog was uploades succesfully", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
        })
    })


    .catch(err => {
        toast.error("an error occured while uploading the blog", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
        })
    })
  }



    return(
        <div>
                <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text"  name='title' placeholder="Enter Title"  onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Enter Author" name='author' onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={handleChange} name='body'/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <ToastContainer/>
    </Form>
    {/* <p>{data.title}</p>
    <p>{data.author}</p>
    <p>{data.body}</p> */}
        </div>
    )
}
export default Create;