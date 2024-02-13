import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import Services from "./Views/Services/Services";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Services />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
