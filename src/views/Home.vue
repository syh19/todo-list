<!--
 * @Author: 
 * @Date: 2022-08-17 14:28:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-17 19:18:07
 * @Description: 
-->
<template>
  <div class="home">
    <TitleItem title=""></TitleItem>
    <HeaderItem @add-item="addItem"></HeaderItem>
    <TodoItemList :todoList="todoList"></TodoItemList>
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

  addItem(item: Item) {
    this.todoList.push(item);
    console.log(item)
    console.log(this.todoList)
  }
}
</script>
