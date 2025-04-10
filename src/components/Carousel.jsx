import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import RecordCard from "./RecordCard";

export default function Carousel({ currentIndex, wantlistLength, item, onNext, onPrev }) {
  const { title, cover_image, artists, id, year } = item.basic_information;

  return (
    <div className="flex-col items-center justify-center h-screen bg-gray-100">
      <h3 className="text-center text-xl font-extrabold">{currentIndex+1} of {wantlistLength}</h3>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <Button variant="ghost" size="icon" onClick={onPrev}>
          <ArrowLeft size={32} />
        </Button>

        <RecordCard
          image={cover_image}
          artist={artists?.[0]?.name}
          title={title}
          url={'https://www.discogs.com/release/' + id}
          year={year}
        />

        <Button variant="ghost" size="icon" onClick={onNext}>
          <ArrowRight size={32} />
        </Button>
      </div>
    </div>
  );
}
