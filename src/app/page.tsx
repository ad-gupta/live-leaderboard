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

const teamData: TeamData[] = [
  {
    id: 1,
    teamName: "Royal Challengers",
    points:0,
  },
  {
    id: 2,
    teamName: "Mumbai Indians",
    points:0,
  },
  {
    id: 3,
    teamName: "Chennai Super Kings",
    points:0,
  },
  {
    id: 4,
    teamName: "Delhi Capitals",
    points:0,
  },
  {
    id: 5,
    teamName: "Rajasthan Royals",
    points:0,
  },
  {
    id: 6,
    teamName: "Kolkata Knights",
    points:0,
  },
  {
    id: 7,
    teamName: "Punjab Kings",
    points:0,
  },
  {
    id: 8,
    teamName: "Sunrisers",
    points:0,
  },
  {
    id: 9,
    teamName: "Gujarat Titans",
    points:0,
  },
  {
    id: 10,
    teamName: "Lucknow Giants",
    points:0,
  },
];

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
  const socket  = useMemo(() => io('http://localhost:4000'),[]);
  const [leaderboard, setLeaderboard] = useState<TeamData[]>(teamData);



  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    })

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

  const loadDB = async() => {
    try {
      const response = await axios.post('http://localhost:4000/api', {leaderboard});
      console.log(response)
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
    }
  }

  return (
    <div className="bg-slate-200">
      <nav className="text-center font-bold w-full h-16 text-3xl pt-3 bg-slate-400 text-indigo-950 flex items-center justify-evenly">
          <p>Vote Your Team Live</p>
          <Button onClick={loadDB}>Start-Game</Button>
        </nav>
      <div className="flex flex-col items-center justify-center p-10 md:max-w-[70%] m-auto">
        <Table className="text-gray-100 bg-indigo-950 rounded-xl">
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
        <div className="grid grid-cols-3 md:grid-cols-5 items-center justify-center flex-wrap">
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
