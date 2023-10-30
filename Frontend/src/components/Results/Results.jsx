import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import "./result.css";
import heading from "../GAMBITOR SVG/GAMBITOR SVG/H-STUDENT_REG.svg";
import { useLocation } from "react-router-dom";
import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib'; // Import PDF-lib functions

function Results(props) {
  const { name, category, rank, totalMarks, totalPositiveMarks, totalNegativeMarks } = props.data;

  const handleSubmit = async (e) => { // Make the function asynchronous
    e.preventDefault();

    const modifyPdf = async () => { // Define the modifyPdf function
      // Fetch an existing PDF document
      const url = 'https://gambitor.iitr.ac.in/Certificates/certi.pdf';
      const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer());

      // Load a PDFDocument from the existing PDF bytes
      const pdfDoc = await PDFDocument.load(existingPdfBytes);

      // Embed the Helvetica font
      const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

      // Get the first page of the document
      const pages = pdfDoc.getPages();
      const firstPage = pages[0];

      // Get the width and height of the first page
      const { width, height } = firstPage.getSize();

      // text and fontSize
      const text = name;
      const fontSize = 60;

      // Finding out the width of text
      const textWidth = helveticaFont.widthOfTextAtSize(text, fontSize);

      // Define the center of text
      const centerX = (width - textWidth) / 2;

      // Draw a string of text diagonally across the first page
      firstPage.drawText(text, {
        x: centerX,
        y: 390,
        size: fontSize,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });

      // Serialize the PDFDocument to bytes (a Uint8Array)
      const pdfBytes = await pdfDoc.save();

      // Trigger the browser to download the PDF document with a dynamic filename
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url1 = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      const filename = `${name}_Certification.pdf`; // Construct the filename
      a.href = url1;
      a.download = filename; // Set the filename
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    };

    await modifyPdf(); // Call the modifyPdf function
  };

  return (
    <>
    <div className="containerR">
            <Header />
            <table className="styled-table">
            <thead>
            <tr>
                <td colspan="2" className=" headStyle">NAME - {name}</td>
            </tr>
            <tr>
                <td colspan="2" className=" headStyle">CATEGORY - {category}</td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className=" textStyle">RANK</td>
                <td className=" textStyle">{rank}</td>
            </tr>
            <tr>
                <td className=" textStyle">TOTAL MARKS</td>
                <td className=" textStyle">{totalMarks}</td>
            </tr>
            <tr>
                <td className=" textStyle">TOTAL POSITIVE</td>
                <td className=" textStyle">{totalPositiveMarks}</td>
            </tr>
            <tr>
                <td className=" textStyle">TOTAL NEGATIVE</td>
                <td className=" textStyle">{totalNegativeMarks}</td>
            </tr>            
            </tbody>
            </table>
            <button
              className="download-button"
              type="submit"
              onClick={handleSubmit}
            > DOWNLOAD CERTIFICATE
            </button>
            <Footer />
        </div>
    </>
  );
}

export default Results;
