var app = new Vue({
  el: '#app',
  data: {
    platform: "PC",
    search: '',
    info: [],
    url: "https://n9e5v4d8.ssl.hwcdn.net/repos/weeklyRivensPC.json",
    sortPop: true,
    sortMax: true,
    sortMin: true,
    sortStdDev: true,
    sortAvg: true
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
    },
    sortByPop: function() {
      if (this.sortPop == true) {
        this.info.sort((a, b) => (a.pop > b.pop) ? 1 : -1)
        this.info.reverse()
        this.sortPop = false
      } else {
        this.info.sort((a, b) => (a.pop > b.pop) ? 1 : -1)
        this.sortPop = true
      }
    },
    sortByMax: function() {
      if (this.sortMax == true) {
        this.info.sort((a, b) => (a.max > b.max) ? 1 : -1)
        this.info.reverse()
        this.sortMax = false
      } else {
        this.info.sort((a, b) => (a.max > b.max) ? 1 : -1)
        this.sortMax = true
      }
    },
    sortByMin: function() {
      if (this.sortMin == true) {
        this.info.sort((a, b) => (a.min > b.min) ? 1 : -1)
        this.info.reverse()
        this.sortMin = false
      } else {
        this.info.sort((a, b) => (a.min > b.min) ? 1 : -1)
        this.sortMin = true
      }
    },
    sortByStdDev: function() {
      if (this.sortStdDev == true) {
        this.info.sort((a, b) => (a.stddev > b.stddev) ? 1 : -1)
        this.info.reverse()
        this.sortStdDev = false
      } else {
        this.info.sort((a, b) => (a.stddev > b.stddev) ? 1 : -1)
        this.sortStdDev = true
      }
    },
    sortByAvg: function() {
      if (this.sortAvg == true) {
        this.info.sort((a, b) => (a.avg > b.avg) ? 1 : -1)
        this.info.reverse()
        this.sortAvg = false
      } else {
        this.info.sort((a, b) => (a.avg > b.avg) ? 1 : -1)
        this.sortAvg = true
      }
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
