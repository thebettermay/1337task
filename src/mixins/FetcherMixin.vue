<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  methods: {
    ...mapActions(['FETCH_USERS']),
    async fetchUsers() {
      await this.FETCH_USERS();
    },
  },
  async created() {
    await this.fetchUsers();
  },
});
</script>
