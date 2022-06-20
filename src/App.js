import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import TodoList from './TodoList'




function App() {


  return (
    // <div className="App my-3">
    //   <nav className="nav justify-content-around">
    //     <NavLink className="nav-link text-info" to="adduser">Add user</NavLink>
    //     <NavLink className="nav-link text-info" to="userlist">Userlist</NavLink>
    //   </nav>

    //   <Routes>
    //     <Route path="adduser" element={<Adduser />} />
    //     <Route path="userlist" element={<Userlist />} />
    //     <Route path="" element={<Navigate replace to={'adduser'}  />} />
    //   </Routes>
    // </div>
    <div className='todo-app'>
      <TodoList/>
      <iframe src="https://embed.lottiefiles.com/animation/57927" id='frame'></iframe>
      <iframe src="https://embed.lottiefiles.com/animation/75699" id ='f1'></iframe>
    </div>
  );
}

export default App;