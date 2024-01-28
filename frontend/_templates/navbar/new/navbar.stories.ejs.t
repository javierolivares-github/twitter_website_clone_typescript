---
to: src/components/patterns/navbar/<%=name%>/<%=name%>.stories.tsx
---
import <%=name%> from './<%=name%>';

/** The **<%=name%>** component renders... */
export default {
  title: 'Patterns/Navbar/<%=name%>',
  component: <%=name%>,
  tags: ['autodocs'],
  argTypes: {
    arg1: {
      description: 'Lorem ipsum dolor...',
      control: 'text'
    }
  },
}

/**This is the default version of **<%=name%>** component:*/
export const Default = {
  args: {},
}