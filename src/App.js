import React from 'react';
import './App.css';
import Posts from './components/PostExample/Posts';

// import Search from './components/Search';
// import Stories from './components/Stories/Stories';
// import Todos from './components/TodoExample/Todos'

// function App() {

//   const title = 'Hello React'
//   return (
//       <div>{title}</div>
//   );
// }

// export default App;


const App = ()=> {
  // const [search, setSearch] = React.useState('');
  // const [user, setUser] = React.useState(null);

  // const handleChange = (e)=>{
  //   setSearch(e.target.value);
  // }

  // const getUser = () =>{
  //   return(
  //     Promise.resolve({
  //       id: 1,
  //       name: "Moses"
  //     })
  //   )
  // }

  // React.useEffect(()=>{
  //   const loadUser = async ()=>{
  //     const user =  await getUser();
  //     setUser(user);
  //   }

  //   loadUser();
  // }, [])

  return (
      <div className="App">

        {/* { user ? <p>Signed in as { user.name}</p> : null}


        <Search value={search} onChange={handleChange}>
          Search:
        </Search>

        <p>Searches for { search ? search : '...'}</p> */}
        
        {/* <Stories /> */}
        {/* <Todos /> */}
        <Posts />
      </div>
  );
}

export default App;


