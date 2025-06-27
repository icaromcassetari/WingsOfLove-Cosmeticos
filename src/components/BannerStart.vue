<script setup>
import produto1 from '../assets/imagens/produto-hero1.png'
</script>
<template>
  <section>
    <div class="columns is-desktop">
      <div class="column">
        <section class="hero is-dark is-fullheight-with-navbar">
          <div class="hero-body">
            <div class="">
              <p class="title is-1">
                <span class="is-color-red">❤</span> Wings Of Love
                <span class="is-color-red">❤</span>
              </p>
              <hr width="20%" class="is-hr-red" />
              <p class="title is-4">
                Sinta esse cheiro de <strong><span class="is-color-red">AMOR</span></strong> no ar.
                <br />
                E encontre a fragrâncias que mais combina com você.
              </p>
              <!-- <p class="subtitle">
                Sinta esse cheiro de <strong><span class="is-color-red">AMOR</span></strong> no ar
              </p> -->
            </div>
          </div>
        </section>
      </div>
      <div class="column">
        <section class="">
          <div class="hero-body">
            <div class="columns">
              <div class="column is-6">
                <div class="card is-border-red">
                  <div class="card-image">
                    <figure class="image">
                      <img :src="produto1" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div class="card-content is-bg-dark">
                    <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing</div>
                  </div>
                </div>
              </div>
              <div class="column is-6">
                <div class="card is-border-red">
                  <div class="card-image">
                    <figure class="image">
                      <img :src="produto1" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div class="card-content is-bg-dark">
                    <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-6">
                <div class="card is-border-red">
                  <div class="card-image">
                    <figure class="image">
                      <img :src="produto1" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div class="card-content is-bg-dark">
                    <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing</div>
                  </div>
                </div>
              </div>
              <div class="column is-6">
                <div class="card is-border-red">
                  <div class="card-image">
                    <figure class="image">
                      <img :src="produto1" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div class="card-content is-bg-dark">
                    <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>
