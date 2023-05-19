<script setup>
import { ref } from 'vue'
import axios from 'axios';

const jobCount = ref(5);
const jobs = ref([]);

async function getJobs() {

  const res = await axios.get(`/api/jobs?jobCount=${jobCount}`);
  console.log(res);

}

</script>

<template>
  <form style="margin-bottom: 2rem;" @submit.prevent>
    <div style="margin: 0 auto; width: 300px; margin-bottom: 2rem; display: flex; flex-direction: column;">
      <label for="jobs" style="margin-bottom: 1rem;">How Many Jobs Do you Want to See?</label>
      <input type="number" name="jobs" id="jobs" v-model="jobCount">
    </div>
    <button type="submit" @click="getJobs()">Get jobs</button>
  </form>
  <div class="results">
    <div v-for="(index, job) in jobs" :key="index">
      <h3>{{ job.title }}</h3>
      <p>{{ job.description }}</p>
      <small>salrary: {{ job.salary }}</small>
    </div>
  </div>
</template>

<style scoped></style>
