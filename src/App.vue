<script setup lang="ts">
import { ref } from 'vue'
const msg = ref('')
</script>

<template>
  <el-config-provider :button="{ autoInsertSpace: true }">
    <h1>{{ msg }}</h1>
    <el-input v-model="msg" type="text" />
    <el-button>你好</el-button>
  </el-config-provider>
</template>
