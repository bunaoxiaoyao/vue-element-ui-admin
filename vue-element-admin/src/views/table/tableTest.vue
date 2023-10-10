<!-- eslint-disable vue/valid-template-root -->
<template>
  <dev>
    <div>
      <el-table
        ref="filterTable"
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column
          prop="date"
          label="日期"
          sortable
          width="180"
          column-key="date"
          :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
          :filter-method="filterHandler"
        />
        <el-table-column
          prop="name"
          label="姓名"
          width="180"
        />
        <el-table-column
          prop="title"
          label="标题"
        />
        <el-table-column
          prop="description"
          label="描述"
        />
        <el-table-column
          prop="tag"
          label="标签"
          width="100"
          :filters="[{ text: '臭狗', value: '狗' }, { text: '哈鸡米', value: '猫' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
        >
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.tag === '家' ? 'primary' : 'success'"
              disable-transitions
            >{{ scope.row.tag }}</el-tag>
          </template>
        </el-table-column>
      </el-table>
      <el-button @click="clicked">请求</el-button>
    </div></dev>
</template>

<script>
import { myExample } from '@/api/Task'
export default {
  name: 'TableTast',
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    clicked() {
      var data = {
        name: '小妖',
        title: 'EMO了',
        description: '李安健的故事',
        Tag: '哈鸡米'
      }
      myExample(data).then(ref => {
        if (ref) {
          this.tableData = ref.tableDataDtos
        }
      })
    },
    resetDateFilter() {
      this.$refs.filterTable.clearFilter('date')
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter()
    },
    filterTag(value, row) {
      return row.tag === value
    },
    filterHandler(value, row, column) {
      const property = column['property']
      return row[property] === value
    }
  }
}
</script>
