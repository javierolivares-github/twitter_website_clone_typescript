import React from 'react';
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import PencilIcon from "./PencilIcon";

describe('PencilIcon', () => {

  test('The component should render a svg element.', () => {
    render(
      <PencilIcon fillColor="text-black-900" isFilled={false} width="w-[1.125rem]" height="h-[1.125rem]" />
    );
    const svgElement = screen.getByTestId('pencil-outlined-svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement.tagName).toBe('svg');  
  });

  test('The svg element should have a width and height attribute with the value of 24.', () => {
    render(
      <PencilIcon fillColor="text-black-900" isFilled={false} width="w-[1.125rem]" height="h-[1.125rem]" />
    );
    const svgElement = screen.getByTestId('pencil-outlined-svg');
    expect(svgElement).toHaveAttribute('width', '24');
    expect(svgElement).toHaveAttribute('height', '24');
  });

  test('The path element should have a stroke attribute with the value of black', () => {
    render(
      <PencilIcon fillColor="text-black-900" isFilled={false} width="w-[1.125rem]" height="h-[1.125rem]" />
    );
    const pathElement = screen.getByTestId('pencil-outlined-path');
    expect(pathElement).toHaveAttribute('stroke', 'black');
  });

});

