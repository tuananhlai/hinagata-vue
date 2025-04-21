<script lang="ts">
export interface FieldSlots {
  default(): void;
}

/**
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
