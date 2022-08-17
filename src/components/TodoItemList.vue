<!--
 * @Author: 
 * @Date: 2022-08-17 15:03:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-17 20:01:08
 * @Description: 
-->
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
            @click="getFilterTodoListShow('all')">全部</el-button>
          <el-button size="mini"
            @click="getFilterTodoListShow('completed')">已完成</el-button>
          <el-button size="mini"
            @click="getFilterTodoListShow('todo')">待完成</el-button>
        </div>
      </div>
    </div>
    <TodoItem v-for="item in todoList"
      v-show="item.isShow"
      :key="item.id"
      :item="item"
      @change-edit-status="changeEditStatus"
      :isOtherItemEditingStatus="isOtherItemEditingStatus"></TodoItem>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import TodoItem from "@/components/TodoItem.vue";

@Component({
  components: {
    TodoItem,
  },
})
export default class extends Vue {
  @Prop({ default: [] }) todoList!: any;

  /** 当处于编辑状态时，其他列表不得再进行编辑，确保唯一性 */
  isOtherItemEditingStatus = false;

  /** 剩余未完成的项目数量 */
  get remainItemNum() {
    return this.todoList.filter((item: any) => {
      return !item.isCompleted;
    }).length;
  }

  /** 代办事项的完成进度条 */
  get percentage() {
    let finished = this.todoList.filter((item: any) => {
      return item.isCompleted;
    }).length;
    let all = this.todoList.length;
    return Math.floor((finished / all) * 100);
  }

  /**
   * @description: 根据完成代办事项的数量调整进度条
   * @param {*} percentage
   * @return {*}
   * @author:
   */
  setCompletionRatio(percentage: number) {
    return percentage === 100 ? "Yeah!" : `${percentage}%`;
  }
  changeEditStatus(status: boolean) {
    this.isOtherItemEditingStatus = status;
    console.log("发生了", this.isOtherItemEditingStatus);
  }

  getFilterTodoListShow(status: string) {
    let obj: any = {
      all: "all",
      completed: true,
      todo: false,
    };
    this.todoList.forEach((item: any) => {
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
}
</script>

<style scoped lang="scss">
.box {
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
</style>
