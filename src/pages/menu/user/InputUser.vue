<template>
  <div class="row" style="height: 90vh">
        <div class="col-md-12 col-sm-12 col-xl-12 col-xs-12 q-pa-md" unelevated>
        <q-card flat bordered class="q-mb-xl">
            <q-card-section>
            <q-form
                @submit="onSubmit"
                class="q-gutter-sm">
                <q-input label="npp" v-model="npp"
                :rules="[ val => val && val.length > 0 || 'Lengkapi npp']"
                >
                </q-input>
                <q-input label="password" v-model="password" type="password"
                :rules="[ val => val && val.length > 0 || 'Lengkapi password']"
                >
                </q-input>
                <q-input label="group_akses" v-model="group_akses"
                :rules="[ val => val && val.length > 0 || 'Lengkapi password']"
                >
                </q-input>
                <q-input label="kode_unit" v-model="kode_unit"
                :rules="[ val => val && val.length > 0 || 'Lengkapi password']"
                >
                </q-input>
                <q-input label="nama" v-model="nama"
                :rules="[ val => val && val.length > 0 || 'Lengkapi password']"
                >
                </q-input>
                <q-input label="active" v-model="active"
                :rules="[ val => val && val.length > 0 || 'Lengkapi password']"
                >
                </q-input>
                <q-input label="passphrase" v-model="passphrase"
                :rules="[ val => val && val.length > 0 || 'Lengkapi password']"
                >
                </q-input>
                <q-input label="id_perusahaan" v-model="id_perusahaan"
                :rules="[ val => val && val.length > 0 || 'Lengkapi password']"
                >
                </q-input>
                <div>
                <!-- <q-btn type="reset"  outline rounded label="Reset Data" style="width:155px" class="items-center" unelevated color="primary" /> -->
                <!-- <q-btn color="primary" type="submit" label="Login" class="full-width"/>
                -->
                <q-btn type="submit" class="full-width" color="primary" label="Submit" unelevated />
                <div class="text-center q-mt-sm q-gutter-lg">
                    <!-- <router-link class="text-black" to="/login">Belum Punya Akun? <span class="text-bold">Daftar</span></router-link> -->
                </div>
                </div>
            </q-form>
            </q-card-section>
        </q-card>
        </div>
    </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { LocalStorage } from 'quasar'

export default {
  name: 'Login',
  data () {
    return {
      npp: null,
      password: null,
      group_akses: null,
      kode_unit: null,
      nama: null,
      active: null,
      passphrase: null,
      id_perusahaan: null,
    }
  },
  methods: {
    onSubmit () {
      try {
      this.$api.post('user/add_user', {
        npp: this.npp,
        password: this.password,
        group_akses: this.group_akses,
        kode_unit: this.kode_unit,
        nama: this.nama,
        active: this.active,
        passphrase: this.passphrase,
        id_perusahaan: this.id_perusahaan,
      }).then(res => {
        console.log(res.data)
        if (res.data.code === 200) {
          this.$showNotif('Berhasil Tambah User!', 'positive')
          // this.$router.push({ name: 'dashboard' })
          this.$router.push({ name: 'listUser' })
        } else {
          console.log('gagal')
          this.$showNotif('Gagal Upload', 'negative')
          // this.$router.go({ name: 'dashboard' })
        }
      })
      } catch (e) {
        console.error(e)
        // this.$showNotif('Terjadi kesalahan !', 'negative')
      }
    },
  },
}
</script>

<style scoped>
.wave {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}
</style>
