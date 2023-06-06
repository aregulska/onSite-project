import React from "react";
import classNames from "classnames";

import { ToggleContButton } from "./components/ToggleContButton/ToggleContButton";
import { DataList } from "../dataList/DataList";
import { DataDetails } from "../dataDetails/DataDetails";

// CEL KOMPONENTU: decyduje, czy wyświetlić detale czy listę oraz czy jest otwarty czy zamknięty
// TODO: filter zrobić wewnątrz, tylko ustawianie contextu wyciągnąć
// TODO: zmienić nazwę na bardziej opisową
// TODO: może coś jeszze może być wewnętrzne

interface DataContProps {
  title: string;
  pos: string;
  open: boolean;
  toggleOpen: Function;
  details: boolean;
  data: any[];
  activeItemId: string;
  onChooseItem: Function;
  filter: string;
  onChangeFilter: Function;
  onClearFilter: Function;
}

export const DataCont = ({
  title,
  pos,
  open,
  toggleOpen,
  details,
  data,
  activeItemId,
  onChooseItem,
  filter,
  onChangeFilter,
  onClearFilter,
}: DataContProps) => {
  //handlery
  const handleToggleCont = () => {
    toggleOpen(!open);
  };

  // sub containers
  let detailsCont = (
    <div className="cont-details">
      <DataDetails
        elementId={activeItemId}
        onClose={() => onChooseItem(null)}
      />
    </div>
  );
  let mainCont = (
    <div className="cont-main">
      <DataList
        data={data}
        activeItemId={activeItemId}
        onChooseItem={onChooseItem}
        filter={filter}
        onChangeFilter={onChangeFilter}
        onClearFilter={onClearFilter}
      />
    </div>
  );

  // conditional rendering
  let content = null;
  if (open) {
    if (details) {
      if (activeItemId) {
        content = detailsCont;
      } else {
        content = mainCont;
      }
    } else {
      content = mainCont;
    }
  }

  let contClass = classNames({
    cont: true,
    right: pos === "right",
    left: pos === "left",
    open: open,
  });

  return (
    <div className={contClass}>
      <ToggleContButton
        handleClick={handleToggleCont}
        enabled={open}
        active={activeItemId ? true : false}
        title={title}
        pos={pos}
      />
      {content}
    </div>
  );
};
