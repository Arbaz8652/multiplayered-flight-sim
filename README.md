# Multiplayer Flight Simulation Game

Welcome to the **Multiplayer Flight Simulation Game**! 🛩️✨ This project is an exciting real-time multiplayer flight simulation where players can connect, create game rooms, and fly together in a shared virtual environment.

## 🚀 Features
- **Real-time multiplayer gameplay** – Fly with other players in a shared sky! 🌍✈️
- **Lobby system** – See active games and join your squadron. 👥
- **Smooth WebSocket communication** – Fast and responsive controls. 📡
- **PostgreSQL database** – Manage users, sessions, and game data. 🗄️
- **Dockerized environment** – Set up and run in just a few commands. 🐳

---

## 🛠️ Getting Started
### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/multiplayer-flight-sim.git
cd multiplayer-flight-sim
```

### 2️⃣ Install dependencies
Ensure you have **Node.js** and **Docker** installed.
```bash
cd backend
npm install
```

### 3️⃣ Set up environment variables
Create a `.env` file inside `backend/` with the following:
```env
DB_USER=arbaz_pathan
DB_PASSWORD=Pass1234
DB_NAME=multiplayer_game
DB_HOST=postgres
DB_PORT=5432
```

### 4️⃣ Start PostgreSQL with Docker
```bash
docker-compose up -d
```

### 5️⃣ Run the backend server
```bash
npm run dev
```

### 6️⃣ Join the action! 🎮
Now your backend is live! Connect your frontend or start sending API requests to test the game.

---

## 🔥 API Endpoints
| Method | Endpoint         | Description                 |
|--------|----------------|-----------------------------|
| GET    | `/games`        | Fetch active game lobbies  |
| POST   | `/games/join`   | Join an existing game      |
| POST   | `/games/create` | Create a new game session  |
| POST   | `/users/login`  | Authenticate user login    |

---

## 📦 Tech Stack
- **Backend:** Node.js, Express, WebSockets (Socket.io)
- **Database:** PostgreSQL
- **Containerization:** Docker
- **Authentication:** JWT

---

## 👨‍💻 Contributing
Want to help make this game even better? Fork the repo, make your changes, and submit a pull request! 🚀

1. **Fork the project**
2. **Create a new branch** (`feature-new-cool-thing`)
3. **Commit your changes** (`git commit -m "Added a cool feature"`)
4. **Push to your branch** (`git push origin feature-new-cool-thing`)
5. **Open a Pull Request**

---

## 🛠 Troubleshooting
### PostgreSQL Issues:
- If you see `FATAL: role "postgres" does not exist`:
  ```bash
  docker exec -it multiplayer_pg psql -U arbaz_pathan -d multiplayer_game
  ```
  Then manually create the user inside psql:
  ```sql
  CREATE ROLE postgres WITH LOGIN SUPERUSER PASSWORD 'postgres';
  ```

- If you see `initdb: error: directory "/var/lib/postgresql/data" exists but is not empty`, reset your database:
  ```bash
  docker-compose down -v
  docker-compose up -d
  ```

---

## 🎯 Future Enhancements
- 🎨 Improved UI for game selection and chat
- 🌐 Global servers for better connectivity
- 🎮 Advanced flight physics and new aircrafts

---

## 📞 Need Help?
If you're stuck or have suggestions, open an issue or reach out! 🚀

---

Happy flying! ✈️🌍