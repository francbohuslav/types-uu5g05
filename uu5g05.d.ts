declare module "uu5g05" {
  function createComponent<Props extends Uu5.TProps>(
    definition: Uu5.TComponentDefinition<Props>
  ): Uu5.TComponent<Props>;

  function createVisualComponent<Props extends Uu5.TProps>(
    definition: Uu5.TComponentDefinition<Props>
  ): Uu5.TComponent<Props>;

  function createVisualComponentWithRef<Props extends Uu5.TProps, Interface>(
    definition: Uu5.TComponentDefinitionWithRef<Props, Interface>
  ): Uu5.TComponent<Props & { ref?: React.Ref<Interface> }>;

  function useRef<T>(initial?: T): React.MutableRefObject<T>;

  function useState<T>(initial: T | (() => T)): [T, (newValue: T | ((prev: T) => T)) => void];

  function useMemo<T>(method: () => T, dep?: any[]): T;

  function useEffect(effect: React.EffectCallback, deps?: any[]): void;

  function useCallback<T extends Function>(callback: T, deps?: any[]): T;

  function useImperativeHandle<T>(ref: React.Ref<T>, init: () => T, deps?: any[]): void;

  function useDataObject<T>(
    options: {
      handlerMap: Record<string, any>;
      skipInitialLoad?: boolean;
      initialDtoIn?: any;
    },
    dependencies?: any[]
  ): Uu5.TUseDataObject$Return<T>;

  function useDataList<T>(options: {
    handlerMap: Record<string, any>;
    pageSize?: number;
    itemIdentifier?: string | string[];
    itemHandlerMap?: Record<string, any>;
    skipInitialLoad?: boolean;
  }): Uu5.TUseDataList$Return<T>;

  function useLsi<T>(lsi: (lang: string) => Promise<T>, path: string[]): T;
  function useLsiValues<T>(lsiStruct: T): Record<keyof T, string>;
  function useLanguage(): [string];
  function useContext<T>(context: React.Context<T>): T;
  function useContentSizeValue<T>(map: Partial<Record<Uu5.TSize, T>>): T;
  function useElementSize<T>(): Uu5.TElementSize<T>;
  function useSession(): Uu5.ISession;
  function useTimeZone(): any;

  const PropTypes: Uu5.TPropTypes;

  const Fragment: any;
  const Content: any;
  const ErrorBoundary: React.FC<
    React.PropsWithChildren<{
      fallback: (params: { error: Error }) => React.ReactNode;
    }>
  >;
  const BackgroundProvider: React.FC<
    React.PropsWithChildren<{
      background: "light" | "dark";
    }>
  >;
  const Lsi: Uu5.TComponent<
    Uu5.TDefaultProps<{
      lsi: Uu5.TLsi | string;
      params?: any[] | Record<string, any>;
    }>
  >;

  const Environment: {
    appBaseUri: any;
    trustedUriRegExp: any;
    uu5DataMap: any;
    plus4UGoBaseUri: any;
    componentUveUri: any;
    libraryRegistryBaseUri: any;
    isMobileApp: any;
    get<T>(key: string, defaultValue: T): T;
  };

  namespace Utils {
    namespace VisualComponent {
      function getAttrs(props: Uu5.TProps, mainClass?: string): any;
    }

    namespace LoggerFactory {
      function get(name: string): Uu5.TLogger;
    }

    namespace String {
      function generateId(): string;
      function format(string: string, ...params: any[]): string;
    }

    namespace Lsi {
      function getMessage(lsi: Uu5.TLsi, langauge: string): string;
      function setDefaultLsi(library: string, lsi: any): void;
    }

    namespace NestingLevel {
      function getNestingLevel(props: Uu5.TProps, component: React.ReactNode): Uu5.TNestingLevel;
    }

    namespace Context {
      function create<T>(initial: T): [React.Context<NonNullable<T>>, () => NonNullable<T>];
    }

    namespace Element {
      function isValid(object: any): boolean;

      function clone(object: any, params?: any): any;
    }

    namespace Object {
      function mergeDeep(object1: any, object2: any): any;
      function deepEqual(object1: any, object2: any): boolean;
    }

    namespace Css {
      function createCssModule(
        name: string,
        something: string
      ): {
        css: (
          css:
            | string
            | TemplateStringsArray
            | React.CSSProperties
            | Record<string, React.CSSProperties>
        ) => string;
      };
    }
  }

  global {
    namespace Uu5 {
      type TProps = Record<string, any>;

      type TDefaultProps<Props extends TProps> = Props & {
        className?: string;
        style?: React.CSSProperties;
        children?: React.ReactNode;
        testId?: string;
      };

      type TComponent<Props extends TProps> = React.FC<TDefaultProps<Props>> & {
        logger: TLogger;
        uu5Tag: string;
      };

      interface TComponentDefinitionBase<Props extends TProps> {
        uu5Tag: string;
        nestingLevel?: TNestingLevel[];
        propTypes?: Record<keyof Props, TPropTypeFunction>;
        defaultProps?: Partial<Props>;
      }
      interface TComponentDefinition<Props extends TProps> extends TComponentDefinitionBase<Props> {
        render: (props: Uu5.TDefaultProps<Props>) => React.ReactNode;
      }

      interface TComponentDefinitionWithRef<Props extends TProps, Interface>
        extends TComponentDefinitionBase<Props> {
        render: (props: Uu5.TDefaultProps<Props>, ref: React.Ref<Interface>) => React.ReactNode;
      }

      type TNestingLevel =
        | null
        | "uve"
        | "route"
        | "areaCollection"
        | "area"
        | "boxCollection"
        | "box"
        | "spotCollection"
        | "spot"
        | "inline";

      interface TPropTypes {
        func: TPropTypeFunction;
        bool: TPropTypeFunction;
        lsi: TPropTypeFunction;
        string: TPropTypeFunction;
        array: TPropTypeFunction;
        number: TPropTypeFunction;
        any: TPropTypeFunction;
        node: TPropTypeFunction;
        element: TPropTypeFunction;
        object: TPropTypeFunction;
        shape: (object: Record<string, TPropTypeFunction>) => TPropTypeFunction;
        oneOf: (args: any[]) => TPropTypeFunction;
        oneOfType: (args: TPropTypeFunction[]) => TPropTypeFunction;
        arrayOf: (type: TPropTypeFunction) => TPropTypeFunction;
        instanceOf: (object: any) => TPropTypeFunction;
      }

      interface TPropTypeFunction {
        isRequired: TPropTypeFunction;
      }

      interface TDataEvent<T> {
        data: T;
      }

      interface TFormDataEvent<T> {
        data: {
          value: T;
        };
      }

      /**
       * One item definition
       */
      type TLsi = Record<string, React.ReactNode>;

      /**
       * One item definition but with string values
       */
      type TLsi$String = Record<string, string>;
      /**
       * Evaluated lsi file to language
       */
      type TLsiValues = Record<string, string>;
      /**
       * Content of lsi file
       */
      type TLsiMap = Record<string, Uu5.TLsi>;
      type TReactNodeOrLsi = React.ReactNode | Uu5.TLsi;
      type TSize = "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl";

      interface TLogger {
        info: (...any: any[]) => void;
        debug: (...any: any[]) => void;
        error: (...any: any[]) => void;
        warn: (...any: any[]) => void;
      }

      interface TElementSize<T> {
        ref: React.RefCallback<T>;
        width: number;
        height: number;
      }

      interface ISsession {
        identity: IIdentity;
      }

      interface IIdentity {
        name: string;
        uuIdentity: string;
      }

      interface TUseDataObject$Return<T> {
        state: "pendingNoData" | "pending" | "readyNoData" | "ready" | "errorNoData" | "error";
        data: T;
        handlerMap: any;
        errorData: any;
      }

      interface TUseDataList$Return<T> {
        state:
          | "pendingNoData"
          | "pending"
          | "readyNoData"
          | "ready"
          | "errorNoData"
          | "error"
          | "itemPending";
        data: {
          data: T;
          handlerMap: any;
        }[];
        handlerMap: any;
        newData: T[];
        pendingData: any;
        errorData: any;
      }

      interface ISession {
        identity: any;
      }

      interface TUseDataList$LoadReturn<T> {
        itemList: T[];
        pageInfo: TPageInfo$Response;
      }

      interface TPageInfo$Request {
        pageIndex: number;
        pageSize: number;
      }
      interface TPageInfo$Response {
        pageIndex: number;
        pageSize: number;
        total: number;
      }
    }
  }
}
