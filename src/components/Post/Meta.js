import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { FaCalendar, FaStar, FaTag } from "react-icons/fa/";

const Meta = props => {
  const { prefix, author: authorName, category, theme } = props;

  return (
    <p className="meta">
      <span>
        <FaCalendar size={16} /> {prefix}
      </span>
      <span>
        <FaStar size={16} /> {authorName}
      </span>
      {category && (
        <span>
          <FaTag size={16} />
          <Link to={`/category/${category.split(" ").join("-")}`}>{category}</Link>
        </span>
      )}

      {/* --- STYLES --- */}
      <style jsx>{`
        .meta {
          display: flex;
          flex-flow: row wrap;
          font-size: 0.8em;
          margin: ${theme.space.m} 0;
          background: transparent;

          :global(svg) {
            fill: ${theme.icon.color};
            margin: ${theme.space.inline.xs};
          }
          span {
            align-items: center;
            display: flex;
            text-transform: capitalize;
            margin: ${theme.space.xs} ${theme.space.s} ${theme.space.xs} 0;
          }
        }
        @from-width tablet {
          .meta {
            margin: ${`calc(${theme.space.m} * 1.5) 0 ${theme.space.m}`};
          }
        }
      `}</style>
    </p>
  );
};

Meta.propTypes = {
  prefix: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string,
  theme: PropTypes.object.isRequired
};

export default Meta;
