<template>
    <div class="list">
        <div v-for="w in weeks" :key="w.toString()">
            {{ formatweek(w) }}
        </div>
        <div v-for="d in days" @click="$emit('update:modelValue', d)" :key="d.toISOString()"
            :class="`day ${same(d) ? 'select' : ''}`">
            {{ formatday(d) }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { add, previousDay, compareDesc, nextDay, format, isSameDay, getDay } from 'date-fns';

export default defineComponent({
    props: {
        modelValue: Date,
        start: Number, // Day
        display: Date,
    },
    emits: [
        'update:modelValue',
    ],
    computed: {
        list() {
            let begin = this.displayifn;
            if (getDay(begin) !== this.startifn) {
                begin = previousDay(this.displayifn, this.startifn);
            }
            const end = nextDay(nextDay(begin, this.endifn), this.endifn);

            const result = [];
            for (let i = begin; compareDesc(i, end) >= 0; i = add(i, { days: 1 })) {
                result.push(i);
            }
            return result;
        },
        weeks() {
            return this.list.filter((x, y) => y < 7);
        },
        days() {
            return this.list;
        },
        startifn(): Day {
            return (this.start ?? 0) as Day;
        },
        endifn(): Day {
            return ((this.startifn + 7 - 1) % 7) as Day;
        },
        valueifn() {
            return this.modelValue ?? new Date();
        },
        displayifn() {
            return this.display ?? new Date();
        }
    },
    methods: {
        formatweek(d: Date) {
            return format(d, 'EEE');
        },
        formatday(d: Date) {
            return format(d, 'd');
        },
        same(a: Date) {
            return isSameDay(a, this.valueifn);
        }
    }
});
</script>

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
