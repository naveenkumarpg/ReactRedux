# ReactHooks

1. useState
    This hook allows you to maintain local state of an application

2. useEffect
    the hook that manages side-effects in functional React components.

3. useRef
    
4. useMemo
    To improve user interface performance, React offers a higher-order component React.memo(). 
    When React.memo() wraps a component, React memoizes the rendered output then skips unnecessary rendering.
    
5. useContext
    React’s useContext hook makes it easy to pass data throughout your app without manually passing props down the tree.
    
    import React, { createContext } from "react";
    export const UserContext = createContext();
    <UserContext.Provider value="Naveen">
        <App value={Naveen} />
    </UserContext.Provider>

    in child components

    const user = useContext(UserContext);

6. useReducer
   
7. useReducer & useContext


8. useCallback
    Every callback function should be memoized to prevent useless re-rendering of child components that use the callback function” 
    is the reasoning of his teammates.

Redux
    Redux is predectable state container for javascript apps
    

1. Keep components small and function-specific
2. Adopt tools to help you scale
3. Reusability is important, so keep creation of new components to the minimum required
4. Consolidate duplicate code – DRY your code
5. Put CSS in JavaScript
6. Build your UI/logic component library
7. Comment only where necessary
8. Name the component after the function
9. Use capitals for component names
10. Mind the other naming conventions submitForm, submit_form, or submit_form
11. Separate stateful aspects from rendering
12. Code should execute as expected and be testable
13. All files related to any one component should be in a single folder
