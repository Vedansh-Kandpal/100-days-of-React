# Day 1: Basic Todo App

## Overview

This is a simple todo application built as part of the "100 Days of React" challenge. The app allows users to:
- Add items to a todo list.
- Mark items as done using checkboxes.
- Delete items from the list.

### Features

- **Add Todo Items:** Users can add new items to the todo list.
- **Mark as Done:** Items can be marked as completed by checking a checkbox.
- **Delete Todo Items:** Users can remove items from the list.

### Concepts Learned

- **File Structure of Create React App:** Familiarized with the default file structure provided by Create React App.
- **React Components:** Implemented functional components to manage the todo list.
- **Props and State:** Utilized props to pass data between components and state to manage the todo list and its items.

### Project Setup

To run this project locally, follow these steps:

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/yourusername/100-days-of-react.git
    cd 100-days-of-react/day-1
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

3. **Start the Development Server:**
    ```bash
    npm start
    ```

    Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the app in action.

### File Structure

 - **`src/`**: Contains the source code for the application.
  - **`App.js`**: Main component managing the todo list.
  - **`components/`**: Directory containing React components.
    - **`TodoInput.jsx`**: Component for typing and submitting new todo items.
    - **`ListItem.jsx`**: Component that displays individual todo items.
  - **`index.css`**: Styles for the application.
  - **`index.js`**: Entry point of the application, rendering the `App` component.

### How It Works

- **Adding Items:** Users enter a new todo item in the input field and press Enter to add it to the list.
- **Marking as Done:** Clicking on the checkbox next to a todo item marks it as done, changing its appearance.
- **Deleting Items:** Clicking the delete button next to a todo item removes it from the list.

### Screenshots

![image](https://github.com/user-attachments/assets/ac5e61d8-f189-49ab-8fe4-ca3f50679e9f)
![image](https://github.com/user-attachments/assets/3453152d-b791-48a9-a3c4-a2137657a3fb)
![image](https://github.com/user-attachments/assets/d1cd7f0f-0c79-4aeb-8e5f-fabb16cc6f4f)
![image](https://github.com/user-attachments/assets/c516f24d-01f8-4dca-93da-e9d3be053843)


### Known Issues

- **No Database Connection:** The app does not connect to a database.
- **Checkbox Issue:** If an item is marked as done and then deleted, the checkmark may incorrectly move to the next item in the list.


### Contributing

This is a personal project for the "100 Days of React" challenge, but contributions and feedback are welcome. Feel free to open an issue or submit a pull request.


### Contact

- **Vedansh Kandpal** - [vedansh.kandpal06@gmail.com](mailto:vedansh.kandpal06@gmail.com)

---

Thank you for checking out my Day 1 project in the "100 Days of React" challenge. I hope you find it useful for learning and inspiration.
