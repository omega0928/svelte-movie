<script>
  export let selectData;
</script>

<div class="SelectdMovieRootWrapper">
  <div class="PosterWrapper">
    <img class="PosterImg" src={selectData?.Poster} alt="no" />
    <p class="GenreText">{selectData?.Genre}</p>
    <p class="RuntimeText">{selectData?.Runtime}</p>
  </div>
  <div class="Content">
    <h1 class="Title">{selectData?.Title}</h1>
    <div class="Rating">
      <span class="RatingText">{selectData?.imdbRating}</span>
    </div>
    <p class="YearText">{selectData?.Year}</p>
    <p class="PlotText">{selectData?.Plot}</p>
    <p class="DirectorWrapper">
      <span class="DirectorText">DIRECTOR:</span>
      {selectData?.Director}
    </p>
    <p class="WriterWrapper">
      <span class="WriterText">WRITER:</span>
      {selectData?.Writer}
    </p>
    <p class="ActorsWrapper">
      <span class="ActorsText">ACTORS:</span>
      {selectData?.Actors}
    </p>
  </div>
</div>

<style lang="scss">
  .SelectdMovieRootWrapper {
    overflow: auto;
    clear: both;
    box-shadow: 0px 2px 9px -2px gray;
    width: 550px;
    height: 375px;
    border-radius: 10px;
    background-color: white;
    display: inline-block;
    margin-left: 20px;
    position: absolute;
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
    ::after {
      clear: both;
    }
  }
  .PosterWrapper {
    float: left;
    width: 222px;
    height: 285px;
  }
  .PosterImg {
    width: 182px;
    height: 250px;
    padding: 20px;
  }
  .GenreText {
    margin-top: -9px;
    margin-left: 23px;
    color: gray;
    font-size: 11px;
  }
  .RuntimeText {
    margin-top: -3px;
    margin-left: 23px;
    color: gray;
    font-size: 11px;
  }
  .Content {
    float: right;
    width: 310px;
    height: 370px;
    margin-right: 10px;
  }
  .Title {
    color: gray;
    width: 230px;
    margin-top: 14px;
    margin-bottom: -18px;
  }
  .YearText {
    color: gray;
  }
  .PlotText {
    font-size: 14px;
    font-weight: 500;
    color: gray;
    margin-top: 35px;
  }
  .DirectorWrapper {
    font-size: 11px;
    color: gray;
  }
  .DirectorText {
    font-weight: bold;
  }
  .WriterWrapper {
    font-size: 11px;
    color: gray;
  }
  .WriterText {
    font-weight: bold;
  }
  .ActorsWrapper {
    font-size: 11px;
    color: gray;
  }
  .ActorsText {
    font-weight: bold;
  }
  .Rating {
    width: 45px;
    height: 45px;
    background-color: #63c974;
    color: white;
    position: absolute;
    right: 20px;
    top: 20px;
    border-radius: 25px;
    display: flex;
  }
  .RatingText {
    font-size: 19px;
    color: white;
    margin: auto;
  }
</style>
