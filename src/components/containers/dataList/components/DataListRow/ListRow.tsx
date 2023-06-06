import React from "react";
import classNames from "classnames";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { useOneUser } from "../../../../../store/users/usersSlice";
import { formatDate } from "../../../../../utils/functions/formatDate";

// CEL KONTROLKI: wyświetlenie danych o tym issue
// TODO: różnicowanie wiersza po typie = gdy będzie typescript

interface ListRowProps {
  element: {};
  onChooseItem: Function;
  activeItemId: string;
}

export const ListRow = ({
  element,
  onChooseItem,
  activeItemId,
}: ListRowProps) => {
  let statusEl = element["status" as keyof {}];
  let dueDateEl = element["due_date" as keyof {}];
  let idEl = element["id" as keyof {}];
  let responsibleEl = element["responsible" as keyof {}];
  let titleEl = element["title" as keyof {}];
  let issuesEl = element["issues" as keyof {}];
  let fileEl = element["file" as keyof {}];

  const responsible = useOneUser(responsibleEl);

  const handleChoose = () => {
    onChooseItem(idEl);
  };

  // wizualizacja zależna od stanu (status, wybrane issue)
  const isActive = idEl === activeItemId;
  let statusClass = classNames({
    "list-row__status": true,
    pending: statusEl === "pending",
    "in-progress": statusEl === "in progress",
    done: statusEl === "done",
  });
  let visibleClass = classNames({
    "list-row__visible-icon": true,
    active: isActive,
  });
  let responsibleClass = classNames({
    "list-row__person": true,
    empty: responsible ? false : true,
  });
  let dateClass = classNames({
    "list-row__date": true,
    empty: dueDateEl ? false : true,
  });

  return (
    <div className="list-row">
      <div className={visibleClass} onClick={handleChoose}>
        {isActive ? (
          <VisibilityIcon sx={{ fontSize: 16 }} />
        ) : (
          <VisibilityOffIcon sx={{ fontSize: 16 }} />
        )}
      </div>
      {statusEl && (
        <div className="list-row__status">
          <div className={statusClass}>
            <div className="list-row__status-icon">
              <FiberManualRecordIcon sx={{ fontSize: 12 }} />
            </div>
            <div className="list-row__status-title">{statusEl}</div>
          </div>
        </div>
      )}
      <div className="list-row__info">
        <div className="list-row__info-top">
          <div className="list-row__title">{titleEl}</div>
        </div>
        <div className="list-row__info-bottom">
          <div className={responsibleClass}>
            {responsible ? responsible?.name : fileEl ? fileEl : "Unknown"}
          </div>

          <div className={dateClass}>
            Due: {dueDateEl ? formatDate(dueDateEl) : "No Date"}
          </div>
        </div>
      </div>
      {issuesEl && (
        <div className="list-row__notifications">
          {issuesEl["length" as keyof {}]}
        </div>
      )}
    </div>
  );
};
