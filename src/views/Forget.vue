<template>
  <div class="card">
    <h2>Забыл пароль? Вспоминай. Ничем помочь не могу</h2>

    <button class="btn" @click="goToLogin">Обратно к логину</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToLogin() {
      this.$router.push('/login')
    }
  }
}
</script>
