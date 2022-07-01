import { useState } from "react";
import "./../css/components/Creative.scss";
import Icon from "../images/reload.png";

const Creative = ({ creative }) => {
  const [creativeUrl, setCreativeUrl] = useState(creative.url);
  const iframeReload = () => {
    setCreativeUrl("");
    setTimeout(() => {
      setCreativeUrl(creative.url);
    }, 100);
  };
  return (
    <div className="c-creative">
      <iframe
        title="creative"
        width="300"
        height="250"
        src={creativeUrl}
      ></iframe>
      <aside className="c-creative-discription">{creative.discription}</aside>
      <div className="c-creative-reload-icon" onClick={iframeReload}>
        <img src={Icon} alt="" />
      </div>
    </div>
  );
};

export default Creative;
