import { useState } from "react";

function App() {
  const [videofile, setVideofile] = useState("");
  const [videosrc, setVideosrc] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleInputChange = (e) => {
    setVideofile(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (videofile && videofile === "sample") {
      setVideosrc(
        `https://videostream-cfrx.onrender.com/video?file=${videofile}.mp4`
      );
      setIsSubmitted(true);
    } else {
      alert("Please enter a video file name as 'sample' ");
    }
    // console.log("Form submitted");
  };
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Video Streaming App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="enter video name 'sample'"
            value={videofile}
            onChange={handleInputChange}
            style={{ padding: "10px", width: "300px" }}
            disabled={isSubmitted}
          />
          <button
            type="submit"
            style={{ padding: "10px 20px", marginLeft: "10px" }}
          >
            Stream video
          </button>
        </form>
        {videosrc && (
          <div style={{ marginTop: "25px" }}>
            <video controls width={640} autoPlay>
              <source src={videosrc} type="video/mp4" />
              Your browser doesnt support video tag
            </video>
          </div>
        )}
      </div>
    </>
  );
}
export default App;
