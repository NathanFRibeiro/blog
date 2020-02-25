import React from "react";
import PropTypes from "prop-types";

import { FaArrowDown, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa/";
import avatar from "../../images/jpg/avatar.jpg";
import background from "../../images/jpg/background.jpg";

const Hero = props => {
  const { scrollToContent, backgrounds, theme } = props;

  return (
    <React.Fragment>
      <section className="hero">
        <div className="logo">
          <img src={avatar} />
        </div>
        <h2>Nathan Ribeiro</h2>
        <h3>Web Development</h3>
        <div className="list-icon">
          <a className="icon" href="#">
            <FaGithub size="20"></FaGithub>
          </a>
          <a className="icon" href="#">
            <FaTwitter size="20"></FaTwitter>
          </a>
          <a className="icon" href="#">
            <FaLinkedin size="20"></FaLinkedin>
          </a>
        </div>
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
        .list-icon {
          margin-top: 20px;
          width: 90px;
          display: flex;
          justify-content: space-between;
        }

        .icon {
          color: #999;
        }

        .icon:hover {
          color: white !important;
        }

        .hero {
          align-items: center;
          background-image: url(${background});

          background-size: cover;
          color: ${theme.text.color.primary.inverse};
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          min-height: 50vh;
          height: 100px;
          padding: ${theme.space.inset.l};
          padding-top: ${theme.header.height.homepage};

          h3 {
            color: ${theme.hero.h3.color};
          }
        }

        .logo {
          border: 0;
          display: inline-block;
          height: 100px;
          margin-bottom: 15px;
          overflow: hidden;
          width: 100px;
          transition: all 0.5s;

          .homepage & {
            height: 100px;
            width: 100px;
          }

          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }

        h2 {
          text-align: center;
          font-size: ${theme.hero.h2.size};
          font-family: ${theme.hero.h2.family};
          margin: ${theme.space.stack.s};
          color: ${theme.hero.h1.color};
          line-height: ${theme.hero.h1.lineHeight};
          font-weight: 400;
          text-remove-gap: both 0 "Open Sans";

          :global(strong) {
            position: relative;

            &::after,
            &::before {
              content: "›";
              color: ${theme.text.color.attention};
              margin: 0 ${theme.space.xs} 0 0;
              text-shadow: 0 0 ${theme.space.s} ${theme.color.neutral.gray.k};
            }
            &::after {
              content: "‹";
              margin: 0 0 0 ${theme.space.xs};
            }
          }
        }

        h3 {
          text-align: center;
          font-size: ${theme.hero.h3.size};
          font-family: ${theme.hero.h3.family};
          color: ${theme.hero.h1.color};
          line-height: ${theme.hero.h1.lineHeight};
          font-weight: 300;
          opacity: 0.85;
          text-remove-gap: both 0 "Open Sans";

          :global(strong) {
            position: relative;

            &::after,
            &::before {
              content: "›";
              color: ${theme.text.color.attention};
              margin: 0 ${theme.space.xs} 0 0;
              text-shadow: 0 0 ${theme.space.s} ${theme.color.neutral.gray.k};
            }
            &::after {
              content: "‹";
              margin: 0 0 0 ${theme.space.xs};
            }
          }
        }

        button {
          background: ${theme.background.color.brand};
          border: 0;
          border-radius: 50%;
          font-size: ${theme.font.size.m};
          padding: ${theme.space.s} ${theme.space.m};
          cursor: pointer;
          width: ${theme.space.xl};
          height: ${theme.space.xl};

          &:focus {
            outline-style: none;
            background: ${theme.color.brand.primary.active};
          }

          :global(svg) {
            position: relative;
            top: 5px;
            fill: ${theme.color.neutral.white};
            stroke-width: 40;
            stroke: ${theme.color.neutral.white};
            animation-duration: ${theme.time.duration.long};
            animation-name: buttonIconMove;
            animation-iteration-count: infinite;
          }
        }

        @keyframes buttonIconMove {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @from-width tablet {
          h1 {
            max-width: 90%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.3)`};
          }

          button {
            font-size: ${theme.font.size.l};
          }
        }

        @from-width desktop {
          h1 {
            max-width: 80%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.5)`};
          }

          button {
            font-size: ${theme.font.size.xl};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Hero.propTypes = {
  scrollToContent: PropTypes.func.isRequired,
  backgrounds: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Hero;
