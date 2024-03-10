
import { Product } from "@/Database/Models/signup";
import { uri } from "@/Database/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
// uri
    await mongoose.connect(uri)

    const data= await Product.find()
    console.log(data)
    return NextResponse.json({
        data,
        result:true

    })
}

export async function POST(req){
    await mongoose.connect(uri)
    const user=await req.json()
    let result=new Product(user)
    const done= await result.save()
    return NextResponse.json({
        done,
        success:true
    })
}