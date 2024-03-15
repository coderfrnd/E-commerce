
import { Product } from "@/Database/Models/signup";
import { uri } from "@/Database/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
// import bcrypt from "bcrypt";
import bcrypt from "bcrypt"

export async function GET(req){
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
    // const user=await req.json()
    const {email,name,passo,mob} = await req.json()
    const existu = await  Product.findOne({email})
    // console.log(email,name,passo,mob)
    if(existu){
        // console.log("bhaag jaao")
        return new NextResponse("Email is used",{status:400})
    }
    const hashedPass = await bcrypt.hash(passo,5)
    let result=new Product({
        email,
        passo:hashedPass,
        name,
        mob
    })
    const done= await result.save()
    // console.log(user)
    // console.log(done)
    // console.log(result)
    return NextResponse.json({
        done,
        success:true
    })
}