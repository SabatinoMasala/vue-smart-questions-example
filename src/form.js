export default {
    'questions': [
        {
            'id': '1',
            'question': 'Do you have any open-source projects?',
            'type': 'OPTIONS',
            'next_question_id': null,
            'description': false,
            'placeholder': null,
            'answers': [{
                'id': '1',
                'name': 'Yes',
                'value': 'yes',
                'next_question_id': '2'
            }, {
                'id': '5',
                'name': 'No',
                'value': 'no',
                'next_question_id': '3'
            }, {
                'id': '6',
                'name': 'Skip to end',
                'value': 'skip',
                'next_question_id': '5'
            }]
        },
        {
            'id': '2',
            'question': 'How many open-source projects do you have?',
            'description': 'Please specify how many open-source projects you have',
            'type': 'NUMBER',
            'next_question_id': '3',
            'answers': [],
            'placeholder': null
        },
        {
            'id': '3',
            'question': 'What is your Github name?',
            'placeholder': 'eg. SabatinoMasala',
            'type': 'TEXT',
            'answers': [],
            'next_question_id': '4',
            'description': ''
        }, {
            'id': '4',
            'question': 'Short bio',
            'type': 'TEXTAREA',
            'answers': [],
            'next_question_id': '5',
            'description': '',
            'placeholder': 'Lorem ipsum dolor sit amet'
        },
        {
            'id': '5',
            'question': 'How would you like to be contacted?',
            'type': 'CHECKBOX',
            'answers': [{
                'id': '1',
                'name': 'Email',
                'value': 'email',
                'next_question_id': null
            }, {
                'id': '5',
                'name': 'Phone',
                'value': 'phone',
                'next_question_id': null
            }],
            'next_question_id': null,
            'description': '',
            'placeholder': null
        }
    ],
    'questions_bak': {
        'question_1': {
            'id': '1',
            'question': 'Do you have children?',
            'type': 'OPTIONS',
            'next_question_id': null,
            'description': false,
            'placeholder': null,
            'answers': [{
                'id': '1',
                'name': 'Yes',
                'value': 'yes',
                'next_question_id': '2'
            }, {
                'id': '5',
                'name': 'No',
                'value': 'no',
                'next_question_id': '3'
            }]
        },
        'question_2': {
            'id': '2',
            'question': 'How many children do you have?',
            'description': 'Please specify how many children you have',
            'type': 'NUMBER',
            'next_question_id': '3',
            'answers': [],
            'placeholder': null
        },
        'question_3': {
            'id': '3',
            'question': 'What is your name?',
            'placeholder': 'eg. John Doe',
            'type': 'TEXT',
            'answers': [],
            'next_question_id': '4',
            'description': ''
        },
        'question_4': {
            'id': '4',
            'question': 'Short bio',
            'type': 'TEXTAREA',
            'answers': [],
            'next_question_id': '5',
            'description': '',
            'placeholder': null
        },
        'question_5': {
            'id': '5',
            'question': 'How would you like to be contacted?',
            'type': 'CHECKBOX',
            'answers': [{
                'id': '1',
                'name': 'Email',
                'value': 'email',
                'next_question_id': null
            }, {
                'id': '5',
                'name': 'Phone',
                'value': 'phone',
                'next_question_id': null
            }],
            'next_question_id': null,
            'description': '',
            'placeholder': null
        }
    }
}
