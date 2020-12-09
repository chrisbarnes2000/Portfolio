import React, { Component } from "react";
import { Link } from "react-router-dom";
import DisplayVideo from "../../DisplayVideo";
import { ROBIN_WILLIAMS } from "../../Routes";


class PBS_VideosPage extends Component {
  render() {
    return (
      <div className="add-padding-bottom pbs-videos-container">
        <DisplayVideo
          // video_url="https://player.pbs.org/viralplayer/2365305654/"
          video_url="https://www.pbs.org/video/robin-williams-made-transformation-look-effortless-1415140089/"
          site_url="https://www.pbs.org/video/robin-williams-made-transformation-look-effortless-1415140089/"
          site_title="PBS NEWSHOUR: Robin Williams made transformation look effortless"
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
        <DisplayVideo
          // video_url="https://player.pbs.org/viralplayer/3039264729/"
          video_url="https://www.pbs.org/video/awakenings-web-extra-ksrtwg/"
          site_url="https://www.pbs.org/video/awakenings-web-extra-ksrtwg/"
          site_title="SATURDAY NIGHT CINEMA: Awakenings WEB EXTRA"
        />
        <DisplayVideo
          // video_url="https://player.pbs.org/viralplayer/3014449168/"
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
