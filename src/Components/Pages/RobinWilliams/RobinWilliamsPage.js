import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PBS_VIDEOS, WORK_CITED } from "../../Routes";


class RobinWilliamsPage extends Component {
  render() {
    return (
      <div className="add-padding-bottom robin-williams-container">
        <img src="https://www.chortle.co.uk/images/photos/small/mork_egg.jpg" width="320" alt="Mork Egg" />
        <img
          src="https://iamfearlesssoul.com/wp-content/uploads/2018/07/FBCOVERFS.jpg"
          width="320"
          alt="Everyone You Meet Is Fighting A Battle"
        />

        <button>
          <Link to={PBS_VIDEOS}>Please Watch These Videos</Link>
        </button>

        <p>
          I watched Robin Williams Remembered: A love letter to a unique and irrepressible comic talent, who left us far
          too soon, & Robin Williams: Come Inside My Mind, which takes it's viewers through the one-of-a-kind actor and
          comedian's extraordinary life and career, revealing what drove him to give voice to the incredible characters
          he created in his mind.
          <br />
          <br />
          Told largely through Williams' own voice, captured in interviews and audio recordings, and with a wealth of
          never-before-seen footage, including home movies and film/TV outtakes, the film showcases Williams' boundless
          energy, lightning wit and knack for creating memorable characters on stage and screen. The documentary also
          features personal archival material and new interviews with those who loved and knew Williams best, including
          Billy Crystal, Pam Dawber, David Letterman, Steve Martin and many more. Directed by Marina Zenovich, Robin
          Williams: Come Inside My Mind delves into the intricacies of a man who needed an audience just as much as
          audiences needed someone like him.
        </p>
        <img
          src="https://bayart.org/wp-content/uploads/2018/05/robin-williams-quotes-about-life.jpg"
          width="320"
          alt="Saddet People Always Try Their Hardest"
        />
        <a
          href="https://africacheck.org/fbcheck/worst-thing-in-life-quote-not-by-robin-williams-written-for-2009-movie/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://www.bucketlistpublications.com/wp-content/uploads/2014/08/f47e31a054ada8d327c8a53626b84faf.jpg"
            width="320"
            alt="I Used To Think"
          />
        </a>
        <h4>Why I chose them and how they made me feel.</h4>
        <p>
          I was quite depressed while watching the documentaries covering Robin Williams Life, as he is not only an idol
          to myself but several others as well. Although he left us far too soon, his work, aspirations, and legacy will
          live on to inspire new generations.
          <br />
          <br />I chose to watch them, in hopes to avoid or work around the topics being assigned/portrayed for this
          polymodal project as I get very nauseous and I feel severely sick to my stomach thinking about the systemic
          issues we face today and the inevitable future we are headed towards.
        </p>
        <img
          src="https://cdn.powerofpositivity.com/wp-content/uploads/2015/08/11882887_1136351459713621_1768566688_o.jpg"
          width="320"
          alt="Seize The Day."
        />
        <img
          src="https://1zl13gzmcsu3l9yq032yyf51-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Robin-Williams-Quotes-1.png"
          width="320"
          alt="No Matter What People Tell You"
        />
        <p>
          Although not directly related to the political scene in Collin County, we, along with millions of other
          Americans, mourn the loss today, of Hollywood actor Robin Williams. As we take a moment to reflect back on the
          laughter and the joy he gave to so many of us... We are thankful for the smiles he generated across party
          lines. We are also thankful for the many serious roles he portrayed, which opened our eyes to the many
          collective problems and issues within our society.
        </p>
        <h5>WHITE HOUSE STATEMENT FROM PRESIDENT OBAMA. August 11, 2014.</h5>
        <p>
          “Robin Williams was an airman, a doctor, a genie, a nanny, a president, a professor, a bangarang Peter Pan,
          and everything in between. But he was one of a kind. He arrived in our lives as an alien — but he ended up
          touching every element of the human spirit. He made us laugh. He made us cry. He gave his immeasurable talent
          freely and generously to those who needed it most — from our troops stationed abroad to the marginalized on
          our own streets.” As we think back on Mr. Williams, and his storied career, let us also think ahead – – and
          make an honest effort, to show a little more kindness and gentility, compassion and social justice to those
          who need it most.
        </p>
        <img
          src="https://www.movemequotes.com/wp-content/uploads/2015/08/IMG_7468.jpg"
          width="320"
          alt="Bad Times Wake You Up"
        />
        <img
          src="https://i.pinimg.com/originals/27/89/16/278916a08683012bb633d9c70664fd17.jpg"
          width="320"
          alt="You Know What Music Is"
        />
        <br />
        <p>
          According to Robin Williams’ widow, an autopsy has revealed that the comedian suffered from Lewy body dementia
          before he committed suicide. Susan Schneider Williams described the battle to treat and understand her late
          husband's symptoms as a game of Whac-A-Mole. William Brangham learns about the lesser-known but common illness
          from Dr. James Galvin of Florida Atlantic University.
        </p>
        <img
          src="https://pmcaonline.org/wp-content/uploads/2019/08/robin-williams-Quote-1024x1024.jpg"
          width="320"
          alt="Still A Lot To Learn"
        />
        <img
          src="https://render.fineartamerica.com/images/rendered/default/print/6/8/break/images/artworkimages/medium/1/robin-williams-james-rodgers.jpg"
          width="320"
          alt="Robin Williams Actor Collage"
        />
        <p>(ADD MORE DETAILS)</p>

        <button>
          <Link to={PBS_VIDEOS}>Agains, Please Watch These Videos</Link>
        </button>
        <button>
          <Link to={WORK_CITED}>Work Cited</Link>
        </button>
      </div>
    );
  }
}

export default RobinWilliamsPage;