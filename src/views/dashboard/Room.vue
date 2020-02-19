<template>
  <div>
    <a-table class="nt-table" :columns="columns" :dataSource="this.users" bordered rowKey="id" >
      <template
        v-for="col in ['first_name', 'email']"
        :slot="col"
        slot-scope="text, record"
      >
        <div :key="col">
          <a-input
            v-if="record.editable"
            style="margin: -5px 0"
            :value="text"
            @change="e => handleChange(e.target.value, record.key, col)"
          />
          <template v-else
          >{{text}}</template
          >
        </div>
      </template>
      <template slot="operation" slot-scope="text, record">
        <div class="editable-row-operations">
        <span v-if="record.editable">
          <a @click="() => save(record.key)">Save</a>
          <a-popconfirm title="Sure to cancel?" @confirm="() => cancel(record.key)">
            <a>Cancel</a>
          </a-popconfirm>
        </span>
          <span v-else>
          <a @click="() => edit(record.key)">Edit</a>
        </span>
        </div>
      </template>
      <template slot="delete" slot-scope="text, record">
        <a-popconfirm
          v-if="users.length"
          title="Sure to delete?"
          @confirm="() => onDelete(record.key)"
        >
          <a href="javascript:;">Delete</a>
        </a-popconfirm>
      </template>
    </a-table>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'

  const columns = [
    {
      title: 'first_name',
      dataIndex: 'first_name',
      width: '25%',
      scopedSlots: { customRender: 'first_name' },
    },
    {
      title: 'email',
      dataIndex: 'email',
      width: '40%',
      scopedSlots: { customRender: 'email' },
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      scopedSlots: { customRender: 'operation' },
    },
    {
      title: 'delete',
      dataIndex: 'delete',
      scopedSlots: { customRender: 'delete' },
    },
  ]

  export default {
    data () {
      // this.cacheData = data.map(item => ({ ...item }))
      return {
        columns,
      }
    },
    mounted () {
      this.getUsers()
    },
    computed: {
      ...mapState('dashboard', { users: 'users' })
    },
    methods: {
      ...mapActions('dashboard', ['getUsers']),
      handleChange (value, key, column) {
        const newData = [...this.data]
        const target = newData.filter(item => key === item.key)[0]
        if (target) {
          target[column] = value
          this.data = newData
        }
      },
      onDelete (key) {
        const data = [...this.data]
        this.data = data.filter(item => item.key !== key)
      },
      edit (key) {
        const newData = [...this.data]
        const target = newData.filter(item => key === item.key)[0]
        if (target) {
          target.editable = true
          this.data = newData
        }
      },
      save (key) {
        const newData = [...this.data]
        const newCacheData = [...this.cacheData]
        const target = newData.filter(item => key === item.key)[0]
        const targetCache = newCacheData.filter(item => key === item.key)[0]
        if (target && targetCache) {
          delete target.editable
          this.data = newData
          Object.assign(
            targetCache,
            target
          )
          this.cacheData = newCacheData
        }
      },
      cancel (key) {
        const newData = [...this.data]
        const target = newData.filter(item => key === item.key)[0]
        if (target) {
          Object.assign(target, this.cacheData.filter(item => key === item.key)[0])
          delete target.editable
          this.data = newData
        }
      },
    },
  }
</script>
<style scoped>
  .editable-row-operations a {
    margin-right: 8px;
  }
</style>
