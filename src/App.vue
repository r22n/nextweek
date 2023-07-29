<template>
  <Nextweek v-model="value" :display="display" :start="start"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Nextweek from '.';

export default defineComponent({
  components: { Nextweek },
  data() {
    return {
      // put monday(1) on first column and display this day on first row.
      // and show next week.
      // i.e
      // mon*   tue   wed   thu   fri   sat   sun
      // 17     18    19    20    21    22*   23
      // 24     25    26    27    28    29    30
      display: new Date('2023-07-22T12:00:00Z'),
      start: 1, 
      // highlights and represents value on its
      // i.e
      // mon    tue   wed   thu   fri   sat   sun
      // 17     18    19    20    21*   22    23
      // 24     25    26    27    28    29    30
      value: new Date('2023-07-21T00:00:00Z'),
    };
  }
});
</script>

<style></style>
