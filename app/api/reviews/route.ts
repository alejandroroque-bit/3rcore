// app/api/reviews/route.ts
import { NextResponse } from "next/server"

export async function GET() {
  const PLACE_ID = process.env.GOOGLE_PLACE_ID
  const API_KEY = process.env.GOOGLE_PLACES_API_KEY

  // Si faltan las variables, avisa claro en vez de fallar más abajo
  if (!PLACE_ID || !API_KEY) {
    return NextResponse.json(
      {
        error: "Faltan variables de entorno",
        detail: {
          GOOGLE_PLACE_ID: PLACE_ID ? "OK" : "FALTA",
          GOOGLE_PLACES_API_KEY: API_KEY ? "OK" : "FALTA",
        },
      },
      { status: 500 }
    )
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=es`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": API_KEY,
          "X-Goog-FieldMask": "displayName,rating,userRatingCount,reviews",
          "X-Goog-Reviews-Sort": "HIGHEST_RATING",
        },
        next: { revalidate: 86400 }, // cachea 24h para no gastar cuota
      }
    )

    const data = await res.json()

    // Si Google devuelve un error (API no activada, key inválida, place id malo, etc.)
    if (!res.ok) {
      return NextResponse.json(
        { error: "Google Places respondió con error", detail: data },
        { status: res.status }
      )
    }

    if (!data.rating) {
      return NextResponse.json({ error: "No hay datos de rating", data }, { status: 500 })
    }

    return NextResponse.json({
      name: data.displayName?.text,
      rating: data.rating,
      user_ratings_total: data.userRatingCount,
      reviews: (data.reviews ?? []).filter((r: any) => r.rating >= 4),
    })
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}