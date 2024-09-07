import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-scroll";

function Navbar() {

    return (

        <Flex justify="center" mb={4}>

            <Button as={Link} to="header" smooth>Header</Button>
            <Button as={Link} to="experience" smooth>Experience</Button>
            <Button as={Link} to="education" smooth>Education</Button>
            <Button as={Link} to="skills" smooth>Skills</Button>
            <Button as={Link} to="hobbies" smooth>Hobbies</Button>
            <Button as={Link} to="contact" smooth>Contact</Button>
            <Button as={Link} to="references" smooth>References</Button>

        </Flex>

    )

}

export default Navbar;