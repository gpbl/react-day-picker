import React from 'react';
import Helmet from 'react-helmet';

export default function GitHubButton() {
  return (
    <span>
      <Helmet>
        <script async defer src="https://buttons.github.io/buttons.js" />
      </Helmet>
      <a
        className="github-button"
        href="https://github.com/gpbl/react-day-picker"
        data-icon="octicon-star"
        data-show-count="true"
        aria-label="Star gpbl/react-day-picker on GitHub"
      >
        Star
      </a>
    </span>
  );
}
