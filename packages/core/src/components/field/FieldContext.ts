import { inject, provide, ref, Ref } from "vue";

const contextKey = Symbol("FieldContext");

export type FieldContextValue = {
  /**
   * IDs of the elements that label the field. They will
   * be passed to the `aria-labelledby` attribute of the input.
   */
  labelledBy: Ref<string[]>;
  /**
   * IDs of the elements that describe the field. They will
   * be passed to the `aria-describedby` attribute of the input.
   */
  describedBy: Ref<string[]>;
  /**
   * ID of the form control element.
   */
  formControlID: Ref<string | undefined>;
  /** Register a label element with the field and return a cleanup function. */
  registerLabel: (id: string) => () => void;
  /** Register a description element with the field and return a cleanup function. */
  registerDescription: (id: string) => () => void;
  /**
   * Register a form control element with the field and return a cleanup function.
   * It only needs to be called if you want to associate the `label` with the form control
   * using the `for` attribute.
   */
  registerFormControl: (id: string) => () => void;
};

export const provideFieldContext = (value: FieldContextValue) => {
  provide(contextKey, value);
};

export const useFieldContext = (): FieldContextValue | undefined => {
  return inject<FieldContextValue | undefined>(contextKey, undefined);
};

/**
 * Provide a field context to child components so that
 * label and description element can be associated with the form control
 * element automatically.
 */
export const useField = () => {
  const labelledBy = ref<string[]>([]);
  const describedBy = ref<string[]>([]);
  const formControlID = ref<string | undefined>();

  provideFieldContext({
    labelledBy,
    describedBy,
    formControlID,
    registerLabel: (id: string) => {
      labelledBy.value.push(id);

      return () => {
        labelledBy.value = labelledBy.value.filter((id) => id !== id);
      };
    },
    registerDescription: (id: string) => {
      describedBy.value.push(id);

      return () => {
        describedBy.value = describedBy.value.filter((id) => id !== id);
      };
    },
    registerFormControl: (id: string) => {
      formControlID.value = id;

      return () => {
        formControlID.value = undefined;
      };
    },
  });
};
