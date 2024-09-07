import { Box, Heading } from "@chakra-ui/react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { ViewIcon } from "@chakra-ui/icons";

function Timeline() {

    return (

        <Box mb={6}>

            <Heading as="h2" size="lg" mb={4}>Timeline</Heading>

            <VerticalTimeline>

                <VerticalTimelineElement className="vertical-timeline-element--work" date="2021 - Present" icon={<ViewIcon />}></VerticalTimelineElement>
                <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle">Tech Company</h4>
                <p>Working on frontend and backend development.</p>

                <VerticalTimelineElement className="vertical-timeline-element--education" date="2023 - 2024" icon={<ViewIcon />}></VerticalTimelineElement>
                <h3 className="vertical-timeline-element-title">Full Stack Developerr</h3>
                <h4 className="vertical-timeline-element-subtitle">Masai School</h4>
                <p>Major in Computer Science.</p>

            </VerticalTimeline>

        </Box>

    )

}

export default Timeline;