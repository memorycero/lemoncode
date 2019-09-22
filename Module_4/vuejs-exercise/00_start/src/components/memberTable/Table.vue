<template>
  <div>
    <h2>Member Page</h2>
    <input 
      type="text" 
      placeholder="Organization" 
      v-bind:value="organization" 
      v-on:input="organization = $event.target.value">
    <button @click="loadMembers">Load</button>
    <table :class="$style.table">
      <thead>
        <member-head/>
      </thead>
      <tbody>
        <template v-for="member in members">
          <member-row :key="member.id" :member="member"/>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MemberHead from "./Head.vue";
import MemberRow from "./Row.vue";
import { Member } from "../../model/member";
import { getAllMembers } from "../../api/memberAPI";

export default Vue.extend({
  name: "MemberTable",
  components: { MemberHead, MemberRow },
  data: () => ({
    members: [] as Member[],
    organization: ''
  }),
  methods: {
    loadMembers: function() {
      getAllMembers(this.getOrganizationName()).then(members => {
        this.members = members;
      });
    },
    getOrganizationName: function() {
      return this.organization === '' || this.organization === undefined 
        ? 'lemoncode': this.organization;
    }
  }
});
</script>

+ <style module>
.table {
  border-collapse: collapse;
  width: 100%;
}

.table tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
