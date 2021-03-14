<script>
  import { createEventDispatcher } from "svelte";
  import Movie from "./Movie.svelte";
  export let page;
  export let inputData;
  export let movies = [];

  const dispatch = createEventDispatcher();

  function handleInputChange() {
    movies = [];
    page = 1;
    dispatch("handleInputChange");
  }

  function handleScroll(e) {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollTop !== 0) {
      if (scrollHeight - Math.floor(scrollTop) === clientHeight) {
        page = page + 1;
      }
    }
  }
</script>

<div class="RootMovieListWrapper">
  <div class="MovieListWrapper">
    <p class="SearchText">Search</p>
    <input
      class="MovieListInput"
      type="text"
      bind:value={inputData}
      on:change={handleInputChange}
    />
    <div class="List" on:scroll={handleScroll}>
      {#each movies as movieList}
        <Movie
          on:handleClick
          title={movieList.Title}
          year={movieList.Year}
          poster={movieList.Poster}
        />
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .RootMovieListWrapper {
    box-shadow: 0px 2px 9px -2px gray;
    width: 248px;
    height: 375px;
    border-radius: 10px;
    background-color: white;
    display: inline-block;
  }
  .MovieListWrapper {
    padding: 12px;
  }
  .SearchText {
    color: gray;
    font-weight: 650;
    margin: auto;
  }
  .MovieListInput {
    padding-left: 8px;
    width: 206px;
    height: 25px;
    margin-top: 8px;
    border: 0.8px solid;
    border-radius: 3px;
    border-color: #e2dcdc;
    color: #807b7b;
    outline-style: none;
  }
  .List {
    height: 300px;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 5px;
      height: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #5f5f5f;
      border-radius: 5px;
    }
    &::-webkit-scrollbar-track {
      background-color: white;
      margin-top: 15px;
    }
  }
</style>
