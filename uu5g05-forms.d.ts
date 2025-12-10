declare module "uu5g05-forms" {
  function useFormApi<T>(): UU5Forms.TFormApi<T>;
  function withFormItem<P extends UU5.TProps>(
    component: UU5.TComponent<P>
  ): UU5.TComponent<Omit<P, "onChange"> & UU5Forms.TWithFormItemProps>;
  function withFormInput<P extends UU5.TProps>(component: UU5.TComponent<P>): UU5.TComponent<P>;

  const Label: UU5Forms.TFormComponent<{}>;

  interface TextProps {
    pattern?: string;
    patternMessage?: React.ReactNode;
    minLength?: number;
    maxLength?: number;
    spellCheck?: boolean;
    autoComplete?: string | boolean;
  }
  const Text: UU5Forms.TComponent<TextProps, string> & {
    Input: UU5Forms.TComponent<any, string>;
  };
  const FormText: UU5Forms.TFormComponent<TextProps, string>;

  interface TextSelectProps {
    pattern?: string;
    patternMessage?: string;
    itemList: { value: any; children?: any }[];
    insertable?: boolean;
    multiple?: boolean;
  }
  const TextSelect: UU5Forms.TComponent<TextSelectProps, string> & {
    Input: UU5Forms.TComponent<any, string>;
    Field: UU5.TComponent<any>;
    Options: UU5.TComponent<{ height?: number | string }>;
  };
  const FormTextSelect: UU5Forms.TFormComponent<TextSelectProps, string>;

  type ColorValue =
    | string
    | {
        cssColor: string;
        hex: string;
        colorScheme: string;
        shade: string;
        opacity: number;
      };
  interface ColorProps {
    iconOpen?: string;
    iconClosed?: string;
    valueType?: "cssColor" | "object" | "colorScheme";
    displayShade?: boolean;
    displayOpacity?: boolean;
    displayCustomColor?: boolean;
  }
  const Color: UU5Forms.TComponent<ColorProps, ColorValue> & {
    Input: UU5Forms.TComponent<ColorProps, ColorValue>;
  };
  const FormColor: UU5Forms.TFormComponent<ColorProps, ColorValue>;

  interface SwitchSelectProps {
    itemList: { value: string; children?: React.ReactNode }[];
  }
  const SwitchSelect: UU5Forms.TComponent<SwitchSelectProps, string>;
  const FormSwitchSelect: UU5Forms.TFormComponent<SwitchSelectProps, string>;

  interface SelectProps {
    itemList: { value: string | undefined; children?: React.ReactNode }[];
    disableOptionReorder?: boolean;
  }
  const Select: UU5Forms.TComponent<SelectProps, string>;
  const FormSelect: UU5Forms.TFormComponent<SelectProps, string>;

  interface CheckboxProps {
    box?: boolean;
  }
  const Checkbox: UU5Forms.TComponent<CheckboxProps, boolean>;
  const FormCheckbox: UU5Forms.TFormComponent<CheckboxProps, boolean>;

  interface TextAreaProps {
    maxLength?: number;
    rows?: number;
    maxRows?: number;
    autoResize?: boolean;
  }
  const TextArea: UU5Forms.TComponent<TextAreaProps, string>;
  const FormTextArea: UU5Forms.TFormComponent<TextAreaProps, string>;

  const FormLsi: UU5Forms.TFormComponent<any, UU5.TLsi>;

  interface NumberProps {
    min?: number;
    max?: number;
    step?: number;
  }
  const Number: UU5Forms.TComponent<NumberProps, number | undefined>;
  const FormNumber: UU5Forms.TFormComponent<NumberProps, number | undefined>;

  interface DateRangeProps {}
  const DateRange: UU5Forms.TComponent<DateRangeProps, string>;
  const FormDateRange: UU5Forms.TFormComponent<DateRangeProps, string>;

  interface DateTimeProps {
    rangePosition?: "start" | "end";
    min?: string;
    max?: string;
    step?: number;
    presetList?: string[];
    midnightValue?: number;
  }
  const DateTime: UU5Forms.TComponent<DateTimeProps, string | undefined>;
  const FormDateTime: UU5Forms.TFormComponent<DateTimeProps, string | undefined>;

  interface DateProps {
    rangePosition?: "start" | "end";
    min?: string;
    presetList?: string[];
  }
  const Date: UU5Forms.TComponent<DateProps, string | undefined>;
  const FormDate: UU5Forms.TFormComponent<DateProps, string | undefined>;

  const Week: UU5Forms.TComponent<{}, string | undefined>;
  const FormWeek: UU5Forms.TFormComponent<{}, string | undefined>;

  const Month: UU5Forms.TComponent<{}, string | undefined>;
  const FormMonth: UU5Forms.TFormComponent<{}, string | undefined>;

  const Year: UU5Forms.TComponent<{}, string | undefined>;
  const FormYear: UU5Forms.TFormComponent<{}, string | undefined>;

  const File: UU5Forms.TComponent<{ multiple?: boolean }, number>;
  const FormFile: UU5Forms.TFormComponent<{ multiple?: boolean }, number>;

  const DateTimeRangeProvider: UU5.TComponent<{}>;

  const SubmitButton: UU5Forms.TFormComponent<{ buttonSubmitProps?: any }>;
  const CancelButton: UU5Forms.TFormComponent<{ onClick?: () => void }>;

  interface FormProps {
    initialValue?: any;
    disableLeaveConfirmation?: boolean;
    gridLayout?: string;
    onSubmit?: (event: UU5Forms.TSubmitEvent<any>) => void;
    onValidate?: UU5Forms.TValidation$Handler;
  }

  const Form: UU5.TComponent<FormProps> & {
    Provider: React.FC<
      FormProps & {
        children: JSX.Element | JSX.Element[] | ((opt: UU5Forms.TFormApi<any>) => JSX.Element);
      }
    >;
    View: UU5.TComponent<{ gridLayout?: string; lsi?: any }>;
  };

  global {
    namespace UU5Forms {
      interface TFormApi<T> {
        value: T | undefined;
        setItemValue: (propertyName: keyof T, value: any) => void;
        reset: () => void;
        cancel: () => Promise<boolean>;
        itemMap: Record<keyof T, TFormApi$Item>;
      }

      interface TFormApiInitialized<T> extends TFormApi<T> {
        value: T;
      }

      interface TFormApi$Item {
        errorList: any[];
        initialValue: any;
        pending: any;
        valid: boolean;
        value: any;
      }

      interface TWithFormItemProps {
        name?: string;
        onChange?(event: TChangeEvent<any>): void;
        onBlur?: Function;
        onFocus?: Function;
        onValidate?: (event: TValidation$Event) => TValidation$Result | undefined;
        validationRef?: React.RefObject<any>;
        onValidationEnd?: (event: TValidationEndEvent) => void;
      }

      interface TWithFormInputProps {
        label?: UU5.TLsi | React.ReactNode;
        info?: UU5.TLsi | React.ReactNode;
        message?: UU5.TLsi | React.ReactNode;
        messageParams?: any[];
        inputAttrs?: any;
        feedback?: TFeedback;
      }

      type TFeedback = "success" | "warning" | "error";

      interface TInputProps {
        placeholder?: string;
        required?: boolean;
        readOnly?: boolean;
        disabled?: boolean;
        validateOnMount?: boolean;
        borderRadius?: any;
        autoFocus?: boolean;
        size?: UU5.TSize;
        colorScheme?: string;
        significance?: UU5Elements.TSignificance;
      }

      type TComponent<Props, TValue = any> = UU5.TComponent<
        TWithFormItemProps & TWithFormInputProps & TInputProps & Props & { value: TValue }
      >;
      type TFormComponent<Props, TValue = any> = UU5.TComponent<
        TWithFormItemProps & TWithFormInputProps & TInputProps & Props & { initialValue?: TValue }
      >;

      interface TValidation$Result {
        code: string;
        /** severity of the message */
        feedback: TFeedback;
        /** string or lsi object with a message */
        message?: UU5.TLsi | React.ReactNode;
        /** array of values, which could be filled to message */
        messageParams?: any[];
      }

      interface TValidation$Event {
        data: {
          form: { value: any };
          name: string;
          value: any;
          type: any;
        };
      }

      type TValidation$Handler = (event: TValidation$Event) => TValidation$Result | undefined;

      interface TSubmitEvent<T> {
        data: {
          value: T;
        };
      }

      interface TChangeEvent<T> extends React.ChangeEvent<T> {
        data: {
          value: T;
          name: string;
          form: {
            value: any;
            setItemValue: (name: string, value: any) => void;
          };
        };
      }

      interface TValidationEndEvent {
        data: {
          errorList: TValidation$Result[];
          valid: boolean;
        };
      }
    }
  }
}
