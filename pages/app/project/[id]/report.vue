<template>
    <header>
        <VBreadcrumbs :items="items">
            <template #divider>
                <VIcon :icon="mdiChevronRight"></VIcon>
            </template>
        </VBreadcrumbs>

        <section class="flex items-center justify-between">
            <h1>Relatório do mês</h1>

            <div>
                <VueDatePicker v-model="date" :dark="true" month-picker />
            </div>
        </section>
    </header>
    <main class="my-4 flex flex-col">
        <template v-if="report?.tasks.length">
            <section class="mb-6">
                <ReportDetails :report="report" />
            </section>
            <TasksTable v-if="report.tasks.length" :tasks="report.tasks" />
        </template>
        <template v-else>
            <section class="flex items-center justify-center">
                <h1 class="text-lg font-semibold">Não há atividades nesse mês</h1>
            </section>
        </template>
    </main>
</template>
<script setup lang="ts">
import { mdiChevronRight } from '@mdi/js';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { Project, Report } from '~~/types';

const date = ref<Date | { month: number; year: number }>(new Date());
const report = ref<Report>();

onMounted(async () => {
    await loadReportOfMonth({ month: date.value.getMonth(), year: date.value.getFullYear() });
});

watch(date, async () => {
    await loadReportOfMonth({ month: date.value.month, year: date.value.year });
});
const route = useRoute();

const { data: project } = await useAsyncData(() => useHttp().get<{ data: Project }>(`projects/${route.params.id}`), {
    transform: (r) => r.data,
});

async function loadReportOfMonth(date: { month: number; year: number }) {
    const { data } = await useAsyncData(
        () =>
            useHttp().get<{ data: Report }>(`projects/${route.params.id}/report`, {
                query: { month: date.month + 1, year: date.year },
            }),
        {
            transform: (r) => r.data,
        }
    );

    report.value = data.value ?? undefined;
}

const items = [
    {
        title: 'Projects',
        disabled: false,
        href: '/app',
    },
    {
        title: project.value?.name ?? 'Project',
        disabled: false,
        href: `/app/project/${project.value?.id}`,
    },
];
</script>
