import dbConnect from "../../../utils/dbConn";
import Contact from "../../../models/contact";
import {NextResponse} from "next/server";

export async function POST(request,resonse){

    try {
        const body= await request.json();
        await dbConnect();
        await Contact.create(body);
        return NextResponse.json({
            message:"sent successfully"
        },{status:200})
    } catch (error) {
        return NextResponse.json({
            message:"sent successfully"
        },{status:500})
    }
}