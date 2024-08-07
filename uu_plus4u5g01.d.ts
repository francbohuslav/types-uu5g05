declare module "uu_plus4u5g01" {
  namespace App {
    const MenuProvider: UU5.TComponent<
      UU5.TDefaultProps<{
        activeItemId?: string;
      }>
    >;

    const MenuTree: UU5.TComponent<
      UU5.TDefaultProps<{
        items?: any[];
        borderBottom?: boolean;
        borderRadius?: boolean | string;
        elevation?: "0" | "1" | "2" | "3" | "4" | "5" | 0 | 1 | 2 | 3 | 4 | 5;
        _level?: number;
      }>
    >;
  }

  namespace Common {
    const Tools: {
      getLegacyUrl(uri: any): any;
      decodeBase64(str: any): any;
      base64DecodeUnicode(str: any): any;
      canSendToken(url: any): any;
      getCookieBaseUri(): any;
      getAppBaseUri(): any;
      getTechnicalBaseUri(): any;
      getAppInfo(): any;
      parseLegacyUrl(url: any): any;
    };
    const Url: any;
    const Calls: {
      call(method: any, url: any, dtoIn: any, clientOptions: any): any;
      getPersonalRoleUri(done: any, fail: any, uuIdentity: any): any;
      getPeopleCardUri(uuIdentity: any, done: any, fail: any): any;
      getPeopleCardAttributes(uuIdentity: any, done: any, fail: any): any;
      getPropertyValue(uri: any, done: any, fail: any): any;
    };
  }

  const Environment: {
    name: any;
    mode: any;
    version: any;
    licence: string;
    basePath: any;
    UAFProducts: any[];
    uuUrlLink: string;
    registrationUrl: {
      cs: string;
      en: string;
    };
    telemetry: false;
    isDevelopment(): any;
    isProduction(): any;
    getToken(): any;
    Lsi: {};
    App: {};
  };
}

declare namespace Plus4U5Old {
  namespace App {
    interface Left$Props {
      aboutItems?: any;
      aboutBarFixed?: boolean;
      helpHref?: string;
      homeHref?: string;
      logoProps?: any;
    }
    function Left(props: Left$Props): any;
    function About(props: any): any;
    interface AboutBar$Props {
      items?: any[];
      helpHref?: string;
    }
    function AboutBar(props: AboutBar$Props): any;
    interface Authorized$Props {
      roleGroupInterfaceUri?: string | string[];
      artifactUri?: string;
      useCase?: string;
      firstMatch?: boolean;
    }
    function Authorized(props: Authorized$Props): any;
    namespace Authorized {
      const Item: any;
    }
    interface ArtifactAuthorized$Props {
      artifactUri?: string;
      useCase?: string;
      firstMatch?: boolean;
    }
    function ArtifactAuthorized(props: ArtifactAuthorized$Props): any;
    namespace ArtifactAuthorized {
      const Item: any;
    }
    interface ArtifactAuthorization$Props {
      artifactUri?: string;
      useCase?: string;
      firstMatch?: boolean;
    }
    function ArtifactAuthorization(props: ArtifactAuthorization$Props): any;
    namespace ArtifactAuthorization {
      const Item: any;
    }
    interface Authors$Props {
      leadingAuthors?: any[];
      otherAuthors?: any[];
      header?: any;
      underline?: boolean;
      level?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | 0 | 1 | 2 | 3 | 4 | 5 | 6;
      getPhotoSrc?(...args: any): any;
      onChange?(...args: any): any;
    }
    function Authors(props: Authors$Props): any;
    function Bottom(props: any): any;
    interface Button$authenticationContext {}
    interface Button$Props {
      smallNav?: boolean;
      hideNotification?: boolean;
      authenticationContext?: Button$authenticationContext;
      prompt?: "login" | "registration";
      scope?: string | string[];
      usePopup?: boolean;
      acrValues?: string;
      maxAge?: number;
      language?: string;
    }
    function Button(props: Button$Props): any;
    interface CopyBaseUri$Props {
      icon?: string;
    }
    function CopyBaseUri(props: CopyBaseUri$Props): any;
    interface HistoryBackButton$Props {
      onClick?(...args: any): any;
    }
    function HistoryBackButton(props: HistoryBackButton$Props): any;
    namespace HistoryBackButton {
      const tagname: any;
      const isStateless: true;
    }
    function LanguageSelector(props: any): any;
    interface Licence$organisation {
      name?: string;
      uri?: string;
    }
    interface Licence$Props {
      organisation?: Licence$organisation;
      authorities?: any[];
      awid?: any;
      textAlign?: "left" | "center";
    }
    function Licence(props: Licence$Props): any;
    function Loading(props: any): any;
    interface LoginButton$authenticationContext {}
    interface LoginButton$Props {
      size?: string;
      displayBlock?: boolean;
      pressed?: boolean;
      onLogin?(...args: any): any;
      onLogout?(...args: any): any;
      href?: string;
      authenticationContext?: LoginButton$authenticationContext;
      prompt?: "login" | "registration";
      scope?: string | string[];
      usePopup?: boolean;
      acrValues?: string;
      maxAge?: number;
      language?: string;
    }
    function LoginButton(props: LoginButton$Props): any;
    interface Login$loginProps$authenticationContext {}
    interface Login$loginProps {
      scope?: string | string[];
      authenticationContext?: Login$loginProps$authenticationContext;
      usePopup?: boolean;
      acrValues?: string;
      maxAge?: number;
      language?: string;
    }
    interface Login$registrationProps$authenticationContext {}
    interface Login$registrationProps {
      scope?: string | string[];
      authenticationContext?: Login$registrationProps$authenticationContext;
      usePopup?: boolean;
      acrValues?: string;
      maxAge?: number;
      language?: string;
    }
    interface Login$Props {
      loginProps?: Login$loginProps;
      registrationProps?: Login$registrationProps;
    }
    function Login(props: Login$Props): any;
    interface Menu$Props {
      activeCode?: string;
      items?: any[];
      onClick?(...args: any): any;
      onCtrlClick?(...args: any): any;
      onWheelClick?(...args: any): any;
      colorSchemaActive?: string;
      bgStyle?: "filled" | "transparent";
      bgStyleActive?: "filled" | "transparent";
    }
    function Menu(props: Menu$Props): any;
    interface NavigationBar$Props {
      mainEntityUri: string;
      navigationBarUri?: string;
      target?:
        | "auto"
        | "_blank"
        | "blank"
        | "_top"
        | "top"
        | "_self"
        | "self"
        | "_parent"
        | "parent";
      plus4uBt?: boolean;
    }
    function NavigationBar(props: NavigationBar$Props): any;
    interface Navigator$Props {
      small?: boolean;
    }
    function Navigator(props: Navigator$Props): any;
    function NotificationBadge(props: any): any;
    interface Page$topWrapperProps {}
    interface Page$bottomWrapperProps {}
    interface Page$leftWrapperProps {}
    interface Page$rightWrapperProps {}
    interface Page$contentWrapperProps {}
    interface Page$appLayerWrapperProps {}
    interface Page$systemLayerWrapperProps {}
    interface Page$top {
      tag?: string | any;
      props?: any[];
    }
    interface Page$bottom {
      tag?: string | any;
      props?: any[];
    }
    interface Page$left {
      tag?: string | any;
      props?: any[];
    }
    interface Page$leftOpen {
      tag?: string | any;
      props?: any[];
    }
    interface Page$leftClosed {
      tag?: string | any;
      props?: any[];
    }
    interface Page$right {
      tag?: string | any;
      props?: any[];
    }
    interface Page$rightOpen {
      tag?: string | any;
      props?: any[];
    }
    interface Page$rightClosed {
      tag?: string | any;
      props?: any[];
    }
    interface Page$alertBus {
      tag?: string | any;
      props?: any[];
    }
    interface Page$modal {
      tag?: string | any;
      props?: any[];
    }
    interface Page$loginProps$authenticationContext {}
    interface Page$loginProps {
      authenticationContext?: Page$loginProps$authenticationContext;
      prompt?: "login" | "registration";
      scope?: string[];
      usePopup?: boolean;
    }
    interface Page$menuProps {
      settings?: any[];
      items?: any[];
      type?: "left" | "top" | "float";
      borderRadius?: string;
      elevation?: "0" | "1" | "2" | "3" | "4" | "5" | 0 | 1 | 2 | 3 | 4 | 5;
      header?: any;
      floatPosition?: string;
      floatWidth?: string | number;
      expanded?: boolean;
    }
    interface Page$Props {
      displayedLanguages?: string[] | string;
      type?:
        | "0"
        | "1"
        | "2"
        | "3"
        | "4"
        | "5"
        | "6"
        | "7"
        | "8"
        | "9"
        | "10"
        | "11"
        | "12"
        | "13"
        | "14"
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12
        | 13
        | 14;
      fullPage?: boolean;
      topWrapperProps?: Page$topWrapperProps;
      bottomWrapperProps?: Page$bottomWrapperProps;
      leftWrapperProps?: Page$leftWrapperProps;
      rightWrapperProps?: Page$rightWrapperProps;
      contentWrapperProps?: Page$contentWrapperProps;
      appLayerWrapperProps?: Page$appLayerWrapperProps;
      systemLayerWrapperProps?: Page$systemLayerWrapperProps;
      top?: Page$top | any | any | string | number;
      bottom?: Page$bottom | any | any | string | number;
      left?: Page$left | any | any | string | number;
      leftOpen?: Page$leftOpen | any | any | string | number;
      leftClosed?: Page$leftClosed | any | any | string | number;
      right?: Page$right | any | any | string | number;
      rightOpen?: Page$rightOpen | any | any | string | number;
      rightClosed?: Page$rightClosed | any | any | string | number;
      alertBus?: Page$alertBus | any | any;
      modal?: Page$modal | any | any;
      appLayerContent?: any;
      systemLayerContent?: any;
      leftWidth?: string;
      rightWidth?: string;
      loginProps?: Page$loginProps;
      menuProps?: Page$menuProps | ((...args: any) => any);
      menuType?: "left" | "top" | "float";
    }
    function Page(props: Page$Props): any;
    namespace Page {
      function getSystemLayerDefault(extraComponents: any): any;
    }
    interface Resources$Props {
      resources?: any[];
      width?: number;
    }
    function Resources(props: Resources$Props): any;
    interface RoleGroupAuthorized$Props {
      roleGroupInterfaceUri?: string | string[];
      firstMatch?: boolean;
    }
    function RoleGroupAuthorized(props: RoleGroupAuthorized$Props): any;
    namespace RoleGroupAuthorized {
      const Item: any;
    }
    function SearchButton(props: any): any;
    interface SpaError$errorData {}
    interface SpaError$error {
      stack?: string;
      name?: string;
      message?: string;
    }
    interface SpaError$languageSelectorProps {}
    interface SpaError$Props {
      errorData?: SpaError$errorData;
      error?: SpaError$error;
      languageSelectorProps?: SpaError$languageSelectorProps;
      bgStyle?: "filled" | "transparent";
      icon?: string;
    }
    function SpaError(props: SpaError$Props): any;
    interface SpaLoading$Props {
      bgStyle?: "filled" | "transparent";
    }
    function SpaLoading(props: SpaLoading$Props): any;
    interface SpaNotAuthenticated$languageSelectorProps {}
    interface SpaNotAuthenticated$productInfoProps {}
    interface SpaNotAuthenticated$Props {
      languageSelectorProps?: SpaNotAuthenticated$languageSelectorProps;
      productInfoProps?: SpaNotAuthenticated$productInfoProps;
      bgStyle?: "filled" | "transparent";
    }
    function SpaNotAuthenticated(props: SpaNotAuthenticated$Props): any;
    interface Spa$Props {
      notAuthenticatedContent?: any;
      appName?: any;
      baseUri?: string;
    }
    function Spa(props: Spa$Props): any;
    interface Technologies$Props {
      technologies?: any[];
      technologyType?: "library" | "application";
      includeStandardTechnologies?: boolean;
      textAlign?: "left" | "center";
    }
    function Technologies(props: Technologies$Props): any;
    interface Top$Props {
      plus4uButton?: boolean;
      notificationBadge?: boolean;
      languageSelector?: boolean;
    }
    function Top(props: Top$Props): any;
    const settingsPropTypes: any[];
    interface MenuPanel$Props {
      header?: any;
      settings?: any[];
      backgroundColorSchema?: string;
      expanded?: boolean;
      borderRadius?: string;
      elevation?: "0" | "1" | "2" | "3" | "4" | "5" | 0 | 1 | 2 | 3 | 4 | 5;
      borderBottom?: boolean;
      iconCollapsed?: string;
      iconExpanded?: string;
    }
    function MenuPanel(props: MenuPanel$Props): any;
    interface MenuList$Props {
      items?: any[] | boolean;
      borderBottom?: boolean;
      borderRadius?: boolean | string;
      elevation?: "0" | "1" | "2" | "3" | "4" | "5" | 0 | 1 | 2 | 3 | 4 | 5;
    }
    function MenuList(props: MenuList$Props): any;

    interface Logo$Props {
      colorSchema?: string;
      textColor?: string;
      backgroundColor?: string;
      backgroundColorTo?: string;
      backgroundImageSrc?: string;
      title?: string;
      titleFontSize?: string | number;
      subtitle?: string;
      subtitleFontSize?: string | number;
      generation?: string | number;
      companyLogo?: string;
      companyLogoWidth?: string | number;
      companyLogoLeft?: string | number;
      companyLogoRight?: string | number;
      companyLogoBottom?: string | number;
      decoration?: string;
      decorationWidth?: string | number;
      decorationRight?: string | number;
      decorationBottom?: string | number;
      decorationOpacity?: number;
      width?: string | number;
      height?: string | number;
    }
    function Logo(props: Logo$Props): any;
    interface Search$Props {
      onSearch?(...args: any): any;
      setData?(...args: any): any;
      colorSchema?: string;
      value?: string;
    }
    function Search(props: Search$Props): any;
    interface Support$Props {
      uuFlsUri?: string;
      uuSlsUri?: string;
      description?: any;
      productCode?: string;
      productPortalUri?: string;
      uuFlsButtonContent?: any;
      uuSlsButtonContent?: any;
    }
    function Support(props: Support$Props): any;

    const MenuConsumer: any;
    const MenuContext: any;
    const SearchConsumer: any;
    interface ArtifactSetter$Props {
      territoryBaseUri?: string;
      artifactId?: string;
      artifactCode?: string;
      artifactUri?: string;
      refreshKey?: any;
      breadcrumbList?: any[];
      header?: any;
      routeName?: string;
      showBackButton?: boolean;
      showBtContextButton?: boolean;
      disableNavigation?: boolean;
      hideNavigation?: boolean;
    }
    function ArtifactSetter(props: ArtifactSetter$Props): any;
    interface TopBt$Props {
      onSearch?(...args: any): any;
      showBackButton?: boolean;
      showBtContextButton?: boolean;
      disableNavigation?: boolean;
      hideNavigation?: boolean;
      territoryBaseUri?: string;
      artifactId?: string;
      artifactCode?: string;
      artifactUri?: string;
      refreshKey?: any;
      breadcrumbList?: any[];
      header?: any;
      routeName?: string;
    }
    function TopBt(props: TopBt$Props): any;
    interface MenuGroup$menuDefinitions$header {}
    interface MenuGroup$menuDefinitions {
      header?: string | MenuGroup$menuDefinitions$header;
      type?: "list" | "tree";
      items?: any[];
    }
    interface MenuGroup$Props {
      expanded?: boolean;
      actions?: any[];
      menuDefinitions?: MenuGroup$menuDefinitions;
    }
    function MenuGroup(props: MenuGroup$Props): any;
  }
  namespace Bricks {
    interface Error$errorData {}
    interface Error$error {
      stack?: string;
      name?: string;
      message?: string;
    }
    interface Error$Props {
      errorData?: Error$errorData;
      error?: Error$error;
      silent?: boolean;
      inline?: boolean;
      errorDataSpace?: number;
    }
    function Error(props: Error$Props): any;
    interface Loading$Props {
      inline?: boolean;
    }
    function Loading(props: Loading$Props): any;
    interface CodeGenerator$Props {
      tagName?: string;
      awid?: string;
      hex?: number;
      size?: string;
      displayBlock?: boolean;
      bgStyle?: string;
      pressed?: boolean;
    }
    function CodeGenerator(props: CodeGenerator$Props): any;
    interface UserPhoto$Props {
      uuIdentity?: string;
      src?: string;
      type?: "rounded" | "circle" | "thumbnail";
      width?: number | string;
      shadow?: boolean;
    }
    function UserPhoto(props: UserPhoto$Props): any;
    interface UserData$Props {
      uuIdentity: string;
      detail?: boolean;
    }
    function UserData(props: UserData$Props): any;
    interface Image$Props {
      src?: string;
      type?: "rounded" | "circle" | "thumbnail";
    }
    function Image(props: Image$Props): any;
    interface Iframe$iframeAttrs {}
    interface Iframe$Props {
      src?: string;
      resize?: boolean;
      height?: string;
      syncTimeout?: number;
      inline?: boolean;
      iframeAttrs?: Iframe$iframeAttrs;
    }
    function Iframe(props: Iframe$Props): any;
    interface Link$Props {
      href?: string;
      onClick?(...args: any): any;
      onCtrlClick?(...args: any): any;
      onWheelClick?(...args: any): any;
      smoothScroll?: number;
      offset?: number;
      target?: string;
    }
    function Link(props: Link$Props): any;
    interface Plus4ULink$Props {
      uri?: string;
      target?: string;
      onClick?(...args: any): any;
      onCtrlClick?(...args: any): any;
      onWheelClick?(...args: any): any;
    }
    function Plus4ULink(props: Plus4ULink$Props): any;
    interface JsonUpdate$data {}
    interface JsonUpdate$Props {
      data?: JsonUpdate$data | any[];
      onSave(...args: any): any;
      onSaveDone?(...args: any): any;
      onSaveFail?(...args: any): any;
      onCancel?(...args: any): any;
      saveMessage?: any;
      saveFailMessage?: any;
      format?: string;
    }
    function JsonUpdate(props: JsonUpdate$Props): any;
    interface Uu5StringUpdate$Props {
      data?: string;
      onSave(...args: any): any;
      onSaveDone?(...args: any): any;
      onSaveFail?(...args: any): any;
      onCancel?(...args: any): any;
      saveMessage?: any;
      saveFailMessage?: any;
      format?: string;
    }
    function Uu5StringUpdate(props: Uu5StringUpdate$Props): any;
    function LinkHelpdesk(props: any): any;
    interface CopyToClipboard$Props {
      src?: string;
      onClickAfter?(...args: any): any;
      initialContent?: string;
      loadingContent?: string;
      readyContent?: string;
      size?: string;
      displayBlock?: boolean;
      bgStyle?: string;
      pressed?: boolean;
    }
    function CopyToClipboard(props: CopyToClipboard$Props): any;
    interface BusinessCard$Props {
      uuIdentity?: string;
      type?: "16x9" | "4x3" | "3x2" | "2x3" | "1x10" | "10x1";
      vertical?: any;
      visual?: "fullInfo" | "shortInfo" | "mini" | "micro" | "inline";
      bgStyle?: "outline" | "filled" | "transparent";
      hidePhoto?: boolean;
      showUuIdentity?: boolean;
      elevation?: "-1" | "0" | "1" | "2" | "3" | "4" | "5" | -1 | 0 | 1 | 2 | 3 | 4 | 5;
      elevationHover?: "-1" | "0" | "1" | "2" | "3" | "4" | "5" | -1 | 0 | 1 | 2 | 3 | 4 | 5;
      infoDetail?: "full" | "short";
    }
    function BusinessCard(props: BusinessCard$Props): any;
    const propTypes: {
      personName?: any;
      uuIdentity?: string;
      type?: "16x9" | "4x3" | "3x2" | "2x3" | "1x10" | "10x1";
      vertical?: any;
      visual?: "fullInfo" | "shortInfo" | "mini" | "micro" | "inline";
      bgStyle?: "outline" | "filled" | "transparent";
      hidePhoto?: boolean;
      photoUri?: string;
      contactList?: any[];
      showUuIdentity?: boolean;
      elevation?: "-1" | "0" | "1" | "2" | "3" | "4" | "5" | -1 | 0 | 1 | 2 | 3 | 4 | 5;
      elevationHover?: "-1" | "0" | "1" | "2" | "3" | "4" | "5" | -1 | 0 | 1 | 2 | 3 | 4 | 5;
      infoDetail?: "full" | "short";
    };
    interface BusinessCardView$Props {
      personName?: any;
      uuIdentity?: string;
      type?: "16x9" | "4x3" | "3x2" | "2x3" | "1x10" | "10x1";
      vertical?: any;
      visual?: "fullInfo" | "shortInfo" | "mini" | "micro" | "inline";
      bgStyle?: "outline" | "filled" | "transparent";
      hidePhoto?: boolean;
      photoUri?: string;
      contactList?: any[];
      showUuIdentity?: boolean;
      elevation?: "-1" | "0" | "1" | "2" | "3" | "4" | "5" | -1 | 0 | 1 | 2 | 3 | 4 | 5;
      elevationHover?: "-1" | "0" | "1" | "2" | "3" | "4" | "5" | -1 | 0 | 1 | 2 | 3 | 4 | 5;
      infoDetail?: "full" | "short";
    }
    function BusinessCardView(props: BusinessCardView$Props): any;
    interface CmdViewer$params {}
    interface CmdViewer$Props {
      url: string;
      params?: CmdViewer$params;
      theme?: string;
      minRows?: number;
      maxRows?: number;
      rows?: number;
      hideMarks?: boolean;
      loadMethod?: "get" | "post";
    }
    function CmdViewer(props: CmdViewer$Props): any;
    interface Button$Props {
      href?: string;
      uri?: string;
      target?: "_blank" | "_parent" | "_top" | "_self";
      size?: "s" | "m" | "l" | "xl";
      displayBlock?: boolean;
      pressed?: boolean;
      bgStyle?: "filled" | "outline" | "transparent" | "underline" | "link";
      smoothScroll?: number;
      offset?: number;
      onClick?(...args: any): any;
      borderRadius?: string;
      elevation?: "-1" | "0" | "1" | "2" | "3" | "4" | "5" | -1 | 0 | 1 | 2 | 3 | 4 | 5;
      elevationHover?: "-1" | "0" | "1" | "2" | "3" | "4" | "5" | -1 | 0 | 1 | 2 | 3 | 4 | 5;
      baseline?: boolean;
    }
    function Button(props: Button$Props): any;
    interface AdSpot$Props {
      baseUri?: string;
      code: string;
    }
    function AdSpot(props: AdSpot$Props): any;
    interface TouchIcon$Props {
      stateIcon?: string;
      state?: string;
      badgeContent?: string | number;
      badgeColorSchema?: string;
      lines?: 0 | 2 | 3;
      uuIdentity?: string;
    }
    function TouchIcon(props: TouchIcon$Props): any;
    function TouchIconList(props: any): any;
    const DEFAULT_PROPS: {
      items: any[];
      colorSchema: any;
      elevation: 0;
      elevationHover: any;
      borderRadius: any;
      bgStyle: "transparent";
      itemColorSchema: any;
      itemBgStyle: any;
      itemBorderRadius: any;
      itemLines: any;
    };
    interface TouchIconListView$Props {
      items?: any[];
      inlineText?: string;
      colorSchema?: string;
      elevation?: "-1" | "0" | "1" | "2" | "3" | "4" | "5" | -1 | 0 | 1 | 2 | 3 | 4 | 5;
      elevationHover?: "-1" | "0" | "1" | "2" | "3" | "4" | "5" | -1 | 0 | 1 | 2 | 3 | 4 | 5;
      borderRadius?: string;
      bgStyle?: "filled" | "transparent" | "outline" | "underline";
      itemColorSchema?: string;
      itemBgStyle?: "filled" | "transparent";
      itemBorderRadius?: string;
      itemLines?: 0 | 2 | 3;
    }
    function TouchIconListView(props: TouchIconListView$Props): any;
  }
  namespace UuBmlDraw {
    interface Image$Props {
      code: string;
    }
    function Image(props: Image$Props): any;
  }
  namespace UuForum {}
  namespace Files {}

  const Telemetry: any;
  namespace Hooks {
    const BinaryContext: {
      Provider: any;
      Consumer(props: any): any;
    };
    function useBinary(): any;
    interface BinaryProvider$identifierParams {}
    interface BinaryProvider$Props {
      binaryGetUc?: string;
      binaryDataGetUc?: string;
      binaryCreateUc?: string;
      binaryUpdateUc?: string;
      binaryUpdateMetaDataUc?: string;
      binaryDeleteUc?: string;
      binaryListUc?: string;
      identifierParams?: BinaryProvider$identifierParams;
      allowCustomTags?: boolean;
      availableTagList?: string[];
      ignoreTagList?: string[];
    }
    function BinaryProvider(props: BinaryProvider$Props): any;
    const useSubApp: any;
    const SubAppContext: any;
    interface SubAppProvider$Props {
      subApp?: string;
      awid?: string;
      basePath?: string;
      baseUri?: string;
    }
    function SubAppProvider(props: SubAppProvider$Props): any;
    interface SubAppDataProvider$name {}
    interface SubAppDataProvider$description {}
    interface SubAppDataProvider$colors {
      primary?: string;
      secondary?: string;
      tertiary?: string;
    }
    interface SubAppDataProvider$data {}
    interface SubAppDataProvider$Props {
      name?: string | SubAppDataProvider$name;
      description?: string | SubAppDataProvider$description;
      colors?: SubAppDataProvider$colors;
      data?: SubAppDataProvider$data;
      onDataChange?(...args: any): any;
    }
    function SubAppDataProvider(props: SubAppDataProvider$Props): any;
    const SubAppDataContext: {
      Provider: any;
      Consumer(props: any): any;
    };
    function useSubAppData(): any;
    const RouterContext: any;
    function useRouter(): any;
    interface RouterProvider$Props {
      routeList?: any[];
      onRouteListChange?(...args: any): any;
    }
    function RouterProvider(props: RouterProvider$Props): any;
    const RouteDataContext: any;
    function useRouteData(): any;
    interface RouteDataProvider$params {}
    interface RouteDataProvider$name {}
    interface RouteDataProvider$description {}
    interface RouteDataProvider$data {}
    interface RouteDataProvider$Props {
      useCase?: string;
      params?: RouteDataProvider$params;
      name?: string | RouteDataProvider$name;
      description?: string | RouteDataProvider$description;
      data?: RouteDataProvider$data;
      onDataChange?(...args: any): any;
    }
    function RouteDataProvider(props: RouteDataProvider$Props): any;
    const LayoutContext: any;
    function useLayout(): any;
    interface LayoutProvider$containerPadding {}
    interface LayoutProvider$Props {
      containerPadding?: string | number | LayoutProvider$containerPadding;
      containerMaxWidth?: string | number;
    }
    function LayoutProvider(props: LayoutProvider$Props): any;
  }
}
