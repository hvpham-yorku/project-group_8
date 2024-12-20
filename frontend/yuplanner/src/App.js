import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { UserProvider } from './UserContext';
import StudentProfile from './pages/StudentProfile';
import ProfessorProfile from './pages/ProfessorProfile';
import SearchCourses from './pages/SearchCourses';
import DropCourse from './pages/DropCourse';
import YourProgress from './pages/YourProgress';
import ManageCourses from './pages/ManageCourses';
import EditProfessorProfile from './pages/EditProfessorProfile';
import StudentsReviews from './pages/StudentsReviews';
import AdvisorProfile from './pages/AdvisorProfile';
import AdvisorViewCourses from './pages/AdvisorViewCourses';
import AdvisorViewStudents from './pages/AdvisorViewStudents';
import ViewFullSchedule from './pages/ViewFullSchedule';
import CourseDetails from './pages/CourseDetails';

function App() {
  // State to manage enrolled courses
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />


            <Route path="/edit-professor-profile" element={<EditProfessorProfile />} />
            //<Route path="/login" element={<Login/>} />
 
            <Route path="/manage-courses" element={<ManageCourses />} /> {/* Correctly reference ManageCourses */}

            <Route path="/students-reviews" element={<StudentsReviews/>}>
            </Route>
          
            <Route path="/login" element={<Login/>} />
            

            <Route path="/signup" element={<Signup/>}>
            </Route>

            <Route path="/professor-profile" element={<ProfessorProfile />}>
            </Route>

            <Route path="/advisor-profile" element={<AdvisorProfile />}> </Route>
            <Route path="/advisor-profile/view-courses" element={<AdvisorViewCourses />} />
            <Route path="/advisor-profile/view-students" element={<AdvisorViewStudents />} />

            //<Route path="/student-profile" element={<StudentProfile />}></Route>
            //<Route path="/student-profile/search-courses" element={<SearchCourses />} />
            //<Route path="/student-profile/drop-course" element={<DropCourse />} />

            //<Route path="/login" element={<Login />} />
            //<Route path="/signup" element={<Signup />} />
            //<Route path="/professor-profile" element={<ProfessorProfile />} />
            <Route path="/student-profile" element={<StudentProfile />} />
            <Route 
              path="/student-profile/search-courses" 
              element={
                <SearchCourses 
                  enrolledCourses={enrolledCourses} 
                  setEnrolledCourses={setEnrolledCourses} 
                />
              } 
            />
            <Route 
              path="/student-profile/drop-course" 
              element={
                <DropCourse 
                  enrolledCourses={enrolledCourses} 
                  setEnrolledCourses={setEnrolledCourses} 
                />
              } 
            />
            <Route path="/student-profile/your-progress" element={<YourProgress />} />
            <Route 
              path="/student-profile/view-schedule" 
              element={
                <ViewFullSchedule 
                  enrolledCourses={enrolledCourses} 
                />
              } 
            />

            <Route path="/student-profile/course-details/:id" element={<CourseDetails />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
