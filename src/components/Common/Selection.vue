<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select'
</script>

<template>
  <Select>
    <SelectTrigger class="w-[100px]">
      <SelectValue placeholder="" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem value="10"> 10件 </SelectItem>
        <SelectItem value="20"> 20件 </SelectItem>
        <SelectItem value="50"> 50件 </SelectItem>
        <SelectItem value="100"> 100件 </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
