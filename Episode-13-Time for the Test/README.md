
--save-dev and -D both are same.



## Setting up Testing in our app

  1. Install React Testing Library 

     https://testing-library.com/docs/react-testing-library/intro/  
     
   command: npm i -D @testing-library/react

  2. Install jest
    
     https://jestjs.io/docs/getting-started

    command:  npm i -D jest

  3. Installed Babel dependencies
    
    https://jestjs.io/docs/getting-started

    command: npm install --save-dev babel-jest @babel/core @babel/preset-env

  4. Configure Babel
    
    https://jestjs.io/docs/getting-started

    command:  add babel.config.js

  5. Configure Parcel Config file to disable default babel transpilation

      https://parceljs.org/languages/javascript/#babel
      
     command:  add .parcelrc file

 6. Jest Configuration
   
    command:  npx jest --init

 7. Install Jsdom library

     npm install --save-dev jest-environment-jsdom

8. Install @babel/preset-react to make JSX work in test cases
     
        npm i -D @babel/preset-react

9. Include @babel/preset-react inside my babel config

10. Install @testing-library/jest-dom

      npm i -D @testing-library/jest-dom

   


## it will keep on running my testing process whenever i do changes 
      npm run watch-test



##  What are different types for testing?
        
        - Unit Testing
        - Integration Testing
        - End to End Testing - e2e Testing



_ _ -> Dunder

-> test and it both are the same.
   -> why it? 
      -> because it is easy to read 😅.


## What is Enzyme?
     
       In React, Enzyme is a popular testing utility library developed by Airbnb.
       It provides a set of tools for testing React components in isolation without needing to render them in a full
       browser environment. Enzyme allows developers to perform various types of tests such as shallow rendering,
       full rendering, and static rendering of React components. It provides a convenient API for querying and
       manipulating rendered components, making it easier to write assertions and test component behavior.

       Enzyme supports different rendering methods:

          Shallow Rendering:

               Shallow rendering renders only the component itself and not its children. This allows you to focus on testing the component in isolation.

          Full Rendering:

               Full rendering renders the component and all of its children. This is useful for testing the component's behavior when it's fully mounted in the DOM.

          Static Rendering:

               Static rendering renders the component to static HTML markup.
               This is useful for testing the component's markup structure and ensuring
               it matches the expected output.




## Enzyme vs React Testing Library
      
       
      Enzyme and React Testing Library are both popular testing 
      libraries used in the React ecosystem, but they have different
      philosophies and approaches to testing React components.

      Here's a comparison between Enzyme and React Testing Library:

       Philosophy:

              Enzyme:

                    Enzyme focuses on providing a set of APIs that allow developers 
                    to manipulate and traverse React component trees easily. It encourages
                    testing components in isolation by providing utilities for shallow rendering
                    and full rendering.

              React Testing Library:

                React Testing Library encourages writing tests that resemble how users interact with the
                application. It promotes writing tests that focus on the component's behavior from the user's 
                perspective, rather than internal implementation details. It discourages accessing component internals directly.

              Testing Approach:

              Enzyme:

                    Enzyme allows you to interact with and assert on component internals, such as state, 
                    props, and lifecycle methods. It provides methods like find(), props(), simulate(), etc., 
                    for querying and manipulating components.

              React Testing Library:

                       React Testing Library encourages testing components as users would interact with them.
                       It provides utilities for querying components based on their accessibility attributes
                       (e.g., getByLabelText(), getByText()), which helps in writing tests that are more resilient to UI changes.

              Isolation vs Integration:

              Enzyme:

                  Enzyme provides utilities for testing components in isolation, which means you can render
                  components without their child components. This can be useful for unit testing individual components.
                  React Testing Library: React Testing Library encourages testing components in a more integrated manner,
                  where you render the component along with its children and interact with it as a user would. 
                  This approach is closer to integration testing.

              Maintainability:

              Enzyme:

                     Enzyme allows developers to access and manipulate component internals directly, which can lead to tests
                     that are tightly coupled to the implementation details of the component. This might make tests more brittle and harder to maintain.

              React Testing Library: 

              React Testing Library encourages tests that are more resilient to UI changes and are easier to maintain over time. 
              By focusing on testing behavior from a user's perspective, tests are less likely to break due to internal implementation changes.
        





## What is Jest and why do we use it?

       Jest is a popular JavaScript testing framework developed by Facebook.
       It's primarily used for testing JavaScript code, including React applications.
       Jest provides a simple and intuitive way to write tests for your codebase, with built-in 
       features for test runners, assertions, mocking, and code coverage reporting.

     Here are some key features of Jest and reasons why developers use it:

          Zero Configuration:

                 Jest requires minimal configuration to get started with testing.
                  It comes pre-configured with sensible defaults, allowing developers 
                  to focus more on writing tests rather than configuring the testing environment.

          Fast and Parallel Execution:

                 Jest optimizes test execution by running tests in parallel processes, 
                 making it faster than many other testing frameworks. This is particularly 
                 useful for large codebases with extensive test suites.

          Built-in Matchers and Assertions: 

          Jest provides a rich set of built-in matchers and assertions for writing test expectations. 
          These include methods for common assertions like toEqual, toBeTruthy, toBeFalsy, toContain, toBeNull, etc.

          Snapshot Testing: 

           Jest supports snapshot testing, which allows you to capture the rendered output of a component or data
           structure and compare it against a stored snapshot. This is useful for detecting unexpected changes in
            UI components or data structures over time.

          Mocking:

                Jest includes built-in support for mocking functions and modules, allowing you to easily isolate the
                code you're testing from its dependencies. This simplifies testing by enabling you to control the 
                behavior of external dependencies and focus on testing specific units of code.

          Code Coverage Reporting:

               Jest provides built-in support for generating code coverage reports, allowing you to see which parts 
               of your codebase are covered by tests and which parts are not. This helps ensure comprehensive test 
               coverage and identify areas that may need additional testing.

          Integration with React:
          
               Jest is widely used in the React ecosystem and integrates seamlessly with React applications. 
               It's the default testing framework for React projects created using tools like Create React App and Next.js.