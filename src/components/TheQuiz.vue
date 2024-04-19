<template>
  <div>
    <base-card v-if="currentQuestion !== null">
      <h2 class="text-3xl mx-auto font-bold mb-2">Vue Quiz App</h2>
      <div class="border border-gray-200 mb-10"></div>
      <div>
        <p class="mb-2 font-bold">{{ currentQuestion.question }}</p>

        <ul>
          <li
            class="border border-gray-200 rounded-md mb-2 p-4 cursor-pointer"
            v-for="(option, optionIndex) in currentQuestion.options"
            :key="optionIndex"
            @click="checkAnswer(optionIndex)"
            :class="{
              'bg-red-500 text-white':
                userAnswer !== null && optionIndex !== currentQuestion.answer,
              'bg-green-500 text-white':
                userAnswer !== null && optionIndex === currentQuestion.answer,
            }"
          >
            {{ option }}
          </li>
        </ul>
      </div>
      <base-button v-if="currentQuestion !== null" @click="nextQuiz"
        >Next</base-button
      >
    </base-card>
    <base-card v-else>
      <div>
        <p>Congratz you answered all questions.</p>
      </div>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          question: "What is Vue.js primarily used for?",
          answer: 1,
          options: [
            "Server-side rendering",
            "Building user interfaces",
            "Database management",
            "Mobile app development",
          ],
        },
        {
          question:
            "Which command is used to create a new Vue.js project using Vue CLI?",
          answer: 0,
          options: ["vue create", "vue start", "vue init", "vue build"],
        },
        {
          question:
            "In Vue.js, what directive is used to bind an attribute to an expression?",
          answer: 2,
          options: ["v-model", "v-for", "v-bind", "v-if"],
        },
        {
          question:
            "Which lifecycle hook is called immediately after a Vue instance has been initialized?",
          answer: 1,
          options: ["mounted", "created", "updated", "destroyed"],
        },
        {
          question: "What is the purpose of Vuex in a Vue.js application?",
          answer: 3,
          options: [
            "Handling routing",
            "Styling components",
            "Animating transitions",
            "Managing application state",
          ],
        },
      ],
      currentQuiz: 0,
      userAnswer: null,
    };
  },

  computed: {
    currentQuestion() {
      if (this.currentQuiz >= 0 && this.currentQuiz < this.questions.length) {
        return this.questions[this.currentQuiz];
      } else {
        return null;
      }
    },
  },

  methods: {
    nextQuiz() {
      if (this.userAnswer === null) {
        alert("Please choose an answer");
        return;
      }

      if (this.currentQuiz === this.questions.length - 1) {
        alert("Congratulations you answered all the questions.");
        window.location.reload();
      }

      this.currentQuiz++;
      this.userAnswer = null;
    },

    checkAnswer(optionIndex) {
      if (this.userAnswer !== null) {
        return;
      }

      this.userAnswer = optionIndex;
    },
  },
};
</script>
