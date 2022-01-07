import React from 'react';
import { render, screen } from '../../setupTest';
import { Weather } from './index';

describe('Header', () => {
  render(<Weather />)

  it('should start with all elements', () => {
    const box = screen.getByTestId('box')
    
    expect(box).toBeInTheDocument()
  })
})