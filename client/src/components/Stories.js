import { useState } from "react";

export default function Stories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const stories = [
    { profile_picture: "https://via.placeholder.com/100x100", username: "account1" },
    { profile_picture: "https://via.placeholder.com/100x100", username: "account2" },
    { profile_picture: "https://via.placeholder.com/100x100", username: "account3" },
    { profile_picture: "https://via.placeholder.com/100x100", username: "account4" },
    { profile_picture: "https://via.placeholder.com/100x100", username: "account5" },
    { profile_picture: "https://via.placeholder.com/100x100", username: "account6" },
  ].map((story, i) => (
    <div key={i} className="story">
      <img src={story.profile_picture} />
      <p>{story.username}</p>
    </div>
  ));

  const storyWidth = 200;

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className="carousel">
      <div className="stories-container">
        <div
          className="stories"
          style={{
            transform: `translateX(-${storyWidth * currentIndex}px)`,
          }}>
          {stories}
        </div>
      </div>
      {currentIndex > 0 ? (<button className="prev" onClick={handlePrev}>
        &lt;
      </button>) : null}
      
      <button className="next" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
}
