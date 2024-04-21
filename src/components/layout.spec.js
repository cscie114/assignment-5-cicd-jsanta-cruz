import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom"
import Layout from './layout';


test("Layout", () => {
  const container = render(<Layout />)
   expect(container).toBe(true)
  })