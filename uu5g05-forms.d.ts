declare module "uu5g05-forms" {
  function useFormApi<T>(): UU5Forms.TFormApi<T>;
  function withFormItem<P extends Uu5.TProps>(component: Uu5.TComponent<P>): Uu5.TComponent<P>;
  function withFormInput<P extends Uu5.TProps>(component: Uu5.TComponent<P>): Uu5.TComponent<P>;

  const Label: UU5Forms.TFormComponent<{}>;

  interface TextProps {
    pattern?: string;
    patternMessage?: React.ReactNode;
  }
  const Text: UU5Forms.TComponent<TextProps, string>;
  const FormText: UU5Forms.TFormComponent<TextProps, string>;

  interface TextSelectProps {
    pattern?: string;
    patternMessage?: string;
    itemList: { value: any; children?: any }[];
    insertable?: boolean;
    multiple?: boolean;
  }
  const TextSelect: UU5Forms.TComponent<TextSelectProps, string>;
  const FormTextSelect: UU5Forms.TFormComponent<TextSelectProps, string>;

  interface SwitchSelectProps {
    itemList: { value: string; children?: React.ReactNode }[];
  }
  const SwitchSelect: UU5Forms.TComponent<SwitchSelectProps, string>;
  const FormSwitchSelect: UU5Forms.TFormComponent<SwitchSelectProps, string>;

  interface SelectProps {
    itemList: { value: string; children?: React.ReactNode }[];
  }
  const Select: UU5Forms.TComponent<SelectProps, string>;
  const FormSelect: UU5Forms.TFormComponent<SelectProps, string>;

  interface CheckboxProps {
    box?: boolean;
    size?: Uu5.TSize;
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

  interface NumberProps {
    min?: number;
    max?: number;
    step?: number;
  }
  const Number: UU5Forms.TComponent<NumberProps, number>;
  const FormNumber: UU5Forms.TFormComponent<NumberProps, number>;

  interface DateRangeProps {}
  const DateRange: UU5Forms.TComponent<DateRangeProps, string>;
  const FormDateRange: UU5Forms.TFormComponent<DateRangeProps, string>;

  interface DateTimeProps {
    rangePosition?: "start" | "end";
    min?: string;
    step?: number;
  }
  const DateTime: UU5Forms.TComponent<DateTimeProps, string | undefined>;
  const FormDateTime: UU5Forms.TFormComponent<DateTimeProps, string | undefined>;

  interface DateProps {
    rangePosition?: "start" | "end";
    min?: string;
  }
  const Date: UU5Forms.TComponent<DateProps, string | undefined>;
  const FormDate: UU5Forms.TFormComponent<DateProps, string | undefined>;

  const File: UU5Forms.TComponent<{ multiple?: boolean }, number>;
  const FormFile: UU5Forms.TFormComponent<{ multiple?: boolean }, number>;

  const DateTimeRangeProvider: Uu5.TComponent<{}>;

  const SubmitButton: UU5Forms.TFormComponent<{ buttonSubmitProps?: any }>;
  const CancelButton: UU5Forms.TFormComponent<{ onClick?: () => void }>;

  interface FormProps {
    initialValue?: any;
    onSubmit: (event: UU5Forms.TSubmitEvent<any>) => void;
    onValidate?: UU5Forms.TValidation$Handler;
  }

  const Form: Uu5.TComponent<FormProps> & {
    Provider: React.FC<React.PropsWithChildren<FormProps>>;
    View: Uu5.TComponent<{ gridLayout?: string }>;
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

      interface TFormApiInited<T> extends TFormApi<T> {
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
        label?: Uu5.TLsi | React.ReactNode;
        info?: Uu5.TLsi | React.ReactNode;
        message?: Uu5.TLsi | React.ReactNode;
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
      }

      type TComponent<Props, TValue = any> = Uu5.TComponent<
        TWithFormItemProps & TWithFormInputProps & TInputProps & Props & { value: TValue }
      >;
      type TFormComponent<Props, TValue = any> = Uu5.TComponent<
        TWithFormItemProps & TWithFormInputProps & TInputProps & Props & { initialValue?: TValue }
      >;

      interface TValidation$Result {
        code: string;
        /** severity of the message */
        feedback: TFeedback;
        /** string or lsi object with a message */
        message?: Uu5.TLsi | React.ReactNode;
        /** array of values, which could be filled to message */
        messageParams?: any[];
      }

      interface TValidation$Event {
        data: {
          form: { value: any };
          name: string;
          value: any;
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
