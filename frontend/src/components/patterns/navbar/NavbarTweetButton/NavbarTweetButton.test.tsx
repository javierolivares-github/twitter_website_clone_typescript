import React from 'react';
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import NavbarTweetButton from "./NavbarTweetButton";

describe('NavbarTweetButton', () => {

  test('The component should renders a button element.', () => {
    render(
      <NavbarTweetButton textContent='Tweet' />
    );
    const buttonElement = screen.getByTestId('navbar-tweet-button');
    expect(buttonElement.tagName).toBe("BUTTON");
  });
});

