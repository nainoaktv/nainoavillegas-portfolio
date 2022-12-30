import React from 'react';
import { BsTwitter, BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsTwitter />
      </div>
      <div>
        <FaLinkedin />
      </div>
      <div>
        <BsGithub />
      </div>
    </div>
  )
};

export default SocialMedia;