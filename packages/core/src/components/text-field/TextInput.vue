<script lang="ts">
export interface TextInputProps extends AriaLabellingProps {
  modelValue?: string;

  /** A unique identifier for the input element. */
  id?: string;
  /** Whether the value is invalid. */
  invalid?: boolean;
  /** The type of input to render. */
  type?:
    | "text"
    | "search"
    | "url"
    | "tel"
    | "email"
    | "password"
    | (string & {});
  /** A hint to the user of what can be entered in the input. */
  placeholder?: string;
  /** The name of the input element, used when submitting an HTML form. */
  name?: string;
  /** Whether the input is disabled. */
  disabled?: boolean;
  /** Whether the input can be selected but not changed by the user. */
  readonly?: boolean;
  /** Whether user input is required on the input before form submission. */
  required?: boolean;
  /** Whether the element should receive focus on render. */
  autofocus?: boolean;
  /**
   * Describes the type of autocomplete functionality the input should provide if any.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete
   */
  autocomplete?: InputHTMLAttributes["autocomplete"];
  /** The minimum number of characters required by the input. */
  minlength?: number;
  /** The maximum number of characters supported by the input. */
  maxlength?: number;
  /**
   * Regex pattern that the value of the input must match to be valid.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefpattern
   */
  pattern?: string;
  /**
   * An enumerated attribute that defines whether the element may be checked for spelling errors.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck
   */
  spellcheck?: boolean;
  /**
   * An enumerated attribute that defines what action label or icon to preset for the enter key on virtual keyboards.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint
   */
  enterKeyHint?: InputHTMLAttributes["enterKeyHint"];
  /**
   * Hints at the type of data that might be entered by the user while editing the element or its contents.
   * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
   */
  inputmode?: HTMLAttributes["inputmode"];

  /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
  ariaActivedescendant?: string;
  /**
   * Indicates whether inputting text could trigger display of predictions of the user's intended value,
   * and specifies how predictions would be presented if they are made.
   */
  ariaAutocomplete?: InputHTMLAttributes["aria-autocomplete"];
  /**
   * Indicates the availability and type of interactive popup element that can be triggered.
   */
  ariaHaspopup?: InputHTMLAttributes["aria-haspopup"];
  /** Identifies the element(s) whose contents or presence are controlled by the current element. */
  ariaControls?: string;
  /** Identifies the element that provides an error message for the object. */
  ariaErrormessage?: string;
}

export interface TextInputEmits {
  "update:modelValue": [value: string];
  blur: [event: FocusEvent];
  focus: [event: FocusEvent];
  change: [event: Event];

  keydown: [event: KeyboardEvent];
  keyup: [event: KeyboardEvent];
  keypress: [event: KeyboardEvent];
}

export interface TextInputExpose {
  /** Get the underlying DOM element. */
  domNode: HTMLInputElement | null;
}
</script>

<script setup lang="ts">
import { AriaLabellingProps } from "@/utils/AriaLabellingProps";
import clsx from "clsx";
import { useId } from "reka-ui";
import {
  HTMLAttributes,
  InputHTMLAttributes,
  onMounted,
  onUnmounted,
  useTemplateRef,
} from "vue";
import { useFieldContext } from "../field/FieldContext";

const props = withDefaults(defineProps<TextInputProps>(), {
  type: "text",
});
const emits = defineEmits<TextInputEmits>();

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emits("update:modelValue", target.value);
};

const inputID = useId(props.id);
const fieldContextValue = useFieldContext();
onMounted(() => onUnmounted(fieldContextValue?.registerFormControl(inputID)));

const inputRef = useTemplateRef<HTMLInputElement>("input-ref");

defineExpose<TextInputExpose>({
  get domNode() {
    return inputRef.value;
  },
});
</script>

<template>
  <div :class="$style.root">
    <input
      ref="input-ref"
      :id="inputID"
      :class="$style.input"
      :name="name"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :required="required"
      :autofocus="autofocus"
      :autocomplete="autocomplete"
      :minlength="minlength"
      :maxlength="maxlength"
      :pattern="pattern"
      :spellcheck="spellcheck"
      :enter-key-hint="enterKeyHint"
      :inputmode="inputmode"
      :data-invalid="invalid || undefined"
      :aria-invalid="invalid"
      :aria-label="props.ariaLabel"
      :aria-labelledby="
        clsx(props.ariaLabelledby, fieldContextValue?.labelledBy.value) ||
        undefined
      "
      :aria-describedby="
        clsx(props.ariaDescribedby, fieldContextValue?.describedBy.value) ||
        undefined
      "
      :aria-activedescendant="props.ariaActivedescendant"
      :aria-autocomplete="props.ariaAutocomplete"
      :aria-haspopup="props.ariaHaspopup"
      :aria-controls="props.ariaControls"
      :aria-details="props.ariaDetails"
      :aria-errormessage="props.ariaErrormessage"
      @input="onInput"
      @blur="(e) => emits('blur', e)"
      @change="(e) => emits('change', e)"
      @focus="(e) => emits('focus', e)"
      @keydown="(e) => emits('keydown', e)"
      @keyup="(e) => emits('keyup', e)"
      @keypress="(e) => emits('keypress', e)"
    />
  </div>
</template>

<style lang="scss" module>
.root {
  display: flex;
}

.input {
  width: 100%;
  padding: var(--bw-space-2) var(--bw-space-3);
  border-radius: var(--bw-radius-md);
  border: 1px solid var(--bw-color-zinc-300);
  font-size: var(--bw-font-base);
  line-height: var(--bw-line-normal);
  background: var(--bw-color-white);
  color: var(--bw-color-zinc-900);

  &::placeholder {
    color: var(--bw-color-zinc-400);
  }

  &:where(:focus) {
    outline: 2px solid var(--bw-color-primary);
    outline-offset: -2px;
    border-color: var(--bw-color-primary);
  }

  &:where(:disabled) {
    opacity: 0.5;
  }

  &:where([data-invalid]) {
    border-color: var(--bw-color-red-500);
  }
}
</style>
