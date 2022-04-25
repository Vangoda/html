const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  methods: {
    boxSelect(box) {
      switch (box) {
        case "A":
          this.boxASelected = !this.boxASelected;
          break;

        case "B":
          this.boxBSelected = !this.boxBSelected;
          break;

        case "C":
          this.boxCSelected = !this.boxCSelected;
          break;

        default:
          this.boxASelected = false;
          this.boxBSelected = false;
          this.boxCSelected = false;
          break;
      }
    },
  },
});

app.mount("#styling");
