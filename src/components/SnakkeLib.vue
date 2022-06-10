<template>
  <progress :value="progress" class="snakke-progress"></progress>
</template>

<script setup>
import useSnakke from "../services/Snakke.ts";
const { progress } = useSnakke();
</script>

<style scoped>
progress {
  appearance:none;
  position: absolute;
  left: 0;
  width: 100%;
  height: 4px;
  z-index: 9999;
}
::-webkit-progress-bar {
  background-color: transparent;
}
::-webkit-progress-value {
  background-color: #444460;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
</style>