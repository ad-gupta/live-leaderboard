"use client";
import { axiosInstance } from "@/lib/axiosInstance";
import axios from "axios";
import { useRouter } from "next/navigation";
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

const page = () => {
  const [leaderboard, setLeaderboard] = useState<TeamData[]>(teamData);
  const [name, setName] = useState<string>("")
  const router = useRouter()

  const loadDB = async () => {
    try {
      const axios = await axiosInstance();
      await axios.post(`/api`, { name, leaderboard });
      router.push('/start-game');
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-[500px]">
        <h2 className="text-xl font-semibold text-center mb-4">
          Vote Your Team, Get live leaderboard. Are You Ready?
        </h2>
        <div className="relative bg-gray-100 rounded-xl flex items-center p-3">
          <input
            type="text"
            placeholder="Provide your username"
            className="bg-transparent outline-none w-full text-gray-600"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="flex space-x-3 text-gray-500">
            <span className="cursor-pointer">⌛</span>
            <span className="cursor-pointer">10</span>
            <span className="cursor-pointer">min</span>
          </div>
          <button
            className="ml-auto text-black bg-gray-200 p-2 rounded-full"
            onClick={loadDB}
          >
            ⏺️
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
