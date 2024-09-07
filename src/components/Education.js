import { Box, Heading, Text, VStack } from "@chakra-ui/react";

function Education() {

    const education = [

        {
            cources: "Full Stack Developer",
            institutes: "Masai School",
            dates: "March 2023 - Jan 2024"
        },
        {
            cources: "Computer Engineering, Diploma",
            institutes: "Anjuman-I-Islam Abdul Razzak Kalsekar Polytechnic, Panvel",
            dates: "Jun 2018 - Nov 2021"
        }

    ]

    return (

        <Box mb={6}>

            <Heading as="h2" size="lg" mb={4}>Education</Heading>

            <VStack align="start" spacing={4}>

                {education.map((item, index) => (

                    <Box key={index}>

                        <Text fontWeight="bold">{item.cources}</Text>
                        <Text>{item.institutes}</Text>
                        <Text>{item.dates}</Text>

                    </Box>

                ))}

            </VStack>

        </Box>

    )

}

export default Education;