<script lang="ts">
export interface CheckboxGroupProps
  extends AriaLabellingProps,
    CheckboxGroupRootProps {
  /** A unique identifier for the element. */
  id?: string;
  /** Whether the input value is invalid. */
  invalid?: boolean;
  /**
   * The orientation of the checkboxes within this group.
   * @default "vertical"
   */
  orientation?: "horizontal" | "vertical";

  /** Identifies the element that provides an error message for the object. */
  ariaErrormessage?: string;
}

export interface CheckboxGroupEmits extends CheckboxGroupRootEmits {}

export interface CheckboxGroupSlots {
  default(): void;
}

/**
 * @example
 * <CheckboxGroup orientation="horizontal">
 *   <Checkbox value="one">Option 1</Checkbox>
 *   <Checkbox value="two">Option 2</Checkbox>
 *   <Checkbox value="three">Option 3</Checkbox>
 * </CheckboxGroup>
 */
export default {};
</script>

<script lang="ts" setup>
import { AriaLabellingProps } from "@/utils/AriaLabellingProps";
import clsx from "clsx";
import {
  CheckboxGroupRoot,
  CheckboxGroupRootEmits,
  CheckboxGroupRootProps,
  useForwardPropsEmits,
} from "reka-ui";
import { useFieldContext } from "../field/FieldContext";
import { computed } from "vue";

const props = withDefaults(defineProps<CheckboxGroupProps>(), {
  orientation: "vertical",
});
const emits = defineEmits<CheckboxGroupEmits>();
defineSlots<CheckboxGroupSlots>();

const forwarded = useForwardPropsEmits(props, emits);

const fieldContextValue = useFieldContext();

const ariaLabelledby = computed<string | undefined>(
  () =>
    clsx(props.ariaLabelledby, fieldContextValue?.labelledBy.value) ||
    undefined
);

/**
 * If a set of checkboxes is presented as a logical group with a visible label,
 * the checkboxes are included in an element with role group that has the property
 * aria-labelledby set to the ID of the element containing the label.
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/#wai-ariaroles,states,andproperties
 */
const role = computed<"group" | undefined>(() =>
  ariaLabelledby.value != null ? "group" : undefined
);

// TODO: Apply invalid state to all child checkboxes when invalid prop is set?
</script>

<template>
  <CheckboxGroupRoot
    :class="$style.root"
    :data-orientation="orientation"
    v-bind="forwarded"
    :data-invalid="invalid || undefined"
    :aria-invalid="invalid"
    :aria-label="props.ariaLabel"
    :aria-labelledby="ariaLabelledby"
    :aria-describedby="
      clsx(props.ariaDescribedby, fieldContextValue?.describedBy.value) ||
      undefined
    "
    :aria-details="props.ariaDetails"
    :aria-errormessage="props.ariaErrormessage"
    :role="role"
  >
    <slot />
  </CheckboxGroupRoot>
</template>

<style lang="scss" module>
.root {
  display: flex;
  flex-direction: column;
  gap: var(--bw-space-2);

  &:where([data-orientation="horizontal"]) {
    flex-direction: row;
    gap: var(--bw-space-4);
  }
}
</style>
