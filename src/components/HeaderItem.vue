<template>
  <div class="header-item-box">
    <i class="el-icon-circle-check"
      v-if="!todoListLength"></i>
    <el-checkbox v-model="isAllCompleted"
      @change="changeAllStatus"
      v-else></el-checkbox>
    <el-input v-model="input"
      placeholder="请输入待办事项"
      @keyup.enter.native="addItem"></el-input>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from "vue-property-decorator";
import { randomString } from "@/utils/util";

@Component({
  components: {},
})
export default class extends Vue {
  @Prop() todoListLength!: number;
  isAllCompleted = false;
  input: string = "";

  /**
   * @description: 添加代办事项
   * @return {*}
   * @author:
   */
  // @Emit("add-item")
  addItem() {
    let item = {
      // id:uuid()
      id: randomString(),
      isCompleted: false,
      isShow: true,
      content: this.input,
    };
    this.input = "";
    // return item;
    if (item.content.trim() !== "") {
      this.$emit("add-item", item);
    }
  }

  @Emit("change-all-status")
  changeAllStatus(status: boolean) {
    return status;
  }
}
</script>
<style scoped lang="scss">
.header-item-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  padding: 5px 10px 5px 10px;
  .el-checkbox {
    zoom: 130%;
  }

  .el-input {
    margin-left: 10px;
  }
}
</style>