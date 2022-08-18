// import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
// import store from './index'

// @Module({ dynamic: true, store, name: 'mymod' })
// export default class TodoItemModule extends VuexModule {
//   /** 当处于编辑状态时，其他列表不得再进行编辑，确保唯一性 */
//   isEditingStatus: boolean = false

//   @Mutation
//   changeEditingStatus(status: boolean) {
//     this.isEditingStatus = !this.isEditingStatus
//   }
// }