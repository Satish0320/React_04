
// import React, { useState, useEffect } from 'react';

// function App() {

//   const [shown  , setshown] = useState(true);

//   return (
//     <div>
//      { shown && <MyComponent />}
//     </div>
//   )
// }



// function MyComponent() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log('Component mounted or count updated');

//   }, [count]); // Runs on mount and when count changes

// 	useEffect(() => {
// 		    console.log('Component mounted');
//     return () => {
//       console.log('Component will unmount');
//     };
// 	}, [])

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default App



import React, { useState } from 'react';

function App() {
  const [isComponentShown, setIsComponentShown] = useState(false);

  return (
    <div>
      <button onClick={() => setIsComponentShown(!isComponentShown)}>
        Toggle Component
      </button>

      {/* Conditional rendering */}
      {isComponentShown && <Component />}
    </div>
  );
}

function Component() {
  return <div>This is the component!</div>;
}

export default App;
