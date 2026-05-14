"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { company } from "@/data/company";

export function ReviewsSection() {
  return (
    <section className="section bg-slate-50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-2 mb-4">Kundenbewertungen</h2>
          <p className="mb-12 text-lg text-slate-600">
            Das sagen unsere Kunden über ParkExpress24
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-3">
            {company.reviews.map((review, index) => (
              <Card key={index} className="border-0 bg-white shadow-md card-hover">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-amber-200" />
                  </div>

                  {/* Review Text */}
                  <p className="mb-6 text-slate-600 leading-relaxed">
                    "{review.text}"
                  </p>

                  {/* Rating */}
                  <div className="mb-4 flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 font-semibold text-slate-600">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">{review.name}</p>
                      <p className="text-sm text-slate-500">{review.location} • {review.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-12 flex items-center justify-center gap-2 text-slate-500">
          <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
          <span className="font-medium">{company.stats.reviews} Kundenbewertungen</span>
        </div>
      </div>
    </section>
  );
}
