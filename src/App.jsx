import React, { useEffect, useState } from "react";
import Carousel from "./components/Carousel";

export default function App() {
  const [wantlist, setWantlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numberOfPagesToLoad, setNumberOfPagesToLoad] = useState(1);
  const [currentPageLoading, setCurrentPageLoading] = useState(1);
  const jumpItems = 50;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowUp") handleUp();
      if (e.key === "ArrowDown") handleDown();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  // Handle arrow key interactions
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % wantlist.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + wantlist.length) % wantlist.length);
  };

  // Up and down keys jump for {jumpItems} records
  const handleUp = () => {
    setCurrentIndex((prev) => (prev + jumpItems) % wantlist.length);
  };

  const handleDown = () => {
    setCurrentIndex((prev) => (prev - jumpItems + wantlist.length) % wantlist.length);
  };

  const fetchPage = async (page) => {
    const res = await fetch(
      "https://api.discogs.com/users/" + import.meta.env.VITE_DISCOGS_USERNAME + "/wants?token=" + import.meta.env.VITE_DISCOGS_TOKEN + "&page=" + page + "&per_page=500&sort_order=desc&sort=added"
    );
    const data = await res.json();
    return data;
  };

  const fetchAllPages = async () => {
    let allItems = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const data = await fetchPage(page);
      const pages = data.pagination.pages;
      setNumberOfPagesToLoad(pages);
      setCurrentPageLoading(page);
      allItems = [...allItems, ...data.wants];

      // Customize this based on your API's pagination structure
      if(page < pages){
        page++;
        setCurrentPageLoading(page);
      } else {
        hasMore = false;
      }
    }

    setWantlist(allItems);
    setLoading(false);
  };

  useEffect(() => {
    fetchAllPages();
  }, []);

  if (loading) {
    return <div className="text-center text-xl py-10">Loading {currentPageLoading} of {numberOfPagesToLoad == 1 ? 'unknown (loading first batch)' : numberOfPagesToLoad}...</div>;
  }

  return (
      <Carousel
      currentIndex = {currentIndex}
      wantlistLength = {wantlist.length}
      item={wantlist[currentIndex]}
      onNext={handleNext}
      onPrev={handlePrev}
    />
  );
}