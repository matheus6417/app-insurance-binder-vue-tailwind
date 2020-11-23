import { createStore } from 'vuex'
export default createStore({
  state: {
    currentStep: 0,
    currentQuestion: 1,
    appCustomData: {
      globalProps: {
        logoSrc: 'img/logo.png',
        colors: {
          blue_default: {
            name: 'blue',
            color: '#0074D9',
          },
          grey_default: {
            name: 'grey',
            color: '#F9F9F9',
          },
          black_default: {
            name: 'black',
            color: '#333333',
          },
          white_default: {
            name: 'white',
            color: '#ffffff',
          },
          red_default: {
            name: 'red',
            color: '#EB5757',
          },
          green_default: {
            name: 'green',
            color: '#27AE60',
          },
          primary_default: {
            name: 'primary green',
            color: '#71F79F',
          },
          secondary_default: {
            name: 'secondary blue',
            color: '#A8DAFF',
          },
          lightgrey_default: {
            name: 'light grey',
            color: '#BDBDBD',
          },
        },
      },
      steps: [
        {
          name: 'Getting Started',
          components: [
            {
              id: 'BTitle-getstarted',
            },
            {
              id: 'BList-getstarted',
            },
            {
              id: 'BButtons-getstarted',
            },
            {
              id: 'BPoweredBy',
            },
          ],
        },
        {
          name: 'Form',
          components: [
            {
              id: 'BQuestion-insurancetype',
              type: 'form'
            },
            {
              id: 'BQuestion-name',
              type: 'form'
            },
            {
              id: 'BQuestion-phone',
              type: 'form'
            },
            {
              id: 'BQuestion-selection',
              type: 'form'
            },
            {
              id: 'BQuestion-ownyourdesign',
              type: 'form'
            },
            {
              id: 'BQuestion-buildingcoverage',
              type: 'form'
            },
            {
              id: 'BQuestion-date',
              type: 'form'
            },
            {
              id: 'BButtons-getquotes',
            },
            {
              id: 'BFooter-controls',
            }
          ],
        },
        {
          name: 'Quotes',
          components: [
            {
              id: 'BTitle-quotes',
            },
            {
              id: 'BPlans-quotes',
            },
            {
              id: 'BSummary-quotes',
            },
          ],
        },
        {
          name: 'Checkout',
          components: [
            {
              id: 'BTitle-checkout',
            },
            {
              id: 'BCheckout',
            },
            {
              id: 'BPlans-quotes',
            },
            {
              id: 'BButtons-Completepurchase',
            },
          ],
        },
        {
          name: 'Thank you',
          components: [
            {
              id: 'BTitle-thankyou',
            },
            {
              id: 'BButtons-thankyou',
            },
            {
              id: 'BLink-goback'
            }
          ],
        },
      ],
      componentsLibrary: {
        'BTitle-getstarted': {
          src: 'organisms/BTitle.vue',
          props: {
            icon: 'umbrella',
            title: 'So what gives?'
          },
          component: 'BTitle',
        },
        'BList-getstarted': {
          src: 'organisms/BList.vue',
          props: {
            Items: [
              {
                text: 'Answer a few simple questions about your business',
                icon: '1'
              }, {
                text: 'Browse through specially curated quotes',
                icon: '2'
              }, {
                text: 'Select your quote-of-choice and receive your policy instantly',
                icon: '3'
              }
            ]
          },
          component: 'BList',
        },
        'BButtons-getstarted': {
          src: 'molecules/BButtons.vue',
          props: {
            buttons: [
              {
                text: 'GET STARTED',
                action: 'nextstep'
              }
            ]
          },
          component: 'BButtons',
        },
        'BPoweredBy': {
          src: 'atoms/BPoweredBy.vue',
          component: 'BPoweredBy',
        },
        'BQuestion-insurancetype': {
          src: 'organisms/BQuestion.vue',
          props: {
            answer: '',
            type: 'options',
            text: 'What type of insurance are you looking for?',
            icon: '1',
            options: [
              {
                title: 'Professional Liability',
                text: 'Erros & Omissions (E&O insurance)',
                icon: 'briefcase',
              }, {
                title: 'General Liability',
                text: 'Help mitigate against loss (CGL insurance)',
                icon: 'cloud-rain',
              }, {
                title: 'Business Owner’s Policy',
                text: 'The complete package (BOP)',
                icon: 'package',
              }, {
                title: 'Cyber',
                text: 'Internet-bsed risks (CLIC)',
                icon: 'wifi',
              }
            ]
          },
          component: 'BQuestion',
        },
        'BQuestion-buildingcoverage': {
          src: 'organisms/BQuestion.vue',
          props: {
            answer: '',
            type: 'options',
            text: 'Include building coverage?',
            icon: '6',
            options: [
              {
                title: 'Yes',
                icon: 'thumbs-up',
              }, {
                title: 'No',
                icon: 'thumbs-down',
              }
            ]
          },
          component: 'BQuestion',
        },
        'BQuestion-name': {
          src: 'organisms/BQuestion.vue',
          props: {
            answer: '',
            type: 'text',
            text: 'What’s the name of your business?',
            icon: '2'
          },
          component: 'BQuestion',
        },
        'BQuestion-phone': {
          src: 'organisms/BQuestion.vue',
          props: {
            answer: '',
            type: 'phone',
            text: 'What’s the phone number?',
            icon: '3'
          },
          component: 'BQuestion',
        },
        'BQuestion-selection': {
          src: 'organisms/BQuestion.vue',
          props: {
            answer: '',
            type: 'select',
            text: 'What state do you operate from?',
            icon: '4',
            options: [{
              "name": "Alabama",
              "abbreviation": "AL"
            },
            {
              "name": "Alaska",
              "abbreviation": "AK"
            },
            {
              "name": "American Samoa",
              "abbreviation": "AS"
            },
            {
              "name": "Arizona",
              "abbreviation": "AZ"
            },
            {
              "name": "Arkansas",
              "abbreviation": "AR"
            },
            {
              "name": "California",
              "abbreviation": "CA"
            },
            {
              "name": "Colorado",
              "abbreviation": "CO"
            },
            {
              "name": "Connecticut",
              "abbreviation": "CT"
            },
            {
              "name": "Delaware",
              "abbreviation": "DE"
            },
            {
              "name": "District Of Columbia",
              "abbreviation": "DC"
            },
            {
              "name": "Federated States Of Micronesia",
              "abbreviation": "FM"
            },
            {
              "name": "Florida",
              "abbreviation": "FL"
            },
            {
              "name": "Georgia",
              "abbreviation": "GA"
            },
            {
              "name": "Guam",
              "abbreviation": "GU"
            },
            {
              "name": "Hawaii",
              "abbreviation": "HI"
            },
            {
              "name": "Idaho",
              "abbreviation": "ID"
            },
            {
              "name": "Illinois",
              "abbreviation": "IL"
            },
            {
              "name": "Indiana",
              "abbreviation": "IN"
            },
            {
              "name": "Iowa",
              "abbreviation": "IA"
            },
            {
              "name": "Kansas",
              "abbreviation": "KS"
            },
            {
              "name": "Kentucky",
              "abbreviation": "KY"
            },
            {
              "name": "Louisiana",
              "abbreviation": "LA"
            },
            {
              "name": "Maine",
              "abbreviation": "ME"
            },
            {
              "name": "Marshall Islands",
              "abbreviation": "MH"
            },
            {
              "name": "Maryland",
              "abbreviation": "MD"
            },
            {
              "name": "Massachusetts",
              "abbreviation": "MA"
            },
            {
              "name": "Michigan",
              "abbreviation": "MI"
            },
            {
              "name": "Minnesota",
              "abbreviation": "MN"
            },
            {
              "name": "Mississippi",
              "abbreviation": "MS"
            },
            {
              "name": "Missouri",
              "abbreviation": "MO"
            },
            {
              "name": "Montana",
              "abbreviation": "MT"
            },
            {
              "name": "Nebraska",
              "abbreviation": "NE"
            },
            {
              "name": "Nevada",
              "abbreviation": "NV"
            },
            {
              "name": "New Hampshire",
              "abbreviation": "NH"
            },
            {
              "name": "New Jersey",
              "abbreviation": "NJ"
            },
            {
              "name": "New Mexico",
              "abbreviation": "NM"
            },
            {
              "name": "New York",
              "abbreviation": "NY"
            },
            {
              "name": "North Carolina",
              "abbreviation": "NC"
            },
            {
              "name": "North Dakota",
              "abbreviation": "ND"
            },
            {
              "name": "Northern Mariana Islands",
              "abbreviation": "MP"
            },
            {
              "name": "Ohio",
              "abbreviation": "OH"
            },
            {
              "name": "Oklahoma",
              "abbreviation": "OK"
            },
            {
              "name": "Oregon",
              "abbreviation": "OR"
            },
            {
              "name": "Palau",
              "abbreviation": "PW"
            },
            {
              "name": "Pennsylvania",
              "abbreviation": "PA"
            },
            {
              "name": "Puerto Rico",
              "abbreviation": "PR"
            },
            {
              "name": "Rhode Island",
              "abbreviation": "RI"
            },
            {
              "name": "South Carolina",
              "abbreviation": "SC"
            },
            {
              "name": "South Dakota",
              "abbreviation": "SD"
            },
            {
              "name": "Tennessee",
              "abbreviation": "TN"
            },
            {
              "name": "Texas",
              "abbreviation": "TX"
            },
            {
              "name": "Utah",
              "abbreviation": "UT"
            },
            {
              "name": "Vermont",
              "abbreviation": "VT"
            },
            {
              "name": "Virgin Islands",
              "abbreviation": "VI"
            },
            {
              "name": "Virginia",
              "abbreviation": "VA"
            },
            {
              "name": "Washington",
              "abbreviation": "WA"
            },
            {
              "name": "West Virginia",
              "abbreviation": "WV"
            },
            {
              "name": "Wisconsin",
              "abbreviation": "WI"
            },
            {
              "name": "Wyoming",
              "abbreviation": "WY"
            }]
          },
          component: 'BQuestion',
        },
        'BQuestion-date': {
          src: 'organisms/BQuestion.vue',
          props: {
            answer: '',
            type: 'date',
            text: 'When did your business begin?',
            icon: '7'
          },
          component: 'BQuestion',
        },
        'BButtons-getquotes': {
          src: 'molecules/BButtons.vue',
          props: {
            customlayout: 'submitForm',
            buttons: [
              {
                text: 'GET QUOTES',
                action: 'nextstep',
              }
            ]
          },
          component: 'BButtons',
        },
        'BButtons-Completepurchase': {
          src: 'molecules/BButtons.vue',
          props: {
            buttons: [
              {
                text: 'COMPLETE PURCHASE',
                action: 'nextstep',
              }
            ]
          },
          component: 'BButtons',
        },
        'BFooter-controls': {
          src: 'organisms/BFormFooter.vue',
          props: {},
          component: 'BFormFooter',
        },
        'BTitle-quotes': {
          src: 'organisms/BTitle.vue',
          props: {
            icon: 'wind',
            title: 'Fast like the wind!',
            text: 'We dove deep through the internet to get you these great quotes'
          },
          component: 'BTitle',
        },
        'BTitle-checkout': {
          src: 'organisms/BTitle.vue',
          props: {
            icon: 'credit-card',
            title: 'Woah, slow down there cowboy!',
            text: 'We’re gonna need to see some payment info'
          },
          component: 'BTitle',
        },
        'BCheckout': {
          src: 'organisms/BCheckout.vue',
          component: 'BCheckout',
        },
        'BQuestion-ownyourdesign': {
          src: 'organisms/BQuestion.vue',
          props: {
            answer: '',
            type: 'options',
            text: 'Do you do your own design?',
            description: 'Does your business provide design services?',
            icon: '5',
            options: [
              {
                title: 'Yes',
                text: 'We do designs in-house',
                icon: 'thumbs-up',
              }, {
                title: 'No',
                text: 'We’re gonna need some assistance',
                icon: 'thumbs-down',
              }
            ]
          },
          component: 'BQuestion',
        },
        'BPlans-quotes': {
          src: 'organisms/BPlans.vue',
          props: {
            buttonText: 'BUY NOW',
            answer: '',
            plans: [
              {
                name: 'progressive',
                rating: 4.5,
                imageSrc: 'progressive',
                priceTag: '$120',
                priceTagPeriod: 'mo',
                subpriceTag: '$1440 per year',
              }, {
                name: 'geico',
                rating: 4,
                imageSrc: 'geico',
                priceTag: '$125',
                priceTagPeriod: 'mo',
                subpriceTag: '$1500 per year',
              }, {
                name: 'statefarm',
                rating: 3.5,
                imageSrc: 'statefarm',
                priceTag: '$125',
                priceTagPeriod: 'mo',
                subpriceTag: '$1500 per year',
              }
            ]
          },
          component: 'BPlans',
        },
        'BSummary-quotes': {
          src: 'organisms/BSummary.vue',
          props: {

          },
          component: 'BSummary',
        },
        'BTitle-thankyou': {
          src: 'organisms/BTitle.vue',
          props: {
            icon: 'check-circle',
            title: 'That worked!',
            text: 'Your payment was successful, and your policy documents are on their way to their new home - your inbox!'
          },
          component: 'BTitle',
        },
        'BButtons-thankyou': {
          src: 'molecules/BButtons.vue',
          props: {
            buttons: [
              {
                text: 'DOWNLOAD POLICY DOCS',
                action: 'http://download/file.pdf'
              }
            ]
          },
          component: 'BButtons',
        },
        'BLink-goback': {
          src: 'atoms/BLink.vue',
          props:
          {
            text: 'Go back to my portal',
            icon: 'arrow-left'
          },
          component: 'BBlink',
        },
      },
    },
  },
  getters: {
    questionItems(state) {
      return state.appCustomData.steps.filter(step => step.name === 'Form')[0].components.filter(component => component.type === 'form')
    }
  },
  mutations: {
    changeStep(state, action) {
      action === 'nextstep' ? state.currentStep++ : state.currentStep--
    },
    changeCurrentQuestion(state, step) {
      state.currentQuestion = step
    },
    setFormAnswer(state, data) {
      state.appCustomData.componentsLibrary[data.questionID].props.answer = data.answer
    },
  }
});  