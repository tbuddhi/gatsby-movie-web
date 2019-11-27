import React from "react";
import PropTypes from "prop-types";

import { FaArrowDown, FaAngleDoubleDown } from "react-icons/fa/";
import BgVideo from "../../images/mov/bgMov.mp4";

const Hero = props => {
  const { scrollToContent, backgrounds, theme } = props;

  return (
    <React.Fragment>
      <section className="hero">
        <video
          className="video-bg"
          height="100%"
          width="100%"
          loop
          muted
          autoPlay
        >
          <source
            src={BgVideo}
            type="video/mp4"
          />
        </video>
        <h1>
          Trending Movies <br/> in 2019
        </h1>
        <button onClick={scrollToContent} aria-label="scroll">
          <FaAngleDoubleDown />
        </button>
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
        .hero {
          align-items: center;
          background: ${theme.hero.background};
          background-size: cover;
          color: ${theme.text.color.primary.inverse};
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          min-height: 100vh;
          height: 100px;
        }

        .video-bg{
          position: absolute;
          z-index: 0;
        }

        h1 {
          position: relative;
          text-align: center;
          font-size: ${theme.hero.h1.size};
          margin: ${theme.space.stack.l};
          color: ${theme.hero.h1.color};
          line-height: ${theme.hero.h1.lineHeight};
          text-remove-gap: both 0 "Open Sans";
          text-transform: uppercase;
          letter-spacing: 1px;
          
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
          position: relative;
          background: none;
          border: 2px dashed ${theme.color.neutral.gray.e};
          border-radius: 50%;
          font-size: ${theme.font.size.m};
          cursor: pointer;
          width: 28px;
          height: 42px;

          &:focus {
            outline-style: none;
            background: ${theme.color.brand.primary.active};
          }

          :global(svg) {
            font-size: 1rem;
            position: relative;
            top: 5px;
            fill: ${theme.color.neutral.gray.e};
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
