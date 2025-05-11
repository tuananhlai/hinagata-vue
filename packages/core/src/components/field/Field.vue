<script lang="ts">
export interface FieldSlots {
  default(): void;
}

/**
 * A helper component that groups a label, input, description and error message. It
 * automatically associate the label, description and error message with the input using
 * the appropriate attributes.
 *
 * @example
 * <Field>
 *   <Label>Label</Label>
 *   <TextInput />
 *   <Description>Description</Description>
 *   <ErrorMessage>Error Message</ErrorMessage>
 * </Field>
 */
export default {};
</script>

<script setup lang="ts">
import { useField } from "./FieldContext";

defineSlots<FieldSlots>();

useField();
</script>

<template>
  <div>
    <slot />
  </div>
</template>
