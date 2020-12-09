import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ROBIN_WILLIAMS, PBS_VIDEOS } from "../../Routes";


class WorkCitedPage extends Component {
  render() {
    return (
      <div className="add-padding-bottom work-cited-container">
        <h2>Abstract/References</h2>
        {/* ------Robin Williams----- */}
        <p id="RB1">
          "Robin Williams: Come Inside My Mind | Kanopy". Dominican.Kanopy.Com, 2020,
          <br />
          <a href="https://dominican.kanopy.com/video/robin-williams-come-inside-my-mind">
            https://dominican.kanopy.com/video/robin-williams-come-inside-my-mind
          </a>
          . Accessed 15 Nov 2020.
        </p>
        {/* ----------- */}
        <p id="RB2">
          "Robin Williams Remembered | Kanopy". Dominican.Kanopy.Com, 2020,
          <br />
          <a href="https://dominican.kanopy.com/video/robin-williams-remembered">
            https://dominican.kanopy.com/video/robin-williams-remembered
          </a>
          . Accessed 15 Nov 2020.
        </p>
        {/* ----------- */}
        <p id="RB3">
          "Robin Williams And The Stigma Of Mental Illness". Pacific Standard, 2020,
          <br />
          <a href="https://psmag.com/social-justice/much-stigma-mental-illness-harm-robin-williams-88589">
            https://psmag.com/social-justice/much-stigma-mental-illness-harm-robin-williams-88589
          </a>
          . Accessed 15 Nov 2020.
        </p>
        {/* ----------- */}
        <p id="RB4">
          "Rebecca Robbins, STAT. "How Lewy Body Dementia Gripped Robin Williams". Scientific American, 2016,
          <br />
          <a href="https://www.scientificamerican.com/article/how-lewy-body-dementia-gripped-robin-williams1/">
            https://www.scientificamerican.com/article/how-lewy-body-dementia-gripped-robin-williams1/
          </a>
          . Accessed 8 Dec 2020.
        </p>
        {/* ----------- */}
        <p id="RB5">
          "Why We Missed The Signs Of My Mom's Lewy Body Dementia". Next Avenue, 2016,
          <br />
          <a href="https://www.nextavenue.org/why-we-missed-the-signs-of-my-moms-lewy-body-dementia/?utm_source=PBS&utm_medium=web&utm_campaign=merlin">
            https://www.nextavenue.org/why-we-missed-the-signs-of-my-moms-lewy-body-dementia/?utm_source=PBS&utm_medium=web&utm_campaign=merlin
          </a>
          . Accessed 8 Dec 2020.
        </p>
        {/* ----------- */}
        <p id="RB6">
          "PBS Newshour | Robin Williams Didn’T Know He Had This Mysterious Disease | Season 2015". PBS.Org, 2020,
          <br />
          <a href="https://www.pbs.org/video/robin-williams-didn-t-know-he-had-this-mysterious-disease-1454024744/">
            https://www.pbs.org/video/robin-williams-didn-t-know-he-had-this-mysterious-disease-1454024744/
          </a>
          . Accessed 7 Dec 2020.
        </p>
        {/* ----------- /}
        {/* -----Twilight: Los Angeles------ */}
        <p id="TL1">
          "Twilight: Los Angeles | About The Production | Great Performances | PBS". Great Performances, 2012,
          <br />
          <a href="https://www.pbs.org/wnet/gperf/twilight-los-angeles-about-the-production/1329/">
            https://www.pbs.org/wnet/gperf/twilight-los-angeles-about-the-production/1329/
          </a>
          . Accessed 11 Nov 2020.
        </p>
        {/* ----------- */}
        <p id="TL2">
          "Great Performances | Twilight: Los Angeles | Season 42 | Episode 23". PBS.Org, 2020,
          <br />
          <a href="https://www.pbs.org/video/great-performances-twilight-los-angeles-1/">
            https://www.pbs.org/video/great-performances-twilight-los-angeles-1/
          </a>
          . Accessed 11 Nov 2020.
        </p>
        {/* ----------- */}
        {/* <p id="TL3">
          "Can We All Get Along?" Blacks' Historical And Contemporary (In) Justice With Law Enforcement.". Academia.Edu, 2020,
          <br />
          <a href="https://www.academia.edu/9014385/_Can_We_All_Get_Along_Blacks_Historical_and_Contemporary_In_Justice_with_Law_Enforcement">
            https://www.academia.edu/9014385/_Can_We_All_Get_Along_Blacks_Historical_and_Contemporary_In_Justice_with_Law_Enforcement
          </a>
          . Accessed 20 Nov 2020.
        </p> */}
        {/* ----------- */}
        {/* <p>
          "
          <br />
          <a href=""></a>
        </p>
        {/* ----------- /}
        <p>
          "
          <br />
          <a href=""></a>
        </p>
        {/* ----------- /}
        <p>
          "
          <br />
          <a href=""></a>
        </p>
        {/* ----------- /}
        <p>
          "
          <br />
          <a href=""></a>
        </p>
        {/* ----------- /}
        <p>
          "
          <br />
          <a href=""></a>
        </p>
        {/* ----------- /}
        <p>
          "
          <br />
          <a href=""></a>
        </p>
        {/* ----------- /}
        <p>
          "
          <br />
          <a href=""></a>
        </p> */}
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
