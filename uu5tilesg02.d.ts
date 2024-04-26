declare module "uu5tilesg02" {
  const ControllerProvider: UU5.TComponent<UU5.TDefaultProps<UU5Tiles.TControllerProvider$Props>>;

  const PresetProvider: UU5.TComponent<UU5.TDefaultProps<UU5Tiles.TPresetProvider$Props>> & {
    getMatchingPresetList: (
      presetList: UU5Tiles.TPresetDefinition[],
      parts: {
        filterList?: UU5Tiles.TFilterItem[];
        sorterList?: UU5Tiles.TSorterItem[];
        serieList?: UU5Tiles.TSerieDefinition[];
        view?: any;
      }
    ) => (UU5Tiles.TPresetDefinition | undefined)[];
  };

  function usePreset(): UU5Tiles.TUsePreset;
  function useController(): UU5Tiles.TUseController;
  function _usePresetControls(): {
    setManagerOpen: (open: boolean | ((opened: boolean) => boolean)) => void;
  };

  global {
    namespace UU5Tiles {
      interface TColumnDefinition {
        /** unique column identifier */
        value: string;
        sortable?: boolean;
        sorterKey?: string;
        filterKey?: string;
        minWidth?: string | number;
        maxWidth?: string | number;
        header?:
          | React.ReactNode
          | ((cellProps: any, indexes: { rowIndex: number; cellIndex: number }) => React.ReactNode);
        headerComponent?:
          | React.ReactNode
          | ((cellProps: any, indexes: { rowIndex: number; cellIndex: number }) => React.ReactNode);
        cell?:
          | React.ReactNode
          | ((cellProps: any, indexes: { rowIndex: number; cellIndex: number }) => React.ReactNode);
        cellComponent?: (
          cellProps: any,
          indexes: { rowIndex: number; colIndex: number }
        ) => React.ReactNode;
        sticky?: "left" | "right";
        type?: "select" | "drag" | "actionList";
      }

      interface TControllerProvider$Props {
        data: any[];
        filterList?: TFilterItem[];
        sorterList?: TSorterItem[];
        serieList?: TSerieDefinition[];
        selectable?: "none" | "single" | "multiple";
        sorterDefinitionList?: TSorterDefinition[];
        onSorterChange?(event: TDataEvent<ChangeSorterAndFilterData>): any;
        filterDefinitionList?: TFilterDefinition[];
        onFilterChange?(event: TDataEvent<ChangeSorterAndFilterData>): any;
        onSerieChange?(event: TDataEvent<{ serieList: TSerieDefinition[] }>): any;
      }

      interface TPresetProvider$Props {
        presetList: TPresetDefinition[];
        value: string | undefined;
        onChange?(event: TDataEvent<{ value: string }>): void;
        onPresetListChange?(event: TDataEvent<{ presetList: UU5Tiles.TPresetDefinition[] }>): void;
      }

      interface TSorterDefinition {
        key: string;
        label?: UU5.TLsi;
        sort?: (item1: any, item2: any) => number;
      }

      interface TSerieDefinition {
        /**
         * Unique column identifier
         */
        value: string;
        label: UU5.TLsi | string;
        visible?: boolean | "always";
        fixed?: "start" | "end";
      }

      interface TFilterDefinition {
        /** unique column identifier */
        key: string;
        label: React.ReactNode;
        inputType?: string;
        required?: boolean;
        inputProps?: Record<string, any>;
      }

      interface TDataEvent<T> {
        data: T;
      }

      interface ChangeSorterAndFilterData {
        filterList: TFilterItem[];
        sorterList: TSorterItem[];
      }

      interface TPresetDefinition {
        value: string;
        label: string;
        editable: boolean;
        visible: boolean;
        filterList: TFilterItem[];
        sorterList: TSorterItem[];
        serieList: TSerieDefinition[];
      }

      interface TFilterItem {
        key: string;
        value: any;
      }

      interface TSorterItem {
        key: string;
        ascending: boolean;
      }

      interface TUsePreset {
        presetList: TPresetDefinition[];
        setValue: (presetKey: string) => void;
      }

      interface TUseController {
        itemIdentifier: any;
        data: any;
        displayedData: any;
        filterDefinitionList: any;
        filterList: TFilterItem[];
        addFilter: any;
        removeFilter: any;
        clearFilterList: any;
        setFilterList: any;
        sorterDefinitionList: any;
        sorterList: TSorterItem[];
        addSorter: any;
        removeSorter: any;
        clearSorterList: any;
        setSorterList: any;
        serieList: TSerieDefinition[];
        setSerieList: any;
        selectable: any;
        selectedData: any;
        isSelected: any;
        addSelected: any;
        removeSelected: any;
        clearSelected: any;
        setSelected: any;
        isDisplayedSelected: any;
        toggleIsDisplayedSelected: any;
      }
    }
  }
}
