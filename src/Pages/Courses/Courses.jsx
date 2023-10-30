import React, { useRef, useState } from 'react';
import './Courses.css';
import courses from '../../dummydata.js';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {addDoc,collection ,db} from '../../firebaseConfig/firebaseConfig.js'
import Topbar from '../Topbar/Topbar';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height : 435,
  bgcolor: '#111',
  border: '2px solid #000',
  boxShadow: 24,
  color : '#fff',
  p: 4,
};

function Courses() {
  const name = useRef();
  const phonenumber = useRef();
  const address = useRef();
  const courseName = useRef();
  const [searchcourse, setsearchcourse] = useState('');
  const [isopen, setisopen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showmsg , setshowmsg] = useState('')

  const handleOpen = (course) => {
    // console.log(course , 'course');
    setSelectedCourse(course);
    setisopen(true);
  };
  
  const handleClose = () => setisopen(false);

  const searchCourse = setsearchcourse.length > 0 ? courses.filter((course) => {
    return (
      `${course.courseName} `
        .toLowerCase()
        .includes(searchcourse.toLowerCase())
    );
  }) : courses;


  const studentdataHnadler = async () =>{
    try {
      const docRef = await addDoc(collection(db, "Students Data"), {
        name : name?.current?.value,
        phonenumber : phonenumber?.current?.value,
        address : address?.current?.value,
        courseName : courseName?.current?.value
      });
      console.log(docRef.id);
      setshowmsg('You are enrolled in this course')
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => setisopen(false), 1000);
    setTimeout(() => window.location.reload(), 1000);
  }

  return (
    <>
    <Topbar/>
      <div className="coursecontainer">
        <h1 style={{ color: '#fff', padding: '15px' }}>Our Courses Here!</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%', alignItems: 'center', padding: '10px' }}>
          <h3 style={{ color: '#fff', fontWeight: 500 }}>Our Total Courses: 📚 {courses.length} </h3>
          <input
            value={searchcourse}
            type="text"
            placeholder='Search Courses...'
            className='searchInput'
            onChange={(e) => setsearchcourse(e.target.value)}
          />
        </div>
        <div className="wrappers">
          {searchCourse.map((course) => (
            <div key={course.id} className="course">
              <img className='imgs' src={course.cover} alt={course.title} />
              <h4 style={{ textAlign: 'center', padding: '3px' }}>Course Name : {course.courseName}</h4>
              <p style={{ textAlign: 'center' }}>Instructor Name : {course.Instructor}</p>
              <button className='enroll-btn' onClick={() => handleOpen(course)}>Enroll Now</button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Modal
          open={isopen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {selectedCourse && 
              <>
                <div className='modal'>
                 <h3 style={{cursor:'pointer'}} onClick={handleClose}>x</h3>
                 <h3>You choose the course: {selectedCourse.courseName}</h3>
                 <h3 style={{textAlign:'center'}}>Fill the Form</h3>
                  
                  <label>Your Name:
                    <input 
                    className='input' 
                    type="text"
                    required 
                    placeholder='Enter your name...'
                    ref={name}/>
                  </label>

                  <label>Your Number: 
                  <input 
                  className='input' 
                  type="number"
                  required 
                  placeholder='Enter your Phonenumber...' 
                  ref={phonenumber}/>
                  </label>

                  <label>Your Address:
                  <input 
                  className='input' 
                  type="text"
                  required 
                  placeholder='Enter your address...' 
                  ref={address}/>
                  </label>

                  <label style={{display:'flex',flexDirection:'row'}}>Your Course:
                    <option
                      ref={courseName} 
                      style={{marginLeft:'5px'}}  
                      value={selectedCourse.courseName}>
                      {selectedCourse.courseName}
                      </option>
                  </label>
                  <p style={{textAlign:'center'}}>{showmsg}</p>
                  <button type='sumbit' onClick={studentdataHnadler}>Enrolled</button>
                </div>
              </>
            }
          </Box>
        </Modal>
      </div>
    </>
  );
}


export default Courses;
