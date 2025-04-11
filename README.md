# GitHub Repositories Explorer

A sleek and responsive React app to explore any GitHub user's latest public repositories. 🌿  
Built using **React.js**, **Tailwind CSS**, and GitHub's REST API.

![Screenshot](src/screenshot.png)
## 🚀 Features

- 🔍 Search GitHub users by username
- 📦 Displays latest 6 public repositories (sorted by last update)
- 🌐 Shows repository details including:
  - Name & visibility (public/private)
  - Owner's avatar and username
  - Creation date
  - Stars, watchers, and open issues
  - Primary language and topics
  - Direct link to view the repository on GitHub
- ⚡ Responsive and mobile-friendly UI
- 💡 Graceful error handling and loading states

## 💪 Tech Stack

- **React.js** (v18)
- **Tailwind CSS** (v3)
- **date-fns** (for date formatting)
- GitHub REST API (`/users/:username/repos`)
- React Scripts & CRA

## 📆 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/github-users.git
cd github-users
npm install
```

## 🔄 Run Locally

```bash
npm start
```

This will start the development server at `http://localhost:3000`.

## 🧪 Run Tests

```bash
npm test
```

## 📁 Project Structure

```
src/
├── App.js          // Main application logic and UI
├── Profile.js      // Component to display each repository
├── Loading.js      // Simple loading spinner
├── index.js        // App entry point
```

## 🌐 API Used

- [GitHub REST API](https://docs.github.com/en/rest)  
  Endpoint: `https://api.github.com/users/:username/repos`

