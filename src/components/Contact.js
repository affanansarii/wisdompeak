import { Box, Heading, Link, Text } from "@chakra-ui/react";

function Contact() {

    return (

        <Box mb={6}>

            <Heading as="h2" size="lg" mb={4}>Contact</Heading>

            <Text>Email: affanansarii7860@gmail.com</Text>
            <Text>Phone: +91 9021157687</Text>
            <Text>LinkedIn: <Link href="https://www.linkedin.com/in/affan-ansari-702110237/">Profile</Link></Text>

        </Box>

    )

}

export default Contact;