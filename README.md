# To-Do List Application

## Overview

This is a simple To-Do List application built with Node.js and Express on the server-side, and plain HTML, CSS, and JavaScript on the client-side. It allows users to add, update, delete, and reorder to-do items.

## Features

- **Add New To-Do Items**: Easily add new tasks to the list.
- **Mark Items as Completed**: Check or uncheck tasks to mark them as done.
- **Delete To-Do Items**: Remove tasks from the list.
- **Reorder To-Do Items**: Drag and drop tasks to reorder them.

## Project Structure
- `index.js`: The main server file for handling API requests and serving the application.
- `public/index.html`: The HTML file with client-side JavaScript to interact with the API.

## Setup and Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/areerat-p/ToDoLis.git
    ```

2. **Navigate to the project directory**:
    ```sh
    cd ToDoLis
    ```

3. **Install dependencies**:
    ```sh
    npm install
    ```

4. **Run the server**:
    ```sh
    npm start
    ```

5. **Open your browser and navigate to**:
    ```
    http://localhost:8585/
    ```

## API Endpoints

- `GET /todos` - Retrieve all to-do items.
- `POST /todos` - Add a new to-do item.
  - **Request body**: `{ "text": "Your to-do text" }`
- `PATCH /todos/:id` - Update a to-do item's completion status.
  - **Request body**: `{ "completed": true }`
- `DELETE /todos/:id` - Delete a to-do item.
- `POST /todos/reorder` - Reorder to-do items.
  - **Request body**: `{ "orderedIds": [1, 2, 3, ...] }`

## Usage

1. **Add To-Do**:
   - Enter a task in the input field and click "Add To-Do".

2. **Complete/Uncomplete To-Do**:
   - Toggle the checkbox next to a task to mark it as completed or not.

3. **Delete To-Do**:
   - Click the "Delete" button next to a task to remove it from the list.

4. **Reorder To-Do**:
   - Drag and drop tasks to reorder them. The new order will be saved automatically.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web application framework for Node.js.
- **HTML**: Markup language for the web.
- **CSS**: Stylesheet language for presentation.
- **JavaScript**: Client-side scripting language.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
