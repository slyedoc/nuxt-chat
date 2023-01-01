<template>
    <div class="md:container lg:container ">
        <Card>
            <h1>{{ $t('common.hello', { name: 'vue-i18n' }) }}</h1>            
        </Card>

        <Card class="mt-8">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In esse molestiae perferendis libero corrupti optio! Repellat corporis quas esse velit numquam obcaecati sit non! Aspernatur hic eaque enim mollitia perferendis.
            </p>
        </Card>
    </div>
</template>

<script setup lang="ts">
const { $client } = useNuxtApp()
const hello = await $client.hello.useQuery({ text: 'client' })
</script>