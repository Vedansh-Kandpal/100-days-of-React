# Day 3: Optimizing React with useRef and memo

## Overview

On Day 3 of the "100 Days of React" challenge, I focused on improving React performance using `useRef` and `memo`. These hooks help manage references to DOM elements and optimize re-renders, making the app more efficient.

### Live Demo

Check out the live demo of the application here: 

### Features

- **useRef for DOM References:** Managed DOM elements and component values without causing unnecessary re-renders.
- **memo for Optimization:** Used `React.memo` to prevent re-renders of components that don’t need to update when their parent re-renders.

### Concepts Learned

- **useRef Hook:** Utilized `useRef` to store a mutable value or reference a DOM element without causing a re-render. It’s useful for accessing and modifying DOM elements directly or keeping track of values that don’t trigger re-renders.
- **memo for Performance Optimization:** Implemented `React.memo` to memoize functional components, allowing them to skip re-renders when their props don’t change, improving app performance.

### Project Setup

To run this project locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Vedansh-Kandpal/100-days-of-react.git
   cd 100-days-of-react/day-3
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Start the Development Server:**

   ```bash
   npm start
   ```

   Open your browser and navigate to [http://localhost:5173](http://localhost:5173) to see the app in action.

### Screenshots

### Contributing

This is a personal project for the "100 Days of React" challenge, but contributions and feedback are welcome. Feel free to open an issue or submit a pull request.

### Contact

- **Vedansh Kandpal** - [vedansh.kandpal06@gmail.com](mailto:vedansh.kandpal06@gmail.com)

Thank you for checking out my Day 2 project in the "100 Days of React" challenge. I hope you find it useful for learning and inspiration.
