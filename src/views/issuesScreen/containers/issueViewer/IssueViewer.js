import { PdfViewer } from "../../../../components/containers/pdfViewer/PdfViewer";
import { ViewerMenu } from "./containers/ViewerMenu";
import { AddCont } from "../../../../components/containers/addCont/AddCont";
import { AddTestForm } from "../../../../components/containers/addCont/components/AddTestForm";
import { AddTestDragButton } from "../../../../components/containers/addCont/components/AddTestDragButton";

import { useIssueViewerController } from "./useIssueViewerController";
import { MarkersLayer } from "./containers/MarkersLayer";

//CEL KOMPONENTU: przekazanie informacji do komponentu dodawania oraz do PDF Viewer
export const IssueViewer = () => {
  console.log("RENDER ISSUE VIEWER");

  const {
    scale,
    handleScaleDown,
    handleScaleUp,
    pdfWidth,
    handleChangePdfWidth,
    issueAddInitialData,
    handleAddIssueToDb,
    issueAddProperties,
    key,
  } = useIssueViewerController();

  return (
    <>
      <AddCont
        key={key}
        title="Add New Issue"
        photo={true}
        initialState={issueAddInitialData}
        addProperties={issueAddProperties}
        handleAddElement={handleAddIssueToDb}
      >
        <AddTestDragButton pdfWidth={pdfWidth} />
        <AddTestForm />
      </AddCont>
      <PdfViewer
        scale={scale}
        pdfWidth={pdfWidth}
        handleChangePdfWidth={handleChangePdfWidth}
      />
      <ViewerMenu onScaleDown={handleScaleDown} onScaleUp={handleScaleUp} />
      {false && <MarkersLayer scale={scale} />}
    </>
  );
};
