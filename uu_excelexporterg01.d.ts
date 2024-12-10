declare module "uu_excelexporterg01" {
  namespace ExcelExporter {
    function createWorker(uri: string, initData: any): Worker;

    function onWorkerInit(
      callback: (initData: any) => Promise<UUExcelExporter.WorkerInitCallback>
    ): Promise<{ data: Blob }>;

    function exportExcel(
      options: UUExcelExporter.Excel.Options.ExportOptions
    ): Promise<{ data: Blob }>;
  }

  global {
    namespace UUExcelExporter {
      type WorkerInitCallback = (
        operation: "exportExcel",
        options: Excel.Options.ExportOptions
      ) => Promise<any>;

      interface CallResponse {
        itemList: any[];
        pageInfo: UU5.TPageInfo$Response;
      }

      type CallResponseMap = Record<
        string,
        (opt: {
          pageInfo: UU5.TPageInfo$Request;
          [x: string]: any;
        }) => Promise<CallResponse | undefined>
      >;

      interface ProgressData {
        processedSheets: number;
        processedRows: number;
        totalSheets: number;
        currentSheet: {
          processedRows: number;
          totalRows: number;
          index: number;
          name: string;
        };
        progress: number;
      }

      namespace Excel {
        namespace Options {
          interface ExportOptions {
            worker?: Worker;
            workerData?: any;
            calls?: UUExcelExporter.CallResponseMap;
            progressCallback?: (
              status: "info" | "completed",
              data: UUExcelExporter.ProgressData
            ) => void;
            workbook?: WorkBook;
            sheetList?: Sheet[];
          }

          interface WorkBook {
            preprocess: (workbook: Data.Workbook) => void;
          }

          interface Sheet {
            name: string;
            columnList: Column[];
            preprocess?: (sheet: Data.WorkSheet) => void;
            data?: (chunkIndex: number) => Promise<CallResponse | undefined>;
            rowRenderer?: (
              dataRow: any[],
              rowIndex: number,
              defaultRowRenderer: any,
              params: { sheet: Data.WorkSheet; sheetData: { columnList: Data.Column[] } }
            ) => void;
          }

          interface Column {
            value: string;
            valueRenderer?: ValueRenderer;
          }
        }

        namespace Data {
          interface Workbook {
            addWorksheet: (name: string) => WorkSheet;
          }

          interface WorkSheet {
            addRow: (values: string[]) => Row;
            mergeCells: (
              startRow: number,
              startCol: number,
              endRow: number,
              endCol: number
            ) => void;
            /** starts with 1 */
            getColumn: (columnId: string | number) => Column;
            /** starts with 1, 1 */
            getCell: (row: number, col: number) => Cell;
            lastRow: Row;
          }

          interface Column {
            width: number;
            valueRenderer: ValueRenderer;
          }

          interface Row {
            number: number;
            getCell: (col: number) => Cell;
            commit: () => void;
          }

          interface Cell {
            master: Cell;
            value: any;
            fill: any;
            alignment: any;
            border: any;
            font: any;
            numFmt: string | undefined;
            worksheet: WorkSheet;
          }
        }

        type ValueRenderer = (
          cell: Data.Cell,
          dataRow: any[],
          rowPosition: number,
          colPosition: number
        ) => void;
      }
    }
  }
}
