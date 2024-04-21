import * as React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom"
import Footer from "../footer"



test("Footer", () => {
  const container = render(<Footer />)
  expect(container).toMatchSnapshot()

  })