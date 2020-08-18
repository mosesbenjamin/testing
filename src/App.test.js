import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// import App from './App';
import Search from './components/Search';


// // Jest is a test runner

// describe('some function or component', ()=>{
//   test('does the following', () => {
    
//   })

//   it('does the following', () => {
    
//   })
  
// })

// describe('truth is truthy and false is falsy', ()=>{

//   test('truth is truthy', () => {
//     expect(true).toBe(true);
//   })
  
//   test('false is falsy', () => {
//     expect(false).toBe(false);
//   })
// })


// const sum = (x, y) =>{
//   return x + y;
// }

// describe('sum', ()=>{
//   test('sums up to two values', ()=>{
//     expect(sum(2, 4)).toBe(6);
//   })
// })

// // RTL is one of the testing libraries
// // to test React Components

// testing whether an element rendered (or not) in a React component
// with getBy (and queryBy) and whether the re-rendered React 
// component has a desired element (findBy). 

// // Rendering a component

// describe('App', ()=>{
//   test('renders App component', ()=>{
//     render(<App />);

//     screen.debug();
//   })
// })


// //Selecting Elements

// describe('App', ()=>{
//   test('renders App component', () => {
//     render(<App />);

//     // // Implicit assertion because getBytext would throw error
//     // // if element wouldn't be there
//     // screen.getByText('Search:');

//     // // explicit assertion and recommended
//     // expect(screen.getByText('Search:')).toBeInTheDocument();

//     // // Fails
//     // expect(screen.getByText('Search')).toBeInTheDocument();

//     // // Succeeds
//     // expect(screen.getByText(/Search/)).toBeInTheDocument();
//   })
  
// })

// Search Types

// Labeltext <label for="search" />
// placeholderText  <input placeholder="Search" />
// AltText   <img alt="profile" />
// DisplayValue   <input value="JavaScript" />
// TestId ...data-testid in the source code's HTML

// describe('App', ()=>{
//   test('renders App component', () => {
//     render(<App />);

//     expect(screen.getByRole('textbox')).toBeInTheDocument();
//   })
  
// })

// // using  FindBy
// describe('App', ()=>{
//   test('renders', async ()=>{
//     render(<App />);
//     screen.debug();

//     expect(screen.queryByText(/Signed in as/)).toBeNull();
//     screen.debug();

//     expect( await screen.findByText(/Signed in as/)).toBeInTheDocument();
//     screen.debug();
//   })
// })


// Multiple Items

//getAllBy
//queryAllBy
//findAllBy

//Assertive functions
//toBeNull()
//toBeInTheDocument()


// user interactions


// // FireEvent

// describe('App', ()=>{
//   test('renders', async()=>{
//     render(<App />);
//     // screen.debug();

//     //Wait for user to resolve
//     await screen.findByText(/Signed in as/)

//     expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

//     fireEvent.change(screen.getByRole('textbox'), {
//       target: { value: 'JavaScript' }
//     })
    
//     expect(screen.getByText('Searches for JavaScript')).toBeInTheDocument();
//   })
// })

// describe('App', ()=>{
//   test('render the app component', async() =>{
//     render(<App />);

//     // wait for user to resolve

//     await screen.findByText(/Signed in as/);

//     expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

//     await userEvent.type( screen.getByRole('textbox'), 'JavaScript' );

//     expect(screen.getByText('Searches for JavaScript')).toBeInTheDocument();
//   })
// })

// Callback Handlers

describe('Search', () => {
  test('calls the onChange callback handler', async () => {
    const onChange = jest.fn();
 
    render(
      <Search value="" onChange={onChange}>
        Search:
      </Search>
    );

    // fireEvent.change(screen.getByRole('textbox'), {
    //         target: { value: 'JavaScript' }
    //       })
    // expect(onChange).toHaveBeenCalledTimes(1);      
 
    await userEvent.type(screen.getByRole('textbox'), 'JavaScript');
 
    expect(onChange).toHaveBeenCalledTimes(10);

  });
});



























