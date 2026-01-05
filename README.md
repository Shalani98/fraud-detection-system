# Fraud Detection System

A **Python + Machine Learning project** for detecting credit card fraud, with a React frontend and Flask backend.  
This repository contains the **production-ready code deployed on AWS EC2**, and this README explains **how to set up, run, and sync the project**.

---

## ✅ Features

- Detects credit card fraud using machine learning models.
- React frontend for user-friendly input.
- Flask backend serving the ML model and API endpoints.
- Easy deployment on AWS EC2.
- Full GitHub workflow for syncing EC2, local development, and remote repository.
- Ready for production use.

---

## 🛠 Tech Stack

- **Frontend:** React.js  
- **Backend:** Python, Flask  
- **Machine Learning:** scikit-learn, pickle model  
- **Database:** CSV (or replace with preferred DB)  
- **Deployment:** AWS EC2  
- **Version Control:** Git + GitHub  

---

## 📁 Folder Structure

fraud-detection-system/
│
├── backend/ # Python backend & ML model
│ ├── app.py
│ ├── creditcard.py
│ ├── fraud_model.pkl
│ └── requirements.txt
│
├── frontend/ # React frontend
│ ├── src/
│ ├── public/
│ └── package.json
│
├── .gitignore
└── README.md

yaml
Copy code

---

## ⚡ Setup Instructions

### 1️⃣ Backend Setup

1. Navigate to backend folder:

```bash
cd backend
Create a virtual environment:

bash
Copy code
# Linux / EC2
python3 -m venv venv
source venv/bin/activate

# Windows
python -m venv venv
venv\Scripts\activate
Install dependencies:

bash
Copy code
pip install -r requirements.txt
Run Flask app:

bash
Copy code
python app.py
Backend will run on http://localhost:5000

2️⃣ Frontend Setup
Navigate to frontend folder:

bash
Copy code
cd frontend
Install npm dependencies:

bash
Copy code
npm install
Run React app:

bash
Copy code
npm start
App will run on http://localhost:3000

🔗 EC2 → GitHub → Laptop Workflow
On EC2 (Production Code)
bash
Copy code
cd /home/ubuntu/fraud-detection-system
git init
git remote add origin https://github.com/Shalani98/fraud-detection-system.git
git add .
git commit -m "Production-ready code from EC2"
git branch -M main
git push -f origin main
✅ GitHub now exactly matches EC2.

On Laptop (Sync with EC2 + GitHub)
bash
Copy code
cd C:\Users\Administrator\fraud-detection-system
git fetch origin
git reset --hard origin/main
✅ Laptop now exactly matches EC2 + GitHub.

💡 Git Commands Overview
Command	Purpose
git add .	Stage all changes
git commit -m "message"	Save changes locally
git push origin main	Upload local commits to GitHub
git push -f origin main	Force push, overwrite GitHub with local code (use carefully)
git pull origin main	Get updates from GitHub and merge locally
git fetch origin && git reset --hard origin/main	Force local code to match GitHub exactly

⚙️ Notes
.gitignore ensures no sensitive or unnecessary files are pushed:

bash
Copy code
.env
__pycache__/
node_modules/
venv/
Always push from EC2 first, then sync laptop to avoid conflicts.

