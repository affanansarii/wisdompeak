import { Button } from "@chakra-ui/react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

function PDFDownloadButton() {

    const downloadPDF = () => {

        const input = document.body;
        html2canvas(input).then((canvas) => {

            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            pdf.addImage(imgData, "PNG", 0, 0);
            pdf.save("resume.pdf");

        })

    }

    return (

        <Button onClick={downloadPDF} colorScheme="blue">Download Resume as PDF</Button>

    )

}

export default PDFDownloadButton;
