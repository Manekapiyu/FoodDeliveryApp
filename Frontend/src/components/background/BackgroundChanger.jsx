import { useState, useEffect } from "react";
import "./BackgroundChanger.css"; // Import the CSS file
import headerImg1 from "../../assets/header_img1.png";
import headerImg2 from "../../assets/header_img2.png";


const BackgroundChanger = () => {
  const images = [headerImg1, headerImg2];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div
      className="background-container"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <h1>Welcome!</h1>
    </div>
  );
};

export default BackgroundChanger;
