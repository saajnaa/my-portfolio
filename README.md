# My Portfolio Website 🧑‍💻

> A personal portfolio showcasing projects, skills, blog posts, and contact information. Built with a modern frontend using React/Vite and a minimal Node.js backend for services like email notifications via Nodemailer.

---

## 📁 Project Structure
```
my-portfolio/
├── frontend/           # React/Vite application
│   ├── public & src    # Components, styles, assets
│   ├── package.json
│   └── vite.config.js
├── backend/            # Node.js/Express server (Nodemailer service)
│   ├── services/       # helper modules
│   ├── package.json
│   └── server.js
└── README.md           # this documentation
```

## 🚀 Features
- **Responsive UI** built with React and CSS modules
- **Navigation components**: Hero, Services, Projects, Blog, Resume, Contact, etc.
- **Email contact form** powered by backend Nodemailer service
- **Vite dev server** & environment support
- Deployable on platforms like Vercel

## 🛠️ Technologies Used
- Frontend: React, Vite, JSX, CSS
- Backend: Node.js, Express, Nodemailer
- Tools: ESLint, Vercel configuration for deployment

## 🧩 Getting Started
### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Frontend Setup
```bash
cd frontend
npm install        # or yarn install
npm run dev        # start dev server
npm run build      # create production build
```

### Backend Setup
```bash
cd backend
npm install
node server.js     # start Express server
```

> The backend listens on a port defined by `process.env.PORT` (defaults to 5000). The frontend contact form hits `/send` to dispatch emails.

## 📦 Deployment
The repository is configured for deployment with [Vercel](https://vercel.com/):
- `frontend/vercel.json` and `backend/vercel.json` contain deployment settings
- Build commands are managed by Vercel's automatic detection

Alternatively, deploy the backend to any Node host and serve the frontend statically.

## 📝 Customization
- Update content in `src/components` and styles in `src/styles`.
- Replace images under `src/assets/project-img` with your project screenshots.
- Modify the Nodemailer service in `backend/services/Nodemailer-Service.js` with your SMTP credentials.

## 👤 Author
Sajan Rishidev
- Portfolio website owner and developer

## 📫 Contact
Use the contact form on the site or reach out via email (configured in backend service).

## 📄 License
This project is open source and available under the [MIT License](./LICENSE) (if applicable).

---

*Thank you for visiting my portfolio!*
 