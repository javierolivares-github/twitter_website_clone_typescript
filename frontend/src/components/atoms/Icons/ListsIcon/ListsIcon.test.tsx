import React from 'react';
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import ListsIcon from "./ListsIcon";

describe('ListsIcon', () => {

  test('The component should render a svg element.', () => {
    render(
      <ListsIcon fillColor="text-black-900" isFilled={false} width="w-[1.125rem]" height="h-[1.125rem]" />
    );
    const svgElement = screen.getByTestId('list-outlined-svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement.tagName).toBe('svg');  
  });

  test('The svg element should have a width and height attribute with the value of 24.', () => {
    render(
      <ListsIcon fillColor="text-black-900" isFilled={false} width="w-[1.125rem]" height="h-[1.125rem]" />
    );
    const svgElement = screen.getByTestId('list-outlined-svg');
    expect(svgElement).toHaveAttribute('width', '24');
    expect(svgElement).toHaveAttribute('height', '24');
  });

  test('The path element should have a fill attribute with the value of black', () => {
    render(
      <ListsIcon fillColor="text-black-900" isFilled={false} width="w-[1.125rem]" height="h-[1.125rem]" />
    );
    const pathElement = screen.getByTestId('list-outlined-path');
    expect(pathElement).toHaveAttribute('fill', 'black');
  });

  test('If the isFilled prop is false, should renders the outlined version of the component', () => {
    render(
      <ListsIcon fillColor="text-black-900" isFilled={false} width="w-[1.125rem]" height="h-[1.125rem]" />
    );
    const svgElement = screen.getByTestId('list-outlined-svg');
    expect(svgElement).toHaveAttribute('data-testid', 'list-outlined-svg');
  });

});

