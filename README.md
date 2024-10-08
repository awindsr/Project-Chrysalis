# Chrysalis

**Chrysalis** is a bug-tracking and project management web application built with a modern tech stack. It provides an efficient way to handle projects, report bugs, and collaborate among team members, with roles such as **Admins** and **Members**. Admins have additional privileges such as managing projects and resolving bugs, while members can report and update bugs.

### Features

- **User Authentication**: Allows users to sign up and log in using a username and password.
- **Role-Based Access Control**:  
  - **Admin**: Has full access to manage projects and bugs, including adding/removing projects, managing team members, and closing or reopening bugs.  
  - **Members**: Can report and update bugs, leave notes, and collaborate within projects.
- **Project Management**: Provides functionality to create, update, and delete projects, with the ability to assign multiple members to each project.
- **Bug Tracking**: Enables users to report, update, and prioritize bugs. Bugs can be categorized and their status updated (e.g., reopened or closed).
- **Notes**: Users can add and manage notes for better communication and collaboration within projects.
- **Sorting and Filtering**: Offers the ability to sort projects and bugs based on criteria like priority or recent activity, and filter them by name or other parameters for easier navigation.
- **Responsive Design**: The app is optimized for use across all device types, including desktops, tablets, and mobile phones.
- **Dark Mode**: Users can switch between light and dark themes, with their preference saved locally for future sessions.
- **Notifications and Error Handling**: Provides toast notifications for key actions (e.g., creating projects, submitting bugs), along with clear, descriptive error messages for troubleshooting.
- **Loading Indicators**: Visual feedback is provided through loading spinners when data is being fetched.
- **Color-Coded Bug Status**: Visual indicators are used to represent bug priority and status, making it easy to identify important issues at a glance.

---

### Technology Stack

#### Frontend
- **ReactJS**: A JavaScript library for building user interfaces.
- **Redux with Hooks**: A state management library for handling global app state.
- **Redux Toolkit**: Simplifies Redux development by offering a set of tools for efficient state management.
- **Redux Thunk**: Middleware that allows you to handle asynchronous actions within Redux.
- **React Router**: Manages routing and navigation in the app.
- **React Hook Form**: A library for creating and managing form inputs and validation.
- **Shadcn**: A UI library with extensive CSS customizations for component styling.
- **Yup**: A schema builder for validating form inputs.
- **date-fns**: A utility library for manipulating and formatting dates.

#### Backend
- **Node.js**: A JavaScript runtime for executing code on the server.
- **Express.js**: A lightweight framework for building RESTful APIs.
- **PostgreSQL**: An open-source SQL database for data storage and management.
- **TypeORM**: An ORM for TypeScript that works with SQL databases.
- **JSON Web Token (JWT)**: Used to securely authenticate and authorize users.
- **Bcrypt.js**: A library for securely hashing and storing passwords.
- **Dotenv**: Allows loading of environment variables from a `.env` file.




