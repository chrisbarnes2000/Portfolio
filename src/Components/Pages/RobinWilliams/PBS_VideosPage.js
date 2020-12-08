import React, { Component } from "react";
import { Link } from "react-router-dom";
import DisplayVideo from "../../DisplayVideo";
import { ROBIN_WILLIAMS } from "../../Routes";


class PBS_VideosPage extends Component {
  render() {
    return (
      <div className="add-padding-bottom pbs-videos-container">
        <DisplayVideo
          // video_url="https://player.pbs.org/viralplayer/3031776866/"
          video_url="https://www.pbs.org/video/robin-1471vu/"
          site_url="https://www.pbs.org/video/robin-1471vu/"
          site_title="INSIDE THE COVER: Robin"
        />
        <DisplayVideo
          // video_url="https://player.pbs.org/viralplayer/2365305581/"
          video_url="https://www.pbs.org/video/chicago-tonight-august-11-2014-remembering-robin-williams/"
          site_url="https://www.pbs.org/video/chicago-tonight-august-11-2014-remembering-robin-williams/"
          site_title="CHICAGO TONIGHT: Remembering Robin Williams"
        />
        <DisplayVideo
          // video_url="https://player.pbs.org/viralplayer/2365305654/"
          video_url="https://www.pbs.org/video/robin-williams-made-transformation-look-effortless-1415140089/"
          site_url="https://www.pbs.org/video/robin-williams-made-transformation-look-effortless-1415140089/"
          site_title="PBS NEWSHOUR: Robin Williams made transformation look effortless"
        />
        <DisplayVideo
          // video_url=""
          video_url="https://www.pbs.org/video/chicago-tonight-august-11-2014-discussing-depression/"
          site_url="https://www.pbs.org/video/chicago-tonight-august-11-2014-discussing-depression/"
          site_title="CHICAGO TONIGHT: Discussing Depression"
        />
        <DisplayVideo
          // video_url="https://player.pbs.org/viralplayer/2365320526/"
          video_url="https://www.pbs.org/video/pioneers-television-robin-williams-remembered/"
          site_url="https://www.pbs.org/video/pioneers-television-robin-williams-remembered/"
          site_title="PIONEERS OF TELEVISION: Robin Williams Remembered"
        />
        <DisplayVideo
          // video_url="https://player.pbs.org/viralplayer/2365308829/"
          video_url="https://www.pbs.org/video/studio-socal-mental-illness-whats-new/"
          site_url="https://www.pbs.org/video/studio-socal-mental-illness-whats-new/"
          site_title="STUDIO SOCAL: Mental Illness, What's New?"
        />
        <DisplayVideo
          // video_url="https://player.pbs.org/viralplayer/2365509819/"
          video_url="https://www.pbs.org/video/on-story-dead-poets-society-deconstructing-acclaimed-classic/"
          site_url="https://www.pbs.org/video/on-story-dead-poets-society-deconstructing-acclaimed-classic/"
          site_title="ON STORY Dead Poets Society: Deconstructing the Acclaimed Classic"
        />
        <DisplayVideo
          // video_url="https://player.pbs.org/viralplayer/2365308667/"
          video_url="https://www.pbs.org/video/kqed-newsroom-education-reform-rim-fire-remembering-robin-williams/"
          site_url="https://www.pbs.org/video/kqed-newsroom-education-reform-rim-fire-remembering-robin-williams/"
          site_title="KQED NEWSROOM: Education Reform, Rim Fire, Remembering Robin Williams"
        />
        <DisplayVideo
          // video_url="https://player.pbs.org/viralplayer/2365839270/"
          video_url="https://www.pbs.org/video/kqed-newsroom-police-sexual-misconduct-tech-sam-liccardo-robin-williams/"
          site_url="https://www.pbs.org/video/kqed-newsroom-police-sexual-misconduct-tech-sam-liccardo-robin-williams/"
          site_title="KQED NEWSROOM: Police Sexual Misconduct, Tech, Sam Liccardo, Robin Williams"
        />
        <DisplayVideo
          // video_url="https://player.pbs.org/viralplayer/2365305716/"
          video_url="https://www.pbs.org/video/greater-boston-august-12-2014/"
          site_url="https://www.pbs.org/video/greater-boston-august-12-2014/"
          site_title="GREATER BOSTON: August 12, 2014"
        />
        <DisplayVideo
          // video_url="https://player.pbs.org/viralplayer/2365313091/"
          video_url="https://www.pbs.org/video/oklahoma-forum-mental-illness/"
          site_url="https://www.pbs.org/video/oklahoma-forum-mental-illness/"
          site_title="OKLAHOMA FORUM: Mental Illness"
        />
        <DisplayVideo
          // video_url="https://player.pbs.org/viralplayer/2365308174/"
          video_url="https://www.pbs.org/video/colorado-inside-out-august-15th-2014/"
          site_url="https://www.pbs.org/video/colorado-inside-out-august-15th-2014/"
          site_title="COLORADO INSIDE OUT: August 15th, 2014 Edition"
        />
        {/* ----------- */}

        <DisplayVideo
          // video_url=""
          video_url="https://www.pbs.org/video/pioneers-television-robin-williams-hones-his-craft/"
          site_url="https://www.pbs.org/video/pioneers-television-robin-williams-hones-his-craft/"
          site_title=""
        />
        <DisplayVideo
          // video_url=""
          video_url="https://www.pbs.org/video/pioneers-television-jonathan-winters-mentors-robin-williams/"
          site_url="https://www.pbs.org/video/pioneers-television-jonathan-winters-mentors-robin-williams/"
          site_title=""
        />
        <DisplayVideo
          // video_url=""
          video_url=""
          site_url="https://www.pbs.org/video/awakenings-web-extra-ksrtwg/"
          site_title="https://www.pbs.org/video/awakenings-web-extra-ksrtwg/"
        />
        <DisplayVideo
          // video_url=""
          video_url="https://www.pbs.org/video/blank-blank-robin-williams-masks/"
          site_url="https://www.pbs.org/video/blank-blank-robin-williams-masks/"
          site_title=""
        />
        <DisplayVideo
          // video_url=""
          video_url="https://www.pbs.org/video/robin-williams-didn-t-know-he-had-this-mysterious-disease-1454024744/"
          site_url="https://www.pbs.org/video/robin-williams-didn-t-know-he-had-this-mysterious-disease-1454024744/"
          site_title=""
        />
        <DisplayVideo
          // video_url=""
          video_url="https://www.pbs.org/video/robin-williams-1531779159/"
          site_url="https://www.pbs.org/video/robin-williams-1531779159/"
          site_title="PBS NEWSHOUR: Inside Robin Williams' lightning mind and creative soul"
        />

        <button>
          <Link to={ROBIN_WILLIAMS}>Go Back</Link>
        </button>
      </div>
    );
  }
}

export default PBS_VideosPage;
