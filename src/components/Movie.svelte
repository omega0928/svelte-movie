<script>
  import { createEventDispatcher } from "svelte";
  export let title = "";
  export let year = "";
  export let poster = "";

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch("handleClick", title);
  }
</script>

<div class="MovieWrapper">
  <img class="MovieImg" src={poster} alt="no" />
  <p class="MovieTitle" on:click={handleClick}>{title}</p>
  <p class="MovieYear">{year}</p>
</div>

<style lang="scss">
  .MovieWrapper {
    margin-bottom: -9px;
    height: 52px;
  }
  .MovieWrapper:hover {
    background-color: #cfd9e8;
  }
  .MovieImg {
    width: 32px;
    height: 45px;
    float: left;
    margin-right: 13px;
    margin-top: 3px;
    margin-left: 5px;
  }
  .MovieTitle {
    line-height: 1;
    margin-bottom: -5px;
    font-size: 16px;
    font-weight: 400;
    color: gray;
    cursor: pointer;
  }
  .MovieYear {
    font-size: 12px;
    color: gray;
  }
</style>
