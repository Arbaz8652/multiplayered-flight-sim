export interface Game {
    id: string;
    name: string;
    players: string[];
    status: "waiting" | "in_progress" | "finished";
  }
  