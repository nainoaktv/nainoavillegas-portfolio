import React from 'react';
import { BsTwitter, BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      
      <a href="https://twitter.com/nainoa_villegas" target="_blank" rel="noreferrer">
        <div>
          <BsTwitter />
        </div>
      </a>

      <a href="https://www.linkedin.com/in/nainoa-villegas/" target="_blank" rel="noreferrer">
        <div>
          <FaLinkedin />
        </div>
      </a>

      <a href="https://github.com/nainoaktv" target="_blank" rel="noreferrer">
        <div>
          <BsGithub />
        </div>
      </a>
      
    </div>
  )
};

export default SocialMedia;