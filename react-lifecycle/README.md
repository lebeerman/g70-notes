# React Component Lifecycle

## Objectives

- What are lifecycle methods?
- Which ones can/should we use?
- Which methods/hooks are most important?

## Notes

- What are lifecycle methods?
  - Moments in a component's life that allow you to perform actions
  - Needs to be a class component to use them!
  - Methods that EVERY component has
    - But doesn't HAVE to be 'used'

- Which ones can/should we use?
  - https://reactjs.org/docs/react-component.html#the-component-lifecycle

- Which methods/hooks are most important?
  - componentDidMount() !!!!!
    - Means component has been added to the DOM
    - Make your requests for *DATA* here => (AJAX requests)

  - render() !!!!!!
    - allows you to template using JSX

  - constructor()
    - Not always necessary

  - componentWillMount()
    - Not as important as it used to be
    - Specific use cases (server-side rendering)
      - 'This is the only lifecycle hook called on server rendering.'
    - *AVOID* making AJAX calls here