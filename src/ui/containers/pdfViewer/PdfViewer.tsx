import React from "react";
import { Document, Page } from "react-pdf";

import { pdfjs } from "react-pdf";

import { MarkersLayer } from "../../../views/issuesScreen/containers/issueViewer/containers/MarkersLayer";

import { usePdfViewerController } from "./usePdfViewerController";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// CEL: wyświetlenie PDFa wybranego pliku i renderowanie warstwy z markami
interface PdfViewerProps {
  scale: number;
  pdfWidth: number;
  handleChangePdfWidth: Function;
}

export const PdfViewer = ({
  scale,
  pdfWidth,
  handleChangePdfWidth,
}: PdfViewerProps) => {
  console.log("RENDER PDF VIEWER");

  const {
    activeFile,
    onDocumentLoadSuccess,
    pageNumber,
    viewerRef,
    viewerStyle,
  } = usePdfViewerController(handleChangePdfWidth);

  return (
    <div
      id="pdf-viewer"
      className="pdf-viewer"
      ref={viewerRef}
      style={viewerStyle}
    >
      {false && <p>{pdfWidth}</p>}
      {!activeFile && <p> Choose one file</p>}
      {activeFile && <MarkersLayer scale={scale} />}
      {activeFile && (
        <Document
          file={activeFile.file}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={console.error}
          className="pdf-document"
        >
          <Page
            pageNumber={pageNumber}
            width={pdfWidth}
            height={900}
            scale={scale}
          />
        </Document>
      )}
    </div>
  );
};
