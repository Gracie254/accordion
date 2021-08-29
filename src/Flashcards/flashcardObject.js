const Questions = [
    {
        id: 1, question:"What do you understand by Virtual DOM? Explain its working", answer:"A virtual DOM is a lightweight JavaScript object which originally is just the copy of the real DOM. It is a node tree that lists the elements, their attributes and content as Objects and their properties"
    },
    {
        id: 2, question:"Why can’t browsers read JSX?", answer:"Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser."
    },
    {
        id: 3, question:"“In React, everything is a component.” Explain", answer:"Components are the building blocks of a React application’s UI. These components split up the entire UI into small independent and reusable pieces. Then it renders each of these components independent of each other without affecting the rest of the UI"
    },
    {
        id: 4, question:"What is the purpose of render() in React.", answer:"Each React component must have a render() mandatorily. It returns a single React element which is the representation of the native DOM component. If more than one HTML element needs to be rendered, then they must be grouped together inside one enclosing tag such as <form>, <group>,<div> etc."
    },
    {
        id: 5, question:"What is Props?", answer:"Props is the shorthand for Properties in React. They are read-only components which must be kept pure i.e. immutable. They are always passed down from the parent to the child components throughout the application."
    },
    {
        id: 6, question:"What is a state in React and how is it used?", answer:"States are the heart of React components. States are the source of data and must be kept as simple as possible. Basically, states are the objects which determine components rendering and behavior. They are mutable unlike the props and create dynamic and interactive components."
    },
    {
        id: 7, question:"What do you understand by refs in React?", answer:"Refs is the short hand for References in React. It is an attribute which helps to store a reference to a particular React element or component, which will be returned by the components render configuration function. It is used to return references to a particular element or component returned by render(). They come in handy when we need DOM measurements or to add methods to the components."
    },
    {
        id: 8, question:"What are synthetic events in React?", answer:"Synthetic events are the objects which act as a cross-browser wrapper around the browser’s native event. They combine the behavior of different browsers into one API. This is done to make sure that the events show consistent properties across different browsers."
    },
    {
        id: 9, question:"What are Higher Order Components(HOC)?", answer:"Higher Order Component is an advanced way of reusing the component logic. Basically, it’s a pattern that is derived from React’s compositional nature. HOC are custom components which wrap another component within it. They can accept any dynamically provided child component but they won’t modify or copy any behavior from their input components. You can say that HOC are ‘pure’ components."
    }
]

export default Questions