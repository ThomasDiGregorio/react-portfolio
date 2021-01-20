import React from "react";
import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "2750px",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="right-column">
        <p>
          Thomas DiGregorio has spent his entire life playing video games.
          Although he has countless hours playing a multitude of games on a
          variety of different consoles he really enjoys military games, puzzle,
          3rd person shooter, action, sci-fi and horror games, racing games, and
          mmorpg games like Destiny 2, Elder Scrollls Oblivion, and Star Trek:
          Online. The consoles he has played include the following: Commodore
          Amiga, Colecovision, NES, Super Nintendo, Sega Genesis, Nintendo
          Gamecube, Sega CD, Playstation, PS2, PS3, PS4, Xbox, Xbox 360, Now
          hoping to obtain the PS5 next year. And to hopefully become a pro
          gamer in my spare time as another hobby.
        </p>

        <p>
          He has made use of his time since the pandemic began to pursue his
          love of gaming. He has taught himself how to code using Youtube
          videos, and FreeCodeCamp.com Thomas is considered a generalist. He has
          learned how to utilize many different code libraries from his HP
          Laptop. He has set up an IDE or more commonly known in programming as
          an Intergrated Development Environment. Through the use of Visual
          Studio Code.
        </p>

        <p>
          I'm a zombie hunter by night and a software engineer by day, I love
          creating amazing web apps and games and an avid tetris enthusiast.
        </p>

        <p>
          I love video games and everything about it, one of the reasons I want
          to use my skills as a Python and Javascript developer is to create
          amazing games,
        </p>
        <div className="About-middle-section">
          <div className="About-left-mid-section">
            <div className="About-title">
              <p>Languaes and Frameworks I've worked with:</p>
            </div>
            <div className="About-list">
              <p>Javascript</p> <p>Python</p>
              <p>React.js</p> <p>MySQL</p>
              <p>Django</p> <p>HTML 5</p>
              <p>CSS 3</p> <p>SCSS</p>
              <p>MongoDB</p> <p>PHP</p>
              <p>Ruby</p> <p>Objective C</p>
              <p>C++</p>
            </div>
          </div>

          <div className="About-right-mid-section">
            <div className="About-title">
              <p>Tools that I used:</p>
            </div>
            <div className="About-list">
              <p>Git</p> <p>Unity3D</p>
              <p>Blender</p> <p>Photoshop</p>
              <p>Unreal 4</p> <p>Epic Games Launcher</p>
              <p>Heroku</p> <p>Postman</p>
            </div>
          </div>
        </div>

        <div className="About-bottom-section">
          <p>
            The current development projects that I am working on at Bottega
            University:
          </p>
          <p>DevCamp Fries Menu,</p>
          <p>
            Fully Functional 404 Error Page (Note: Project was to originally
            have no funtionality),
          </p>
          <p>My current Development Portfolio,</p>
          <p>CodePen single page web app,</p>
          <p>Javascript Diner Menu</p>
        </div>

        <div className="About-Expectations">
          I receieved my formal education from Strayer University in Orlando, FL
          in 2013. Obtained a Bachelor's Degree in Business Andministration and
          Management in just 3 years. Now, currently attending Bottega
          University online in Lehi, UT. A month before graduation. Obtaining a
          Certificate from the Full Stack Software Engineering Program that I am
          currently enrolled in. I hope to obtain future employment at game
          studios such as BluePoint Games, EA Sports, Bungie,
          Activision/Blizzard, Rebellion, and 2K Sports.
        </div>

        <div className="About-contact">
          <p>Connect with Thomas:</p>
          <p>Email: t.digregorio@protonmail.com</p>
          <p>https://www.linkedin.com/in/thomas-digregorio-3950441a/</p>
          <p>Cell Number: (570)-228-1508</p>
          <p>P.S. Open to Relocation</p>
        </div>
      </div>
    </div>
  );
}
