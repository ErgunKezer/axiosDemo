import React, {useEffect, useState} from 'react';
import './App.css';

//Components
import WarningModal from "./Components/WarningModal";
//Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import modalReducer from "./store/modalReducer";
//Service, Axios
import ServiceBase from "./Services/ServiceBase";
import Interceptor from './Services/ServiceBase.interceptor';
const store = createStore(modalReducer);
Interceptor.listen(store);

function App() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        ServiceBase.get('http://dummy.restapiexample.com/api/v1/employees').then(next => {
            setUsers(next.data.data);
        });
  },[]);

    const getData = () => {
        ServiceBase.get('http://dummy.restapiexample.com/api/v1/employees1').then(next => {
            setUsers(next.data.data);
        });
    };

  return (
      <div className='main'>
          <Provider store={store}>
              <button onClick={getData.bind(this)}>test</button>
              <ul>
                  { users.map( o => {
                      return <li key={o.id}> {o.employee_name} </li>
                  })}
              </ul>
              <WarningModal open={false}/>
          </Provider>
      </div>
  );
}

export default App;
