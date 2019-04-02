var app = new Vue({
  el: '#app',
  data: {
    search: '',
    info: [],
    url: "https://n9e5v4d8.ssl.hwcdn.net/repos/weeklyRivensPC.json"
  },
  computed: {
    filteredItems: function() {
      return this.info.filter((item) => {
        if (item.compatibility != null) {
          return item.compatibility.match(this.search.toUpperCase())
        }
      });
    }
  },
  created() {
    axios.get(this.url).then(response => (this.info = response.data))
  }
})
