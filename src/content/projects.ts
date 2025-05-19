interface Project {
  title: string
  description: string
  tags: string[]
  liveLink: string
  devLink: string
}

const projects: Project[] = [
  {
    title: "LSH: Lua Shell for Zephyr",
    description: "Run Lua scripts on Zephyr Real Time Operating System. This project is a Lua shell for the Zephyr RTOS, allowing users to run Lua scripts on embedded devices.",
    tags: ["Zephyr RTOS", "C", "Lua"],
    liveLink: "",
    devLink: "https://github.com/agguo/lsh",
  },
  {
    title: "stm32pong",
    description: "A simple pong game for STM32F4 Discovery board. The game is implemented using the STM32 HAL library and custom drivers for peripherals.",
    tags: ["C", "Bare-metal"],
    liveLink: "",
    devLink: "https://github.com/alexayl/stm32pong",
  }
]

export default projects;
