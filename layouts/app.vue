<template>
    <VLayout>
        <VAppBar>
            <VAppBarTitle>
                <NuxtLink to="/app">Projects</NuxtLink>
            </VAppBarTitle>
        </VAppBar>
        <VContainer>
            <VMain>
                <slot></slot>
            </VMain>
        </VContainer>
    </VLayout>
</template>
<script setup lang="ts"></script>