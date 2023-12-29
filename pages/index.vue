<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" class="d-flex justify-center text-h3">
          <div @click="open('/')">GuntherKroth.com</div>
        </v-col>
        <v-col v-for="list in lists" :key="list.title" cols="12">
          <v-card>
            <v-card-title>{{ list.title }}</v-card-title>
            <v-card-text>
              <v-list>
                <v-list-item
                  v-for="item in list.items"
                  :key="item.name"
                  @click="openNewTab(item.link)"
                >
                  {{ item.name }}
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
  data() {
    return {
      lists: [
        {
          title: "My Projects",
          items: [
            {
              name: "LiftingLookup",
              link: "https://www.liftinglookup.com",
            },
          ],
        },
        {
          title: "My Links",
          items: [
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/gkroth/",
            },
            {
              name: "GitHub",
              link: "https://github.com/goosebones",
            },
          ],
        },
      ],
    };
  },
  methods: {
    openNewTab(link) {
      window.open(link, "_blank");
    },
    open(link) {
      window.open(link);
    },
  },
};
</script>
