import React, { useRef } from "react";
import classNames from "classnames";

import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

// CEL KONTROLKI: ustawianie filtra i jego usability
// TODO: dodać eventy klawiszowe - esc wychodzenie
interface ListSearchProps {
  value: string;
  onChange: Function;
  onClear: Function;
}

export const ListSearch = ({ value, onChange, onClear }: ListSearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // HANDLERY
  const handleStartFilter = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  let inputClass = classNames({
    "search-ctrl__input": true,
    active: value ? true : false,
  });

  return (
    <div className="search-ctrl">
      <input
        type="text"
        className={inputClass}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        ref={inputRef}
      />
      {!value && (
        <div className="search-ctrl__icon" onClick={handleStartFilter}>
          <SearchIcon sx={{ fontSize: 20 }} />
        </div>
      )}
      {value && (
        <div
          className="search-ctrl__icon"
          onClick={() => {
            onClear();
          }}
        >
          <ClearIcon sx={{ fontSize: 20 }} />
        </div>
      )}
    </div>
  );
};
