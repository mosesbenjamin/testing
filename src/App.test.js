import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';


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
// paceholderText  <input placeholder="Search" />
// AltText   <img alt="profile" />
// DisplayValue   <input value="JavaScript" />
// TestId ...data-testid in the source code's HTML

describe('App', ()=>{
  test('renders App component', () => {
    render(<App />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  })
  
})























