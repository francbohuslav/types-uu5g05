declare module "uu5tilesg02-controls" {
  const FilterBar: UU5.TComponent<
    UU5.TDefaultProps<{
      initialExpanded?: boolean;
      readOnly?: boolean;
      filterKeyList?: string[];
      displayClearButton?: boolean;
      displayManagerButton?: boolean;
      displayCloseButton?: boolean;
      padding?: any;
      fixedOrder?: boolean;
      filterKeyListDisplayMode?: "default" | "definedOnly";
      type?: "default" | "readOnly" | "input";
      actionList?: UU5Elements.TActionGroupItem[];
      applyEvent?: "onChange" | "onSubmit";
    }>
  >;

  const FilterManagerModal: UU5.TComponent<
    UU5.TDefaultProps<{
      children?: any;
      width?: any;
    }>
  >;

  const FormFilterManager: UU5.TComponent<
    UU5.TDefaultProps<{
      value?: any[];
      onChange?(...args: any): any;
      columnCount?: any;
      filterKeyList?: string[];
      gridLayout?: any;
    }>
  >;

  const PresetSaveModal: UU5.TComponent<UU5.TDefaultProps<{}>>;

  const PresetButton: UU5.TComponent<
    UU5.TDefaultProps<{
      type?: "dropdown" | "manager" | "save" | "bar";
    }>
  >;

  const FilterButton: UU5.TComponent<
    UU5.TDefaultProps<{
      type?: "bar" | "manager" | "tableHeader";
    }>
  >;

  const SerieButton: UU5.TComponent<UU5.TDefaultProps<{}>>;

  const PresetManagerModal: UU5.TComponent<
    UU5.TDefaultProps<{
      children?: any;
      width?: any;
    }>
  >;

  const SerieManagerModal: UU5.TComponent<
    UU5.TDefaultProps<{
      searchable?: boolean;
      children?: any;
      width?: any;
    }>
  >;

  const Counter: UU5.TComponent<
    UU5.TDefaultProps<{
      pageIndex?: number;
      itemList?: any[];
      displayShowing?: boolean;
      displayTotal?: boolean;
      displayResults?: boolean;
    }>
  >;
}

declare namespace Uu5TilesControlsOld {
  interface BulkActionBar$Props {
    padding?: any;
  }
  function BulkActionBar(props: BulkActionBar$Props): any;

  interface FormInitialPresetManager$Props {
    value?: string;
    onChange?(...args: any): any;
  }
  function FormInitialPresetManager(props: FormInitialPresetManager$Props): any;
  namespace FormInitialPresetManager {
    const Input: any;
    const name: "initialPresetValue";
  }
  interface FormPresetManager$Props {
    value?: any[];
    onChange?(...args: any): any;
  }
  function FormPresetManager(props: FormPresetManager$Props): any;
  namespace FormPresetManager {
    const Input: any;
    const name: "presetList";
  }
  interface FormSerieManager$Props {
    value?: any[];
    onChange?(...args: any): any;
    searchable?: boolean;
  }
  function FormSerieManager(props: FormSerieManager$Props): any;
  namespace FormSerieManager {
    const Input: any;
    const name: "serieList";
  }
  interface FormSorterManager$Props {
    value?: any[];
    onChange?(...args: any): any;
    sorterKeyList?: string[];
  }
  function FormSorterManager(props: FormSorterManager$Props): any;
  namespace FormSorterManager {
    const Input: any;
    const name: "sorterList";
  }
  interface PresetBar$Props {
    initialExpanded?: boolean;
    displayAddButton?: boolean;
    displayManagerButton?: boolean;
    displayCloseButton?: boolean;
    padding?: any;
  }
  function PresetBar(props: PresetBar$Props): any;

  function SearchButton(props: any): any;
  interface SorterBar$Props {
    initialExpanded?: boolean;
    sorterKeyList?: string[];
    displayClearButton?: boolean;
    displayManagerButton?: boolean;
    displayCloseButton?: boolean;
    padding?: any;
  }
  function SorterBar(props: SorterBar$Props): any;
  interface SorterButton$Props {
    type?: "bar" | "dropdown" | "manager";
  }
  function SorterButton(props: SorterButton$Props): any;
  interface SorterManagerModal$Props {
    children?: any;
    width?: any;
  }
  function SorterManagerModal(props: SorterManagerModal$Props): any;
  function ViewButton(props: any): any;
  interface _Manager$Props {
    itemList?: any[];
    onDrop?(...args: any): any;
    itemIdentifier?: string;
    rowHeight?: number;
  }
  function _Manager(props: _Manager$Props): any;
}
