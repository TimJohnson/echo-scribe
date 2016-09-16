import test from 'ava';
import { handler as Skill } from '..';
import { Request } from 'alexa-annotations';

// test('LaunchRequest', t => {
//   const event = Request.launchRequest().build();
// 
//   return Skill(event).then(response => {
//     t.deepEqual(response, {
//       version: '1.0',
//       response: {
//         shouldEndSession: true,
//         outputSpeech: { type: 'PlainText', text: 'Echoscribe launched!' }
//       }
//     });
//   });
// });

test('StartMeetingIntent', t => {
  const event = Request.intent('StartMeetingIntent', { meetingRoom: 'Red Tape' }).build();

  return Skill(event).then(response => {
    t.deepEqual(response, {
      version: '1.0',
      response: {
        shouldEndSession: true,
        outputSpeech: { type: 'PlainText', text: 'Welcome to Echo Scribe, You meeting in Red Tape is starting now.' },
        card: { type: 'Simple', title: 'Echoscribe', content: 'Welcome to Echo Scribe, You meeting in Red Tape is starting now.' }
      }
    });
  });
});
