<script setup lang="ts">
import { collection, addDoc } from 'firebase/firestore'
import { db } from '~/services/firebase'

const sugar = ref('')
const insulin = ref('')
const isGlargin = ref(false)

const handleSugar = async() => {
  let sugarValue = sugar.value
  sugarValue = sugarValue.replace(',', '.')
  await addDoc(collection(db, 'bloodsugars'), {
    value: +sugarValue,
    date: new Date(),
  })

  sugar.value = ''
}

const handleInsulin = async() => {
  await addDoc(collection(db, 'insulin'), {
    value: +insulin.value,
    isGlargin: isGlargin.value,
    date: new Date(),
  })

  insulin.value = ''
  isGlargin.value = false
}
</script>

<template>
  <div>
    <input
      id="input"
      v-model="sugar"
      inputmode="decimal"
      type="text"
      autocomplete="false"
      p="x-4 y-2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
    >
    <label class="hidden" for="input">Текущий уровень сахара в крови</label>

    <div>
      <button
        class="m-3 text-sm btn"
        @click="handleSugar"
      >
        Записать сахар
      </button>
    </div>
  </div>
  <div class="pt-6">
    <input
      id="input"
      v-model.number="insulin"
      inputmode="numeric"
      type="text"
      autocomplete="false"
      p="x-4 y-2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
    >
    <label class="hidden" for="input">Количество поставленного инсулина</label>

    <label for="glargin" class="block mt-2">
      Это ночной инсулин?
      <input id="glargin" v-model="isGlargin" type="checkbox">
    </label>

    <div>
      <button
        class="m-3 text-sm btn"
        @click="handleInsulin"
      >
        Записать инъекцию инсулина
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
