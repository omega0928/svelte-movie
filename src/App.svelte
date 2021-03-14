<svelte:options immutable={true} />

<script>
  import api from "./api/movieApis";
  import MovieList from "./components/MovieList.svelte";
  import SelectdMovie from "./components/SelectedMovie.svelte";

  let inputData = "";
  let selectData = null;
  let page = 1;
  let movies = [];

  $: {
    if (page > 1) {
      page, movieList();
    }
  }

  const movieList = async () => {
    const data = await api.fetchMovieList(page, inputData);
    movies = [...movies, ...data];
  };

  const selectedMovie = async (e) => {
    const selectTitle = e.detail;
    const data = await api.fetchMovieSelect(selectTitle);
    selectData = data;
  };
</script>

<div class="rootwrapper">
  <div class="moviewrapper">
    <h1 class="title">OMDB Frontend</h1>
    <MovieList
      bind:movies
      bind:inputData
      bind:page
      on:handleInputChange={movieList}
      on:handleClick={selectedMovie}
    />
    {#if selectData}
      <SelectdMovie {selectData} />
    {/if}
  </div>
</div>

<style>
  .rootwrapper {
    background-color: #f0f2f3;
    height: 720px;
    position: relative;
  }
  .moviewrapper {
    position: absolute;
    top: 17%;
    left: 25%;
  }
  .title {
    color: gray;
  }
</style>
