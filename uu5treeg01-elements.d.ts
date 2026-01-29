declare module "uu5treeg01-elements" {
  const Tree: UU5.TComponent<UU5.TDefaultProps<UU5TreeElements.TreeProps>>;

  global {
    namespace UU5TreeElements {
      interface TreeProps {
        itemList: TreeItemProps[];
        onChange?: (event: any) => void;
        selectable?: boolean;
        draggable?: boolean;
        itemColorScheme?: string;
        itemSignificance?: UU5Elements.TSignificance;
        itemBorderRadius?: string;
        iconSignificance?: "common" | "subdued";
        height?: number | string;
        maxHeight?: number | string;
        size?: UU5.TSize;
        horizontalGap?: number;
      }

      interface TreeItemProps {
        header: React.ReactNode;
        children?: React.ReactNode;
        actionList?: UU5Elements.TActionGroupItem[];
        selected?: boolean;
        expanded?: boolean;
        icon?: UUGds.GdsIcon;
        iconSignificance?: TreeProps["iconSignificance"];
        onClick?: (event: any) => void;
        colorScheme?: string;
        significance?: UU5Elements.TSignificance;
        borderRadius?: string;
        itemList?: TreeItemProps[];
      }
    }
  }
}
