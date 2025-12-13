<script setup lang="ts">
import { PlusOutlined } from '@ant-design/icons-vue';
import { Icon } from '@iconify/vue';
import { Button } from 'ant-design-vue';
import { ref } from 'vue';

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <p>
      <Button type="primary" @click="count++">
        <Icon icon="ant-design:plus-outlined" />
        count is {{ count }}
      </Button>
    </p>
    <p>
      <Button type="primary" @click="count++">
        <PlusOutlined />
        count is {{ count }}
      </Button>
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
