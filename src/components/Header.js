import { Box, Heading, Text } from "@chakra-ui/react";

function Header() {

    return (

        <Box textAlign="center" mb={6}>

            <Heading as="h1" size="2xl">Affan Ansari</Heading>

            <Text fontSize="lg">Full Stack Developer</Text>
            <Text fontSize="md">Email: affanansarii7860@gmail.com | Phone: +91 9021157687</Text>

        </Box>

    )

}

export default Header;