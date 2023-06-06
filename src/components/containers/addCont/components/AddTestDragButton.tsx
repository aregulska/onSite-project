import React, { useContext, useRef, useState } from "react";
import classNames from "classnames";

import { AddContext } from "../AddCont.tsx";
import { AddButton } from "../../../components/buttons/addButton/AddButton";

import { dragAndDrop } from "../../../../utils/functions/dragAndDrop.ts";

export const AddTestDragButton = ({ pdfWidth }: { pdfWidth: number }) => {
  const {
    isAdding: on,
    handleSetAdding: setOn,
    handleEditField,
  } = useContext(AddContext);

  const buttonRef = useRef<HTMLDivElement>(null);
  const [buttonDragged, setButtonDragged] = useState(false);
  const [buttonPos, setButtonPos] = useState({
    left: 100,
    top: 1000 - 120,
  });

  const handleChangePos = (left: number, top: number) => {
    setButtonPos({ ...buttonPos, left: left, top: top });
  };

  // TODO: dodawanie nowego issue - logika przygotowania danych - gdzie to powinno być?
  const handleDropButton = (left: number, top: number) => {
    setOn(true);
    let position = { left: left, top: top };
    handleEditField("marker_position", position);
  };

  const handleButtonDrag = (e: React.MouseEvent) => {
    let button = buttonRef.current;
    let cont = document.getElementById("pdf-viewer");
    if (!button || !cont) return;
    dragAndDrop(e, {
      setDraggedState: setButtonDragged,
      setPos: handleChangePos,
      element: button,
      cont: cont,
      scale: 1,
      contScale: 1,
      reset: true,
      dropAction: handleDropButton,
    });
  };
  //TODO: dopasować do wielkości kontenera - odczytać jego parametry

  const buttonPosition = { top: 100, left: pdfWidth - 72 };

  let classButton = classNames({
    "btn-add-drag": true,
    dragged: buttonDragged,
  });

  let positionButton = buttonDragged
    ? { top: buttonPos.top + "px", left: buttonPos.left + "px" }
    : buttonPosition;

  const content = !on ? (
    <div
      className={classButton}
      style={positionButton}
      ref={buttonRef}
      onMouseDown={handleButtonDrag}
    >
      <AddButton action={() => {}} />
    </div>
  ) : null;
  return content;
};
