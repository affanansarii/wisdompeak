import './App.css';
import { Box, Container } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ProfilePicture from './components/ProfilePicture';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import References from './components/References';
import PDFDownloadButton from './components/PDFDownloadButton';
import Timeline from './components/Timeline';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import LocationMap from './components/LocationMap';

function App() {

  return (

    <Box bg="gray.100" p={4}>

      <Navbar />

      <Container maxW="container.lg" p={4}>

        <Header />
        <ProfilePicture />
        <Timeline />
        <Experience />
        <Education />
        <Skills />
        <Portfolio />
        <Hobbies />
        <LocationMap />
        <ContactForm />
        <Contact />
        <References />
        <PDFDownloadButton />

      </Container>

    </Box>

  );

}

export default App;
