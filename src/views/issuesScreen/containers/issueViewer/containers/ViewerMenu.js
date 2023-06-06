import FilterTiltShiftIcon from "@mui/icons-material/FilterTiltShift";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

// TODO: dodać opcje i może wyodrębnić komponent graficzny? a tutaj tylko logikę?
// scale up, scale down, reset scale / toggle colors: status, category

export const ViewerMenu = ({ onScaleDown, onScaleUp }) => {
  return (
    <div className="pdf-viewer-menu">
      <div className="pdf-viewer-menu__group">
        <div className="pdf-viewer-menu__button" onClick={onScaleUp}>
          <ControlPointIcon sx={{ fontSize: 16 }} />
        </div>
        <div className="pdf-viewer-menu__button" onClick={onScaleDown}>
          <RemoveCircleOutlineIcon sx={{ fontSize: 16 }} />
        </div>
        <div className="pdf-viewer-menu__button">
          <FilterTiltShiftIcon sx={{ fontSize: 16 }} />
        </div>
      </div>
    </div>
  );
};
