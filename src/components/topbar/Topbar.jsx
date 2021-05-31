import "./topbar.scss";
import { Person, Mail, GitHub, LinkedIn, YouTube } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={`topbar ${menuOpen && " active"}`}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            meKumar.
          </a>
          <div className='itemContainer'>
            <Person className='icon' />
            <span>+91-8826611992</span>
          </div>
          <div className='itemContainer'>
            <Mail className='icon' />
            <span>ksaur1990@gmail.com</span>
          </div>
          <div className='itemContainer'>
            <GitHub className='icon' />
            <span>
              <a
                href='https://github.com/kumar4790'
                target='_blank'
                rel='noreferrer'>
                GitHub
              </a>
            </span>
          </div>

          <div className='itemContainer'>
            <LinkedIn className='icon' />
            <span>
              <a
                href='https://www.linkedin.com/in/ksaurabh4/'
                target='_blank'
                rel='noreferrer'>
                LinkedIn
              </a>
            </span>
          </div>
          <div className='itemContainer'>
            <YouTube className='icon' />
            <span>
              <a
                href='https://youtube.com/thoughtcurator/'
                target='_blank'
                rel='noreferrer'>
                YouTube
              </a>
            </span>
          </div>
        </div>
        <div className='right'>
          <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  );
}
