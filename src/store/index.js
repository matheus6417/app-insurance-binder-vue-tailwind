import { createStore } from 'vuex'
export default createStore({
  state: {
    formAnswers:null,
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
              id: 'BQuestion-ownyourdesign',
              type: 'form'
            },
            {
              id: 'BQuestion-buildingcoverage',
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
          name: 'Thank you',
          components: [
            {
              id: 'BTitle-thankyou',
            },
            {
              id: 'BButtons-thankyou',
            },
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
        'BQuestion-insurancetype': {
          src: 'organisms/BQuestion.vue',
          props: {
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
        'BQuestion-ownyourdesign': {
          src: 'organisms/BQuestion.vue',
          props: {
            type: 'options',
            text: 'Do you do your own design?',
            icon: '3',
            options: [
              {
                title: 'Yes',
                text: 'We do designs in-house',
                icon: 'droplet',
              }, {
                title: 'No',
                text: 'We’re gonna need some assistance',
                icon: 'airplay',
              }
            ]
          },
          component: 'BQuestion',
        },
        'BQuestion-buildingcoverage': {
          src: 'organisms/BQuestion.vue',
          props: {
            type: 'options',
            text: 'Include building coverage?',
            icon: '4',
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
            type: 'text',
            text: 'What’s the name of your business?',
            icon: '2'
          },
          component: 'BQuestion',
        },
        'BButtons-getquotes': {
          src: 'molecules/BButtons.vue',
          props: {
            buttons: [
              {
                text: 'GET QUOTES',
                action: 'nextstep'
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
        'BPlans-quotes': {
          src: 'organisms/BPlans.vue',
          props: {
            buttonText: 'BUY NOW',
            plans: [
              {
                name: 'progressive',
                imageSrc: 'progressive',
                priceTag: '$120/mo',
                subpriceTag: '$1440 per year',
              }, {
                name: 'geico',
                imageSrc: 'geico',
                priceTag: '$120/mo',
                subpriceTag: '$1440 per year',
              }, {
                name: 'statefarm',
                imageSrc: 'statefarm',
                priceTag: '$125/mo',
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
      },
    },
  },
  mutations: {
    changeStep(state, action) {
      action === 'nextstep' ? state.currentStep++ : state.currentStep--
    },
    changeCurrentQuestion(state, step) {
      state.currentQuestion = step
    },
    setFormAnswer(state, data) {
      console.log(data)
      state.appCustomData.componentsLibrary[data.questionID].props['answer'] = data.answer
      console.log(state.appCustomData.componentsLibrary[data.questionID].props)
      
    },
  }
});  