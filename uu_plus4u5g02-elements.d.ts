declare module "uu_plus4u5g02-elements" {
  const ContentContainer: UU5.TComponent<
    UU5.TDefaultProps<Plus4U5ElementsTypes.ContentContainerProps> & {
      children: (opt: Plus4U5ElementsTypes.ContentContainerChildrenParams) => React.ReactNode;
    }
  >;

  const IdentificationBlock: UU5.TComponent<
    UU5.TDefaultProps<Plus4U5ElementsTypes.IdentificationBlockProps> & {
      children: (opt: Plus4U5ElementsTypes.IdentificationBlockChildrenParams) => React.ReactNode;
    }
  >;

  const Unauthenticated: UU5.TComponent<UU5.TDefaultProps<{}>>;

  const Error: ErrorComponent;
  const UnexpectedError: ErrorComponent;

  global {
    namespace Plus4U5ElementsTypes {
      interface IdentificationBlockProps {
        identificationType?: "basic" | "none";
        headerType?: string;
        header?: string;
        card?: any;
        headerSeparator?: boolean;
        actionList?: UU5Elements.TActionListItem[];
        info?: any;
        displayHelpCenter?: boolean;
        displayType?: string;
      }

      interface IdentificationBlockChildrenParams {
        style: {
          paddingTop: string;
          paddingBottom: string;
          paddingLeft: string;
          paddingRight: string;
        };
      }

      interface ContentContainerProps extends IdentificationBlockProps {
        title?: React.ReactNode;
        subtitle?: React.ReactNode;
        nestingLevelList?: UU5.TNestingLevel[];
        displayAsModal?: boolean;
        icon?: UUGds.GdsIcon;
        onClose?: (event: Event) => void;
        getCopyOptions?: () => any;
      }

      interface ContentContainerChildrenParams extends IdentificationBlockChildrenParams {
        nestingLevel: UU5.TNestingLevel;
      }
    }
  }
}

type ErrorComponent = UU5.TComponent<
  UU5.TDefaultProps<{
    title?: React.ReactNode;
    error?: any;
  }>
>;
