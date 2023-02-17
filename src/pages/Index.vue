<template>
  <q-page padding>
    <div >
      <q-table
        flat
        title="Data Kartu"
        :rows="rows"
        :filter="filter"
        :columns="columns"
        :pagination="pagination"
      >
        <template v-slot:body="props" >
          <q-tr>
            <q-td key="NO_KARTU" class="text-center">
              {{ props.row.NO_KARTU }}
            </q-td>
            <q-td key="ID_CARD" class="text-center">
              {{ props.row.ID_CARD }}
            </q-td>
            <q-td key="STATUS" class="text-center">
              {{ props.row.STATUS }}
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
  { name: 'NO_KARTU', align: 'Left', label: 'No Kartu', field: 'NO_KARTU' },
  { name: 'ID_CARD', align: 'Left', label: 'Id Card', field: 'ID_CARD' },
  { name: 'STATUS', align: 'Left', label: 'Status', field: 'STATUS' },
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
        rowsPerPage: 10,
      }
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      try {
      this.$api.get('card/getdatakartu').then(res => {

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
