# BOOK4COEP - College Library Management System

**BOOK4COEP** is a web-based **Library Management System** developed to manage the library of the College of Engineering Pune (COEP). It allows users to search, borrow, and manage books with ease. The system is built using **HTML, CSS, JavaScript**, and **Firebase** for backend services such as authentication and database management.

## Features

- **User Authentication**: Users can sign up, log in, and log out using Firebase Authentication.
- **Book Management**: Admin can add, update, or delete books from the library.
- **Search Functionality**: Users can search for books by title, author, or genre.
- **Borrow Books**: Users can borrow books and view their borrowed book list.
- **Real-Time Database**: Firebase real-time database is used to store and manage book records and user data.
- **Responsive Design**: The system is designed to be mobile-friendly and works across different devices.

## Technologies Used

- **Frontend**: 
  - HTML5
  - CSS3
  - JavaScript (ES6)
- **Backend**: 
  - Firebase Authentication
  - Firebase Firestore (for real-time database)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vedant-codes/BOOK4COEP.git
   cd BOOK4COEP
   ```

2. Open the project directory in your favorite code editor.

3. Install dependencies (if any):

   ```bash
   npm install
   ```

4. Set up Firebase:

   - Go to the [Firebase Console](https://console.firebase.google.com/), create a new project, and set up **Firebase Authentication** and **Firestore** database.
   - Get your Firebase project credentials and paste them into the `firebase-config.js` file.

5. Run the project by opening `index.html` in your browser.

## Firebase Configuration

Ensure to update the Firebase configuration in the `firebase-config.js` file with your project credentials:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## Usage

1. **Sign Up/Login**: Users need to sign up or log in to access the library system.
2. **Search for Books**: Use the search bar to find books by title or author.
3. **Borrow/Return Books**: Users can borrow books from the catalog and return them once finished.
4. **Admin Privileges**: Admins can add, remove, or edit book records.

## Contributing

If you want to contribute to the project, feel free to create a pull request or open an issue for discussion.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- [Firebase](https://firebase.google.com/) for providing a powerful backend service.
- Open-source libraries and tutorials that helped in developing the system.
