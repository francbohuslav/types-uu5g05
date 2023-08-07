declare module "uu5g05-elements" {
  const Modal: Uu5.TComponent<
    Uu5.TDefaultProps<{
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
      width?: number;
    }>
  >;

  const Button: Uu5.TComponent<
    Uu5.TDefaultProps<{
      onClick?(...args: any): any;
      iconNotification?: boolean;
      iconRight?: any;
      type?: "button" | "submit" | "reset";
      colorScheme?: any;
      significance?: "common" | "highlighted" | "distinct" | "subdued";
      effect?: "ground" | "upper";
      size?: any;
      borderRadius?: any;
      width?: any;
      pressed?: boolean;
      icon?: GdsIcon;
      disabled?: boolean;
      tooltip?: string | Uu5.TLsi;
    }>
  >;
  const Progress: Uu5.TComponent<
    Uu5.TDefaultProps<{
      type?: "circular" | "horizontal";
      cssColor?: any;
      text?: any;
      suffix?: any;
      size?: Uu5.TSize;
      width?: number | string;
      value: number;
    }>
  >;
  const GridTemplate: Uu5.TComponent<
    Uu5.TDefaultProps<{
      templateAreas: any;
      contentMap: {};
      contentStyleMap?: {};
      rowGap?: number;
      columnGap?: number;
    }>
  >;
  const CollapsibleBox: Uu5.TComponent<Uu5.TDefaultProps<{ collapsed?: boolean }>>;
  const Panel: Uu5.TComponent<
    Uu5.TDefaultProps<{
      header: any;
      open?: boolean;
      onChange?(...args: any): any;
      colorScheme?: any;
      significance?: "common" | "highlighted" | "distinct" | "subdued";
      borderRadius?: any;
      effect?: "ground" | "upper";
    }>
  >;
  const Pending: Uu5.TComponent<
    Uu5.TDefaultProps<{ type?: "circular" | "horizontal" | "dots"; cssColor?: any }>
  >;
  const Pagination: Uu5.TComponent<
    Uu5.TDefaultProps<{
      index?: number;
      onChange(...args: any): any;
      count: number;
      type?: "pages" | "compact";
      size?: "xxs" | "xs" | "s" | "m" | "l" | "xl";
    }>
  >;
  const Icon: Uu5.TComponent<
    Uu5.TDefaultProps<{
      tooltip?: string;
      margin?: any;
      onClick?(...args: any): any;
      colorScheme?: any;
      significance?: "common" | "subdued";
      icon: GdsIcon;
    }>
  >;
  const Line: Uu5.TComponent<
    Uu5.TDefaultProps<{
      colorScheme?: any;
      significance?: "common" | "highlighted" | "distinct" | "subdued";
      margin?: any;
      direction?: "horizontal" | "vertical";
    }>
  >;
  const Tag: Uu5.TComponent<
    Uu5.TDefaultProps<{
      icon?: any;
      size?: any;
      ellipsis?: boolean;
      borderRadius?: any;
      colorScheme?: any;
      significance?: "common" | "highlighted" | "distinct" | "subdued";
      onClick?(...args: any): any;
      iconRight?: any;
      onIconRightClick?(...args: any): any;
      focused?: boolean;
    }>
  >;
  const Link: Uu5.TComponent<
    Uu5.TDefaultProps<{
      onClick?(...args: any): any;
      href?: string;
      target?: string;
      download?: boolean | string;
      colorScheme?: any | any;
      significance?: any;
      size?: "xxs" | "xs" | "s" | "m" | "l" | "xl";
      disabled?: boolean;
      tooltip?: string | Uu5.TLsi;
    }>
  >;
  const Dropdown: Uu5.TComponent<
    Uu5.TDefaultProps<{
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
  const DateTime: Uu5.TComponent<
    Uu5.TDefaultProps<{
      value?: string | any;
      dateFormat?: "none" | "short" | "medium" | "long";
      timeFormat?: "none" | "short" | "medium" | "long";
      hourFormat?: 11 | 12 | 24;
      format?: string;
      timeZone?: string;
    }>
  >;
  const Dialog: Uu5.TComponent<Uu5.TDefaultProps<any>>;
  const Svg: Uu5.TComponent<
    Uu5.TDefaultProps<{
      code?: any;
      uri?: any;
      type?: "svg" | "img";
      colorScheme?: any;
      height?: any;
    }>
  >;
  const HighlightedBox: Uu5.TComponent<
    Uu5.TDefaultProps<{
      colorScheme?: any;
      significance?: "common" | "highlighted" | "distinct" | "subdued";
      borderRadius?: any;
      icon?: any;
      onClose?(...args: any): any;
      controlList?: any[];
      controlPosition?: "right" | "bottom";
      overlay?: boolean;
    }>
  >;
  const Text: Uu5.TComponent<Uu5.TDefaultProps<Text$Props & { colorScheme?: string }>>;
  const Header: Uu5.TComponent<
    Uu5.TDefaultProps<{
      icon?: any | string;
      onIconClick?(...args: any): any;
      title?: React.ReactNode;
      size?: Uu5.TSize;
    }>
  >;
  const Box: Uu5.TComponent<
    Uu5.TDefaultProps<{
      shape?: "ground" | "interactiveElement" | "interactiveItem" | "background";
      colorScheme?: any;
      significance?: "common" | "highlighted" | "distinct" | "subdued";
      aspectRatio?: any;
      size?: "xs" | "s" | "m" | "l";
      borderRadius?: any;
      width?: any;
      height?: any;
      onClick?(...args: any): any;
    }>
  >;
  const Flag: Uu5.TComponent<
    Uu5.TDefaultProps<{
      src?: any;
      code?: any;
      type?: "rectangle" | "square" | "circle";
      bordered?: boolean;
      height?: any;
      borderRadius?: any;
    }>
  >;
  const PlaceholderBox: Uu5.TComponent<
    Uu5.TDefaultProps<{
      significance?: "common" | "subdued";
      code?: any;
      header?: any | any;
      info?: any | any;
      actionList?: any[];
      actionDirection?: "vertical" | "horizontal";
    }>
  >;

  const Grid: Uu5.TComponent<
    Uu5.TDefaultProps<{
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
    Item: Uu5.TComponent<
      Uu5.TDefaultProps<{
        gridArea?: string;
        colSpan?: any;
        rowSpan?: any;
        justifySelf?: any;
        alignSelf?: any;
        columnGap?: number;
      }>
    >;
  };

  function useAlertBus(): { addAlert: (message: any, durationMs?: number, priority?: any) => void };

  function withTooltip<P extends Uu5.TProps>(
    component: Uu5.TComponent<P>
  ): Uu5.TComponent<P & { tooltip: Uu5.TLsi }>;

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

  // See https://cdn.plus4u.net/uu-gds-svgg01/1.0.0/assets/stencil-map.json
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
    | "uugdsstencil-arrow-left-circle"
    | "uugdsstencil-arrow-left"
    | "uugdsstencil-arrow-menu-down"
    | "uugdsstencil-arrow-menu-left"
    | "uugdsstencil-arrow-menu-right"
    | "uugdsstencil-arrow-menu-up"
    | "uugdsstencil-arrow-redo"
    | "uugdsstencil-arrow-refresh"
    | "uugdsstencil-arrow-reload"
    | "uugdsstencil-arrow-right-circle"
    | "uugdsstencil-arrow-right-left"
    | "uugdsstencil-arrow-right"
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
    | "uugdsstencil-chart-line-chart-down"
    | "uugdsstencil-chart-line-chart-trend-down"
    | "uugdsstencil-chart-line-chart-trend-up"
    | "uugdsstencil-chart-line-chart-up"
    | "uugdsstencil-chart-pie-chart-variant"
    | "uugdsstencil-chart-pie-chart"
    | "uugdsstencil-chart-pulse"
    | "uugdsstencil-chart-status"
    | "uugdsstencil-chart-trend-down"
    | "uugdsstencil-chart-trend-up"
    | "uugdsstencil-commerce-bank-notes"
    | "uugdsstencil-commerce-bank"
    | "uugdsstencil-commerce-basket-solid"
    | "uugdsstencil-commerce-basket"
    | "uugdsstencil-commerce-calculator"
    | "uugdsstencil-commerce-cart-plus"
    | "uugdsstencil-commerce-cart"
    | "uugdsstencil-commerce-coins"
    | "uugdsstencil-commerce-credit-card"
    | "uugdsstencil-commerce-tag"
    | "uugdsstencil-commerce-ticket"
    | "uugdsstencil-communication-activity"
    | "uugdsstencil-communication-at-sign"
    | "uugdsstencil-communication-chat"
    | "uugdsstencil-communication-comment-text-solid"
    | "uugdsstencil-communication-comment-text"
    | "uugdsstencil-communication-discussion"
    | "uugdsstencil-communication-email"
    | "uugdsstencil-communication-inbox"
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
    | "uugdsstencil-edit-section-plus"
    | "uugdsstencil-edit-strikethrough"
    | "uugdsstencil-edit-subscript"
    | "uugdsstencil-edit-superscript"
    | "uugdsstencil-edit-text-plus"
    | "uugdsstencil-edit-text"
    | "uugdsstencil-edit-underline"
    | "uugdsstencil-edit-uu5"
    | "uugdsstencil-edit-vertical-align-center"
    | "uugdsstencil-education-assignment"
    | "uugdsstencil-education-book-index"
    | "uugdsstencil-education-book"
    | "uugdsstencil-education-exam"
    | "uugdsstencil-education-game"
    | "uugdsstencil-education-presentation"
    | "uugdsstencil-education-student-hat"
    | "uugdsstencil-education-trophy"
    | "uugdsstencil-home-exit"
    | "uugdsstencil-home-home"
    | "uugdsstencil-home-lightbulb-glow"
    | "uugdsstencil-home-lightbulb"
    | "uugdsstencil-it-branchkit-branch"
    | "uugdsstencil-it-branchkit-clone"
    | "uugdsstencil-it-branchkit-commit"
    | "uugdsstencil-it-branchkit-merge"
    | "uugdsstencil-it-bug"
    | "uugdsstencil-it-component"
    | "uugdsstencil-it-console"
    | "uugdsstencil-it-database"
    | "uugdsstencil-it-figma-component"
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
    | "uugdsstencil-layout-manage-columns"
    | "uugdsstencil-layout-sidebar-left"
    | "uugdsstencil-layout-sidebar-right"
    | "uugdsstencil-layout-view-extended"
    | "uugdsstencil-layout-view-grid"
    | "uugdsstencil-layout-view-list"
    | "uugdsstencil-media-camera"
    | "uugdsstencil-media-cards"
    | "uugdsstencil-media-clipboard-plus"
    | "uugdsstencil-media-clipboard"
    | "uugdsstencil-media-cloud-download-solid"
    | "uugdsstencil-media-cloud-upload"
    | "uugdsstencil-media-document-multi"
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
    | "uugdsstencil-media-image-multi"
    | "uugdsstencil-media-image-off"
    | "uugdsstencil-media-image"
    | "uugdsstencil-media-monitor"
    | "uugdsstencil-media-pause-circle"
    | "uugdsstencil-media-pdf"
    | "uugdsstencil-media-play-circle"
    | "uugdsstencil-media-smartphone"
    | "uugdsstencil-media-stop-circle"
    | "uugdsstencil-media-table"
    | "uugdsstencil-media-text-box-plus"
    | "uugdsstencil-media-text-box-solid"
    | "uugdsstencil-media-text-box"
    | "uugdsstencil-media-thumbnails-off"
    | "uugdsstencil-media-thumbnails"
    | "uugdsstencil-media-vector-frame-off"
    | "uugdsstencil-media-vector-frame"
    | "uugdsstencil-media-zoom-in"
    | "uugdsstencil-media-zoom-out"
    | "uugdsstencil-navigation-compass"
    | "uugdsstencil-navigation-flag"
    | "uugdsstencil-navigation-mapmarker-solid"
    | "uugdsstencil-navigation-mapmarker"
    | "uugdsstencil-navigation-navigation-gps"
    | "uugdsstencil-navigation-navigation-marker"
    | "uugdsstencil-navigation-portal"
    | "uugdsstencil-security-key"
    | "uugdsstencil-security-lock-closed-solid"
    | "uugdsstencil-security-lock-closed"
    | "uugdsstencil-security-lock-open-solid"
    | "uugdsstencil-security-lock-open"
    | "uugdsstencil-security-shield-check"
    | "uugdsstencil-shape-circle-solid"
    | "uugdsstencil-shape-circle"
    | "uugdsstencil-shape-dot"
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
    | "uugdsstencil-transport-car"
    | "uugdsstencil-transport-package-open"
    | "uugdsstencil-transport-package"
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
    | "uugdsstencil-uiaction-tune-horizontal"
    | "uugdsstencil-uiaction-upload"
    | "uugdsstencil-user-account-badge"
    | "uugdsstencil-user-account-key-solid"
    | "uugdsstencil-user-account-key"
    | "uugdsstencil-user-account-multi-solid"
    | "uugdsstencil-user-account-multi"
    | "uugdsstencil-user-account-search"
    | "uugdsstencil-user-account-solid"
    | "uugdsstencil-user-account-swap"
    | "uugdsstencil-user-account"
    | "uugdsstencil-user-business-card"
    | "uugdsstencil-user-kid"
    | "uugdsstencil-weather-bolt"
    | "uugdsstencil-weather-moon"
    | "uugdsstencil-weather-sun"
    | "uugdsstencil-weather-temperature"
    | "uugdsstencil-weather-waterdrop"
    | "uugdsstencil-weather-wind";

  namespace UuGds {
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
        ((path: ["inline", "a"]) => 0.1) &
        ((path: ["inline", "b"]) => 0.15) &
        ((path: ["inline", "c"]) => 0.2) &
        ((path: ["inline", "d"]) => 0.3) &
        ((path: ["inline", "e"]) => 0.4);
    }
  }
}
