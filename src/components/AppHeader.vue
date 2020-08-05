.<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item">ImageStorage</router-link>
    <div class="right menu">
      <div class="horizontal" v-if="isLoggedIn">
        <router-link to="/" class="item">Gallery</router-link>
        <router-link to="/uploads" class="item">Upload</router-link>
        <a @click="logout" class="item">Logout</a>
      </div>
      <a v-else href="#" class="ui item" @click="login">Login</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: mapActions(["login", "logout"]),
  computed: mapGetters(["isLoggedIn"]),
};
</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>