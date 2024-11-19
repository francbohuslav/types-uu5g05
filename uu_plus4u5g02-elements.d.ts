declare module "uu_plus4u5g02-elements" {
  const ContentContainer: UU5.TComponent<
    UU5.TDefaultProps<Plus4U5ElementsTypes.ContentContainerProps>
  >;

  const IdentificationBlock: UU5.TComponent<
    UU5.TDefaultProps<Plus4U5ElementsTypes.IdentificationBlockProps>
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
        actionList: UU5Elements.TActionListItem[];
        info: any;
        displayType?: string;
      }

      interface ContentContainerProps extends IdentificationBlockProps {
        title: React.ReactNode;
        subtitle: React.ReactNode;
        displayAsModal?: boolean;
        info: any;
        icon?: UUGds.GdsIcon;
        nestingLevelList: UU5.TNestingLevel[];
        onClose?: (event: Event) => void;
        getCopyOptions: () => any;
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
