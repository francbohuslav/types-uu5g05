declare module "uu5g05-elements" {
  const Modal: UU5.TComponent<
    UU5.TDefaultProps<{
      initialLeftOpen?: boolean;
      leftWidth?: number;
      leftType?: any;
      left?: any;
      header?: any;
      open: boolean;
      onClose?: any;
      closeOnButtonClick?: boolean;
      closeOnOverlayClick?: boolean;
      footer?: any;
      width?: number | string;
    }>
  >;

  const ModalBus: UU5.TComponent<UU5.TDefaultProps<any>>;

  interface ButtonProps {
    onClick?(): void;
    iconNotification?: boolean;
    iconRight?: any;
    type?: "button" | "submit" | "reset";
    colorScheme?: string;
    significance?: UU5Elements.TSignificance;
    effect?: "ground" | "upper";
    size?: UU5.TSize;
    borderRadius?: any;
    width?: any;
    pressed?: boolean;
    icon?: string | UUGds.GdsIcon | React.ReactNode;
    collapsedIcon?: string | UUGds.GdsIcon | React.ReactNode;
    disabled?: boolean;
    tooltip?: React.ReactNode | UU5.TLsi;
    collapsedChildren?: React.ReactNode;
  }

  const Button: UU5.TComponent<UU5.TDefaultProps<ButtonProps>>;
  const TouchButton: UU5.TComponent<UU5.TDefaultProps<ButtonProps>>;

  interface ButtonGroupProps {
    itemList: ButtonProps[];
    size?: UU5.TSize;
    colorScheme?: string;
    significance?: UU5Elements.TSignificance;
    effect?: "ground" | "upper";
    borderRadius?: any;
    width?: any;
  }
  const ButtonGroup: UU5.TComponent<UU5.TDefaultProps<ButtonGroupProps>>;

  const Toggle: UU5.TComponent<
    UU5.TDefaultProps<{
      value?: boolean;
      onChange?(event: { data: { value: boolean } }): void;
      size?: UU5.TSize;
      label?: React.ReactNode;
      iconOn?: UUGds.GdsIcon;
      iconOff?: UUGds.GdsIcon;
      width?: any;
      tooltip?: UU5.TLsi | string;
    }>
  >;

  interface DrawerProps {
    open?: boolean;
    onClose?: () => void;
    type?:
      | "elevated"
      | "flat"
      | "collapsible"
      | Record<UU5.TSize, "elevated" | "flat" | "collapsible">;
    height?: number | string;
    fullHeight?: boolean;
    offsetTop?: number;
    width?: number;
    widthCollapsed?: number;
    spacing: "tight" | "normal" | "loose";
    content: React.ReactNode | (() => React.ReactNode);
    collapsible?: boolean;
  }
  const Drawer: UU5.TComponent<UU5.TDefaultProps<DrawerProps>>;

  const Progress: UU5.TComponent<
    UU5.TDefaultProps<{
      type?: "circular" | "horizontal";
      cssColor?: any;
      text?: any;
      suffix?: any;
      size?: UU5.TSize | null;
      width?: number | string;
      value: number;
    }>
  >;
  const GridTemplate: UU5.TComponent<
    UU5.TDefaultProps<{
      templateAreas: any;
      contentMap: {};
      contentStyleMap?: {};
      rowGap?: number;
      columnGap?: number;
    }>
  >;
  const CollapsibleBox: UU5.TComponent<UU5.TDefaultProps<{ collapsed?: boolean }>>;
  const Panel: UU5.TComponent<
    UU5.TDefaultProps<{
      header: any;
      open?: boolean;
      onChange?(...args: any): any;
      colorScheme?: any;
      significance?: UU5Elements.TSignificance;
      borderRadius?: any;
      effect?: "ground" | "upper";
    }>
  >;
  const Pending: UU5.TComponent<
    UU5.TDefaultProps<{
      type?: "circular" | "horizontal" | "dots";
      cssColor?: any;
      size?: UU5.TSize | "max" | null;
    }>
  >;
  const Pagination: UU5.TComponent<
    UU5.TDefaultProps<{
      index?: number;
      onChange(...args: any): any;
      count: number;
      type?: "pages" | "compact";
      size?: UU5.TSize;
    }>
  >;
  const Icon: UU5.TComponent<
    UU5.TDefaultProps<{
      tooltip?: string;
      margin?: any;
      onClick?(...args: any): any;
      colorScheme?: any;
      significance?: "common" | "subdued";
      icon: UUGds.GdsIcon;
    }>
  >;
  const Line: UU5.TComponent<
    UU5.TDefaultProps<{
      colorScheme?: any;
      significance?: UU5Elements.TSignificance;
      margin?: any;
      direction?: "horizontal" | "vertical";
    }>
  >;

  const ListLayout: UU5.TComponent<
    UU5.TDefaultProps<{
      itemList: UU5Elements.TListLayoutItem[];
      collapsibleItemList?: UU5Elements.TListLayoutItem[];
    }>
  >;

  const ActionGroup: UU5.TComponent<
    UU5.TDefaultProps<{
      itemList: UU5Elements.TActionGroupItem[];
      size?: UU5.TSize;
      alignment?: "left" | "right";
    }>
  >;

  const Tag: UU5.TComponent<
    UU5.TDefaultProps<{
      icon?: any;
      size?: any;
      ellipsis?: boolean;
      borderRadius?: any;
      colorScheme?: any;
      significance?: UU5Elements.TSignificance;
      onClick?(...args: any): any;
      iconRight?: any;
      onIconRightClick?(...args: any): any;
      focused?: boolean;
    }>
  >;
  const Link: UU5.TComponent<
    UU5.TDefaultProps<{
      onClick?(...args: any): any;
      href?: string;
      target?: string;
      download?: boolean | string;
      colorScheme?: any | any;
      significance?: any;
      size?: UU5.TSize;
      disabled?: boolean;
      tooltip?: string | UU5.TLsi;
    }>
  >;
  const Dropdown: UU5.TComponent<
    UU5.TDefaultProps<{
      label?: any;
      itemList?: any;
      openPosition?: any;
      iconOpen?: boolean | any;
      iconClosed?: boolean | any;
      compactSubmenu?: any;
      closeOnScroll?: boolean;
      onClick?(...args: any): any;
      onLabelClick?(...args: any): any;
    }>
  >;
  const DateTime: UU5.TComponent<
    UU5.TDefaultProps<{
      value?: string | any;
      dateFormat?: "none" | "short" | "medium" | "long";
      timeFormat?: "none" | "short" | "medium" | "long";
      hourFormat?: 11 | 12 | 24;
      format?: string;
      timeZone?: string;
    }>
  >;
  const Dialog: UU5.TComponent<UU5.TDefaultProps<any>>;
  const Svg: UU5.TComponent<
    UU5.TDefaultProps<{
      code?: any;
      uri?: any;
      type?: "svg" | "img";
      colorScheme?: any;
      height?: any;
    }>
  >;
  const HighlightedBox: UU5.TComponent<
    UU5.TDefaultProps<{
      colorScheme?: any;
      significance?: UU5Elements.TSignificance;
      borderRadius?: any;
      icon?: any;
      onClose?(...args: any): any;
      controlList?: any[];
      controlPosition?: "right" | "bottom";
      overlay?: boolean;
    }>
  >;
  const Text: UU5.TComponent<UU5.TDefaultProps<Text$Props & { colorScheme?: string }>>;
  const Header: UU5.TComponent<
    UU5.TDefaultProps<{
      icon?: any | string;
      onIconClick?(...args: any): any;
      title?: React.ReactNode;
      size?: UU5.TSize;
    }>
  >;
  const Box: UU5.TComponent<
    UU5.TDefaultProps<{
      shape?: "ground" | "interactiveElement" | "interactiveItem" | "background";
      colorScheme?: any;
      significance?: UU5Elements.TSignificance;
      aspectRatio?: any;
      size?: "xs" | "s" | "m" | "l";
      borderRadius?: any;
      width?: any;
      height?: any;
      onClick?(...args: any): any;
    }>
  >;
  const Flag: UU5.TComponent<
    UU5.TDefaultProps<{
      src?: any;
      code?: any;
      type?: "rectangle" | "square" | "circle";
      bordered?: boolean;
      height?: any;
      borderRadius?: any;
    }>
  >;
  const PlaceholderBox: UU5.TComponent<
    UU5.TDefaultProps<{
      significance?: "common" | "subdued";
      code?: any;
      header?: any | any;
      info?: any | any;
      actionList?: any[];
      actionDirection?: "vertical" | "horizontal";
    }>
  >;
  const LanguageSelector: UU5.TComponent<UU5.TDefaultProps<{ languageList: string[] }>>;

  const Tooltip: UU5.TComponent<
    UU5.TDefaultProps<{
      delayMs?: number;
      element: React.ReactNode | HTMLElement;
      borderRadius?: any;
      colorScheme?: any;
      significance?: UU5Elements.TSignificance;
      onClose?(): any;
      relative?: boolean;
    }>
  >;

  const Block: UU5.TComponent<
    UU5.TDefaultProps<{
      card?: "none" | "full" | "content";
      collapsible?: boolean;
      initialCollapsed?: boolean;
      headerType?: "title" | "heading";
      header?: React.ReactNode;
      headerSeparator?: boolean;
      level?: number;
      actionList: UU5Elements.TActionListItem[];
    }>
  >;

  const Popover: UU5.TComponent<
    UU5.TDefaultProps<{
      element?: React.ReactNode | HTMLElement;
      preferredPosition?: string;
      borderRadius?: any;
      onClose?(): void;
    }>
  >;

  const Alert: UU5.TComponent<
    UU5.TDefaultProps<{
      message?: React.ReactNode | UU5.TLsi;
      header?: React.ReactNode | UU5.TLsi;
      priority?: string;
      icon?: string;
      durationMs?: number;
      onClose?(event: Event): void;
    }>
  >;

  const MenuList: UU5.TComponent<
    UU5.TDefaultProps<{
      itemList: UU5Elements.TMenuListItem[];
      compactSubmenu?: boolean;
      maxHeight?: string;
      value?: string[] | number[];
      onChange?(event: UU5.TDataEvent<string[] | number[]>): any;
    }>
  >;

  const Badge: UU5.TComponent<
    UU5.TDefaultProps<{
      size?: UU5.TSize;
      colorScheme?: string;
      significance?: UU5Elements.TSignificance;
      tooltip?: UU5.TLsi | string;
    }>
  >;

  const ContextCenterButton: UU5.TComponent<
    UU5.TDefaultProps<{
      info: UU5Elements.TContextCenterInfoItem[];
    }>
  >;

  const ScrollableBox: UU5.TComponent<
    UU5.TDefaultProps<{
      height?: number | string;
      minHeight?: number | string;
      maxHeight?: number | string;
      disableOverscroll?: boolean;
      horizontal?: boolean;
      initialScrollX?: number;
      initialScrollY?: number;
      scrollIndicator?: "gradient" | "disappear" | object;
      scrollIndicatorOffset?: object;
      scrollElementRef?: any;
      scrollbarWidth?: number;
    }>
  >;

  const Grid: UU5.TComponent<
    UU5.TDefaultProps<{
      display?: "block" | "inline";
      templateAreas?: any;
      templateRows?: any;
      autoRows?: any;
      templateColumns?: any;
      autoColumns?: any;
      rowGap?: any;
      columnGap?: any;
      justifyItems?: any;
      alignItems?: any;
      justifyContent?: any;
      alignContent?: any;
      flow?: any;
    }>
  > & {
    Item: UU5.TComponent<
      UU5.TDefaultProps<{
        gridArea?: string;
        colSpan?: any;
        rowSpan?: any;
        justifySelf?: any;
        alignSelf?: any;
        columnGap?: number;
      }>
    >;
  };

  const SpacingProvider: UU5.TComponent<{ type: "tight" | "normal" | "loose" }>;

  function useAlertBus(): { addAlert: (message: any, durationMs?: number, priority?: any) => void };

  function useSpacing(): {
    a: number;
    b: number;
    c: number;
    d: number;
    spaceA: number;
    spaceB: number;
    spaceC: number;
    spaceD: number;
    type: "tight" | "normal" | "loose";
  };

  function withTooltip<P extends UU5.TProps>(
    component: UU5.TComponent<P>
  ): UU5.TComponent<P & { tooltip: UU5.TLsi }>;

  type Text$Props =
    | {
        category?: "expose";
        segment?: "default";
        type?: "hero" | "lead" | "broad" | "notice" | "distinct";
      }
    | {
        category?: "interface";
        segment?: "title" | "content" | "highlight" | "interactive";
        /** Sorted by size */
        type?:
          | "main"
          | "major"
          | "common"
          | "minor"
          | "micro"
          | "large"
          | "medium"
          | "small"
          | "xsmall";
      }
    | {
        category?: "story";
        segment?: "heading" | "body" | "special";
        type?: "major" | "common" | "minor" | "h1" | "h2" | "h3" | "h4" | "h5" | "caption" | "code";
      };

  namespace UuGds {
    function getValue(args: string[]): any;
    namespace ColorPalette {
      function getValue(args: string[]): any;
    }

    namespace BorderPalette {
      function getValue(args: string[]): any;
    }

    namespace SpacingPalette {
      const getValue: ((path: ["fixed", "a"]) => 2) &
        ((path: ["fixed", "b"]) => 4) &
        ((path: ["fixed", "c"]) => 8) &
        ((path: ["fixed", "d"]) => 12) &
        ((path: ["fixed", "e"]) => 16) &
        ((path: ["fixed", "f"]) => 20) &
        ((path: ["fixed", "g"]) => 24) &
        ((path: ["fixed", "h"]) => 32) &
        ((path: ["fixed", "i"]) => 36) &
        ((path: ["fixed", "j"]) => 40) &
        ((path: ["fixed", "k"]) => 48) &
        ((path: ["fixed", "l"]) => 64) &
        ((path: ["fixed", "m"]) => 80) &
        ((path: ["inline", "a"]) => "0.1em") &
        ((path: ["inline", "b"]) => "0.15em") &
        ((path: ["inline", "c"]) => "0.2em") &
        ((path: ["inline", "d"]) => "0.3em") &
        ((path: ["inline", "e"]) => "0.4em") &
        ((path: ["relative", "a"]) => 0.1) &
        ((path: ["relative", "b"]) => 0.15) &
        ((path: ["relative", "c"]) => 0.2) &
        ((path: ["relative", "d"]) => 0.25) &
        ((path: ["relative", "e"]) => 0.3) &
        ((path: ["relative", "f"]) => 0.35) &
        ((path: ["relative", "g"]) => 0.4) &
        ((path: ["relative", "h"]) => 0.45) &
        ((path: ["relative", "i"]) => 0.5) &
        ((path: ["relative", "j"]) => 0.75) &
        ((path: ["relative", "k"]) => 1) &
        ((path: ["adaptive", "largeScreen", "tight", "a"]) => 0) &
        ((path: ["adaptive", "largeScreen", "tight", "b"]) => 4) &
        ((path: ["adaptive", "largeScreen", "tight", "c"]) => 8) &
        ((path: ["adaptive", "largeScreen", "tight", "d"]) => 16) &
        ((path: ["adaptive", "largeScreen", "normal", "a"]) => 2) &
        ((path: ["adaptive", "largeScreen", "normal", "b"]) => 8) &
        ((path: ["adaptive", "largeScreen", "normal", "c"]) => 16) &
        ((path: ["adaptive", "largeScreen", "normal", "d"]) => 24) &
        ((path: ["adaptive", "largeScreen", "loose", "a"]) => 4) &
        ((path: ["adaptive", "largeScreen", "loose", "b"]) => 16) &
        ((path: ["adaptive", "largeScreen", "loose", "c"]) => 24) &
        ((path: ["adaptive", "largeScreen", "loose", "d"]) => 32) &
        ((path: ["adaptive", "smallScreen", "tight", "a"]) => 0) &
        ((path: ["adaptive", "smallScreen", "tight", "b"]) => 2) &
        ((path: ["adaptive", "smallScreen", "tight", "c"]) => 8) &
        ((path: ["adaptive", "smallScreen", "tight", "d"]) => 12) &
        ((path: ["adaptive", "smallScreen", "normal", "a"]) => 2) &
        ((path: ["adaptive", "smallScreen", "normal", "b"]) => 4) &
        ((path: ["adaptive", "smallScreen", "normal", "c"]) => 12) &
        ((path: ["adaptive", "smallScreen", "normal", "d"]) => 16) &
        ((path: ["adaptive", "smallScreen", "loose", "a"]) => 4) &
        ((path: ["adaptive", "smallScreen", "loose", "b"]) => 8) &
        ((path: ["adaptive", "smallScreen", "loose", "c"]) => 16) &
        ((path: ["adaptive", "smallScreen", "loose", "d"]) => 24);
    }
  }

  global {
    namespace UU5Elements {
      interface TActionListItem extends UU5.TBaseProps<ButtonProps> {
        component?: React.ReactNode | (() => React.ReactNode);
        primary?: boolean;
        collapsed?: boolean | "always" | "never" | "auto";
      }
      interface TContextCenterInfoItem {
        label: React.ReactNode;
        children: React.ReactNode;
        icon?: string;
      }

      type TListLayoutItem =
        | {
            label?: UU5.TLsi | string;
            info?: UU5.TLsi | string;
            children?: React.ReactNode;
            actionList?: any[];
          }
        | { divider: true };

      type TSignificance = "common" | "highlighted" | "distinct" | "subdued";

      interface TActionGroupItem {
        component?: React.ReactNode;
        significance?: TSignificance;
        colorScheme?: string;
        children?: React.ReactNode;
        collapsedChildren?: React.ReactNode;
        primary?: boolean;
        icon?: UUGds.GdsIcon;
        collapsedIcon?: UUGds.GdsIcon;
        collapsed?: boolean | string;
        tooltip?: string;
        itemList?: (UU5Elements.TActionListItem | { divider: true })[];
        onClick?: () => void;
      }

      interface TMenuItem {
        children?: React.ReactNode;
        onClick?: () => void;
        icon?: string;
        iconNotification?: boolean;
        iconRight?: boolean | string;
        heading?: boolean;
        actionList?: TActionListItem[];
        size?: UU5.TSize;
        hoverable?: boolean;
        focused?: boolean;
        itemList?: TMenuItem[];
        href?: string;
        target?: string;
        testId?: string;
      }

      interface TMenuListItem extends TMenuItem {
        divider?: boolean;
        itemList?: TMenuListItem[];
        collapsible?: boolean | "tree";
        initialCollapsed?: boolean;
        component?: React.ReactNode;
      }
    }
    namespace UUGds {
      // Definition https://cdn.plus4u.net/uu-gds-svgg01/1.0.0/assets/stencil-map.json
      // Showcase https://uuapp.plus4u.net/uu-bookkit-maing01/2289b0b5308d43f89a7f34fefc5cefcb/book/page?code=47270913
      type GdsIcon =
        | "uugds-account-badge"
        | "uugds-account-multi"
        | "uugds-account-swap"
        | "uugds-account"
        | "uugds-activity"
        | "uugds-alert-circle-solid"
        | "uugds-alert-circle"
        | "uugds-alert-solid"
        | "uugds-alert"
        | "uugds-align-center"
        | "uugds-align-left"
        | "uugds-align-right"
        | "uugds-apps-edit"
        | "uugds-apps"
        | "uugds-basket"
        | "uugds-bell-off"
        | "uugds-bell"
        | "uugds-book-index"
        | "uugds-bookmark"
        | "uugds-calendar-time"
        | "uugds-calendar"
        | "uugds-cart"
        | "uugds-check-circle-solid"
        | "uugds-check-circle"
        | "uugds-check"
        | "uugds-checkbox-list"
        | "uugds-chevron-double-left"
        | "uugds-chevron-double-right"
        | "uugds-chevron-down"
        | "uugds-chevron-last-left"
        | "uugds-chevron-last-right"
        | "uugds-chevron-left"
        | "uugds-chevron-right"
        | "uugds-chevron-up"
        | "uugds-circle-solid"
        | "uugds-circle"
        | "uugds-clipboard-plus"
        | "uugds-clock"
        | "uugds-close-circle-solid"
        | "uugds-close-circle"
        | "uugds-close-octagon"
        | "uugds-close"
        | "uugds-cloud-download-solid"
        | "uugds-cloud-upload"
        | "uugds-code"
        | "uugds-collapse-diagonal"
        | "uugds-columns-1-1-1"
        | "uugds-columns-1-1"
        | "uugds-columns-1-2-1"
        | "uugds-columns-1-2"
        | "uugds-columns-1-3"
        | "uugds-columns-2-1"
        | "uugds-columns-3-1"
        | "uugds-comment-text"
        | "uugds-copy"
        | "uugds-corner-left-up"
        | "uugds-credit-card"
        | "uugds-delete"
        | "uugds-dnd"
        | "uugds-document-multi"
        | "uugds-document"
        | "uugds-dots-horizontal-circle"
        | "uugds-dots-horizontal"
        | "uugds-dots-vertical-circle"
        | "uugds-dots-vertical"
        | "uugds-down"
        | "uugds-download"
        | "uugds-drag-horizontal"
        | "uugds-drag-vertical"
        | "uugds-duplicate"
        | "uugds-edit-inline"
        | "uugds-email"
        | "uugds-emoji-smile"
        | "uugds-expand-diagonal"
        | "uugds-eye-off"
        | "uugds-eye"
        | "uugds-favorites-add"
        | "uugds-favorites-edit"
        | "uugds-favorites-plus"
        | "uugds-favorites"
        | "uugds-figma-component"
        | "uugds-file-check"
        | "uugds-file-move-outline"
        | "uugds-file"
        | "uugds-filter"
        | "uugds-folder-open"
        | "uugds-folder"
        | "uugds-format-clear"
        | "uugds-help-circle-solid"
        | "uugds-help"
        | "uugds-home"
        | "uugds-image-multi"
        | "uugds-image"
        | "uugds-indent-decrease"
        | "uugds-indent-increase"
        | "uugds-info-circle-solid"
        | "uugds-info"
        | "uugds-insert-above"
        | "uugds-insert-after"
        | "uugds-insert-before"
        | "uugds-insert-below"
        | "uugds-json"
        | "uugds-kid"
        | "uugds-left"
        | "uugds-level-up"
        | "uugds-link"
        | "uugds-lock-closed"
        | "uugds-lock-open"
        | "uugds-log-out"
        | "uugds-manage-columns"
        | "uugds-mapmarker"
        | "uugds-menu-down"
        | "uugds-menu-drop-down"
        | "uugds-menu-dropdown"
        | "uugds-menu-left"
        | "uugds-menu-right"
        | "uugds-menu-up"
        | "uugds-menu"
        | "uugds-minus-circle"
        | "uugds-minus"
        | "uugds-object-align-center"
        | "uugds-object-align-left"
        | "uugds-object-align-right"
        | "uugds-open-in-modal"
        | "uugds-open-in-new"
        | "uugds-package-open"
        | "uugds-package"
        | "uugds-paperclip"
        | "uugds-pause-circle"
        | "uugds-pdf"
        | "uugds-pencil"
        | "uugds-phone"
        | "uugds-play-circle"
        | "uugds-plus-circle"
        | "uugds-plus"
        | "uugds-portal"
        | "uugds-quote-open"
        | "uugds-react"
        | "uugds-redo"
        | "uugds-refresh"
        | "uugds-reload"
        | "uugds-richtext-toolbar"
        | "uugds-right-left"
        | "uugds-right"
        | "uugds-search"
        | "uugds-send"
        | "uugds-settings"
        | "uugds-share"
        | "uugds-shield-check"
        | "uugds-shield"
        | "uugds-sidebar-left"
        | "uugds-sidebar-right"
        | "uugds-sort-ascending"
        | "uugds-sort-descending"
        | "uugds-sorting-active"
        | "uugds-sorting"
        | "uugds-sprint"
        | "uugds-status"
        | "uugds-stop-circle"
        | "uugds-string"
        | "uugds-sync"
        | "uugds-tag"
        | "uugds-template-plus"
        | "uugds-ticket"
        | "uugds-timer"
        | "uugds-tune-horizontal"
        | "uugds-tune-simple"
        | "uugds-undo"
        | "uugds-unfold-horizontal-less"
        | "uugds-unfold-horizontal-more"
        | "uugds-unfold-vertical-less"
        | "uugds-unfold-vertical-more"
        | "uugds-up-down-vertical"
        | "uugds-up"
        | "uugds-upload"
        | "uugds-uu5"
        | "uugds-view-extended"
        | "uugds-view-grid"
        | "uugds-view-list"
        | "uugds-web"
        | "uugds-wifi-off"
        | "uugds-xml"
        | "uugds-zoom-in"
        | "uugds-zoom-out"
        | "uugdsstencil-alert-alert-circle-solid"
        | "uugdsstencil-alert-alert-circle"
        | "uugdsstencil-alert-alert-solid"
        | "uugdsstencil-alert-alert"
        | "uugdsstencil-alert-check-circle-solid"
        | "uugdsstencil-alert-check-circle"
        | "uugdsstencil-alert-close-circle-solid"
        | "uugdsstencil-alert-close-circle"
        | "uugdsstencil-alert-close-octagon"
        | "uugdsstencil-alert-help-circle-solid"
        | "uugdsstencil-alert-help-off"
        | "uugdsstencil-alert-help"
        | "uugdsstencil-alert-i"
        | "uugdsstencil-alert-info-circle-solid"
        | "uugdsstencil-alert-info"
        | "uugdsstencil-arrow-arrow-down-left"
        | "uugdsstencil-arrow-arrow-down-right"
        | "uugdsstencil-arrow-arrow-horizontal-bidirectional-square"
        | "uugdsstencil-arrow-arrow-horizontal-bidirectional"
        | "uugdsstencil-arrow-arrow-right-up-half"
        | "uugdsstencil-arrow-arrow-up-left"
        | "uugdsstencil-arrow-arrow-up-right"
        | "uugdsstencil-arrow-chevron-double-down"
        | "uugdsstencil-arrow-chevron-double-left"
        | "uugdsstencil-arrow-chevron-double-right"
        | "uugdsstencil-arrow-chevron-double-up"
        | "uugdsstencil-arrow-chevron-down"
        | "uugdsstencil-arrow-chevron-last-down"
        | "uugdsstencil-arrow-chevron-last-left"
        | "uugdsstencil-arrow-chevron-last-right"
        | "uugdsstencil-arrow-chevron-last-up"
        | "uugdsstencil-arrow-chevron-left"
        | "uugdsstencil-arrow-chevron-right"
        | "uugdsstencil-arrow-chevron-up"
        | "uugdsstencil-arrow-collapse-diagonal"
        | "uugdsstencil-arrow-corner-left-down"
        | "uugdsstencil-arrow-corner-left-up"
        | "uugdsstencil-arrow-corner-right-down"
        | "uugdsstencil-arrow-corner-right-up"
        | "uugdsstencil-arrow-down-circle"
        | "uugdsstencil-arrow-down-left-circle"
        | "uugdsstencil-arrow-down-right-circle"
        | "uugdsstencil-arrow-down"
        | "uugdsstencil-arrow-expand-diagonal"
        | "uugdsstencil-arrow-flip"
        | "uugdsstencil-arrow-left-circle"
        | "uugdsstencil-arrow-left"
        | "uugdsstencil-arrow-menu-down"
        | "uugdsstencil-arrow-menu-left"
        | "uugdsstencil-arrow-menu-right"
        | "uugdsstencil-arrow-menu-up"
        | "uugdsstencil-arrow-merge-up"
        | "uugdsstencil-arrow-redo"
        | "uugdsstencil-arrow-refresh"
        | "uugdsstencil-arrow-reload"
        | "uugdsstencil-arrow-right-circle"
        | "uugdsstencil-arrow-right-left"
        | "uugdsstencil-arrow-right"
        | "uugdsstencil-arrow-spacing-horizontal"
        | "uugdsstencil-arrow-spacing-vertical"
        | "uugdsstencil-arrow-sync"
        | "uugdsstencil-arrow-undo"
        | "uugdsstencil-arrow-unfold-horizontal-less"
        | "uugdsstencil-arrow-unfold-horizontal-more"
        | "uugdsstencil-arrow-unfold-vertical-less"
        | "uugdsstencil-arrow-unfold-vertical-more"
        | "uugdsstencil-arrow-up-circle"
        | "uugdsstencil-arrow-up-down-vertical"
        | "uugdsstencil-arrow-up-left-circle"
        | "uugdsstencil-arrow-up-right-circle"
        | "uugdsstencil-arrow-up"
        | "uugdsstencil-arrow-vertical-align-bottom"
        | "uugdsstencil-arrow-vertical-align-top"
        | "uugdsstencil-badge-cancel"
        | "uugdsstencil-badge-check"
        | "uugdsstencil-badge-clock"
        | "uugdsstencil-badge-end"
        | "uugdsstencil-badge-exclamation-2"
        | "uugdsstencil-badge-exclamation-3"
        | "uugdsstencil-badge-exclamation"
        | "uugdsstencil-badge-flash"
        | "uugdsstencil-badge-info"
        | "uugdsstencil-badge-minus"
        | "uugdsstencil-badge-pause"
        | "uugdsstencil-badge-play"
        | "uugdsstencil-badge-plus"
        | "uugdsstencil-badge-start"
        | "uugdsstencil-chart-bar-chart-square"
        | "uugdsstencil-chart-bar-chart-variant"
        | "uugdsstencil-chart-bar-chart"
        | "uugdsstencil-chart-bar-line-chart"
        | "uugdsstencil-chart-bubble-chart"
        | "uugdsstencil-chart-gauge-chart"
        | "uugdsstencil-chart-line-chart-down"
        | "uugdsstencil-chart-line-chart-trend-down"
        | "uugdsstencil-chart-line-chart-trend-up"
        | "uugdsstencil-chart-line-chart-up"
        | "uugdsstencil-chart-pie-chart-variant"
        | "uugdsstencil-chart-pie-chart"
        | "uugdsstencil-chart-pulse"
        | "uugdsstencil-chart-radar-chart"
        | "uugdsstencil-chart-radial-bar-chart"
        | "uugdsstencil-chart-status"
        | "uugdsstencil-chart-trend-down"
        | "uugdsstencil-chart-trend-up"
        | "uugdsstencil-commerce-bank-notes"
        | "uugdsstencil-commerce-bank"
        | "uugdsstencil-commerce-basket-solid"
        | "uugdsstencil-commerce-basket"
        | "uugdsstencil-commerce-briefcase"
        | "uugdsstencil-commerce-calculator"
        | "uugdsstencil-commerce-cart-plus"
        | "uugdsstencil-commerce-cart"
        | "uugdsstencil-commerce-coins"
        | "uugdsstencil-commerce-credit-card"
        | "uugdsstencil-commerce-desktop-text"
        | "uugdsstencil-commerce-devices"
        | "uugdsstencil-commerce-gift"
        | "uugdsstencil-commerce-t-shirt"
        | "uugdsstencil-commerce-tag"
        | "uugdsstencil-commerce-ticket"
        | "uugdsstencil-communication-activity"
        | "uugdsstencil-communication-at-sign"
        | "uugdsstencil-communication-chat"
        | "uugdsstencil-communication-comment-text-solid"
        | "uugdsstencil-communication-comment-text"
        | "uugdsstencil-communication-discussion"
        | "uugdsstencil-communication-email"
        | "uugdsstencil-communication-emoji-cry"
        | "uugdsstencil-communication-emoji-laugh"
        | "uugdsstencil-communication-headphones"
        | "uugdsstencil-communication-inbox"
        | "uugdsstencil-communication-law-paragraph"
        | "uugdsstencil-communication-megaphone"
        | "uugdsstencil-communication-phone-solid"
        | "uugdsstencil-communication-phone"
        | "uugdsstencil-communication-product-info"
        | "uugdsstencil-communication-send"
        | "uugdsstencil-communication-thumb-down"
        | "uugdsstencil-communication-thumb-up"
        | "uugdsstencil-communication-translate"
        | "uugdsstencil-edit-add-column-left"
        | "uugdsstencil-edit-add-column-right"
        | "uugdsstencil-edit-add-row-above"
        | "uugdsstencil-edit-add-row-below"
        | "uugdsstencil-edit-align-center"
        | "uugdsstencil-edit-align-justify"
        | "uugdsstencil-edit-align-left"
        | "uugdsstencil-edit-align-right"
        | "uugdsstencil-edit-badge-bottom-left-solid"
        | "uugdsstencil-edit-badge-top-left-solid"
        | "uugdsstencil-edit-badge-top-left"
        | "uugdsstencil-edit-badge-top-right"
        | "uugdsstencil-edit-bold"
        | "uugdsstencil-edit-checkbox-list"
        | "uugdsstencil-edit-code"
        | "uugdsstencil-edit-color-fill"
        | "uugdsstencil-edit-color-text"
        | "uugdsstencil-edit-connector"
        | "uugdsstencil-edit-edit-inline"
        | "uugdsstencil-edit-emoji-plus"
        | "uugdsstencil-edit-emoji-sad"
        | "uugdsstencil-edit-emoji-smile"
        | "uugdsstencil-edit-flip-vertical"
        | "uugdsstencil-edit-fllip-horizontal"
        | "uugdsstencil-edit-format-clear"
        | "uugdsstencil-edit-grid-dots-vertical-center"
        | "uugdsstencil-edit-horizontal-align-center"
        | "uugdsstencil-edit-in-progress"
        | "uugdsstencil-edit-indent-decrease"
        | "uugdsstencil-edit-indent-increase"
        | "uugdsstencil-edit-insert-above"
        | "uugdsstencil-edit-insert-below"
        | "uugdsstencil-edit-insert-left"
        | "uugdsstencil-edit-insert-right"
        | "uugdsstencil-edit-italic"
        | "uugdsstencil-edit-line-cornered"
        | "uugdsstencil-edit-line-curved"
        | "uugdsstencil-edit-line-dashed"
        | "uugdsstencil-edit-line-dotted"
        | "uugdsstencil-edit-line-straight"
        | "uugdsstencil-edit-link"
        | "uugdsstencil-edit-list-bulleted"
        | "uugdsstencil-edit-list-numbered"
        | "uugdsstencil-edit-number"
        | "uugdsstencil-edit-palette"
        | "uugdsstencil-edit-paperclip"
        | "uugdsstencil-edit-pencil"
        | "uugdsstencil-edit-plural"
        | "uugdsstencil-edit-quote-open"
        | "uugdsstencil-edit-richtext-toolbar"
        | "uugdsstencil-edit-rotate-left"
        | "uugdsstencil-edit-rotate-right"
        | "uugdsstencil-edit-section-plus"
        | "uugdsstencil-edit-strikethrough"
        | "uugdsstencil-edit-subscript"
        | "uugdsstencil-edit-superscript"
        | "uugdsstencil-edit-text-paragraph"
        | "uugdsstencil-edit-text-plus"
        | "uugdsstencil-edit-text"
        | "uugdsstencil-edit-underline"
        | "uugdsstencil-edit-uu5"
        | "uugdsstencil-edit-vertical-align-center"
        | "uugdsstencil-education-assignment"
        | "uugdsstencil-education-badge-award"
        | "uugdsstencil-education-book-index"
        | "uugdsstencil-education-book-multiple"
        | "uugdsstencil-education-book"
        | "uugdsstencil-education-exam"
        | "uugdsstencil-education-game"
        | "uugdsstencil-education-presentation"
        | "uugdsstencil-education-question"
        | "uugdsstencil-education-student-hat"
        | "uugdsstencil-education-trophy"
        | "uugdsstencil-home-buildings"
        | "uugdsstencil-home-exit"
        | "uugdsstencil-home-home"
        | "uugdsstencil-home-lightbulb-glow"
        | "uugdsstencil-home-lightbulb"
        | "uugdsstencil-home-pin"
        | "uugdsstencil-it-branchkit-branch"
        | "uugdsstencil-it-branchkit-clone"
        | "uugdsstencil-it-branchkit-commit"
        | "uugdsstencil-it-branchkit-merge"
        | "uugdsstencil-it-bug"
        | "uugdsstencil-it-component"
        | "uugdsstencil-it-console"
        | "uugdsstencil-it-database"
        | "uugdsstencil-it-div"
        | "uugdsstencil-it-figma-component"
        | "uugdsstencil-it-function"
        | "uugdsstencil-it-html5"
        | "uugdsstencil-it-json"
        | "uugdsstencil-it-react"
        | "uugdsstencil-it-string"
        | "uugdsstencil-it-web"
        | "uugdsstencil-it-wifi-off"
        | "uugdsstencil-it-wifi"
        | "uugdsstencil-it-xml"
        | "uugdsstencil-layout-align-center"
        | "uugdsstencil-layout-align-left"
        | "uugdsstencil-layout-align-right"
        | "uugdsstencil-layout-apps-edit"
        | "uugdsstencil-layout-apps"
        | "uugdsstencil-layout-columns-1-1-1-1"
        | "uugdsstencil-layout-columns-1-1-1"
        | "uugdsstencil-layout-columns-1-1"
        | "uugdsstencil-layout-columns-1-2-1"
        | "uugdsstencil-layout-columns-1-2"
        | "uugdsstencil-layout-columns-1-3"
        | "uugdsstencil-layout-columns-2-1"
        | "uugdsstencil-layout-columns-3-1"
        | "uugdsstencil-layout-contain"
        | "uugdsstencil-layout-fixed"
        | "uugdsstencil-layout-layers"
        | "uugdsstencil-layout-layout-area"
        | "uugdsstencil-layout-layout-item"
        | "uugdsstencil-layout-layout"
        | "uugdsstencil-layout-manage-columns"
        | "uugdsstencil-layout-side-all"
        | "uugdsstencil-layout-side-bottom"
        | "uugdsstencil-layout-side-left-right"
        | "uugdsstencil-layout-side-left"
        | "uugdsstencil-layout-side-right"
        | "uugdsstencil-layout-side-top-bottom"
        | "uugdsstencil-layout-side-top"
        | "uugdsstencil-layout-sidebar-left"
        | "uugdsstencil-layout-sidebar-right"
        | "uugdsstencil-layout-view-extended"
        | "uugdsstencil-layout-view-grid"
        | "uugdsstencil-layout-view-list"
        | "uugdsstencil-media-application"
        | "uugdsstencil-media-camera"
        | "uugdsstencil-media-cards"
        | "uugdsstencil-media-clipboard-plus"
        | "uugdsstencil-media-clipboard"
        | "uugdsstencil-media-cloud-download-solid"
        | "uugdsstencil-media-cloud-upload"
        | "uugdsstencil-media-document-multi"
        | "uugdsstencil-media-document-search"
        | "uugdsstencil-media-document"
        | "uugdsstencil-media-file-check"
        | "uugdsstencil-media-file-download"
        | "uugdsstencil-media-file-link"
        | "uugdsstencil-media-file-move-outline"
        | "uugdsstencil-media-file"
        | "uugdsstencil-media-folder-error"
        | "uugdsstencil-media-folder-in"
        | "uugdsstencil-media-folder-open"
        | "uugdsstencil-media-folder-out"
        | "uugdsstencil-media-folder-search"
        | "uugdsstencil-media-folder"
        | "uugdsstencil-media-grid-off"
        | "uugdsstencil-media-grid"
        | "uugdsstencil-media-image-editor"
        | "uugdsstencil-media-image-multi"
        | "uugdsstencil-media-image-off"
        | "uugdsstencil-media-image-preview"
        | "uugdsstencil-media-image"
        | "uugdsstencil-media-laptop"
        | "uugdsstencil-media-mic"
        | "uugdsstencil-media-monitor"
        | "uugdsstencil-media-music"
        | "uugdsstencil-media-pause-circle"
        | "uugdsstencil-media-pdf"
        | "uugdsstencil-media-pen-circle"
        | "uugdsstencil-media-pen-path"
        | "uugdsstencil-media-play-circle"
        | "uugdsstencil-media-play-solid"
        | "uugdsstencil-media-printer"
        | "uugdsstencil-media-qr-code"
        | "uugdsstencil-media-smartphone"
        | "uugdsstencil-media-sound"
        | "uugdsstencil-media-stop-circle"
        | "uugdsstencil-media-table"
        | "uugdsstencil-media-text-box-plus"
        | "uugdsstencil-media-text-box-solid"
        | "uugdsstencil-media-text-box"
        | "uugdsstencil-media-thumbnails-off"
        | "uugdsstencil-media-thumbnails"
        | "uugdsstencil-media-vector-frame-off"
        | "uugdsstencil-media-vector-frame"
        | "uugdsstencil-media-video"
        | "uugdsstencil-media-zoom-in"
        | "uugdsstencil-media-zoom-out"
        | "uugdsstencil-navigation-compass"
        | "uugdsstencil-navigation-flag"
        | "uugdsstencil-navigation-mapmarker-solid"
        | "uugdsstencil-navigation-mapmarker"
        | "uugdsstencil-navigation-navigation-gps"
        | "uugdsstencil-navigation-navigation-marker"
        | "uugdsstencil-navigation-portal"
        | "uugdsstencil-security-backup-password"
        | "uugdsstencil-security-key"
        | "uugdsstencil-security-lock-closed-solid"
        | "uugdsstencil-security-lock-closed"
        | "uugdsstencil-security-lock-open-solid"
        | "uugdsstencil-security-lock-open"
        | "uugdsstencil-security-password"
        | "uugdsstencil-security-shield-check"
        | "uugdsstencil-shape-circle-solid"
        | "uugdsstencil-shape-circle"
        | "uugdsstencil-shape-dot"
        | "uugdsstencil-shape-heart-solid"
        | "uugdsstencil-shape-heart"
        | "uugdsstencil-shape-octagon-solid"
        | "uugdsstencil-shape-octagon"
        | "uugdsstencil-shape-rectangle-horizontal-solid"
        | "uugdsstencil-shape-rectangle-horizontal"
        | "uugdsstencil-shape-rectangle-vertical-solid"
        | "uugdsstencil-shape-rectangle-vertical"
        | "uugdsstencil-shape-shield"
        | "uugdsstencil-shape-square-solid"
        | "uugdsstencil-shape-square"
        | "uugdsstencil-shape-triangle-solid"
        | "uugdsstencil-shape-triangle"
        | "uugdsstencil-time-arrow-history"
        | "uugdsstencil-time-calendar-solid"
        | "uugdsstencil-time-calendar-time"
        | "uugdsstencil-time-calendar"
        | "uugdsstencil-time-clock"
        | "uugdsstencil-time-pending"
        | "uugdsstencil-time-sand-clock"
        | "uugdsstencil-time-sprint"
        | "uugdsstencil-time-target"
        | "uugdsstencil-time-timer"
        | "uugdsstencil-time-world-time"
        | "uugdsstencil-transport-car"
        | "uugdsstencil-transport-package-open"
        | "uugdsstencil-transport-package"
        | "uugdsstencil-transport-rocket"
        | "uugdsstencil-transport-station"
        | "uugdsstencil-uiaction-archive"
        | "uugdsstencil-uiaction-bell-off"
        | "uugdsstencil-uiaction-bell"
        | "uugdsstencil-uiaction-bookmark-off"
        | "uugdsstencil-uiaction-bookmark"
        | "uugdsstencil-uiaction-check"
        | "uugdsstencil-uiaction-close"
        | "uugdsstencil-uiaction-copy"
        | "uugdsstencil-uiaction-delete"
        | "uugdsstencil-uiaction-dots-horizontal-circle"
        | "uugdsstencil-uiaction-dots-horizontal"
        | "uugdsstencil-uiaction-dots-vertical-circle"
        | "uugdsstencil-uiaction-dots-vertical"
        | "uugdsstencil-uiaction-download"
        | "uugdsstencil-uiaction-drag-horizontal"
        | "uugdsstencil-uiaction-drag-vertical"
        | "uugdsstencil-uiaction-duplicate"
        | "uugdsstencil-uiaction-edit-uubml"
        | "uugdsstencil-uiaction-eye-off"
        | "uugdsstencil-uiaction-eye"
        | "uugdsstencil-uiaction-favorites-edit"
        | "uugdsstencil-uiaction-favorites-plus"
        | "uugdsstencil-uiaction-favorites-solid"
        | "uugdsstencil-uiaction-favorites"
        | "uugdsstencil-uiaction-filter"
        | "uugdsstencil-uiaction-hand-point"
        | "uugdsstencil-uiaction-log-in"
        | "uugdsstencil-uiaction-log-out"
        | "uugdsstencil-uiaction-maximize"
        | "uugdsstencil-uiaction-menu-dropdown"
        | "uugdsstencil-uiaction-menu"
        | "uugdsstencil-uiaction-minus-circle-solid"
        | "uugdsstencil-uiaction-minus-circle"
        | "uugdsstencil-uiaction-minus"
        | "uugdsstencil-uiaction-modalbus"
        | "uugdsstencil-uiaction-open-in-modal"
        | "uugdsstencil-uiaction-open-in-new"
        | "uugdsstencil-uiaction-plus-circle-solid"
        | "uugdsstencil-uiaction-plus-circle"
        | "uugdsstencil-uiaction-plus"
        | "uugdsstencil-uiaction-scissors"
        | "uugdsstencil-uiaction-search"
        | "uugdsstencil-uiaction-settings-solid"
        | "uugdsstencil-uiaction-settings"
        | "uugdsstencil-uiaction-share"
        | "uugdsstencil-uiaction-sorting"
        | "uugdsstencil-uiaction-stop"
        | "uugdsstencil-uiaction-tune-horizontal"
        | "uugdsstencil-uiaction-upload"
        | "uugdsstencil-user-account-badge"
        | "uugdsstencil-user-account-key-solid"
        | "uugdsstencil-user-account-key"
        | "uugdsstencil-user-account-multi-solid"
        | "uugdsstencil-user-account-multi"
        | "uugdsstencil-user-account-plus"
        | "uugdsstencil-user-account-search"
        | "uugdsstencil-user-account-solid"
        | "uugdsstencil-user-account-swap"
        | "uugdsstencil-user-account"
        | "uugdsstencil-user-business-card"
        | "uugdsstencil-user-kid"
        | "uugdsstencil-weather-bolt"
        | "uugdsstencil-weather-moon"
        | "uugdsstencil-weather-rain"
        | "uugdsstencil-weather-snowflake"
        | "uugdsstencil-weather-storm"
        | "uugdsstencil-weather-sun"
        | "uugdsstencil-weather-sunrise"
        | "uugdsstencil-weather-sunset"
        | "uugdsstencil-weather-temperature"
        | "uugdsstencil-weather-waterdrop"
        | "uugdsstencil-weather-wind";
    }
  }
}
