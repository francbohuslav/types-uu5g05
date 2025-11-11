declare module "uu5chartsg01" {
  const XyChart: UU5.TComponent<UU5.TDefaultProps<UU5Charts.XyChart.Props>> & {
    Chart:UU5.TComponent<UU5.TDefaultProps<{}>>
  };

  const Legend: UU5.TComponent<
    UU5.TDefaultProps<{
      title?: React.ReactNode;
      layout?: "horizontal" | "vertical";
    }>
  >;

  function useLegend(): UU5Charts.Legend.UseLegendResult;

  global {
    namespace UU5Charts {
      namespace XyChart {
        type DataItem = Record<string, any>;
        type Data = DataItem[];

        type LineType =
          | "basis"
          | "linear"
          | "natural"
          | "monotoneX"
          | "monotoneY"
          | "monotone"
          | "step"
          | "stepBefore"
          | "stepAfter";

        type Serie = {
          id?: string;
          valueKey: string;
          valueAxisId?: string;
          title?: string;
          colorScheme?: string | ((...args: any[]) => string);
          color?: string | ((...args: any[]) => string);
          onClick?: (e: Event) => void;
          label?:
            | boolean
            | {
                position?:
                  | "center"
                  | "top"
                  | "left"
                  | "right"
                  | "bottom"
                  | "inside"
                  | "outside"
                  | "inside-top"
                  | "inside-left"
                  | "inside-right"
                  | "inside-bottom"
                  | "inside-top-left"
                  | "inside-bottom-left"
                  | "inside-top-right"
                  | "inside-bottom-right";
                children?:
                  | React.ReactNode
                  | ((props: {
                      value: any;
                      x: number;
                      y: number;
                      width: number;
                      height: number;
                      offset: number;
                    }) => React.ReactNode);
                fontSize?: string;
              };
          unit?: string;
          point?:
            | boolean
            | {
                shape?: "circle" | "cross" | "diamond" | "square" | "star" | "triangle" | "wye";
                sizeKey?: string;
              };
          line?:
            | boolean
            | {
                point?: boolean;
                type?: LineType;
                width?: number;
                strokeType?: "solid" | "dashed" | "dotted";
              };
          area?:
            | boolean
            | {
                point?: boolean;
                type?: LineType;
                stackId?: string;
              };
          bar?:
            | boolean
            | {
                layout?: "horizontal" | "vertical";
                width?: number;
                maxWidth?: number;
                stackId?: string;
                striped?: boolean;
                barSize?: number;
              };
          legend?: Array<{
            title?: string;
            colorScheme?: string;
            color?: string;
          }>;
        };

        interface LabelAxis {
          dataKey: string | number;
          title?: string;
          unit?: string;
          tickList?: any[];
          domain?: string[] | number[] | Array<(...args: any[]) => any>;
          formatValue?: (...args: any[]) => any;
          tick?: { fontSize?: string | number } | ((...args: any[]) => any);
          id?: string;
          hidden?: boolean;
          allowDuplicatedCategory?: boolean;
        }

        interface ValueAxis {
          title?: string; //
          titlePosition?: "middle-vertical" | "top";
          unit?: string;
          id?: string;
          tickList?: any[];
          width?: number;
          domain?: string[] | number[] | Array<(...args: any[]) => any>;
          formatValue?: (...args: any[]) => any;
          tick?: { fontSize?: string | number } | ((...args: any[]) => any);
        }

        interface TooltipProps {
          label: number;
          serieList?: Array<{
            title?: string;
            value: number;
            valueKey?: string;
            color: string;
            data?: any;
            unit?: string;
          }>;
        }

        interface DecorationBase {
          title?: string;
          titlePosition?: "start" | "middle" | "end";
          colorScheme?: string; // pokud je definován typ colorScheme, použij ten
          color?: string;
          isFront?: boolean;
        }

        interface Area extends DecorationBase {
          x1?: number | string;
          x2?: number | string;
          y1?: number | string;
          y2?: number | string;
        }

        interface Line extends Area {
          x?: number | string;
          y?: number | string;
          width?: number;
          type?: "solid" | "dashed" | "dotted";
          fontSize?: string;
        }

        interface Dot {
          x: number | string;
          y: number | string;
          radius?: number;
          fontSize?: string;
        }

        interface Legend {
          title?: React.ReactNode;
          position?: "top" | "bottom" | "left" | "right";
          value?: Record<string, boolean>;
          onChange?: (event: UU5.TDataEvent<Record<string, boolean>>) => void;
        }

        interface Props {
          data: UU5Charts.XyChart.Data;
          serieList: UU5Charts.XyChart.Serie[];
          labelAxis?: UU5Charts.XyChart.LabelAxis | UU5Charts.XyChart.LabelAxis[];
          valueAxis?: UU5Charts.XyChart.ValueAxis | UU5Charts.XyChart.ValueAxis[];
          height?: string | number;
          width?: string | number;
          displayCartesianGrid?: boolean | "solid" | "dashed";
          layout?: "horizontal" | "vertical";
          tooltip?:
            | boolean
            | React.ReactNode
            | ((props: UU5Charts.XyChart.TooltipProps) => React.ReactNode);
          numberGroupingSeparator?: string;
          numberDecimalSeparator?: string;
          lineList?: UU5Charts.XyChart.Line[];
          areaList?: UU5Charts.XyChart.Area[];
          dotList?: UU5Charts.XyChart.Dot[];
          legend?: boolean | UU5Charts.XyChart.Legend;
          stackOffset?: "sign" | "none";
          disableZoom?: boolean;
          barStackGap?: number;
          barGap?: number;
        }
      }

      namespace Legend {
        interface UseLegendResult {
          data: Item[];
          onClick(event: { payload: object }): void;
          onMouseEnter(event: { payload: object }): void;
          onMouseLeave(event: { payload: object }): void;
          height: number;
        }

        interface Item {
          payload: object;
          value: React.ReactNode;
          color: string;
          inactive: boolean;
          valueKey: string;
        }
      }
    }
  }
}
