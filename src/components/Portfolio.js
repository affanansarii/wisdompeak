import movix from "../assets/movix.png";
import quiz from "../assets/quiz.png";
import pharmEasy from "../assets/pharmEasy.png";
import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";

function Portfolio() {

    const projects = [

        {
            image: "https://drive.google.com/file/d/1RrracxLdiy0_ItCYl17kfuShVrZYWykL/view?usp=sharing",
            description: "Project 1: A application totally based on handling UI with React uses LazyLoading."
        },
        {
            image: { quiz },
            description: "Project 2: A quiz application built with React and Express."
        },
        {
            image: { pharmEasy },
            description: "Project 3: E-commerce website built with HTML, CSS and JavaScript"
        }

    ]

    return (

        <Box mb={6}>

            <Heading as="h2" size="lg" mb={4}>Portfolio</Heading>

            <SimpleGrid columns={[1, 2, 3]} spacing={4}>

                {projects.map((item, index) => (

                    <Box key={index} borderWidth={1} borderRadius="md" overflow="hidden" p={4}>

                        <Image src={item.image} alt="Project" />
                        <Text mt={2}>{item.description}</Text>

                    </Box>

                ))}

            </SimpleGrid>

        </Box>

    )

}

export default Portfolio;