import React from 'react';
import { render, screen } from '../../setupTest';
import { Address } from './index';

describe('Header', () => {
  render(<Address />)

  it('should start with all elements', () => {
    const box = screen.getByTestId('box')
    
    expect(box).toBeInTheDocument()
  })
})