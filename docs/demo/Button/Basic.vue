<template>
  <div>
    <lin-button type="primary">
      primary
    </lin-button>
    <lin-button type="secondary">
      secondary
    </lin-button>
    <lin-button type="text">
      text
    </lin-button>
  </div>

  <div class="mt-10">
    <lin-button
      type="primary"
      size="small"
    >
      small
    </lin-button>
    <lin-button
      type="secondary"
      size="medium"
    >
      medium
    </lin-button>
    <lin-button
      type="primary"
      size="large"
    >
      text
    </lin-button>
  </div>
</template>

<script setup>
import LinButton from "@/components/button/src/button";
</script>
