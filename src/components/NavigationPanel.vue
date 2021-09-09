<template>
  <Timeline :value="items" align="right" class="customized-timeline">
    <template #marker="slotProps">
      <Avatar
        :icon="
          slotProps.item.checkeds.length > 0
            ? `pi pi-check circle-check`
            : `pi pi-times circle-times`
        "
        :style="
          slotProps.item.checkeds.length > 0
            ? `background-color: var(--green-500)`
            : `background-color: var(--gray-300)`
        "
        size="small"
        shape="circle"
      />
    </template>
    <template #content="slotProps">
      <small class="p-text-secondary">{{ slotProps.item.text }}</small>
    </template>
  </Timeline>
</template>

<script>
import Timeline from "primevue/timeline";
import Avatar from "primevue/avatar";

export default {
	setup() {
	},
	name: "NavigationPanel",
	components: {
		Timeline,
		Avatar,
	},
	props: {
		items: Array
	}
};
</script>

<style>
.circle-check {
  color: var(--gray-100);
}

.circle-times {
  color: var(--gray-500);
}
</style>
