<template>
  <Timeline :value="events" align="right" class="customized-timeline">
    <template #marker="slotProps">
      <Avatar
        :icon="
          slotProps.item.checked
            ? `pi pi-check circle-check`
            : `pi pi-times circle-times`
        "
        size="small"
        shape="circle"
        :style="
          slotProps.item.checked
            ? `background-color: var(--green-500)`
            : `background-color: var(--gray-300)`
        "
      />
    </template>
    <template #content="slotProps">
      <small class="p-text-secondary">{{ slotProps.item.status }}</small>
    </template>
  </Timeline>
</template>

<script>
import Timeline from "primevue/timeline";
import Avatar from "primevue/avatar";

export default {
  name: "NavigationPanel",
  data() {
    return {
      events: [
        {
          status: "Ordered",
          date: "15/10/2020 10:30",
          color: "#9C27B0",
          checked: true,
        },
        {
          status: "Processing",
          date: "15/10/2020 14:00",
          color: "#673AB7",
          checked: false,
        },
        {
          status: "Shipped",
          date: "15/10/2020 16:15",
          color: "#FF9800",
          checked: false,
        },
        {
          status: "Delivered",
          date: "16/10/2020 10:00",
          color: "#607D8B",
          checked: false,
        },
      ],
    };
  },
  components: {
    Timeline,
    Avatar,
  },
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
