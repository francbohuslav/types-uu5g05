declare module "uu5g05" {
  function createComponent<Props extends UU5.TProps, Defaults extends {}>(
    definition: UU5.TComponentDefinition<Props, Defaults>
  ): UU5.TComponent<Props>;

  function createVisualComponent<Props extends UU5.TProps, Defaults extends {}>(
    definition: UU5.TComponentDefinition<Props, Defaults>
  ): UU5.TComponent<Props>;

  function createVisualComponentWithRef<Props extends UU5.TProps, Interface, Defaults extends {}>(
    definition: UU5.TComponentDefinitionWithRef<Props, Interface, Defaults>
  ): UU5.TComponent<Props & { ref?: React.Ref<Interface> }>;

  function useRef<T>(initial?: T): React.MutableRefObject<T>;
  function useState<T>(initial: T | (() => T)): [T, (newValue: T | ((prev: T) => T)) => void];
  function useMemo<T>(method: () => T, dep?: any[]): T;
  function useMemoObject<T>(obj: T, equals?: (a: T, b: T) => boolean): T;
  function useEffect(effect: React.EffectCallback, deps?: any[]): void;
  function useCallback<T extends Function>(callback: T, deps?: any[]): T;
  function useImperativeHandle<T>(ref: React.Ref<T>, init: () => T, deps?: any[]): void;
  function usePreviousValue<T>(currentValue: T, initialValue?: T): T;

  function useDataObject<T>(
    options: {
      handlerMap: Record<string, any>;
      skipInitialLoad?: boolean;
      initialDtoIn?: any;
    },
    dependencies?: any[]
  ): UU5.TUseDataObject$Return<T>;

  function useDataList<T>(options: {
    handlerMap: Record<string, any>;
    pageSize?: number;
    itemIdentifier?: string | string[];
    itemHandlerMap?: Record<string, any>;
    skipInitialLoad?: boolean;
  }): UU5.TUseDataList$Return<T>;

  function useLsi<T>(lsi: (lang: string) => Promise<T>, path: string[]): T;
  function useLsiValues<T>(lsiStruct: T): Record<keyof T, string>;
  function useLanguage(): [string];
  function useLanguageList(): [string[], (newValue: string[]) => void];
  function useContext<T>(context: React.Context<T>): T;
  function useContentSizeValue<T>(map: Partial<Record<UU5.TSize, T>>): T;
  function useElementSize<T>(): UU5.TElementSize<T>;
  function useSession(): UU5.TSession;
  function useTimeZone(): any;
  function useBackground(): string;
  function useUserPreferences(): [
    UU5.TUserPreferences,
    (newPreferences: UU5.TUserPreferences) => void
  ];

  function useRouteLeave(params?: { initialPrevented: boolean }): UU5.TUseRouteLeave;
  function useRoute(): [
    UU5.TRoute,
    (useCase: string, params?: Record<string, any>, options?: any) => void
  ];

  const PropTypes: UU5.TPropTypes;

  const Fragment: any;
  const Content: any;
  const RouteProvider: React.FC<React.PropsWithChildren<{}>>;
  const SessionProvider: React.FC<{
    authenticationService: any;
    children: React.ReactNode | ((props: { state: string }) => React.ReactNode);
  }>;
  const Suspense: React.FC<React.PropsWithChildren<{ fallback: React.ReactNode }>>;

  const LanguageProvider: React.FC<
    React.PropsWithChildren<{
      initialLanguage: string;
      onChange?: (options: { language: string }) => void;
    }>
  >;

  const ErrorBoundary: React.FC<
    React.PropsWithChildren<{
      fallback: (params: { error: Error }) => React.ReactNode;
    }>
  >;
  const BackgroundProvider: React.FC<
    React.PropsWithChildren<{
      background: "light" | "soft" | "full" | "dark";
    }>
  >;

  const TimeZoneProvider: React.FC<
    React.PropsWithChildren<{
      timeZone?: string;
      onChange?: (timeZone: string) => void;
    }>
  >;

  const UserPreferencesProvider: any;

  const Lsi: UU5.TComponent<
    UU5.TBaseProps<{
      lsi?: UU5.TLsi | string;
      params?: any[] | Record<string, any>;
      import?: {
        (lang: string): Promise<any>;
        libraryCode?: string;
      };
      path?: string[];
    }>
  >;

  const DynamicLibraryComponent: React.FC<
    UU5.TBaseProps<{
      uu5Tag: string;
      [key: string]: any;
    }>
  >;

  const Environment: {
    appVersion: string | undefined;
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
      function getAttrs(props: UU5.TProps, mainClass?: string): any;
      function splitProps(
        props: UU5.TProps,
        mainClass?: string
      ): {
        elementAttrs: Record<string, any>;
        elementProps: Record<string, any>;
        componentProps: Record<string, any>;
      };
    }

    namespace LoggerFactory {
      function get(name: string): UU5.TLogger;
    }

    namespace String {
      function generateId(): string;
      function format(string: string, ...params: any[]): string;
    }

    namespace Lsi {
      function getMessage(lsi: UU5.TLsi, language: string): string;
      function getMessage<TLsiStructure>(
        importAndPath: { import: UU5.TLsiImport<TLsiStructure>; path: string[] },
        language: string
      ): string;
      function setDefaultLsi(library: string, lsi: any): void;
    }

    namespace NestingLevel {
      function getNestingLevel(
        props: UU5.TProps,
        component: UU5.TComponent<any>
      ): UU5.TNestingLevel;
    }

    namespace Context {
      function create<T>(initial: T): [React.Context<T>, () => T];
    }

    namespace Dom {
      function render(node: React.ReactNode, element: HTMLElement | null): void;
    }

    namespace Element {
      function isValid(object: any): boolean;

      function clone(object: any, params?: any): any;
    }

    namespace Object {
      function mergeDeep(object1: any, object2: any): any;
      function deepEqual(object1: any, object2: any): boolean;
      function shallowEqual(object1: any, object2: any): boolean;
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
            | Record<string, Record<string, React.CSSProperties>>
        ) => string;
        join: (...classes: (string | object)[]) => string;
      };
      function joinClassName(...classNames: (string | undefined | null)[]): string;
    }

    namespace Component {
      function mergeStatics(
        componentHoc: Record<string, any>,
        componentWrapped: Record<string, any>
      ): void;

      function lazy(func: () => any): any;
    }

    namespace Style {
      function getMinMediaQueries(...attrs: any[]): any;
    }

    namespace LibraryRegistry {
      function registerLibrary(params: {
        name?: string;
        version?: string;
        namespace?: string;
      }): any;
      function listLibraries(): any;
      function getLibrary(...params: any[]): Promise<any>;
      function importLibrary(namespaceWithMaybeVersion: any): any;
      function registerComponent(Component: any): any;
      function getComponentByUu5Tag(uu5Tag: string): any;
    }

    namespace Language {
      function getItem(lsi: UU5.TLsi, language?: string): string;
      function getLanguage(): string;
      function setLanguage(language: string): void;
    }

    class Event {
      constructor(data: any, event?: any);
    }

    const Uu5Loader: any;

    namespace ScreenSize {
      function countSize(width?: number): UU5.TSize;
      function getSize(): UU5.TSize;
      function parseValue(propValue: string): any;
      function convertStringToObject(propValue: string): any;
      function convertObjectToString(propValue: any): string;
      function getSizeValue(sizeOf: any, size: any, sizeList?: UU5.TSize[]): string;
    }
  }

  global {
    namespace UU5 {
      type TProps = Record<string, any>;

      type TBaseProps<Props extends TProps, TChildren = React.ReactNode> = Props & {
        className?: string;
        style?: React.CSSProperties;
        children?: TChildren;
        testId?: string;
        nestingLevel?: TNestingLevel;
        elementRef?: React.MutableRefObject<any>;
        elementAttrs?: Record<string, any>;
      };

      /** Type for defaultProps of component */
      type TDefaultProps<Props extends TProps, Defaults extends {} = {}> = Partial<Props> &
        Defaults;

      type TComponent<Props extends TProps, TChildren = React.ReactNode> = React.FC<
        TBaseProps<Props, TChildren>
      > & {
        logger: TLogger;
        nestingLevel: TNestingLevel[];
        uu5Tag: string;
      };

      interface TComponentDefinitionBase<Props extends TProps, Defaults extends {}> {
        uu5Tag: string;
        nestingLevel?: TNestingLevel[];
        propTypes?: Record<keyof Props, TPropTypeFunction>;
        defaultProps?: TDefaultProps<Props, Defaults>;
      }
      interface TComponentDefinition<Props extends TProps, Defaults extends {}>
        extends TComponentDefinitionBase<Props, Defaults> {
        render: (props: UU5.TBaseProps<Props & Defaults>) => React.ReactNode;
      }

      interface TComponentDefinitionWithRef<Props extends TProps, Interface, Defaults extends {}>
        extends TComponentDefinitionBase<Props, Defaults> {
        render: (
          props: UU5.TBaseProps<Props & Defaults>,
          ref: React.Ref<Interface>
        ) => React.ReactNode;
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
        isRequiredIf: (
          type: TPropTypeFunction,
          condition: (props: any) => boolean
        ) => TPropTypeFunction;
        isDeprecated: (type: TPropTypeFunction, newPropertyName: string) => TPropTypeFunction;
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
      type TLsiMap = Record<string, UU5.TLsi>;
      type TReactNodeOrLsi = React.ReactNode | UU5.TLsi;
      type TSize = "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl";

      interface TLogger {
        log: (...attrs: any[]) => void;
        debug: (...attrs: any[]) => void;
        info: (...attrs: any[]) => void;
        warn: (...attrs: any[]) => void;
        error: (...attrs: any[]) => void;
        isDebugLoggable(): boolean;
        isInfoLoggable(): boolean;
        isWarnLoggable(): boolean;
        isErrorLoggable(): boolean;
        getLevel(): number;
        getName(): string;
      }

      interface TElementSize<T> {
        ref: React.RefCallback<T>;
        width: number;
        height: number;
      }

      interface TIdentity {
        name: string;
        uuIdentity: string;
        accountType: any;
        loginLevelOfAssurance: number;
      }

      type TUseDataObject$State =
        | "pendingNoData"
        | "pending"
        | "readyNoData"
        | "ready"
        | "errorNoData"
        | "error";

      interface TUseDataObject$Return<T> {
        state: TUseDataObject$State;
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

      interface TSession {
        identity: TIdentity;
        state: "authenticated" | "notAuthenticated" | "pending";
        login: () => void;
        logout: () => void;
        isExpiring: boolean;
        untrustedData: any;
        resetUntrustedData: any;
        session: any;
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

      interface TUserPreferences {
        /** "CZK" */
        currency: string;
        /** "," */
        currencyDecimalSeparator: string;
        /** " " */
        currencyGroupingSeparator: string;
        /** 24 */
        hourFormat: 12 | 24;
        /** ['cs-cz', 'en-us', 'en', 'cs'] */
        languageList: string[];
        /** "dddd D. MMMM Y" */
        longDateFormat: string;
        /** "D. M. Y" */
        mediumDateFormat: string;
        /** "," */
        numberDecimalSeparator: string;
        /** " " */
        numberGroupingSeparator: string;
        /** "DD.MM.Y" */
        shortDateFormat: string;
        /** "Europe/Prague" */
        timeZone: string;
        /** 1 */
        weekStartDay: number;
      }

      interface TUseRouteLeave {
        nextRoute: any;
        refuse: () => void;
        allow: () => void;
        prevent: () => void;
      }

      interface TRoute {
        component: any;
        params: any;
        prevRoute: string;
        uu5Route: string;
      }

      type TLsiImport<TLsiStructure> = ((lang: string) => Promise<TLsiStructure>) & {
        libraryCode: string | undefined;
      };
    }
  }
}
