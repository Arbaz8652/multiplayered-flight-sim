import express from "express";
import pool from "../config/db";

const router = express.Router();

// Get list of available games
router.get("/games", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM games WHERE status = 'waiting'");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching games.");
  }
});

// Create a new game
router.post("/games", async (req, res) => {
  const { name } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO games (name, status) VALUES ($1, 'waiting') RETURNING *",
      [name]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating game.");
  }
});

// Join a game
router.post("/games/:id/join", async (req, res) => {
  const { id } = req.params;
  const { username } = req.body;

  try {
    await pool.query("UPDATE games SET status = 'in_progress' WHERE id = $1", [id]);
    res.send({ message: `User ${username} joined game ${id}.` });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error joining game.");
  }
});

export default router;
