# JobFinder

<p align="left">
  <a href="https://learn.microsoft.com/en-us/dotnet/csharp/">
    <img src="https://img.shields.io/badge/C%23-239120?style=flat&logo=c-sharp&logoColor=white" alt="C#">
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML">
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS">
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript">
  </a>
</p>

 A full-stack job board application built with ASP.NET Core, HTML, CSS, and JavaScript.

---

## Overview

**JobFinder** is a full-stack job board application that allows users to create, view, edit, and delete job listings. Built with **ASP.NET Core** on the back-end and a modern **HTML/CSS/JS** front-end, it demonstrates:

- RESTful API design
- Secure API authentication
- Entity Framework Core integration
- CORS configuration

 Developed as a seminar coursework project to showcase best practices in full-stack web development.

---

## Features

-  **CRUD** operations for job listings  
-  RESTful API secured with API key authentication  
-  Entity Framework Core for robust DB management  
-  CORS support for seamless front-end communication  
-  Responsive UI built with **Bootstrap 5**  
-  Asynchronous front-end interactions via **Fetch API**  
-  Client & server-side validation with error handling  
-  Clean, modular, and extendable code structure  

---

##  Technologies Used

###  Backend
- `ASP.NET Core Web API (.NET 6+)`
- `Entity Framework Core`
- `SQL Server` / `SQLite`

### Frontend
- `HTML5` 
- `CSS3` 
- `JavaScript (Vanilla)` 
- `Bootstrap 5`

### Tools & Utilities
- Visual Studio 2022  
- Git & GitHub  
- Postman (API testing)  
- API key authentication   

---

## Getting Started

### Prerequisites
- [.NET 6 SDK or later](https://dotnet.microsoft.com/download)  
- Visual Studio 2022 or newer  
- SQL Server or another compatible DB  
- Node.js & npm *(optional, for package management)*

### Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/TsipiDev/JobFinder_FullStackApplication.git
cd JobFinder

# 2. Update your DB connection string in appsettings.json
# "ConnectionStrings": {
#   "DefaultConnection": "Server=(localdb)\mssqllocaldb;Database=JobFinderDb;Trusted_Connection=True;"
# }

# 3. Apply DB migrations
dotnet ef database update

# 4. Run the backend API
dotnet run
```

Open the front-end HTML files (like `create-job.html`) in a browser or use a local server to test the UI.

---

## Usage

- Use the front-end form to **create**, **update**, and **delete** job listings  
- Interactions are handled **asynchronously** via the Fetch API  
- API key is required for protected routes – check comments/documentation for setup  

---

## Project Structure

```
/JobFinder
│
├── /Controllers         # API Controllers
├── /Data                # DbContext & EF Core config
├── /Models              # Entity and DTO models
├── /Security            # API key middleware
├── /wwwroot             # Static front-end files (HTML, CSS, JS)
├── appsettings.json     # App configuration
├── JobFinder.csproj     # .NET project file
└── README.md            # This file
```

---

## Contributing

Contributions are welcome!  
Fork the repo, make your changes, and open a pull request

---

## License

Licensed under the [MIT License](LICENSE)

---

## Contact

Got feedback or questions?

- Dimitris Vatousis  
- dimitrisvatoussis@gmail.com  
- GitHub: [@TsipiDev](https://github.com/TsipiDev)

---

## Acknowledgements

- Microsoft ASP.NET Core & EF Core Docs  
- Bootstrap CSS Framework  
- Seminar peers & instructors for support & feedback
