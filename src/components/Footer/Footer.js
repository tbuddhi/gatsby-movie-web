import React from "react";
import PropTypes from "prop-types";

const Footer = props => {
  const { html, theme } = props;

  return (
    <React.Fragment>
      <footer className="footer" dangerouslySetInnerHTML={{ __html: html }} />

      {/* --- STYLES --- */}
      <style jsx>{`
        .footer {
          background: ${theme.footer.bgColor};
          display: flex;
          padding: 0;
          align-items: center;
          min-height: 50px;
          justify-content: center;

          :global(ul) {
            list-style: none;
            text-align: center;
            padding: 0;
            margin-bottom: 50px;

            :global(li) {
              color: ${theme.color.neutral.gray.g};
              font-size: ${theme.font.size.xxs};
              position: relative;
              display: inline-block;

              &::after {
                content: "•";
                position: absolute;
                right: ${`calc(${theme.space.xs} * -1)`};
              }
              &:last-child::after {
                content: "";
              }
            }
          }

          @above desktop{
            :global(ul) {
              margin-bottom: 0;
            }
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Footer.propTypes = {
  html: PropTypes.string,
  theme: PropTypes.object.isRequired
};

export default Footer;
