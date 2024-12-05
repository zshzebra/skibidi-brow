<script lang="ts">
  let count: number = 0;
  count = parseInt(localStorage.getItem("popupCount") ?? "0");

  setInterval(() => {
    localStorage.setItem("popupCount", count.toString())
  }, 500);
  
  const increment = () => {
    count++;
  }
</script>

<button on:click={increment}>
  count is {count}
</button>
