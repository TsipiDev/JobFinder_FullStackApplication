# JobFinder

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Build Status](https://img.shields.io/github/actions/workflow/status/YourUsername/JobFinder/dotnet.yml?branch=main)](https://github.com/YourUsername/JobFinder/actions)

## Overview

**JobFinder** is a full-stack job board application built with ASP.NET Core and a modern front-end. It allows users to create, view, edit, and delete job listings. The project showcases key concepts such as RESTful API design, secure API authentication, Entity Framework Core integration, and CORS configuration.

This project was developed as part of the seminar coursework to demonstrate best practices in web development with .NET technologies and modern front-end tooling.

---

## Features

- **Create, Read, Update, Delete (CRUD)** operations for job listings
- RESTful API with secure endpoints protected via API keys
- Entity Framework Core for database management
- Cross-Origin Resource Sharing (CORS) configured for front-end integration
- Responsive front-end with Bootstrap 5
- Client-side JavaScript to interact asynchronously with the API
- Data validation and error handling in both front-end and back-end
- Easily extendable and maintainable architecture

---

## Technologies Used

- **Backend:** ASP.NET Core Web API (.NET 6+), Entity Framework Core, SQL Server (or SQLite)
- **Frontend:** HTML5, CSS3, Bootstrap 5, Vanilla JavaScript (Fetch API)
- **Tools:** Visual Studio 2022, Git, GitHub, Postman (for API testing)
- **Security:** API key authentication for protected routes

---

## Getting Started

### Prerequisites

- [.NET 6 SDK or later](https://dotnet.microsoft.com/download)
- Visual Studio 2022 or newer
- SQL Server or another compatible database
- Node.js & npm (optional if using front-end package management)

### Setup

1. Clone the repository  
   ```bash
   git clone https://github.com/YourUsername/JobFinder.git
   cd JobFinder
   ```

2. Configure the database connection string in `appsettings.json`  
   ```json
   "ConnectionStrings": {
     "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=JobFinderDb;Trusted_Connection=True;MultipleActiveResultSets=true"
   }
   ```

3. Apply database migrations  
   ```bash
   dotnet ef database update
   ```

4. Run the backend API  
   ```bash
   dotnet run
   ```

5. Open `create-job.html` (and other front-end files) in your browser or serve via local server to test UI

---

## Usage

- Use the front-end forms to create new job listings.
- Edit and delete jobs via provided UI elements.
- The app communicates asynchronously with the API backend.
- API routes require an API key for creating, updating, and deleting jobs; refer to the documentation/code comments for configuration.

---

## Project Structure

```
/JobFinder
│
├── /Controllers         # API Controllers
├── /Data                # DbContext and EF Core setup
├── /Models              # Entity and Data Models
├── /Security            # Custom authentication middleware (API Key)
├── /wwwroot             # Static files (HTML, CSS, JS)
├── appsettings.json     # Configuration settings
├── JobFinder.csproj     # Project file
└── README.md            # This file
```

---

## Contributing

Contributions are welcome! Please fork the repository and open a pull request with your improvements or fixes.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For any questions or feedback, please reach out to:

- Your Name  
- Email: your.email@example.com  
- GitHub: [YourUsername](https://github.com/YourUsername)

---

## Acknowledgements

- ASP.NET Core and Entity Framework Core documentation  
- Bootstrap open source CSS framework  
- Seminar instructors and peers for valuable feedback
