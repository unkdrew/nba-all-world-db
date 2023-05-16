import React from "react";

import { BaseTable, SelectColumnFilter } from "/src/components/common/Table";
import { generateBrandOptions, generateColorOptions, generateRarityOptions, generateStyleOptions } from "/src/components/gear/TableOptions";

export function EyewearTable(props: any) {
  const columns = React.useMemo(
    () => [
      {
        id: "info",
        columns: [
          {
            accessor: "type",
            width: "20%",
            helperText: "Type",
            textAlign: "left",
            sticky: true,
            backgroundColor: props.theme.palette.background.default,
            Filter: SelectColumnFilter,
            filter: "equals",
            disableSortBy: true
          },
          {
            accessor: "levelAvailable",
            width: "10%",
            helperText: "Lvl Avail.",
            Filter: SelectColumnFilter,
            filter: "equals",
            disableSortBy: true
          },
          {
            accessor: "brand",
            width: "20%",
            helperText: "Brand",
            options: generateBrandOptions(props.data, (e: any) => e.brand),
            Filter: SelectColumnFilter,
            filter: "equals",
            disableSortBy: true
          },
          {
            accessor: "style",
            width: "15%",
            helperText: "Style",
            options: generateStyleOptions(props.data, (e: any) => e.style),
            Filter: SelectColumnFilter,
            filter: "equals",
            disableSortBy: true
          },
          {
            accessor: "color",
            width: "15%",
            helperText: "Color",
            options: generateColorOptions(props.data, (e: any) => e.color),
            Filter: SelectColumnFilter,
            filter: "includes",
            disableSortBy: true
          },
          {
            accessor: "rarity",
            width: "20%",
            helperText: "Rarity",
            options: generateRarityOptions(props.data, (e: any) => e.rarity),
            Filter: SelectColumnFilter,
            filter: "equals",
            disableSortBy: true
          },
          {
            accessor: "price",
            width: "20%",
            Header: "$",
            showHeader: true,
            hoverText: "Price",
            showSortLabel: true,
            disableFilters: true
          }
        ]
      }
    ],
    [
      props.theme.palette.background.default,
      props.data
    ]
  );

  return (
    <BaseTable theme={props.theme} columns={columns} defaultPageSize={props.defaultPageSize} data={props.data} />
  );
}
