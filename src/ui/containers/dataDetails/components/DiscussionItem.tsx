import React from "react";

import PersonIcon from "@mui/icons-material/Person";

import { useOneUser } from "../../../../store/users/usersSlice";
import { formatDate, formatTime } from "../../../../utils/functions/formatDate";

// CEL KOMPONENTU: wyświetlenie danych komentarza

export const DiscussionItem = ({ element }: { element: {} }) => {
  const responsible = useOneUser(element["responsible" as keyof {}]);

  return (
    <div className="discussion-item">
      {responsible ? (
        <div className="discussion-item__img">
          <img src={responsible.img} alt="human being" />
        </div>
      ) : (
        <div className="discussion-item__icon">
          <PersonIcon sx={{ fontSize: 20 }} />
        </div>
      )}
      <div className="discussion-item__content">
        <div className="discussion-item__title">
          {element["title" as keyof {}]}
        </div>
        <div className="discussion-item__info">
          <div className="discussion-item__author">
            {responsible ? responsible.name : "Author unknown"}
          </div>
          <div className="discussion-item__date">
            {element["add_date" as keyof {}]
              ? formatTime(element["add_date" as keyof {}]) +
                " / " +
                formatDate(element["add_date" as keyof {}])
              : "Date unknown"}
          </div>
        </div>
      </div>
    </div>
  );
};
