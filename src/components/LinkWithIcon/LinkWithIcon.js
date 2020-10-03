import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

export default function LinkWithIcon({ url, icon, text, description, target }) {
  return (
    <a
      className="link__home"
      rel="noopener noreferrer"
      href={url}
      target={target}
      aria-label={description}
    >
      <FontAwesomeIcon icon={icon} />
      {text}
    </a>
  );
}

LinkWithIcon.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  target: PropTypes.string,
  text: PropTypes.string,
  description: PropTypes.string,
};

LinkWithIcon.defaultProps = {
  target: "_blank",
  text: "",
  description: "",
};
