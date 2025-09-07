## CodeAlpha Task 3 – Secure Coding Review
Description

This repository contains a secure coding review for a sample Node.js/Express application. The audit identifies multiple security vulnerabilities and provides recommendations for safer code practices.

## Project Structure
```
CodeAlpha_Task3/
│
├─ Report.docx          # Word report with vulnerabilities and screenshots
├─ app.js               # Main Node.js application
├─ package.json         # Node.js dependencies
├─ package-lock.json    # Dependency lock file
├─ public/              # CSS and static files
│   └─ style.css
├─ views/               # EJS templates
│   ├─ index.ejs
│   ├─ login.ejs
│   ├─ register.ejs
│   └─ dashboard.ejs
└─ README.md            # This file
```

## Tools Used

- Node.js / Express.js

- EJS & CSS

- npm audit

- Browser Developer Tools (Console & Network)

- Manual inspection of app.js

## Vulnerabilities Identified

 - Plaintext password storage

- Hardcoded session secrets

- Lack of input validation (XSS)

- No rate limiting (Brute-force risk)

- Improper error handling

## Recommendations

1. Hash passwords before storing (e.g., bcrypt)

2. Move session secrets to environment variables

3. Validate and sanitize all user inputs

4. Implement rate limiting on login and sensitive endpoints

5. Add proper error handling middleware with generic messages
