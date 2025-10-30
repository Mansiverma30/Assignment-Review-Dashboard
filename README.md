#  Assignment Dashboard
![Assignment Dashboard Preview](/src/assets/RoleSelection.png)

A clean, responsive **student–assignment management system** built with React, Vite, Tailwind CSS, and Context API.
This project enables **admins** (professors) to create and manage assignments, while **students** can view and submit their tasks with confirmation prompts.
The system is designed with clear role-based functionality and a smooth, modern UI.

---

##  Live Demo
 [View Deployment](https://assignment-review.netlify.app)

---

##  Features

###  Admin
- Create and manage assignments.
- Attach Google Drive links for external submissions.
- View submission progress of each student with individual progress bars.
- Data persists locally via `localStorage`.

###  Student
- View all available assignments.
- Submit assignments through a **double-confirmation pop-up**.
- Track completion progress visually.
- Clean and responsive layout for all screen sizes.

---

##  Tech Stack

| Category | Technology |
|-----------|-------------|
| **Frontend Framework** | React (Vite) |
| **Styling** | Tailwind CSS |
| **State Management** | Context API |
| **Storage** | LocalStorage |
| **Deployment** |  Netlify |

---

##  Project Architecture

The project follows a **role-based modular architecture**:

- **Context API** manages shared data (assignments, submissions, current user).
- **Admin and Student Dashboards** render role-specific data from the same context.
- **LocalStorage** ensures persistence between sessions.
- The UI is designed to provide clear separation and responsive layouts.

##  Data Flow

```bash
Admin (creates assignment)
            ↓
Context API (stores all assignments)
            ↓
Student (views & submits)
            ↓
Context updates submission status
            ↓
Admin sees updated progress bar
```


---

##  Folder Structure

```bash
src/
 ├─components/
    ├─AssignmentCard.jsx
    ├─CreateAssignment.jsx
    ├─ExistingAssignment.jsx
    ├─Navbar.jsx
    ├─PopUp.jsx
    ├─SubmitAssignment.jsx
 ├─context/
    ├─AssignmentContext.jsx
 ├─pages/
    ├─AdminDashboard.jsx
    ├─RoleSelection.jsx
    ├─StudentDashboard.jsx
 ├─App.jsx
 ├─index.jsx
 └─main.jsx
```


---

##  Component Structure & Design Decisions

- **Context API** → Chosen for lightweight global state without external libraries.
- **Tailwind CSS** → Enables rapid UI development and full responsiveness.
- **LocalStorage** → Ensures data persistence without backend setup.
- **Role-Based Pages** → Clean separation between Admin and Student flows.
- **Pop-Up Modal** → Improves UX for submission confirmation.

---
## Screenshot
![Admin Dashboard Preview](/src/assets/AdminDashboard.png)

![Student Dashboard Preview](/src/assets/StudentDashboard.png)
---

##  Setup Instructions

Clone and run the project locally:

```bash
#Clone the repository
git clone https://github.com/Mansiverma30/Assignment-Review-Dashboard
```
```bash
# Navigate to project directory
cd Assignment-Review-Dashboard
```
```bash
# Install dependencies
npm install
```
```bash
# Run development server
npm run dev
```
Then visit http://localhost:5173/ to view the app.
---
## Deliverables Overview

 GitHub Repo — Clean commit history, organized structure.

 Working Demo — Hosted on Vercel/Netlify.

 README.md — Includes setup, architecture, and folder overview.

 Responsive UI — Works across desktop and mobile.

 Role-Based System — Admin ↔ Student segregation maintained.

 ---
 ## License

This project is licensed under the MIT License.
---


## Author

Mansi Verma

Frontend Developer | React • TypeScript • Tailwind CSS

[LinkedIn](https://www.linkedin.com/in/mansi-verma-213288278)