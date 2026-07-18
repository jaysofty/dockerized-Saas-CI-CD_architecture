# formflow-capstone
### Dockerized 3-Tier SaaS Application with Automated CI/CD

> A production-ready SaaS platform built with modern DevOps practices — featuring containerized architecture, automated deployments, versioned releases, and rollback capability.

---

## 📌 Overview

**FormFlow** is a fully containerized 3-tier web application designed to simulate real-world SaaS deployment environments.

It enables teams to:

* Ship features continuously
* Track exactly what version is running in production
* Roll back instantly when deployments fail
* Deploy with confidence using CI/CD automation

---

## 🧱 Architecture

```
Internet
   │
   ▼
Nginx (Port 80)
   │
   ├───────────────┬───────────────┐
   ▼               ▼               ▼
Frontend       Backend        PostgreSQL
(React + Nginx) (Node API)     (Database)
```

### 🔹 Frontend

* React (Vite)
* Nginx (static serving + reverse proxy)

### 🔹 Backend

* Node.js + Express
* REST API
* Business logic + validation

### 🔹 Database

* PostgreSQL
* Persistent storage (Docker volume)

---

## ⚙️ Tech Stack

| Layer         | Technology           |
| ------------- | -------------------- |
| Frontend      | React (Vite) + Nginx |
| Backend       | Node.js + Express    |
| Database      | PostgreSQL           |
| Containers    | Docker               |
| Orchestration | Docker Compose       |
| CI/CD         | GitHub Actions       |
| Registry      | Docker Hub           |
| Production    | Ubuntu Linux VM      |
| Reverse Proxy | Nginx (Port 80 only) |

---

## 📁 Project Structure

```
formflow-capstone/
│
├── frontend/
├── backend/
├── database/
├── deployment/
├── docs/
├── .github/workflows/
├── README.md
└── LICENSE
```

---

## 🐳 Docker Strategy

### Frontend

* Multi-stage build (Node → Nginx)
* Optimized production image

### Backend

* Lightweight Node Alpine image
* Production dependencies only

### Database

* Official PostgreSQL image
* Persistent volume storage

---

## 🔢 Versioning Strategy

We use **Semantic Versioning (SemVer)**:

```
v1.0.0
v1.0.1
v1.1.0
```

Each release includes:

* Docker image tag
* Git commit SHA
* Full traceability

### Example:

```
formflow-backend:v1.0.2
commit: 2fb83ea
```

---

## 🔁 Rollback Strategy

If a deployment fails:

```bash
docker compose down
# update version in docker-compose.yml
docker compose pull
docker compose up -d
```

Verify:

```bash
docker ps
curl http://<server-ip>/api/health
```

---

## 🔐 Secrets Management

| Secret             | Storage Location           |
| ------------------ | -------------------------- |
| DB Password        | VM `.env` + GitHub Secrets |
| Docker Credentials | GitHub Secrets             |
| SSH Private Key    | GitHub Secrets             |
| API Keys           | VM `.env`                  |

🚫 No secrets are hardcoded or committed.

---

## ⚡ CI/CD Pipeline

### Workflow

```
Push Code / Tag
      ↓
GitHub Actions
      ↓
Run Tests
      ↓
Build Docker Images
      ↓
Tag Images
      ↓
Push to Docker Hub
      ↓
SSH into VM
      ↓
docker compose pull
      ↓
docker compose up -d
      ↓
Health Check ✅
```

---

## ☁️ Deployment

### Production Environment

* Ubuntu Linux VM
* Docker + Docker Compose installed
* Only **Port 80 exposed**

### Access

```
http://<your-public-ip>
```

---

## 🧪 Health Check

```bash
curl http://<server-ip>/api/health
```

Response:

```json
{
  "status": "OK"
}
```

---

## 📸 Screenshots (To Include)

* GitHub repository
* Docker Hub images & tags
* CI/CD pipeline success
* Running containers (`docker ps`)
* Live application
* API response
* Rollback process

---

## 🚨 Incident Report (Example)

**Symptom:**
API returned `500 Internal Server Error`

**Investigation:**

* Checked container logs
* Verified DB connectivity
* Confirmed environment variables

**Root Cause:**
Incorrect database hostname

**Fix:**
Updated `.env` and redeployed previous stable version

**Reflection:**
Versioned deployments and container isolation reduced downtime and simplified recovery.

---

## 🎯 Key Features

✅ 3-tier architecture
✅ Fully Dockerized system
✅ Automated CI/CD pipeline
✅ Versioned deployments (no `latest`)
✅ Instant rollback capability
✅ Production-ready configuration
✅ Secure secrets management

---

## 🧠 Design Decisions

* Separate containers for scalability and maintainability
* Immutable Docker images for traceability
* CI/CD automation to eliminate manual deployment errors
* Reverse proxy (Nginx) to expose only port 80

---

## 🚀 Getting Started (Local)

```bash
git clone https://github.com/yourname/formflow-capstone.git
cd formflow-capstone/deployment

cp .env.example .env

docker compose up -d
```

---

## 📦 Docker Images

* `yourname/formflow-frontend`
* `yourname/formflow-backend`

---

## 👨‍💻 Author

**Group 1**
Aspiring Cloud Engineers

---

## 📜 License

MIT License

---

## ⭐ Final Note

FormFlow is built to reflect **real-world SaaS deployment practices**, combining:

* Clean architecture
* DevOps automation
* Reliability through versioning
* Production-grade deployment

---

> 💡 *“If you can deploy it, version it, and roll it back — you can scale it.”*
