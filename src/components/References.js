import { Box, Heading, List, ListItem } from "@chakra-ui/react";

function References() {

    const references = ["Reference Name - Job Title", "Reference Name - Job Title"];

    return (

        <Box mb={6}>

            <Heading as="h2" size="lg" mb={4}>References</Heading>

            <List spacing={3}>
                {references.map((item, index) => (
                    <ListItem key={index}>{item}</ListItem>
                ))}
            </List>

        </Box>

    )

}

export default References;