import React from 'react';
import { Container, Background } from 'react-fixed-background';
import Typewriter from '../../components/typewriter/Typewriter';
import styles from './Home.css';
import laptopBackground from '../../assets/images/laptop.jpg';
import face from '../../assets/images/face.png';
import resume from '../../assets/files/RowanCarmichaelResume.pdf';
import KeyboardIcon from '../../assets/icons/keyboard.svg';
import DevicesIcon from '../../assets/icons/devices.svg';
import ChatIcon from '../../assets/icons/chat.svg';
import TestIcon from '../../assets/icons/test.svg';
import BookIcon from '../../assets/icons/book.svg';

class Home extends React.Component {
  state = {
    loaded: false,
  }

  onLoadImage = () => {
    this.setState({ loaded: true });
  }

  render() {
    return (
      <div>
        <Container className={styles.container}>
          <img onLoad={this.onLoadImage} className={this.state.loaded ? styles.backgroundImage : null} src={laptopBackground} alt="laptopBackground" />
          <Background bringToFront className={styles.background}>
            <div className={styles.content}>
              <h1 className={styles.header}>Rowan Carmichael</h1>
              <div className={styles.divider} />
              <Typewriter speed={60} delay={3000} className={styles.subHeader} text="Frontend Engineer" />
            </div>
          </Background>
        </Container>
        <div className={styles.summaryHeader}>
          <img width="180px" src={face} alt="face" />
          <h1>What I&apos;m about</h1>
        </div>
        <div className={styles.summary}>
          <div>
            <div>
              <h2>Software Development</h2>
              <p>I&apos;m a frontend engineer passionate about React.</p>
              <p>Check out the <a target="_blank" rel="noreferrer noopener" className={styles.link} href="http://www.github.com/RowanCarmichael/site">code for this page</a> and more on my <a target="_blank" rel="noreferrer noopener" className={styles.link} href="http://www.github.com/RowanCarmichael">GitHub</a></p>
            </div>
            <KeyboardIcon className={styles.icon} />
          </div>
          <div>
            <DevicesIcon className={styles.icon} />
            <div>
              <h2>Practical Solutions</h2>
              <p>I always keep the customer in mind and will strive for the best usability experience. My day-to-day involves working closely with other frontend and backend devs, UI/UX designers, product managers and testers in a high-performing team environment</p>
            </div>
          </div>
          <div>
            <div>
              <h2>Agile Practitioner</h2>
              <p>Well versed in utilising both Scrum and Kanban agile development methodologies including experience as a Scrum (Kanban) master</p>
            </div>
            <ChatIcon className={styles.icon} />
          </div>
          <div>
            <TestIcon className={styles.icon} />
            <div>
              <h2>Automative Testing</h2>
              <p>I take great pride in code quality and fully understand the importance of creating automated tests spanning all levels of the testing pyramid to ensure the highest quality of products are released</p>
            </div>
          </div>
          <div>
            <div>
              <h2>Learner</h2>
              <p>But above all else I love to be challenged, to learn and to grow!</p>
              <p>If you&apos;d like to see more of what I can do take a look at my <a target="_blank" rel="noreferrer noopener" className={styles.link} href={resume}>Resume</a></p>
              <p>Or if you&apos;d prefer to chat, feel free to contact me via <a className={styles.link} href="mailto:carmichaelr@hotmail.co.uk">Email</a> or <a target="_blank" rel="noreferrer noopener" className={styles.link} href="http://www.linkedin.com/in/rowan-carmichael/">LinkedIn</a></p>
            </div>
            <BookIcon className={styles.icon} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
