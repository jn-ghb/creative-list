import { useState } from "react";
import "./../css/components/Creative.scss";
import Icon from "../images/reload.png";

const Creative = ({ creative }) => {
  const [creativeUrl, setCreativeUrl] = useState(creative.url);
  const [completedIframeLoad, setCompletedIframeLoad] = useState(false);
  const iframeReload = () => {
    setCreativeUrl("");
    setTimeout(() => {
      setCreativeUrl(creative.url);
    }, 100);
  };
  return (
    <div className="c-creative">
      {completedIframeLoad ? (
        ""
      ) : (
        <div className="c-creative-loader">
          <div className="c-creative-loader-icon"></div>
        </div>
      )}
      <iframe
        id="iframe"
        title="creative"
        width="300"
        height="250"
        src={creativeUrl}
        onLoad={() => {
          setCompletedIframeLoad(true);
        }}
      ></iframe>
      <aside className="c-creative-discription">{creative.discription}</aside>
      <div className="c-creative-reload-icon" onClick={iframeReload}>
        <img src={Icon} alt="" />
      </div>
    </div>
  );
};

export default Creative;
