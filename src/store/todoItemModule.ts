/*
 * @Author: 
 * @Date: 2022-08-17 17:49:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-17 18:02:00
 * @Description: 
 */
import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import store from './index'

@Module({ dynamic: true, store, name: 'mymod' })
export default class TodoItemModule extends VuexModule {
  /** 当处于编辑状态时，其他列表不得再进行编辑，确保唯一性 */
  isEditingStatus: boolean = false

  @Mutation
  changeEditingStatus(status: boolean) {
    this.isEditingStatus = !this.isEditingStatus
  }
}