import Banner from './components/banner';
import Footer from './components/footer';
import GetInTouch from './components/get-in-touch';
import Navbar from './components/navbar';
import Skills from './components/skills';
import Project from './components/project';

export default function Home() {
  return (
    <div>
      <Banner />
      <Skills />
      <Project />
      <GetInTouch />
      <Footer />
    </div>
  );
}
