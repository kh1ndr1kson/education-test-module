<template>
  <div>
    <Panel :header="i + ` Header`" v-for="i in 5" :key="i">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua?
      </p>
    </Panel>
  </div>
</template>

<script>
import Panel from "primevue/panel";

export default {
  setup() {},
  components: {
    Panel,
  },
};
</script>
