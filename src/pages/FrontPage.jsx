import { Link } from "react-router-dom";
import FadeSlider from "../components/FadeSlider/FadeSlider";
import ThumbnailGrid from "../components/ProjectGrid/ProjectGrid";
import Button from "../components/Button/Button";

function FrontPage() {
  return (
    <>
      <h1>Rise and shine! Nu skal vi gøre rent i huset</h1>
      <ul>
        <li>
          <Link to="/basement">
            <Button>Kælderen</Button>
          </Link>
        </li>

        <li>
          <Link to="/plenum">
            <Button>Plenum</Button>
          </Link>
        </li>
        <li>
          <Link to="/stuen">
            <Button>Stueetagen</Button>
          </Link>
        </li>
        <li>
          <Link to="/soverum">
            <Button>Soverum</Button>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default FrontPage;
