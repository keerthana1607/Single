import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import Add from './Add';
import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';

describe('Testing add ', () => {

    test('should have heading', () => {
        render(<BrowserRouter>
        <Add/>
        </BrowserRouter>)
    const textElement = screen.getByTitle("heading");
  expect(textElement).toBeInTheDocument();

})

   
})