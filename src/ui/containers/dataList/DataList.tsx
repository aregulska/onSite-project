import React from "react";

import { ListSearch } from "./components/DataListSearch/ListSearch";
import { ListRow } from "./components/DataListRow/ListRow";

// CEL KOMPONENTU - wyświetlenie listy elementów
interface DataListProps {
  data: {}[];
  activeItemId: string;
  onChooseItem: Function;
  filter: string;
  onChangeFilter: Function;
  onClearFilter: Function;
}

export const DataList = ({
  data,
  activeItemId,
  onChooseItem,
  filter,
  onChangeFilter,
  onClearFilter,
}: DataListProps) => {
  return (
    <>
      <div className="cont-main__header">
        <ListSearch
          value={filter}
          onChange={onChangeFilter}
          onClear={onClearFilter}
        />
      </div>
      <div className="cont-main__list">
        {data?.map((element) => (
          <ListRow
            activeItemId={activeItemId}
            key={element["id" as keyof {}]}
            element={element}
            onChooseItem={onChooseItem}
          />
        ))}
      </div>
    </>
  );
};
