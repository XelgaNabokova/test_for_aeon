import { useEffect } from 'react';
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import { useAppDispatch } from './hooks/redux';
import { getData } from './store/slices/chart';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchRequest();
  }, [])

  const fetchRequest = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/test');
      const data = await response.json();
      console.log(data)
      dispatch(getData(data))
    }
    catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="App">
      <Header/>
      <Table/>
    </div>
  );
}

export default App;
