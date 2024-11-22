"use client"

import { login } from "@/actions/auth";
import React from "react";
import { FaGithub } from "react-icons/fa";

const GithubButton = () => {
  return (
    <div
      onClick={() => login("github")}
      className="w-full gap-4 hover:cursor-pointer mt-6 h-12 bg-slate-700 rounded-md p-4 flex items-center justify-center"
    >
      <FaGithub className="w-6 h-6 text-white" />
      <p className="text-white">Sign in with Github</p>
    </div>
  );
};

export default GithubButton;
