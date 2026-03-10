<script setup lang="ts">
import emblaCarouselVue from "embla-carousel-vue"
import type { EmblaCarouselType, EmblaOptionsType, EmblaPluginType } from "embla-carousel"
import { ChevronLeft, ChevronRight } from "lucide-vue-next"
import type { HTMLAttributes } from "vue"
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue"
import { Button } from "@/components/ui/button"

export type CarouselApi = EmblaCarouselType
export type CarouselOrientation = "horizontal" | "vertical"

export interface CarouselSlide {
  id: string | number
  image: string
  title?: string
  category?: string
  slug?: string
  alt?: string
}

const props = withDefaults(defineProps<{
  items: CarouselSlide[]
  class?: HTMLAttributes["class"]
  opts?: EmblaOptionsType
  plugins?: EmblaPluginType[]
  orientation?: CarouselOrientation
}>(), {
  orientation: "horizontal",
})

const emit = defineEmits<{
  "init-api": [api: CarouselApi]
}>()

const canScrollPrev = ref(false)
const canScrollNext = ref(false)

const axis = computed<EmblaOptionsType["axis"]>(() =>
  props.orientation === "vertical" ? "y" : "x",
)

const emblaOptions = computed<EmblaOptionsType>(() => ({
  ...(props.opts ?? {}),
  axis: props.opts?.axis ?? axis.value,
}))

const [carouselRef, api] = emblaCarouselVue(emblaOptions, computed(() => props.plugins ?? []))

const setEmblaRef = (el: Element | { $el?: Element } | null) => {
  if (!el) {
    carouselRef.value = undefined
    return
  }

  if (el instanceof HTMLElement) {
    carouselRef.value = el
    return
  }

  if ("$el" in el) {
    carouselRef.value = el.$el as HTMLElement | undefined
  }
}

function onSelect(currentApi: CarouselApi) {
  canScrollPrev.value = currentApi.canScrollPrev()
  canScrollNext.value = currentApi.canScrollNext()
}

function scrollPrev() {
  api.value?.scrollPrev()
}

function scrollNext() {
  api.value?.scrollNext()
}

function onKeyDown(event: KeyboardEvent) {
  if (props.orientation === "horizontal") {
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      scrollPrev()
    }

    if (event.key === "ArrowRight") {
      event.preventDefault()
      scrollNext()
    }

    return
  }

  if (event.key === "ArrowUp") {
    event.preventDefault()
    scrollPrev()
  }

  if (event.key === "ArrowDown") {
    event.preventDefault()
    scrollNext()
  }
}

watch(api, (nextApi, previousApi) => {
  previousApi?.off("select", onSelect)
  previousApi?.off("reInit", onSelect)

  if (!nextApi) return

  onSelect(nextApi)
  nextApi.on("select", onSelect)
  nextApi.on("reInit", onSelect)
  emit("init-api", nextApi)
}, { immediate: true })

onMounted(() => {
  window.addEventListener("keydown", onKeyDown)
})

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeyDown)
  api.value?.off("select", onSelect)
  api.value?.off("reInit", onSelect)
})
</script>

<template>
  <div
    data-slot="carousel"
    role="region"
    aria-roledescription="carousel"
    class="relative"
    :class="props.class"
  >
    <div
      data-slot="carousel-content-wrapper"
      class="overflow-hidden"
      :ref="setEmblaRef"
    >
      <div
        data-slot="carousel-content"
        class="flex"
        :class="props.orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col'"
      >
        <div
          v-for="item in props.items"
          :key="item.id"
          data-slot="carousel-item"
          role="group"
          aria-roledescription="slide"
          class="min-w-0 shrink-0 grow-0 basis-full"
          :class="props.orientation === 'horizontal' ? 'pl-4' : 'pt-4'"
        >
          <slot
            name="slide"
            :item="item"
          >
            <div class="bg-polka relative aspect-[4/3] overflow-hidden rounded-3xl">
              <img
                :src="item.image"
                :alt="item.alt ?? item.title ?? 'Slide image'"
                class="block h-full w-full object-cover object-center"
              />
            </div>
          </slot>
        </div>
      </div>
    </div>

    <Button
      data-slot="carousel-previous"
      variant="outline"
      size="icon"
      class="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full"
      :disabled="!canScrollPrev"
      @click="scrollPrev"
    >
      <ChevronLeft class="size-4" />
      <span class="sr-only">Previous slide</span>
    </Button>

    <Button
      data-slot="carousel-next"
      variant="outline"
      size="icon"
      class="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full"
      :disabled="!canScrollNext"
      @click="scrollNext"
    >
      <ChevronRight class="size-4" />
      <span class="sr-only">Next slide</span>
    </Button>
  </div>
</template>
