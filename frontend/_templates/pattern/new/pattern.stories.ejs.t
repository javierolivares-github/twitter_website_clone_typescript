---
to: src/components/patterns/<%=name%>/<%=name%>.stories.tsx
---
import <%=name%> from './<%=name%>';

/** The **<%=name%>** component renders... */
export default {
  title: 'Patterns/<%=name%>/<%=name%>',
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