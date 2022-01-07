import React from 'react';
import { render, screen } from '../../setupTest';
import { Header } from './index';

describe('Header', () => {
  render(<Header />)

  it('should start with all elements', () => {
    const iconRotate = screen.getByTestId('iconReload')
    const logo = screen.getByTestId('logo')
    
    expect(iconRotate).toBeInTheDocument()
    expect(logo).toBeInTheDocument()
  })
})