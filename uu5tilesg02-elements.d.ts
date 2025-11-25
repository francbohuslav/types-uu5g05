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
        alternative?: boolean;
      }>
    >;
  };

  const Grid: UU5.TComponent<
    UU5.TDefaultProps<{
      itemIdentifier?: string;
    }>,
    (props: UU5TilesElements.GridItem<any>) => React.ReactNode
  >;

  global {
    namespace UU5TilesElements {
      interface GridItem<ItemType> {
        data: ItemType;
        elementAttrs: Record<string, any>;
        className: string;
        colorScheme: string | undefined;
        significance: UU5Elements.TSignificance | undefined;
        selectable: "none";
        selected?: boolean;
        toggleSelected(): void;
        isDragging?: boolean;
      }
    }
  }
}
