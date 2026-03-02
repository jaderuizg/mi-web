<script setup lang="ts">
import emblaCarouselVue from "embla-carousel-vue"
import type { EmblaCarouselType, EmblaOptionsType, EmblaPluginType } from "embla-carousel"
import { ChevronLeft, ChevronRight } from "lucide-vue-next"
import type { HTMLAttributes } from "vue"
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue"
import { cn } from "@/lib/utils"

export type CarouselApi = EmblaCarouselType
export type CarouselOrientation = "horizontal" | "vertical"

interface CarouselSlide {
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
const emblaRef = (
  el: Element | { $el?: Element } | null,
) => {
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
  if (event.key === "ArrowLeft") {
    event.preventDefault()
    scrollPrev()
  }

  if (event.key === "ArrowRight") {
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
    :class="cn('relative', props.class)"
  >
    <div
      data-slot="carousel-content-wrapper"
      class="overflow-hidden"
      :ref="emblaRef"
    >
      <div
        data-slot="carousel-content"
        :class="cn(
          'flex',
          props.orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
        )"
      >
        <div
          v-for="item in props.items"
          :key="item.id"
          data-slot="carousel-item"
          role="group"
          aria-roledescription="slide"
          :class="cn(
            'min-w-0 shrink-0 grow-0 basis-full',
            props.orientation === 'horizontal' ? 'pl-4' : 'pt-4',
          )"
        >
          <slot
            name="slide"
            :item="item"
          >
            <div class="relative aspect-video overflow-hidden rounded-3xl bg-slate-100">
              <img
                :src="item.image"
                :alt="item.alt ?? item.title ?? 'Slide image'"
                class="h-full w-full object-cover"
              />
            </div>
          </slot>
        </div>
      </div>
    </div>

    <button
      data-slot="carousel-previous"
      type="button"
      aria-label="Previous slide"
      class="absolute -left-4 top-1/2 z-10 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/20 bg-white/90 text-black transition hover:bg-white disabled:pointer-events-none disabled:opacity-40"
      :disabled="!canScrollPrev"
      @click="scrollPrev"
    >
      <ChevronLeft class="size-5" />
    </button>

    <button
      data-slot="carousel-next"
      type="button"
      aria-label="Next slide"
      class="absolute -right-4 top-1/2 z-10 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/20 bg-white/90 text-black transition hover:bg-white disabled:pointer-events-none disabled:opacity-40"
      :disabled="!canScrollNext"
      @click="scrollNext"
    >
      <ChevronRight class="size-5" />
    </button>
  </div>
</template>
