import React, { Component } from "react";

import Prism from "./vendors/prism";
import "./vendors/prism.css";
import ExamplesPage from "./ExamplesPage";
import TipsPage from "./TipsPage";
import APIPage from "./APIPage";

import "./style/Page.scss";

class Page extends Component {

  constructor() {
    super();
    this.state = {
      currentPage: "examples"
    };
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  componentDidMount() {
    window.addEventListener("popstate", ::this.handlePopstate);
  }

  render() {

    const { currentPage } = this.state;

    return (
      <div className="Page">
        <div className="Page-Header">
          <h1>react-day-picker</h1>
          <h3>
            Customizable date picker and calendar component for React
          </h3>
        </div>
        <div className='Page-Content'>
          <ul>
            <li>select days, ranges, whatever with CSS modifiers</li>
            <li>easily change style and add content to days cells</li>
            <li>display multiple months</li>
            <li>ready for <abbr title="Internationalization">i18n</abbr>, with moment.js or any other library</li>
            <li>navigable via keyboard, <abbr title="Accessible Rich Internet Applications">ARIA</abbr> support</li>
          </ul>
          <p>
            For bug reports and to contribute, please visit the <a href="https://github.com/gpbl/react-day-picker">github project</a> or
            join the <a href="https://gitter.im/gpbl/react-day-picker">gitter chat</a>.
          </p>
          <p>
            <iframe src="https://ghbtns.com/github-btn.html?user=gpbl&amp;repo=react-day-picker&amp;type=star&amp;count=true"
              frameBorder={0} scrolling={0} width="170px" height="20px"></iframe>
          </p>
        </div>
        <a name="examples" />
        <a name="api" />
        <a name="tips" />
        <div className="SegmentedControl">
          <a href="#examples" data-page="examples"
            className={currentPage === "examples" && "SegmentedControl--selected"}>
            Examples
          </a>
          <a href="#api" data-page="api"
            className={currentPage === "api" && "SegmentedControl--selected"}>
            Usage &amp; API
          </a>
          <a href="#tips" data-page="tips"
            className={currentPage === "tips" && "SegmentedControl--selected"}>
            Tips
          </a>
        </div>
        { currentPage === "examples"
          && <ExamplesPage showExample={window.location.hash.replace("#", "").split("/")[1]} /> }
        { currentPage === "api" && <APIPage /> }
        { currentPage === "tips" && <TipsPage /> }

      </div>
    );
  }

  handlePopstate() {
    const page = window.location.hash.replace("#", "").split("/")[0];
    this.setState({
      currentPage: page || "examples"
    });
  }

}

export default Page;
