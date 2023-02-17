<template>
  <q-page padding>
    <div >
      <q-table
        flat
        title="Data Users"
        :rows="rows"
        :filter="filter"
        :columns="columns"
        :pagination="pagination"
      >
        <template v-slot:body="props" >
          <q-tr>
            <q-td key="username">
              {{ props.row.username }}
            </q-td>
            <q-td key="email" :props="props">
              {{ props.row.email }}
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>


<script>
import { ref } from 'vue'
const columns = [
  { name: 'username', align: 'center', label: 'Username', field: 'username', sortable: true },
  { name: 'email', label: 'Email', field: 'email', sortable: true },
]

export default {
  data () {
    return {
      columns,
      rows : [],
      filterData: null,
      pagination: {
        sortBy: "desc",
        descending: false,
        page: 1,
        rowsPerPage: 10                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ,
      }
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      try {
      this.$api.get('user/getalluser').then(res => {

          this.rows = res.data.data
          console.log(res.data.data)
          console.log(this.rows)
        //
        //    console.log(this.rows)
      })
      } catch (e) {
        console.error(e)
        // this.$showNotif('Terjadi kesalahan !', 'negative')
      }
    },
  },
}
</script>
