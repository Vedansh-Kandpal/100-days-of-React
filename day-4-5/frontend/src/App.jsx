// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import './App.css'

// function App() {
//   const [products, setProduct] = useState([]);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);


// The useEffect Hook allows you to perform side effects in your components.

// example of side effects are: fetching data, directly updating the DOM, and timers.

// syntax
// useEffect(<function>, <dependency>)

// lets say someone says that use async await in useEffect

// useEffect(async () => {
//   await axios.get('./api/products')
// }, [])     this is wrong because we can not use async in hook

// so we need to pass internal function called ifi(immediately invoked function) syntax (callback function)()
// here we are handling error also (loading, error)


// this part is so common so we can create a function check bellow
//   useEffect(() => {
//     // ifi
//     (async () => {
//       try {
//         setLoading(true)
//         setError(false)
//         const response = await axios.get('./api/products')
//         console.log(response.data)
//         setProduct(response.data)
//         setLoading(false)
//       } catch (error) {
//         console.log(error)
//         setError(true)
//         setLoading(false)
//       }
//     })()
//   }, [])

//   // if error
//   if (error) {
//     return <h1>Something Went wrong</h1>
//   }
//   if (loading) {
//     return <h1>Loading...</h1>
//   }

//   return (
//     <>
//       <h1>HTTP Request in React</h1>
//       <h2>Number of Products are: {products.length}</h2>

//     </>
//   )
// }


// 



import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [products, loading, error] = CustomReactQuery('/api/products'); // Fixed the URL path

  // if error
  if (error) {
    return <h1>Something went wrong</h1>;
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>HTTP Request in React</h1>
      <h2>Number of Products: {products.length}</h2>
    </>
  );
}

export default App;

const CustomReactQuery = (urlPath) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true); // Start loading initially

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false); // Reset error before making a request
        setLoading(true); // Start loading

        const response = await axios.get(urlPath);
        setProducts(response.data);

      } catch (err) {
        console.error(err);
        setError(true); // Set error if the request fails
      } finally {
        setLoading(false); // Stop loading after the request completes
      }
    };

    fetchData();
  }, [urlPath]); // Added urlPath as a dependency

  return [products, loading, error]; // Order of returned values fixed
};
