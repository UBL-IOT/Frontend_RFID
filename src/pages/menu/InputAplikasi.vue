<template>
  <div class="row" style="height: 90vh">
        <div class="col-md-12 col-sm-12 col-xl-12 col-xs-12 q-pa-md" unelevated>
        <q-card flat bordered>
            <q-card-section>
            <q-form
                @submit="onSubmit"
                @reset="onReset"
                class="q-gutter-sm">
                <q-input label="Nama Aplikasi" v-model="nama"
                :rules="[ val => val && val.length > 0 || 'Lengkapi nama aplikasi']"
                >
                </q-input>
                <q-input label="Deskripsi" v-model="deskripsi"
                :rules="[ val => val && val.length > 0 || 'Lengkapi deskripsi']"
                >
                </q-input>
                <q-file
                    v-model="image"
                    label="image Aplikasi"
                >
                    <template v-slot:prepend>
                        <q-icon name="attach_file" />
                    </template>
                </q-file>
                <q-input label="Versi Aplikasi" v-model="versi"
                :rules="[ val => val && val.length > 0 || 'Lengkapi versi aplikasi']"
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
      nama: null,
      deskripsi: null,
      image: null,
      versi : null,
      
    }
  },
  methods: {
    onSubmit () {
      try {
      const formData = new FormData()
      formData.append('image', this.image)
      formData.append('data', JSON.stringify({
        nama: this.nama,
        deskripsi: this.deskripsi,
        versi: this.versi,
      }))
      this.$api.post('aplikasi/input', formData).then(res => {
        console.log(res.data)
        if (res.data.code === 404) {
            this.$showNotif('File Harus Berbenruk Gambar', 'negative')
        }
        else if (res.data.code === 200) {
          this.$showNotif('Berhasil Upload!', 'positive')
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
    onReset () {
      this.email = null
      this.password = null
    }
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
