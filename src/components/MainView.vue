<template>
    <div class="list">
        <div v-for="d in days" :key="d">
            {{ d }}
        </div>
        <div v-for="d in dates" @click="model = d.date" :key="d.date.toISOString()"
            :class="`day ${isSameDay(d.date, model) ? 'select' : ''}`">
            {{ d.label }}
        </div>
    </div>
</template>


<style>
.list {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(7, 1fr);
}

.day {
    color: gray;
    border-radius: 10%;
    padding: 0.5em;
}

.day:hover {
    background-color: lightgray;
}

.select {
    color: black;
    background-color: lightgray;
}
</style>

<script setup lang="ts">

import { add, compareDesc, Day, format, getDay, isSameDay, nextDay, previousDay } from 'date-fns';
import { computed } from 'vue';

const props = defineProps<{
    start: Day;
    display: Date;
}>();

const model = defineModel({ default: new Date() });

const dates = computed(() =>
    list.value.map(e => ({
        label: format(e, 'd'),
        date: e
    }))
);

const days = computed(() =>
    list.value.filter((_, i) => i < 7).map(e => format(e, 'EEE'))
);

const list = computed(() => {
    let begin = props.display;
    if (getDay(begin) !== props.start) {
        begin = previousDay(begin, props.start);
    }
    const end = nextDay(nextDay(begin, endday.value), endday.value);
    const r = [begin];
    for (let i = add(begin, { days: 1 }); compareDesc(i, end) >= 0; i = add(i, { days: 1 })) {
        r.push(i);
    }
    return r;
});

const endday = computed(() => (props.start - 1 + 7) % 7 as Day);

</script>
