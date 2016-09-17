import { Skill, Launch, Intent } from 'alexa-annotations';
import { say, ask } from 'alexa-response';
import { ssml } from 'alexa-ssml';
import fetch from 'isomorphic-fetch';

@Skill
export default class Echoscribe {

  @Launch
  @Intent('StartMeetingIntent')
  start({ meetingRoom = 'Red Ventures' }) {
    console.log('Making a request...');
    const url = 'http://echoscribe.herokuapp.com/start-meeting/' + meetingRoom;
    console.log('From: ', url);
    
    return fetch(url).then(response => response.json()).then(({payload}) => {
      console.log(payload);
      return say(`Welcome to Echo Scribe, Your meeting in ${meetingRoom} is starting now.`)
        .card({ title:'Echoscribe', content:`Welcome to Echo Scribe, You meeting in ${meetingRoom} is starting now.`});
    });
  }
  
  @Intent('EndMeetingIntent')
  end() {
    console.log('Making a request...');
    const url = 'http://echoscribe.herokuapp.com/end-meeting/';
    console.log('From: ', url);
    
    return fetch(url).then(response => response.json()).then(({payload}) => {
      console.log(payload);
      return say(payload)
        .card({ title:'Echoscribe', content: payload});
    });
  }
  
  @Intent('NearbyRoomIntent')
  nearby() {
    return say('It looks like Red Velvet will be open in 5 minutes, I went ahead and booked this room for you.').build();
  }
  
  @Intent('ProTipIntent')
  protips() {
    
  let tips = [
      'The best meetings have a clear agenda.',
      'The best meetings have a clear goal.',
      'The best meetings happen when everyone leaves with clear action items.',
      'The best meetings are less than 30 minutes or 60 minutes. Meetings can be shorter than you think.',
      'The best meetings have a leader who keeps everyone on topic. Limit small talk and off topic discussions.',
      'The best meetings have a clear definition of when the meeting is over.',
      'The best meetings have fewer people than you think. Are only the most important people present?',
      'The best meetings happen when everyone is engaged. Try to limit distractions from your phone or laptop.'
    ];
    
    let randomTipIndex = Math.floor(Math.random() * tips.length);

    let randomProTip = tips[randomTipIndex];
    
    return say(randomProTip).card({ title:'Echo Scribe Pro Tip', content: randomProTip}).build();
  }
  
  @Intent('InvitePersonToMeetingIntent')
  inviteToMeeting({ person = 'Tim Johnson' }) {        
    return say(`Ok, I've invited ${person} to the meeting. I've sent them a notification through slack.`).build();
  }
  
  @Intent('ShowMeetingListAttendees')
  meetingAttendees() {
    const url = 'http://echoscribe.herokuapp.com/meeting-list/';
    
    return fetch(url).then(response => response.json()).then(({payload}) => {      
      console.log(payload);
      let response = '';
      for(let attendee of payload) {
        response += attendee + ', ';
      }      
      response += ' are currently in your meeting.';
      
      return say(response)
        .card({ title:'Echo Scribe Meeting List', content: response});
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
