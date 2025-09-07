"use server";

import { prisma } from "@workspace/db";


  const getData = async () =>{
    const test = await prisma.post.findMany();
    return test
  }
  console.log(">>", process.env.NODE_ENV);

  export default getData;