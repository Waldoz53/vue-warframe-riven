var app = new Vue({
  el: '#app',
  data: {
    info: '',
    url: "http://n9e5v4d8.ssl.hwcdn.net/repos/weeklyRivensPC.json"
  },
  methods: {

  },
  mounted() {
    axios
      .get(this.url)
      .then(response => (this.info = response.data))
  }
})
