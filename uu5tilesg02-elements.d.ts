declare module "uu5tilesg02-elements" {
  const List: UU5.TComponent<
    UU5.TDefaultProps<{
      view?: "table" | "grid";
      spacing?: "tight" | "normal" | "loose";
      verticalAlignment?: string;
      columnList?: any;
      rowHeight?: number;
      virtualization?: boolean;
      getActionList?: (params: { rowIndex: number; data: any }) => UU5Elements.TActionListItem[];
      emptyState?: React.ReactNode;
      onLoad: (opts: { count: number; indexFrom: number }) => void;
      cellHoverExtent?: any;
      cellActiveExtent?: any;
    }>
  >;

  const Table: UU5.TComponent<
    UU5.TDefaultProps<{
      view?: "table" | "grid";
      spacing?: "tight" | "normal" | "loose";
      verticalAlignment?: string;
      columnList?: any;
      rowHeight?: number;
      virtualization?: boolean;
      getActionList?: (params: { rowIndex: number; data: any }) => UU5Elements.TActionListItem[];
      emptyState?: React.ReactNode;
      onLoad: (opts: { count: number; indexFrom: number }) => void;
      cellHoverExtent?: any;
      cellActiveExtent?: any;
    }>
  > & {
    HeaderCell: UU5.TComponent<
      UU5.TDefaultProps<{
        sorterKey?: string;
        filterKey?: string;
        colorScheme?: string;
        significance?: UU5Elements.TSignificance;
      }>
    >;

    Cell: UU5.TComponent<
      UU5.TDefaultProps<{
        type?: "select" | "drag" | "actionList";
        colorScheme?: string;
        significance?: UU5Elements.TSignificance;
        onClick?: (params: any) => void;
      }>
    >;
  };
}

declare namespace Uu5TilesElementsOld {
  function Grid(props: any): any;
  namespace Grid {
    interface DefaultTile$Props {
      getRowProps?(...args: any): any;
      _getActionList?(...args: any): any;
    }
    function DefaultTile(props: DefaultTile$Props): any;
  }

  namespace List {
    namespace Cell {
      interface Select$Props {
        selectColorScheme?: any;
      }
      function Select(props: Select$Props): any;
      interface Drag$dragElementRef {}
      interface Drag$Props {
        dragElementRef?: ((...args: any) => any) | Drag$dragElementRef;
      }
      function Drag(props: Drag$Props): any;
    }
    interface HeaderCell$Props {
      sorterKey?: string;
      filterKey?: string;
    }
    function HeaderCell(props: HeaderCell$Props): any;
    function FooterCell(props: any): any;
    interface DefaultTile$Props {
      getRowProps?(...args: any): any;
      _getActionList?(...args: any): any;
    }
    function DefaultTile(props: DefaultTile$Props): any;
  }
  function Table(props: any): any;
  namespace Table {
    interface Cell$Props {
      type?: "select" | "drag" | "actionList";
    }
    function Cell(props: Cell$Props): any;
    namespace Cell {
      interface Select$Props {
        selectColorScheme?: any;
      }
      function Select(props: Select$Props): any;
      interface Drag$dragElementRef {}
      interface Drag$Props {
        dragElementRef?: ((...args: any) => any) | Drag$dragElementRef;
      }
      function Drag(props: Drag$Props): any;
    }
    interface HeaderCell$Props {
      sorterKey?: string;
      filterKey?: string;
    }
    function HeaderCell(props: HeaderCell$Props): any;
    function FooterCell(props: any): any;
  }
  interface Tile$dragElementRef {}
  interface Tile$Props {
    dragElementRef?: ((...args: any) => any) | Tile$dragElementRef;
    dragElement?: "tile" | "icon";
    selected?: boolean;
    toggleSelected?(...args: any): any;
    selectionVisibility?: "always" | "hover";
  }
  function Tile(props: Tile$Props): any;
  interface _FilterInput$Props {
    isManager?: boolean;
  }
  function _FilterInput(props: _FilterInput$Props): any;
  interface _Toggle$Props {
    onClick?(...args: any): any;
    colorScheme?: any;
    significance?: "highlighted" | "distinct";
    size?: any;
    on?: boolean;
  }
  function _Toggle(props: _Toggle$Props): any;
}
