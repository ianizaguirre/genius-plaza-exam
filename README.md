# Genius Plaza Todo App Test (React)

> This project follows the [Application Specification](https://github.com/david-gp/test-react-todomvc) instructions for the Genius Plaza Todo App Test in React.

## Implementation

This application is small, so I decided to manage state with nothing more than `setState()`, rather than use Redux.

### Deviations from Project Spec

* I used [Styled-Components](https://github.com/styled-components/styled-components)


## Build Process
> Some general notes on my projects structure.
>  It would be helpful to refer to the State Diagram below.



<details open>
<summary>Show State Diagram</summary>

![state-snapshots](/public/images/state-snapshots.png?raw=true)

</details>



* App.js, Task.jsx, and AddTaskForm.jsx contain State.
  * App.jsx state contains critical data being used to drive multiple components.
  * AddTaskForm.jsx contains non-critical UI state and creates the structure of a Task, which is then added to the `toDoList: []` array in App.js.
  * Task.jsx contains non-critical UI state.

* Page.jsx uses the `{children}` prop.
  * `Page.jsx` is meant to be the general layout of a page. If I were to make an additional page in my application, this would provide the flexibility and help needed for code reuse.


&nbsp;

## Screenshots

### Application Diagram

<details>
<summary>Show</summary>

![application-map](/public/images/application-map.png?raw=true)

</details>


### Todo List Example

<details>
<summary>Show</summary>

![todo-app-example](/public/images/todo-app-example.png?raw=true)

</details>


&nbsp;

## Development

#### Getting Started

Fork or download this repo and ...

Install packages:

```bash
yarn install
```

Then run the local server:

```bash
yarn start
```

&nbsp;

## Author

:heart: Created by [Ian Izaguirre](ian@izaguir.re)