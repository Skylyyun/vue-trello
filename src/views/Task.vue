<template>
  <div class="task-view">
    <div class="flex flex-col flex-grow items-start justify-between px-4 font-bold">
      {{ task.name }}
      <textarea 
        class="relative bg-transparent px-2 border mt-2 h-64 border-none leading-normal"
        :value="task.description" 
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// 测试
export default {
  computed: {
    ...mapGetters(['getTask']),
    task() {
      return this.getTask(this.$route.params.id)
    }
  }
}
</script>

<style>
.task-view {
  @apply relative flex flex-row bg-white pin mx-4 m-32 mx-auto py-4 text-left rounded shadow;
  max-width: 700px;
}
</style>
