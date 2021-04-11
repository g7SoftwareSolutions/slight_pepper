<template>
  <div>
    <!-- <v-system-bar color="teal darken-3"></v-system-bar> -->

    <v-app-bar color="red lighten-3" prominent height="75">
      <v-app-bar-nav-icon
        class="my-auto text-white d-lg-none d-xl-none"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title contain class="my-auto">
        <router-link
          to="/"
          class="text-white"
        >
          {{ appName }}
          <v-icon color="white">mdi-food-fork-drink</v-icon>
        </router-link></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <!-- Authenticated -->
      <v-menu offset-y class="">
        <template v-slot:activator="{ on, attrs }">
          <div
            class="nav-link dropdown-toggle text-dark d-none d-lg-block d-xl-block"
            v-bind="attrs"
            v-on="on"
          >
            <v-avatar
              color="secondary"
              size="56"
              class="rounded-circle profile-photo mr-1"
            >
              <img v-if="user.photo_url" :src="user.photo_url"
            /></v-avatar>
            <span class="text-white"> {{ user.name }}</span>
          </div>
        </template>
        <v-list v-if="user">
          <v-list-item>
            <router-link
              :to="{ name: 'settings.profile' }"
              class="dropdown-item pl-3"
            >
              <fa icon="cog" fixed-width />
              {{ $t("settings") }}
            </router-link>
          </v-list-item>
          <v-list-item @click.prevent="logout">
            <fa icon="sign-out-alt" fixed-width />
            {{ $t("logout") }}
          </v-list-item>
        </v-list>
        <!-- Guest -->
        <v-list v-else>
          <v-list-item>
            <router-link
              :to="{ name: 'login' }"
              class="nav-link"
              active-class="active"
            >
              {{ $t("login") }}
            </router-link>
          </v-list-item>
          <v-list-item>
            <router-link
              :to="{ name: 'register' }"
              class="nav-link"
              active-class="active"
            >
              {{ $t("register") }}
            </router-link>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <router-link
        :to="{ name: user ? 'home' : 'welcome' }"
        class="navbar-brand m-3"
      >
        {{ appName }}
      </router-link>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          v-if="user"
          active-class="deep-purple--text text--accent-4"
        >

          <v-list-item>
            <router-link
              :to="{ name: 'settings.profile' }"
              class="dropdown-item pl-3"
            >
              <fa icon="cog" fixed-width />
              {{ $t("settings") }}
            </router-link>
          </v-list-item>
          <v-list-item @click.prevent="logout">
            <fa icon="sign-out-alt" fixed-width />
            {{ $t("logout") }}
          </v-list-item>
        </v-list-item-group>
        <v-list-item-group
          v-model="group"
          v-else
          active-class="deep-purple--text text--accent-4"
        >
          <!-- Guest -->
          <v-list-item>
            <router-link
              :to="{ name: 'login' }"
              class="nav-link"
              active-class="active"
            >
              {{ $t("login") }}
            </router-link>
          </v-list-item>
          <v-list-item>
            <router-link
              :to="{ name: 'register' }"
              class="nav-link"
              active-class="active"
            >
              {{ $t("register") }}
            </router-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LocaleDropdown from "./LocaleDropdown";

export default {
  components: {
    LocaleDropdown,
  },

  data: () => ({
    appName: window.config.appName,
    drawer: false,
    group: null,
  }),

  computed: mapGetters({
    user: "auth/user",
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },

  methods: {
    async logout() {
      // Log out the user.
      await this.$store.dispatch("auth/logout");

      // Redirect to login.
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style scoped>
.profile-photo {
  width: 2rem;
  height: 2rem;
  margin: -0.375rem 0;
}
</style>
