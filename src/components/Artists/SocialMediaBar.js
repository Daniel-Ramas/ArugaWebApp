import React from "react";
import "./SocialMediaBar.css";
import { SocialMediaIconsReact } from "social-media-icons-react";
import { findByLabelText } from "@testing-library/react";

export default function SocialMediaBar() {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="social-media-icon">
          <SocialMediaIconsReact
            borderColor="rgba(0,0,0,0.25)"
            borderWidth="2"
            borderStyle="solid"
            icon="instagram"
            iconColor="rgba(255,255,255,1)"
            backgroundColor="rgba(129,52,175,1)"
            iconSize="6"
            roundness="40%"
            url="https://some-website.com/my-social-media-url"
            size="40"
          />
          <p>16k</p>
        </div>
        <div className="social-media-icon">
          <SocialMediaIconsReact
            borderColor="rgba(0,0,0,0.25)"
            borderWidth="2"
            borderStyle="solid"
            icon="twitter"
            iconColor="rgba(255,255,255,1)"
            backgroundColor="rgba(28,186,223,1)"
            iconSize="6"
            roundness="40%"
            url="https://some-website.com/my-social-media-url"
            size="40"
          />
          <p>50k</p>
        </div>
        <div className="social-media-icon">
          <SocialMediaIconsReact
            borderColor="rgba(0,0,0,0.25)"
            borderWidth="2"
            borderStyle="solid"
            icon="youtube"
            iconColor="rgba(255,255,255,1)"
            backgroundColor="rgba(299,39,45,1)"
            iconSize="6"
            roundness="40%"
            url="https://some-website.com/my-social-media-url"
            size="40"
          />
          <p>40k</p>
        </div>
      </div>
    </React.Fragment>
  );
}
