<template>
  <div class="box">
    <div class="todo">
      <el-progress :percentage="percentage ? percentage : 0"
        :format="setCompletionRatio"></el-progress>
      <div class="todo-info">
        <span>
          还剩 {{remainItemNum}} 项
        </span>
        <div class="btn">
          <el-button size="mini"
            type="primary"
            @click="getFilterTodoListShow('all')">全部</el-button>
          <el-button size="mini"
            type="success"
            @click="getFilterTodoListShow('completed')">已完成</el-button>
          <el-button size="mini"
            type="warning"
            @click="getFilterTodoListShow('todo')">待完成</el-button>
        </div>
      </div>
    </div>
    <TodoItem v-for="item in localTodoList"
      v-show="item.isShow"
      :key="item.id"
      :item="item"
      @change-edit-status="changeEditStatus"
      :isOtherItemEditingStatus="isOtherItemEditingStatus"
      @delete-item="deleteItem"></TodoItem>
    <el-button v-show="hasCompletedItem"
      class="bottom-delete-btn"
      @click="deleteAllCompletedItems"
      type="success"
      round>删除已完成</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import TodoItem from "@/components/TodoItem.vue";

@Component({
  components: {
    TodoItem,
  },
})
export default class extends Vue {
  // --------------------------Prop--------------------------
  @Prop({ default: [] }) todoList!: any;
  // --------------------------data--------------------------
  localTodoList: any = [];

  /** 当处于编辑状态时，其他列表不得再进行编辑，确保唯一性 */
  isOtherItemEditingStatus = false;

  /** 是否存在已经完成的项目 */
  hasCompletedItem = false;

  // --------------------------get--------------------------
  /** 剩余未完成的项目数量 */
  get remainItemNum() {
    return this.localTodoList.filter((item: any) => {
      return !item.isCompleted;
    }).length;
  }

  /** 代办事项的完成进度条 */
  get percentage() {
    let finished = this.localTodoList.filter((item: any) => {
      return item.isCompleted;
    }).length;
    let all = this.localTodoList.length;
    return Math.floor((finished / all) * 100);
  }
  // --------------------------watch--------------------------
  @Watch("todoList")
  onTodoListChanged(newVal: [], oldVal: []) {
    this.localTodoList = [...this.localTodoList, newVal[newVal.length - 1]];
  }
  @Watch("localTodoList", { deep: true })
  onLocalTodoListChanged(newVal: [], oldVal: []) {
    // 判断是否有的项目已经完成了，如果有则显示底部的删除全部已完成按钮
    this.hasCompletedItem = false;
    this.localTodoList.forEach((item: any) => {
      if (item.isCompleted === true) {
        this.hasCompletedItem = true;
      }
    });
  }

  // --------------------------methods--------------------------

  /**
   * @description: 根据完成代办事项的数量调整进度条
   * @param {*} percentage 完成百分比
   * @return {*}
   * @author:
   */
  setCompletionRatio(percentage: number): string | number {
    return percentage === 100 ? "Yeah!" : `${percentage}%`;
  }

  /**
   * @description: 改变单项的编辑状态，只要有一项正处于编辑状态，其他项目则无法再进行编辑，确保唯一性
   * @param {*} status
   * @return {*}
   * @author:
   */
  changeEditStatus(status: boolean) {
    this.isOtherItemEditingStatus = status;
  }

  /**
   * @description: 根据状态对列表进行过滤展示
   * @param {*} status 全部 已完成 待完成
   * @return {*}
   * @author:
   */
  getFilterTodoListShow(status: string) {
    let obj: any = {
      all: "all",
      completed: true,
      todo: false,
    };
    this.localTodoList.forEach((item: any) => {
      item.isShow = false;
      if (status === "all") {
        item.isShow = true;
      } else {
        if (item.isCompleted === obj[status]) {
          item.isShow = true;
        }
      }
    });
  }

  /**
   * @description: 删除项目
   * @param {*} id
   * @return {*}
   * @author:
   */
  deleteItem(id: string) {
    this.localTodoList = this.localTodoList.filter((item: any) => {
      return item.id !== id;
    });
  }

  deleteAllCompletedItems() {
    this.localTodoList = this.localTodoList.filter((item: any) => {
      return item.isCompleted !== true;
    });
  }
}
</script>

<style scoped lang="scss">
.box {
  position: relative;
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  padding: 5px 10px 5px 10px;
}
.todo-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 40px;
}
.bottom-delete-btn {
  width: 300px;
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
