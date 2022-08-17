<!--
 * @Author: 
 * @Date: 2022-08-17 15:02:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-17 19:55:51
 * @Description: 
-->
<template>
  <div class="box">
    <i class="el-icon-circle-check"
      v-if="false"></i>
    <el-checkbox v-model="isCompleted"
      v-else></el-checkbox>
    <el-input v-model="input"
      placeholder="请输入待办事项"
      @keyup.enter.native="addItem"></el-input>
  </div>
</template>

<script lang="ts">
import { Component, Vue,Emit } from "vue-property-decorator";
import { randomString } from "@/utils/util";

@Component({
  components: {},
})
export default class extends Vue {
  isCompleted = false;
  input: string = "";

  /**
   * @description: 添加代办事项
   * @return {*}
   * @author:
   */
  @Emit("add-item")
  addItem() {
    let item = {
      // id:uuid()
      id: randomString(),
      isCompleted:false,
      isShow:true,
      content:this.input
    };
    this.input = ""
    return item
  }
}
</script>
<style scoped lang="scss">
.box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  padding: 5px 10px 5px 10px;
  // .el-checkbox {
  //   ::v-deep .el-checkbox__inner {
  //     width: 20px;
  //     height:20px;
  //   }
  // }

  .el-input {
    margin-left: 30px;
  }
}
</style>