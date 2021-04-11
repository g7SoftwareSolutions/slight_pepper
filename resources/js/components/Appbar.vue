<template>
  <div>
    <!-- <v-system-bar color="teal darken-3"></v-system-bar> -->

    <v-app-bar class="red lighten-2" prominent height="75">
      <v-app-bar-nav-icon
        class="my-auto text-white d-lg-none d-xl-none"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title contain class="my-auto">
        <router-link
          :to="{ name: user ? 'home' : 'welcome' }"
          class="text-white"
        >
          {{ appName }}
          <v-icon color="white">mdi-food-fork-drink</v-icon>
        </router-link></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <!-- Authenticated -->
      <v-spacer></v-spacer>

      <v-btn class="m-2" color="pink" icon>
       </v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="m-2" icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
           <v-list-item>
            <v-list-item-title>
              <router-link :to="{ name: 'register' }">
                <v-icon>mdi-account-plus-outline</v-icon>

                {{ $t("Register Doubles Shed") }}
              </router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <router-link :to="{ name: 'login' }">
                <v-icon>mdi-login</v-icon>
                {{ $t("Login") }}
              </router-link>
            </v-list-item-title>
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
              :to="{ name: 'register' }"
              class="nav-link"
              active-class="active"
            >
              {{ $t("Register Doubles Shed") }}
            </router-link>
          </v-list-item>
             <v-list-item>
            <router-link
              :to="{ name: 'login' }"
              class="nav-link"
              active-class="active"
            >
              {{ $t("Login ") }}
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
