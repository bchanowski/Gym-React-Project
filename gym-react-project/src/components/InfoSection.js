import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./InfoSection.css";

function InfoSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div
        className={lightBg ? "home_info-section" : "home_info-section darkBg"}
      >
        <div className="container">
          <div
            className="row home_info-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home_info-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home_info-subtitle"
                      : "home_info-subtitle dark"
                  }
                >
                  {description}
                </p>
                <Link to="/signup">
                  <Button buttonSize="btn--wide" buttonColor="orange">
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="home_info-img-wrapper">
                <img src={img} alt={alt} className="home_info-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoSection;
