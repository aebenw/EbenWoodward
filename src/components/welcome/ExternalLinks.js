import React from 'react';
import {Row} from 'reactstrap'

const gitHubImg = "https://cdn3.iconfinder.com/data/icons/social-icons-24/24/Github-512.png"

const gitHubLink = "https://github.com/aebenw"

const linkedInLink = "https://www.linkedin.com/in/eben-woodward"

const linkedInImg = "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Flinkedin-png-linkedin-icon-1600.png&f=1";





const ExternalLinks = () => {
  return(
    <Row className="external-links">

      <a href={gitHubLink}>
        <img class="welcome-logo" src={gitHubImg} alt="github logo"/>
      </a>
      <a href={linkedInLink} >
      <img class="welcome-logo" src={linkedInImg} alt="LinkedIn logo"/>
      </a>
    </Row>

  )
}

export default ExternalLinks;
