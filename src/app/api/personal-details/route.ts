// src/app/api/personal-details/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/server/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const saved = await prisma.personalDetail.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        bioDescription: body.bioDescription,
        email: body.email,
        phone: body.phone,
        address1: body.address1,
        address2: body.address2,
        city: body.city,
        state: body.state,
        country: body.country,
        zipcode: body.zipcode,
      },
    });

    return NextResponse.json({ success: true, data: saved });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: "Failed to save" }, { status: 500 });
  }
}
