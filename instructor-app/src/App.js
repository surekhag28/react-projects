import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ListCourseComponent from './components/ListCourseComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddCourseComponent from './components/AddCourseComponent';
import UpdateCourseComponent from './components/UpdateCourseComponent';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <HeaderComponent />
          <div className="container">
            <Switch>
                <Route path="/" exact component={ListCourseComponent}></Route>
                <Route path="/courses" component={ListCourseComponent}></Route>
                <Route path="/add-course" component={AddCourseComponent}></Route>
                <Route path="/update-course/:id" component={UpdateCourseComponent}></Route>
            </Switch>
          </div>
          <FooterComponent />
        </div>
      </Router>
    </div>
  );
}

export default App;
