"use client"
import axios from 'axios'
import { Button } from "@/components/ui/button";
import React, { useEffect, useMemo, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Box from "@/components/custom/Box";
import io from "socket.io-client"

interface TeamData {
  id: number;
  teamName: string;
  points: number;
}



const options: TeamData[] = [
  {
    id: 1,
    teamName: "Royal Challengers",
    points: 16,
  },
  {
    id: 2,
    teamName: "Mumbai Indians",
    points: 14,
  },
  {
    id: 3,
    teamName: "Chennai Super Kings",
    points: 12,
  },
  {
    id: 4,
    teamName: "Delhi Capitals",
    points: 10,
  },
  {
    id: 5,
    teamName: "Rajasthan Royals",
    points: 10,
  },
  {
    id: 6,
    teamName: "Kolkata Knights",
    points: 8,
  },
  {
    id: 7,
    teamName: "Punjab Kings",
    points: 8,
  },
  {
    id: 8,
    teamName: "Sunrisers",
    points: 6,
  },
  {
    id: 9,
    teamName: "Gujarat Titans",
    points: 6,
  },
  {
    id: 10,
    teamName: "Lucknow Giants",
    points: 4,
  },
];

const page = () => {
  const BASE = process.env.NEXT_PUBLIC_API_URL;
  console.log(BASE)
  const socket  = useMemo(() => io(BASE, {
    withCredentials: true
  }),[]);
  const [leaderboard, setLeaderboard] = useState<TeamData[]>([]);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    })

    if(leaderboard.length === 0) {
      axios.get(`${BASE}/api`).then(data => setLeaderboard(data.data))
    }

    socket.on('update-leaderboard', (msg) =>{
      console.log(msg)
      setLeaderboard(msg);
    })

    return () => {
      socket.disconnect();
      socket.off('update-leaderboard');
    }
  }, [])

  const updateLeaderBoard = async(teamId:number, teamName:string) => {
    socket.emit('update', {teamId, teamName});
    console.log(teamId, teamName, 'updated-leaderboard')
  }

  

  return (
    <div className="bg-slate-200">
      <nav className="text-center font-bold w-full h-16 text-3xl pt-3 bg-slate-400 text-indigo-900 flex items-center justify-evenly">
          <p>Vote Your Team Live</p>
        </nav>
      <div className="flex flex-col items-center justify-center p-10 md:max-w-[70%] m-auto">
        <Table className="text-gray-100 bg-slate-950 rounded-xl">
          <TableCaption>Live Cricket Match Leaderboard</TableCaption>
          <TableHeader>
            <TableRow className="text-center">
              <TableHead className="text-green-400 font-semibold">
                TEAM ID
              </TableHead>
              <TableHead className="text-green-400 font-semibold">
                TEAM
              </TableHead>
              <TableHead className="text-green-400 font-semibold">
                POINTS
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboard.map((team, ind) => (
              <TableRow className="" key={team.id}>
                <TableCell>{ind+1} </TableCell>
                <TableCell>{team.teamName}</TableCell>
                <TableCell>{team.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="grid sm:grid-cols-3 lg:grid-cols-5 w-fullitems-center justify-center flex-wrap">
          {options.map((option) => (
            <div className=" m-3 p-1 rounded-xl min-w-32" key={option.id} onClick={() => updateLeaderBoard(option.id, option.teamName)}>
              <Box key={option.id} teamName={option.teamName} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
