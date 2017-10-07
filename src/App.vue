<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-12 col-lg-6 mr-auto ml-auto">
                <label for="debug_toggle">
                    Show debug values
                    <input v-model="debug" type="checkbox" name="debug_toggle" id="debug_toggle">
                </label>
                <SmartQuestions
                        ref="smartquestions"
                        :debug="debug"
                        @submit="handleSubmit"
                        :form="form"
                        v-if="!didSubmit"></SmartQuestions>
                <div class="card" v-else>
                    <div class="card-body">
                        <ul class="list-unstyled mb-0">
                            <li v-for="answer,questionId in answers">
                                {{ getQuestionForId(questionId) }}
                                <strong>{{ getAnswerFromValue(questionId, answer) }}</strong>
                            </li>
                        </ul>
                    </div>
                    <div class="card-footer">
                        <button class="mt-1 btn btn-block btn-primary" @click.stop.prevent="restart">Restart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    body {
        background-color: #f9f9f9;
    }
</style>
<script>
    import Vue from 'vue'
    import BootstrapVue from 'bootstrap-vue'
    Vue.use(BootstrapVue);
    import {getQuestionById} from 'vue-smart-questions/src/helpers/Utils'
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import form from './form';
    import SmartQuestions from 'vue-smart-questions';

    export default {
        components: {
            SmartQuestions
        },
        methods: {
            restart() {
                this.didSubmit = false;
                this.$nextTick(_ => {
                    this.$refs.smartquestions.reset();
                })
            },
            handleSubmit(answers) {
                this.didSubmit = true;
                this.answers = answers;
            },
            getAnswerFromValue(questionId, answer) {
                let question = getQuestionById(this.form.questions, questionId);
                if (question.type === 'CHECKBOX') {
                    return answer.value.filter(answer => answer.checked === true).map(answer => answer.value).join(', ')
                }
                return answer.value;
            },
            getQuestionForId(questionId) {
                return getQuestionById(this.form.questions, questionId).question;
            }
        },
        data() {
            return {
                answers: [],
                debug: false,
                didSubmit: false,
                form
            };
        }
    }
</script>