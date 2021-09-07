<template>
  <div>
    <Panel
      :header="i + ` Header`"
      v-for="i in 5"
      :key="i"
      style="margin-bottom: 20px"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua?
    </Panel>
  </div>
</template>

<script>
import Panel from "primevue/panel";

export default {
  setup() {},
  components: {
    Panel, //test
  },
};
</script>
