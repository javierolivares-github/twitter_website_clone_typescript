---
to: src/screens/<%=name%>/<%=name%>.stories.tsx
---
import <%=name%> from './<%=name%>';

/** The **<%=name%>** component renders... */
export default {
  title: 'Screens/<%=name%>/<%=name%>',
  component: <%=name%>,
  tags: ['autodocs'],
  argTypes: {

  },
}

/**This is the default version of <%=name%> component:*/
export const Default = {
  args: {},
}