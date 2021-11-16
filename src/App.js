
import Navbar from './component/Navbar';
import Home from './component/Home';
import User from './component/User';
import Task from './component/Task';
import { BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
     <BrowserRouter>
      <Navbar/>
      <switch>
     <Route exact path='/home' component={Home} />
     <Route exact path='/Task' component={Task} />
     <Route exact path='/User' component={User} />
     </switch>
    </BrowserRouter>
  );
}

export default App;
