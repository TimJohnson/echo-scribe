import { Skill, Launch, Intent } from 'alexa-annotations';
import { say, ask } from 'alexa-response';
import { ssml } from 'alexa-ssml';

@Skill
export default class Echoscribe {

  @Launch
  @Intent('StartMeetingIntent')
  start({ meetingRoom = 'Red Ventures' }) {
      return say(`Welcome to Echo Scribe, You meeting in ${meetingRoom} is starting now.`)
        .card({ title:'Echoscribe', content:`Welcome to Echo Scribe, You meeting in ${meetingRoom} is starting now.` });
    // return say(`Welcome to Echo Scribe, You meeting in ${meetingRoom} is starting now.`).card({ title:'Echoscribe', content:`Welcome to Echo Scribe, You meeting in ${meetingRoom} is starting now.` });
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
