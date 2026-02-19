// app/api/reviews/route.ts
import { NextResponse } from "next/server"

export async function GET() {
  const PLACE_ID = process.env.GOOGLE_PLACE_ID
  const API_KEY = process.env.GOOGLE_PLACES_API_KEY


  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": API_KEY!,
          "X-Goog-FieldMask": "displayName,rating,userRatingCount,reviews"
        },
        next: { revalidate: 86400 }
      }
    )

    const data = await res.json()

    if (!data.rating) {
      return NextResponse.json({ error: "No data", data }, { status: 500 })
    }

    return NextResponse.json({
      name: data.displayName?.text,
      rating: data.rating,
      user_ratings_total: data.userRatingCount,
      reviews: data.reviews ?? []
    })

  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}