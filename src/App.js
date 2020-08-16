import React from 'react';
import './App.css';


// function App() {

//   const title = 'Hello React'
//   return (
//       <div>{title}</div>
//   );
// }

// export default App;


const App = ()=> {
  const [search, setSearch] = React.useState('');

  const handleChange = (e)=>{
    setSearch(e.target.value);
  }

  return (
      <div>
        <Search value={search} onChange={handleChange}>
          Search:
        </Search>

        <p>Searches for { search ? search : '...'}</p>
      </div>
  );
}

const Search = ({ value, onChange, children })=>{
  return(
    <div>
      <label htmlFor="search">{ children }</label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}



export default App;


