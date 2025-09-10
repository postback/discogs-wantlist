import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function RecordCard({ image, artist, title, url, year }) {
  return (
    <Card className="mx-8 w-[600px] p-4 bg-white">
      <CardContent className="flex flex-col items-center">
        <img
          src={image}
          alt={title}
          className="w-128 h-128 object-contain mb-4"
        />
        <h2 className="text-xl font-bold text-center">{artist}</h2>
        <a className="text-md text-gray-600 text-center underline" href={url} target="_blank">{title} — {year}</a>
      </CardContent>
    </Card>
  );
}
