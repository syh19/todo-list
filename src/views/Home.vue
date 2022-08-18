<template>
  <div class="home">
    <title-item class="title"
      title="待办事项"></title-item>
    <header-item class="head"
      @add-item="addItem"
      @change-all-status="changeAllStatus"
      :todoListLength="todoList.length"></header-item>
    <todo-item-list class="todo"
      :todoList="todoList"></todo-item-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderItem from "@/components/HeaderItem.vue";
import TodoItemList from "@/components/TodoItemList.vue";
import TitleItem from "@/components/TitleItem.vue";

interface Item {
  id: string;
  isCompleted: boolean;
  isShow: true;
  content: string;
}

@Component({
  components: {
    HeaderItem,
    TodoItemList,
    TitleItem,
  },
})
export default class Home extends Vue {
  todoList: Item[] = [];

  /**
   * @description: HeaderItem组件添加后会调用该函数进行添加项目
   * @param {*} item
   * @return {*}
   * @author:
   */
  addItem(item: Item) {
    this.todoList.push(item);
  }

  /**
   * @description: 改变所有待办事项的状态
   * @param {*} status
   * @return {*}
   * @author:
   */
  changeAllStatus(status: boolean) {
    this.todoList.forEach((item) => {
      item.isCompleted = status;
    });
  }
}
</script>

<style lang="scss" scoped>
.home {
  max-width: 550px;
  min-width: 360px;
  margin: 0 auto;
  .head {
    margin-bottom: 15px;
  }
}
</style>