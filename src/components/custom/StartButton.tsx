"use client";
import { axiosInstance } from "@/lib/axiosInstance";
import React, { useState } from "react";

interface TeamData {
  id: number;
  teamName: string;
  points: number;
}
const teamData: TeamData[] = [
  {
    id: 1,
    teamName: "Royal Challengers",
    points: 0,
  },
  {
    id: 2,
    teamName: "Mumbai Indians",
    points: 0,
  },
  {
    id: 3,
    teamName: "Chennai Super Kings",
    points: 0,
  },
  {
    id: 4,
    teamName: "Delhi Capitals",
    points: 0,
  },
  {
    id: 5,
    teamName: "Rajasthan Royals",
    points: 0,
  },
  {
    id: 6,
    teamName: "Kolkata Knights",
    points: 0,
  },
  {
    id: 7,
    teamName: "Punjab Kings",
    points: 0,
  },
  {
    id: 8,
    teamName: "Sunrisers",
    points: 0,
  },
  {
    id: 9,
    teamName: "Gujarat Titans",
    points: 0,
  },
  {
    id: 10,
    teamName: "Lucknow Giants",
    points: 0,
  },
];

const page = ({socket}: {socket: any}) => {
  const [leaderboard, setLeaderboard] = useState<TeamData[]>(teamData);

  const loadDB = async () => {
    try {
      const axios = await axiosInstance();
      socket.emit('show-leaderboard', {message: "show"})
      await axios.post(`/api`, { leaderboard });
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
    }
  };
  return (
    <button
      className="ml-auto text-black bg-gray-200 p-1 rounded-full"
      onClick={loadDB}
    >
      ⏺️🤾‍♂️
    </button>
  );
};

export default page;
