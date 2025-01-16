# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by improperly managing dependencies.

The `bug.js` file contains the erroneous code. The `bugSolution.js` file provides the corrected version.

## Problem
The `useEffect` hook in `bug.js` attempts to update the `count` state within its own callback.  Because `count` is included in the dependency array, the effect runs again immediately after updating `count`, creating an infinite loop and crashing the application. 

## Solution
The corrected code in `bugSolution.js` avoids the infinite loop by correctly managing the dependencies.  Removing `count` from the dependency array ensures the effect only runs when necessary (e.g., during initial rendering or when other dependencies change). Alternatively, a conditional update could be used within the effect to prevent infinite loops.