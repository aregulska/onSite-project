import React from "react";
import { DiscussionItem } from "../components/DiscussionItem";

// CEL KONTROLKI: wyświetlenie listy komentarzy
// TODO: dodanie logiki: kasowanie komentarza lub zmiana jego statusu? (archiwed? deleted? )
// TODO: zrobienie scrolla!!! ? gdzie?

export const DiscussionList = ({ element }: { element: {} }) => {
  const comments = element["comments" as keyof {}]
    ? element["comments" as keyof {}]
    : [];

  return (
    <div className="list-details__disscussion">
      {comments.map((comment: {}) => (
        <DiscussionItem key={comment["id" as keyof {}]} element={comment} />
      ))}
    </div>
  );
};
