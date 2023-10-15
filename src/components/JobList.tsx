import React from "react";
import JobModal from "./JobModal";
import JobGrid from "./JobGrid";

interface job {
  bgColor: string;
  initials: string;
  name: string;
  title: string;
  description: string;
  href: string;
}

const Jobs: job[] = [
  {
    bgColor: "bg-blue-500",
    initials: "JD",
    name: "Company A",
    title: "Frontend Developer",
    description: "We are looking for a talented Frontend Developer...",
    href: "/resume",
  },
  {
    bgColor: "bg-green-500",
    initials: "WD",
    name: "Company B",
    title: "UX Designer",
    description: "Join our team as a UX Designer and help us create...",
    href: "/resume",
  },
  {
    bgColor: "bg-yellow-500",
    initials: "SD",
    name: "Company C",
    title: "Software Engineer",
    description: "Are you a passionate Software Engineer...",
    href: "/resume",
  },
  {
    bgColor: "bg-red-500",
    initials: "MD",
    name: "Company D",
    title: "Data Scientist",
    description: "Exciting opportunity for a Data Scientist to work on...",
    href: "/resume",
  },
];

export default function JobList() {
  const [jobs, setJobs] = React.useState<job[]>(Jobs);

  return (
    <div className="flex flex-col p-4">
      <div className="mr-auto flex w-full justify-between py-2">
        <h1 className="text-2xl font-bold text-gray-500">Job List</h1>
        <JobModal jobs={jobs} setJobs={setJobs} />
      </div>
      <JobGrid Jobs={jobs} setJobs={setJobs} />
    </div>
  );
}
