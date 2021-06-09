import { useState } from 'react';
import { getArticles } from '../calls'; 

import './App.css';


const App = () => {
  const [topic, setTopic] = useState('');
  const [articlesArray, setArticlesArray] = useState([]);

  const helper = () => {
    const userTopic = document.getElementById('userTopic');
    return setTopic(userTopic.value);
  }

  const populate = () => {
    return setArticlesArray(getArticles(topic));
  }

  return (
    <div className="App">
      <p>Eventual Container</p>
      <input type="text" id="userTopic" onChange={ () => helper() }/>
      <button
        onClick={() => populate()}
      >Submit</button>
      <div>
        <p>{ articlesArray[0] }</p>
      </div>
    </div>
  )
}

export default App;
