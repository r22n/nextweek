<template>
  <div>
    <MainView :start="0" :display="new Date('2024-10-16')" v-model="model"/>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import MainView from './components/MainView.vue';
import { formatISO } from 'date-fns';

const value = ref(new Date());
const model = computed({
  get: () => value.value,
  set: (x) => {
    value.value = x;
    console.log(`date selected d=${formatISO(x)}`);
  }
});

</script>
