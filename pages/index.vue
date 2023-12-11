<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" class="d-flex justify-center text-h3">
          GuntherKroth.com
        </v-col>
        <v-col cols="12">
          <v-card>
            <v-card-title>My Links</v-card-title>
            <v-card-text>
              <v-list>
                <v-list-item
                  @click="openNewTab('https://www.linkedin.com/in/gkroth/')"
                >
                  LinkedIn
                </v-list-item>
                <v-list-item
                  @click="openNewTab('https://github.com/goosebones')"
                >
                  GitHub
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <!-- <v-footer app>
        <div>
          For some nostalgia check out the first real web page I made back in
          2012:
          <NuxtLink to="/game">The Circle Game</NuxtLink>
        </div>
      </v-footer> -->
    </v-container>
  </div>
</template>

<script>
export default {
  methods: {
    openNewTab(link) {
      window.open(link, "_blank");
    },
  },
};
</script>
