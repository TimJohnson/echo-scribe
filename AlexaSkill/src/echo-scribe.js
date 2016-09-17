import { Skill, Launch, Intent } from 'alexa-annotations';
import { say, ask } from 'alexa-response';
import { ssml } from 'alexa-ssml';
import http from 'http';

@Skill
export default class Echoscribe {

  @Launch
  @Intent('StartMeetingIntent')
  start({ meetingRoom = 'Red Ventures' }) {
    console.log('Making a request...');
    http.get('http://echoscribe.herokuapp.com/start-meeting', function () {
      console.log('Success');
      return say(`Welcome to Echo Scribe, http request success, You meeting in ${meetingRoom} is starting now.`)
        .card({ title:'Echoscribe', content:`Welcome to Echo Scribe, You meeting in ${meetingRoom} is starting now.` });
      context.succeed();      
      context.done();
    }).on('error', function (err) {
      console.log('fail', err);
      return say('there was an error, sad face')
        .card({ title:'Echoscribe', content: 'there was an error, sad face' });
      context.done('Failed');      
    });
    }

  @Intent('AMAZON.HelpIntent')
  help() {
    return ask('I say hello to people. Who should I say hello to?').reprompt('Who should I say hello to?');
  }

  @Intent('AMAZON.CancelIntent', 'AMAZON.StopIntent')
  stop() {
    return say(<speak>Goodbye!</speak>);
  }

}
