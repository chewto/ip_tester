import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
  try{

    

    return NextResponse.json({hola:"hola"}, {status: 200})
  }catch (e){
    return NextResponse.json({chao:"chao"}, {status: 400})
  }
}

export async function POST(req: Request, context:any) {
  try{

    const data = await req.json()

    await sql`INSERT INTO ip(user_ip) VALUES(${data})`

    return NextResponse.json({res: "good req"}, {status: 200})
  }catch (e){
    return NextResponse.json({res:"bad req"}, {status: 400})
  }
}