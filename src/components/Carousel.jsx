import React from "react";
import { BrowseButton } from "@/components/ui/browsebutton";
import { GoTo } from "@/components/ui/goto";
import { ArrowLeft, ArrowRight } from "lucide-react";
import RecordCard from "./RecordCard";

export default function Carousel({ currentIndex, wantlistLength, item, onNext, onPrev, onGoTo }) {
  const { title, cover_image, artists, id, year } = item.basic_information;

  return (
    <div className="flex-col items-center justify-center h-screen bg-gray-100">
      <h3 className="text-center text-xl font-extrabold">{currentIndex+1} of {wantlistLength}</h3>

      <GoTo
        itemShown={currentIndex+1} goTo={onGoTo}
      ></GoTo>

      <div className="flex items-center justify-center h-screen bg-gray-100">
        <BrowseButton onClick={onPrev} variant="previous">
        </BrowseButton>

        <RecordCard
          image={cover_image}
          artist={artists?.[0]?.name}
          title={title}
          url={'https://www.discogs.com/release/' + id}
          year={year}
        />

        <BrowseButton onClick={onNext} variant="next">
        </BrowseButton>
      </div>
    </div>
  );
}
