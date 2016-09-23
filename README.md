#Echo Scribe

###Make meetings less painful
an Alexa Skill and voice transcription helper

### Why?
Ever had a meeting, when you forgot the key points, got off topic, or somebody was missing?<br />
Echo Scribe listens to your meeting and transcribes who says what.<br />
This makes meetings clear, concise, actionable, and hopefully happen less.<br />

### Check it
- [See the web app live](http://echoscribe.herokuapp.com/) - may take a few moments to load on Heroku<br />
- [Product Landing Page](https://rvhackathon2016.github.io/echo-scribe/) - end product goal :)

###Hack it
- To run server locally: DEBUG=echoscribe_service:* npm start 
- To deploy server navigate to root then: git subtree push --prefix server/echoscribe_service heroku master

###Tech used
- [Amazon Echo](https://www.amazon.com/dp/B00X4WHP5E)
- [Amazon Alexa](https://developer.amazon.com/alexa)
- [AWS Lambda](https://aws.amazon.com/lambda/)
- [Express](http://expressjs.com/)
- [Node.js](https://nodejs.org/)
- [Socket.io](http://socket.io/)
- [Heroku](https://www.heroku.com/)
- [Webkit Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)

