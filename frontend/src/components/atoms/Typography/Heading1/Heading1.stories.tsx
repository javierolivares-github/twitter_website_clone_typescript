import Heading1 from "./Heading1";
import '../../../../index.css';

/**The Heading1 component is used for render level 1 headings. */
export default {
  title: 'atoms/Typography/Heading1',
  component: Heading1,
  tags: ['autodocs'],
}

/**This is the default version of the **Heading1** component */
export const Default = {
  args: {
    color: "text-secondary-15",
    weight: "font-bold",
  }
}