<template>
    
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <Card>
            {{ $t('about.title') }}
        </Card>
    </div>
    
</template>

<script setup lang="ts">
definePageMeta({ auth: false })
</script>