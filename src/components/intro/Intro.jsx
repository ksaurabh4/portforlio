import "./intro.scss";
import { useEffect, useRef } from "react";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Full Stack Developer", "Content Creator"],
    });
  }, []);
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src='assets/man.png' alt='' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi There, I'm</h2>
          <h1>Kumar Saurabh</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
          <div className='stackList'>
            <h4>
              <hr className='line1'></hr>
              HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express |
              MongoDB
            </h4>
          </div>
        </div>
        <a href='#portfolio'>
          <img src='assets/down.png' alt='' />
        </a>
      </div>
    </div>
  );
}
