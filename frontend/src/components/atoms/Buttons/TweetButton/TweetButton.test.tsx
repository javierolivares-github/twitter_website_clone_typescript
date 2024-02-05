import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import TweetButton from './TweetButton';

describe('TweetButton', () => {

  // Testing React Callbacks:
  test('Should call a callback when the button pressed', () => {
    const handleClick = vi.fn();
    render(
      <TweetButton size="small" onClick={handleClick}>Tweet</TweetButton>
    );
    const buttonElement = screen.getByTestId('tweet-button');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledOnce();
  });

  // Testing React Props:
  test('Should renders the following string: Tweet', () => {
    const handleClick = vi.fn();
    render(
      <TweetButton size="small" onClick={handleClick}>Tweet</TweetButton>
    );
    const tweetResult = screen.getByText('Tweet');
    expect(tweetResult).to.exist;
  });

})