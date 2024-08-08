declare module "uu_plus4u5g02-elements" {
  const ContentContainer: UU5.TComponent<
    UU5.TDefaultProps<{
      actionList: UU5Elements.TActionListItem[];
    }>
  >;

  const IdentificationBlock: UU5.TComponent<
    UU5.TDefaultProps<{
      headerType?: string;
      header?: string;
      card?: any;
      headerSeparator?: boolean;
      actionList: UU5Elements.TActionListItem[];
      info: any;
    }>
  >;

  const Error: ErrorComponent;

  const UnexpectedError: ErrorComponent;
}

type ErrorComponent = UU5.TComponent<
  UU5.TDefaultProps<{
    title?: React.ReactNode;
    error?: any;
  }>
>;
