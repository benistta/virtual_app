// import React from 'react';
// import ReactDOM from 'react-dom';
// import MyComponent from './MyComponent';

// import logo from './logo.svg';
// import './App.css';
// import React from 'react'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


//Create a react component that imputs a text area message then performs a fetch request to localhost:3001 gets back a response as a data.message and displays that message in a box below
// import React, { useState } from 'react';

// // import React, { useState } from 'react';
// import './App.css';

// function App() {
//     const [message, setMessage] = useState('');
//     const [response, setResponse] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         fetch('http://localhost:3001/', {
//             method: 'POST',
//             headers: {
//                  'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ message }),
//     })
//         .then((res) => res.json())
//         // .then((data) => setResponse(data.message)) 
//         // .catch((error) => console.error(error));
//     };

//     return (
//         <div className="App">
//             <form onSubmit={handleSubmit}>
//                 <textarea
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                 ></textarea>    
//                 <button type="submit">Submit</button>
//             </form>
//             <div>{response}</div>
//         </div>
//     );
// }            
  
// export default App;


// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [message, setMessage] = useState('');
//   const [response, setResponse] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch('http://localhost:3001/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ message }),
//     })
//       .then((res) => res.json())
//       // .then((data) => setResponse(data.message))
//       // .catch((error) => console.error(error));
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         ></textarea>
//         <button type="submit">Submit</button>
//       </form>
//       <div>{response}</div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.message))
    .catch((error) => console.error("there is an error", error)); // Add error handling
  };

  return (
    <div className="App">
      <h1>Song App</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          placeHolder="Ask Song App about songs"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <div>{response}</div>
    </div>
  );
}

export default App;