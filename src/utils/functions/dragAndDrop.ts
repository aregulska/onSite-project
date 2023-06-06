interface dragAndDropArgs {
  setDraggedState: (state: boolean) => void;
  setPos: (left: number, top: number) => void;
  element: HTMLElement;
  cont?: HTMLElement;
  scale?: number;
  reset?: boolean;
  dropAction?: (x: number, y: number) => void;
  contScale?: number;
}

export const dragAndDrop = (
  e: MouseEvent,
  {
    setDraggedState,
    setPos,
    element,
    cont,
    scale = 1,
    reset,
    dropAction,
    contScale = 1,
  }: dragAndDropArgs
) => {
  setDraggedState(true);
  let startX = e.clientX;
  let startY = e.clientY;
  let pointX = parseInt(element.style.left);
  let pointY = parseInt(element.style.top);

  let contX = cont ? parseInt(cont.style.left) : 0;
  let contY = cont ? parseInt(cont.style.top) : 0;

  let diffX = startX - pointX;
  let diffY = startY - pointY;
  //console.log('START', pointX, pointY)
  let posX: number;
  let posY: number;

  const dragView = (e: MouseEvent) => {
    posX = (e.clientX - diffX) / scale;
    posY = (e.clientY - diffY) / scale;

    setPos(posX, posY);
  };

  const stopDrag = () => {
    //console.log('STOP', viewerLeft, viewerRef.current.style.left);
    setDraggedState(false);
    if (reset) {
      setPos(startX - diffX, startY - diffY);
    }

    if (dropAction) {
      //console.log('DROP', posX, contX, contScale);
      dropAction((posX - contX) / contScale, (posY - contY) / contScale);
    }
    window.removeEventListener("mousemove", dragView);
    window.removeEventListener("mouseup", stopDrag);
    //setViewerLeft(s => s + diffX);
    //setViewerTop(s => s + diffY);
  };

  window.addEventListener("mousemove", dragView);
  window.addEventListener("mouseup", stopDrag);
};
