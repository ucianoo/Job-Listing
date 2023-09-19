import data from './data.json'
import Jobs from './Components/Jobs';
import { useState } from 'react';
import Header from './Components/Header';

const App = () => {
  const [jobs, setJobs] = useState(data);
  return (
    <main>
      <Header/>
      <Jobs jobs={data} />
    </main>
  );
};

export default App;
