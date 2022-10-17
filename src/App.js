import './App.css';
import Loading from './component/Loading'
import React, { useState } from 'react';
import Experience from './component/Experience';

const url = 'https://course-api.com/react-tabs-project'

function App() {
 
  const [loading,setLoading]= useState(true)
  const [experience,setExperiences] = useState([])
  const[value,setValues]=useState(0)
  
  const companies = experience.map((item) => item.company)

  React.useEffect(() => {
    async function getExperiences(){
      const res = await fetch(url);
      const data = await res.json();
      setExperiences(data);
      setLoading(false)
    }
    getExperiences()
  }, []);

  if(loading || experience === []){
    return <Loading/>
  }
  function toggleExperience(n){
    setValues(n)
  }
  return (
    <div className="App">
        <div className='left'>
           {companies.map(c =>
             <div className={value===companies.indexOf(c)?'company selected':'company'}
              onClick={()=>setValues(companies.indexOf(c))}>
                <div className={value===companies.indexOf(c)?'vline selectedL':'vline'}/>{c}</div>)}
        </div>
        <div className='right'>
        <h1>Experience</h1>
        <div className="line"></div>
        <Experience {...experience[value]}/>

{/*experience.map( e =>
 <Experience {...e}/>
)*/}
        </div>
      
    </div>
  );
}

export default App;
