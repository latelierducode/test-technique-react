import ImageVideo from "./image_video.png";

const ImageAndTextContainer = () => {
  return (
    <div className="ImageAndTextContainer">
      <img src={ImageVideo} />
      <div className="textContainer">
        <p className="accroche">
          Ready not to Stop{" "}
          <span className="purplebg">
            <span className="straightText">Talking</span>
          </span>
          Design?
        </p>
        <p className="joinNow">
          <a href="#">
            I want to <br />
            <span className="joinbold">Join now!</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default ImageAndTextContainer;
