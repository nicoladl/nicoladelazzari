<template>
  <div class="js-scroller">
    <!-- intro -->
    <section class="section section__plain row">
      <div class="col-xs-12">
        <h1 class="title">
          <span class="title__row">Nicola</span>
          <span class="title__row">De Lazzari</span>
          <span class="title__row">Swiss</span>
          <span class="title__row">Portfolio</span>
        </h1>
      </div>
    </section>

    <!-- bio -->
    <section class="section row end-xs">
      <div class="col-xs-9">
        <div class="text">Nicola De Lazzari is a frontend developer specialized in javascript development. He works for the most important swiss agencies.</div>
      </div>
    </section>

    <!-- cv -->
    <section class="section">
      <ul>
        <li class="row">
          <div class="col-xs-3">
            <div class="text">2017 - Present</div>
          </div>
          <div class="col-xs-9">
            <div class="text">Octoplus Group</div>
          </div>
        </li>
        <li class="row">
          <div class="col-xs-3">
            <div class="text">2011 - 2017</div>
          </div>
          <div class="col-xs-9">
            <div class="text">AKQA</div>
          </div>
        </li>
      </ul>
    </section>

    <!-- works -->
    <section class="section">
      <ul>
        <li class="row">
          <div class="col-xs-3">
            <div class="text">2018</div>
          </div>
          <div class="col-xs-9">
            <div class="project">
              <p class="text">Durisch+Nolli</p>
              <img class="project__image" src="https://source.unsplash.com/random/600x600?architect" alt="Mistretta" />
            </div>
          </div>
        </li>
        <li class="row">
          <div class="col-xs-3">
            <div class="text">2017</div>
          </div>
          <div class="col-xs-9">
            <div class="project">
              <p class="text">Mistretta</p>
              <img class="project__image" src="https://source.unsplash.com/random/600x600?coiffure" alt="Mistretta" />
            </div>
            <div class="project">
              <p class="text">Axure Broker</p>
              <img class="project__image" src="https://source.unsplash.com/random/600x600?finance" alt="Mistretta" />
            </div>
            <div class="project">
              <p class="text">Charly Zenger</p>
              <img class="project__image" src="https://source.unsplash.com/random/600x600?jewellery" alt="Mistretta" />
            </div>
          </div>
        </li>
        <li class="row">
          <div class="col-xs-3">
            <div class="text">2016</div>
          </div>
          <div class="col-xs-9">
            <div class="project">
              <p class="text">H-Farm</p>
              <img class="project__image" src="https://source.unsplash.com/random/600x600?farm" alt="Mistretta" />
            </div>
          </div>
        </li>
      </ul>
    </section>

    <!-- awards -->
    <section class="section">
      <ul>
        <li class="row">
          <div class="col-xs-3 no-padding-right">
            <div class="text text__right"><br />2</div>
          </div>
          <div class="col-xs-9">
            <div class="text">Awwwards<br />Mobile exellence</div>
          </div>
        </li>
        <li class="row">
          <div class="col-xs-3 no-padding-right">
            <div class="text text__right"><br />2</div>
          </div>
          <div class="col-xs-9">
            <div class="text">Awwwards<br />Mobile exellence</div>
          </div>
        </li>
      </ul>
    </section>

    <!-- contact -->
    <section class="section">
      <ul>
        <li class="row">
          <div class="col-xs-3 no-padding-right">
            <div class="text text__right">Social</div>
          </div>
          <div class="col-xs-9">
            <div class="text">github</div>
            <div class="text">twitter</div>
            <div class="text">linkedin</div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
  mounted() {
    this.$scroll()
  }
}
</script>
