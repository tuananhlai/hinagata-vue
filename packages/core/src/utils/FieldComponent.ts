export interface FieldComponentProps {
  /** The label of this field. It is overridden by the `label` slot if both are provided. */
  label?: string;
  /** The description of this field. It is overridden by the `description` slot if both are provided. */
  description?: string;
  /** The error message of this field. It is overridden by the `errorMessage` slot if both are provided. */
  errorMessage?: string;
}

export interface FieldComponentSlots {
  /** The label of this field. It overrides the `label` prop if both are provided. */
  label?(): void;
  /** The description of this field. It overrides the `description` prop if both are provided. */
  description?(): void;
  /** The error message of this field. It overrides the `errorMessage` prop if both are provided. */
  errorMessage?(): void;
}
