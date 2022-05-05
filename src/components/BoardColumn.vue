<template>
  <div
    class="column"
    draggable
    @dragstart.self="pickUpColumn($event, columnIndex)"
    @dragover.prevent
    @dragenter.prevent
    @drop="moveTaskOrColumn($event, column.tasks, columnIndex)"
  >
    <div class="flex items-center mb-2 font-bold">
      {{ column.name }}
    </div>
    <div class="list-reset">
      <ColumnTask
        v-for='(task, $taskIndex) of column.tasks'
        :key="$taskIndex"
        :task="task"
        :column="column"
        :taskIndex="$taskIndex"
        :columnIndex="columnIndex"
        :board="board"
      />
    </div>
    <input
      type="text"
      class="block p-2 w-full bg-transparent"
      placeholder="+ Enter new task"
      @keyup.enter="createTask($event, column.tasks)"
    />
  </div>
</template>

<script>
import ColumnTask from "./ColumnTask.vue"
import movingTasksAndColumnsMixin from "../mixins/movingTasksAndColumnsMixin"

export default {
  components: {
    ColumnTask
  },
  mixins: [movingTasksAndColumnsMixin],
  methods: {
    createTask (e, tasks) {
      this.$store.commit('CREATE_TASK', {
        tasks,
        name: e.target.value
      })
      // clean the last input
      e.target.value = ''
    },
    pickUpColumn (e, fromColumnIndex) {
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.dropEffect = 'move'

      e.dataTransfer.setData('from-column-index', fromColumnIndex)
      e.dataTransfer.setData('type', 'column')
    },
  }
}
</script>

<style lang='css'>
.column {
  @apply bg-grey-light p-2 mr-4 text-left shadow rounded;
  min-width: 350px;
}
</style>