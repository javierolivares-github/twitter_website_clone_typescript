import NavbarTweetButton from './NavbarTweetButton';

/** The **NavbarTweetButton** component renders the navbar tweet button that react to the screen size. */
export default {
  title: 'Patterns/Navbar/NavbarTweetButton',
  component: NavbarTweetButton,
  tags: ['autodocs'],
  argTypes: {
    textContent: {
      description: 'Specifies the text content of the button in a string format.',
      control: 'text'
    },
  },
}

/**This is the default version of **NavbarTweetButton** component:*/
export const Default = {
  args: {
    textContent: "Tweet",
  },
}