import React from "react";
import PropTypes from "prop-types";

import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import Banner from "components/Banner";

const Top = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { header, subheader, jumpToAnchor } = frontmatter;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const scrollToSection = useSmoothScrollTo(jumpToAnchor);

  return <Banner header={header} subheader={subheader} />;
};

Top.propTypes = {
  frontmatter: PropTypes.object,
};

Top.defaultProps = {
  frontmatter: null,
};

export default Top;
