/*
@ funkcja filtrująca po wszystkich podanych cechach
@ sprawdza, czy wartość tej cechy jest stringiem
@ case insensitive

@ TODO: cechy zagłębione
*/

export function useFilter(
  filterText: string,
  dataArray: {}[],
  propsArray: string[]
) {
  // console.log("USE FILTER", filterText, dataArray, propsArray);
  if (filterText) {
    let filterArray: {}[] = [];
    let filterBy = filterText.toLowerCase();

    dataArray.forEach((item) => {
      propsArray.forEach((prop) => {
        let stop = false;
        if (stop) return;
        let valueToFilter: string = item[prop as keyof {}];
        if (typeof valueToFilter === "string") {
          if (valueToFilter.toLowerCase().includes(filterBy)) {
            // console.log(item[prop].toLowerCase());
            if (
              filterArray.find(
                (el) => el["id" as keyof {}] === item["id" as keyof {}]
              )
            )
              return;
            filterArray.push(item);
            stop = true;
          }
        }
      });
    });
    return filterArray;
  } else {
    // console.log("IN HOOK", filterText, setFilterText, dataArray);
    return dataArray;
  }

  // console.log(filterBy, filterArray);
}
