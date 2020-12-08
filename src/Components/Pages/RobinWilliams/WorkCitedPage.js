import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ROBIN_WILLIAMS, PBS_VIDEOS } from "../../Routes";


class WorkCitedPage extends Component {
  render() {
    return (
      <div className="add-padding-bottom work-cited-container">
        <h2>Abstract/References</h2>
        {/* ----------- */}
        <p>
          "Robin Williams: Come Inside My Mind | Kanopy". Dominican.Kanopy.Com, 2020. Accessed 15 Nov 2020.
          <br />
          <a href="https://dominican.kanopy.com/video/robin-williams-come-inside-my-mind">
            https://dominican.kanopy.com/video/robin-williams-come-inside-my-mind
          </a>
        </p>
        {/* ----------- */}
        <p>
          "Robin Williams Remembered | Kanopy". Dominican.Kanopy.Com, 2020. Accessed 15 Nov 2020.
          <br />
          <a href="https://dominican.kanopy.com/video/robin-williams-remembered">
            https://dominican.kanopy.com/video/robin-williams-remembered
          </a>
        </p>
        {/* ----------- */}
        <p>
          "Robin Williams And The Stigma Of Mental Illness". Pacific Standard, 2020. Accessed 15 Nov 2020.
          <br />
          <a href="https://psmag.com/social-justice/much-stigma-mental-illness-harm-robin-williams-88589">
            https://psmag.com/social-justice/much-stigma-mental-illness-harm-robin-williams-88589
          </a>
        </p>
        {/* ----------- */}
        <p>
          "Rebecca Robbins, STAT. "How Lewy Body Dementia Gripped Robin Williams". Scientific American, 2016. Accessed 8
          Dec 2020.
          <br />
          <a href="https://www.scientificamerican.com/article/how-lewy-body-dementia-gripped-robin-williams1/">
            https://www.scientificamerican.com/article/how-lewy-body-dementia-gripped-robin-williams1/
          </a>
        </p>
        {/* ----------- */}
        <p>
          "Why We Missed The Signs Of My Mom's Lewy Body Dementia". Next Avenue, 2016. Accessed 8 Dec 2020.
          <br />
          <a href="https://www.nextavenue.org/why-we-missed-the-signs-of-my-moms-lewy-body-dementia/?utm_source=PBS&utm_medium=web&utm_campaign=merlin">
            https://www.nextavenue.org/why-we-missed-the-signs-of-my-moms-lewy-body-dementia/?utm_source=PBS&utm_medium=web&utm_campaign=merlin
          </a>
        </p>
        {/* ----------- */}
        <p>
          "PBS Newshour | Robin Williams Didn’T Know He Had This Mysterious Disease | Season 2015". PBS.Org, 2020,
          https://www.pbs.org/video/robin-williams-didn-t-know-he-had-this-mysterious-disease-1454024744/. Accessed 7
          Dec 2020.
        </p>
        {/* ----------- */}

        <button>
          <Link to={PBS_VIDEOS}>Agains, Please Watch These Videos</Link>
        </button>
        <button>
          <Link to={ROBIN_WILLIAMS}>Go Back</Link>
        </button>
      </div>
    );
  }
}

export default WorkCitedPage;
