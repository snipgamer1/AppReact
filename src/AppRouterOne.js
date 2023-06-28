import { useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes, Link, Navigate, useParams } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import Statepage from './pages/home/StatePage';

import Notfoundpage from './pages/404/NotFoundPage';
import Aboutpage from './pages/about-faqs/AboutPage';
import Profilepage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import Taskdetailpage from './pages/tasks/TaskDetailPage';
import Loginpage from './pages/auth/LoginPage';

function AppRoutingOne() {

  let logged = false;

  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My fist Task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second Task'
    }
  ]

  function RedirectWithAlert({ message, to }) {
    useEffect(() => {
      alert(message);
    }, [message]);
  
    return <Navigate to={to} />;
  }

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User Logged?', logged)
  }, []) 

  const TaskWrapper = () => {
    const { id } = useParams();
    const task = taskList[id - 1];
    return <Taskdetailpage task={task} />;
  };

  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>|| HOME |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/task/1'>| Task 1 |</Link>
          <Link to='/task/2'>| Task 2 |</Link>
          <Link to='/any404'>| Not Existing Route |</Link>
          <Link to='/login'>| Login ||</Link>
        </aside>

        <main>
          <Routes> 
            <Route exact path='/' element={ <HomePage/> } />
            <Route exact path='/online-state' element={ <Statepage/> } />
            <Route path='/login' element= { logged ? (
                  <RedirectWithAlert
                    message='You are logged in. Redirecting to home...'
                    to='/'
                  />
                ) : (
                  <Loginpage />
                ) }>
              {/* {
                  logged ? 
                    () => {
                      alert('You are logged in. Redirecting to home...')
                      return (<Navigate to='/'/>)
                    }
                  :
                  () => {
                    return (<Loginpage></Loginpage>)
                  }
              } */}
            </Route>
            <Route path='/about' element={ <Aboutpage/> } />
            <Route
              path='/profile'
              element={
                logged ? (
                  <Profilepage />
                ) : (
                  <RedirectWithAlert
                    message='You must be logged in. Redirecting to login...'
                    to='/login'
                  />
                )
              }
            />
            <Route path='/tasks' element={ <TasksPage/> } />
            <Route path='/task/:id' element={<TaskWrapper />} />
            {/* 404 - Page No Found */}
            <Route path="*" element={ <Notfoundpage/> } />
          </Routes>
        </main>

      </div>

    </Router>
  );
}

export default AppRoutingOne;
