import { GiGymBag } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { BsFillXDiamondFill } from "react-icons/bs";
import { AiFillGold } from "react-icons/ai";
import { IconContext } from "react-icons";
import "./Pricing.css";

function Pricing() {
  return (
    <div>
      <div className="pricing_section">
        <div className="pricing_wrapper">
          <h1 className="pricing_heading">PRICING</h1>
          <div className="pricing_container">
            <IconContext.Provider value={{ color: "#fff", size: 64 }}>
              <Link to="/signup" className="pricing_container-card">
                <div className="pricing_container-cardInfo">
                  <div className="icon">
                    <GiGymBag />
                  </div>
                  <h3>Starter</h3>
                  <h4>8.99 EUR</h4>
                  <p>per month</p>
                  <ul className="pricing_container-features">
                    <li>Unlimited Access to the gym</li>
                    <li>Serviceless entry</li>
                    <li>10% Discount on all products</li>
                  </ul>
                  <Button buttonSize="btn-wide" buttonColor="primary">
                    Choose plan
                  </Button>
                </div>
              </Link>
              <Link to="/signup" className="pricing_container-card">
                <div className="pricing_container-cardInfo">
                  <div className="icon">
                    <BsFillXDiamondFill />
                  </div>
                  <h3>Diamond</h3>
                  <h4>29.99 EUR</h4>
                  <p>per month</p>
                  <ul className="pricing_container-features">
                    <li>Personal trainer</li>
                    <li>Access to all halls</li>
                    <li>Access to swimming pool</li>
                  </ul>
                  <Button buttonSize="btn-wide" buttonColor="primary">
                    Choose plan
                  </Button>
                </div>
              </Link>
              <Link to="/signup" className="pricing_container-card">
                <div className="pricing_container-cardInfo">
                  <div className="icon">
                    <AiFillGold />
                  </div>
                  <h3>Gold</h3>
                  <h4>19.99 EUR</h4>
                  <p>per month</p>
                  <ul className="pricing_container-features">
                    <li>Notes and analytics</li>
                    <li>Once a week:</li>
                    <li>Swimming pool entry</li>
                    <li>Session with a coach</li>
                  </ul>
                  <Button buttonSize="btn-wide" buttonColor="primary">
                    Choose plan
                  </Button>
                </div>
              </Link>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
