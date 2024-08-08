declare module "uu_plus4u5g02" {
  function useBinary(): any;
  function useRouteList(): any;
  const useSubApp: any;
  const useSubAppData: any;
  function withBaseUri(Component: any): any;
  function withReusedParentProvider(Provider: any, useParentContextData: any): any;
  const useActivity: any;
  const useAppWorkspace: any;
  const useArtifact: any;
  const useAwscData: any;
  function useLinkName(href: any): any;
  const useLocalNavigation: any;
  const useObcData: any;
  const usePerson: any;
  const _usePersonPreferences: any;
  function useRouteData(): any;
  function useRouteItemList(): any;
  const useSystemData: any;
  interface ActivityProvider$Props {
    onUnreadActivityCountLoad?(...args: any): any;
  }
  function ActivityProvider(props: ActivityProvider$Props): any;
  interface AppWorkspaceProvider$Props {
    subApp: string;
    baseUri?: string;
    handlerMap?: any;
  }
  function AppWorkspaceProvider(props: AppWorkspaceProvider$Props): any;
  interface ArtifactProvider$data {}
  interface ArtifactProvider$Props {
    data?: ArtifactProvider$data;
  }
  function ArtifactProvider(props: ArtifactProvider$Props): any;
  interface BinaryProvider$Props {
    getBinaryDataUri?(...args: any): any;
    getBinaryVersionDataUri?(...args: any): any;
    onBinaryCopy?(...args: any): any;
    onBinaryCreate?(...args: any): any;
    onBinaryDelete?(...args: any): any;
    onBinaryGet?(...args: any): any;
    onBinaryGetData?(...args: any): any;
    onBinaryList?(...args: any): any;
    onBinaryLock?(...args: any): any;
    onBinaryUnlock?(...args: any): any;
    onBinaryUnlockByAuthorities?(...args: any): any;
    onBinaryUpdate?(...args: any): any;
    onBinaryUpdateData?(...args: any): any;
    onBinaryVersionGetData?(...args: any): any;
    onBinaryVersionUpdate?(...args: any): any;
    onBinaryVersionDelete?(...args: any): any;
    onBinaryVersionList?(...args: any): any;
    allowCustomTags?: boolean;
    availableTagList?: string[];
    ignoreTagList?: string[];
  }
  function BinaryProvider(props: BinaryProvider$Props): any;
  interface LocalNavigationProvider$Props {
    display?: "popover" | "sidebar";
    type?: "elevated" | "collapsed" | "expanded";
    open?: boolean;
  }
  function LocalNavigationProvider(props: LocalNavigationProvider$Props): any;
  interface ObcDataProvider$Props {
    handlerMap?: {};
    refreshKey?: any;
  }
  function ObcDataProvider(props: ObcDataProvider$Props): any;
  interface PersonProvider$Props {
    onIdentityLoad?(...args: any): any;
  }
  function PersonProvider(props: PersonProvider$Props): any;
  function RouteDataProvider(props: any): any;
  interface RouteListProvider$Props {
    routeList?: any[];
    onRouteListChange?(...args: any): any;
  }
  function RouteListProvider(props: RouteListProvider$Props): any;

  const SpaProvider: UU5.TComponent<
    UU5.TDefaultProps<{
      initialLanguageList?: any;
      onIdentityLoad?: any;
      onUnreadActivityCountLoad?: any;
      skipAppWorkspaceProvider?: boolean;
      baseUri?: string;
      onPersonPreferencesLoad?(...args: any): any;
      onPersonPreferencesSave?(...args: any): any;
    }>
  >;

  interface SubAppProvider$Props {
    baseUri?: string;
  }
  function SubAppProvider(props: SubAppProvider$Props): any;
  interface _Tools$joinUri$2 {}
  const _Tools: {
    getCookieBaseUri(): any;
    getTechnicalBaseUri(): any;
    getAppInfo(baseUri: any): any;
    parseLsiOrPlainText(uu5string: any): any;
    joinUri(baseUri: any, path: any, queryParams?: _Tools$joinUri$2): any;
    deepSortObjectKeys(object: any): any;
    identifyError(error: any): any;
  };
  const _ERRORS: {
    NOT_AUTHENTICATED: "unauthenticated";
    NOT_AUTHORIZED: "unauthorized";
    NOT_FOUND: "notFound";
  };
  const _useSpaPending: any;
  const _useRouteDataContext: any;
  namespace Utils {
    const AppClient: any;
    const Artifact: {
      buildUri(baseUri: any, params: any): any;
      setVisualIdentification(artifactOrUri: any, visualIdentification: any): any;
    };
    const Uri: {
      join(baseUri: any, path: any, params: any): any;
      normalizeBaseUri(baseUri: any): any;
      open(uri: any, targetOrEvent: any): any;
    };
  }
  const Environment: {
    identityManagementBaseUri: any;
    peopleBaseUri: any;
    organizationBaseUri: any;
    commonServicesBaseUri: any;
    helpdeskUri: any;
  };
}
