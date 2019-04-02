var app = new Vue({
  el: '#app',
  data: {
    platform: "PC",
    search: '',
    info: [],
    url: "https://n9e5v4d8.ssl.hwcdn.net/repos/weeklyRivensPC.json"
  },
  methods: {
    loadPC: function() {
      this.platform = "PC"
      this.info = []
      this.url = "https://n9e5v4d8.ssl.hwcdn.net/repos/weeklyRivensPC.json"
      axios.get(this.url).then(response => (this.info = response.data))
    },
    loadPS4: function() {
      this.platform = "PS4"
      this.info = []
      this.url = "https://n9e5v4d8.ssl.hwcdn.net/repos/weeklyRivensPS4.json"
      axios.get(this.url).then(response => (this.info = response.data))
    },
    loadXB1: function() {
      this.platform = "Xbox One"
      this.info = []
      this.url = "https://n9e5v4d8.ssl.hwcdn.net/repos/weeklyRivensXB1.json"
      axios.get(this.url).then(response => (this.info = response.data))
    },
    loadSwitch: function() {
      this.platform = "Switch"
      this.info = []
      this.url = "https://n9e5v4d8.ssl.hwcdn.net/repos/weeklyRivensSWI.json"
      axios.get(this.url).then(response => (this.info = response.data))
    }
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
