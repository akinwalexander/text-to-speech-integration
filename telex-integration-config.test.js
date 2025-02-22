const config = require('./telex-integration-config.json');

describe('Telex Integration Config', () => {
  test('should have correct date fields', () => {
    expect(config.data.date).toHaveProperty('created_at', '2025-02-21');
    expect(config.data.date).toHaveProperty('updated_at', '2025-02-21');
  });

  test('should have correct descriptions', () => {
    expect(config.data.descriptions).toHaveProperty('app_description', 'Converts text messages into audio files and provides a link to the audio.');
    expect(config.data.descriptions).toHaveProperty('app_logo', 'https://i.ibb.co/mrzP66gj/Text-to-speech.png');
    expect(config.data.descriptions).toHaveProperty('app_name', 'text-to-speech');
    expect(config.data.descriptions).toHaveProperty('app_url', 'https://text-to-speech-w87o.onrender.com');
    expect(config.data.descriptions).toHaveProperty('background_color', '#4169E1');
  });

  test('should have correct integration details', () => {
    expect(config.data).toHaveProperty('integration_category', 'Monitoring & Logging');
    expect(config.data).toHaveProperty('integration_type', 'modifier');
    expect(config.data).toHaveProperty('is_active', true);
  });

  test('should have correct key features', () => {
    expect(config.data.key_features).toEqual([
      'Generates audio files in common formats like MP3 or WAV.',
      'Makes content accessible to visually impaired users or those who prefer audio over text',
      'Enables users to listen to messages while performing other tasks'
    ]);
  });

  test('should have correct settings', () => {
    expect(config.data.settings).toEqual([
      {
        label: 'Gender',
        type: 'radio',
        required: true,
        default: 'Female',
        options: ['Male', 'Female']
      },
      {
        label: 'Do you want to continue',
        type: 'checkbox',
        required: true,
        default: 'Yes'
      },
      {
        label: 'Sensitivity Level',
        type: 'dropdown',
        required: true,
        default: 'Low',
        options: ['High', 'Low']
      }
    ]);
  });

  test('should have correct target URL', () => {
    expect(config.data).toHaveProperty('target_url', 'https://text-to-speech-w87o.onrender.com/text-to-speech');
  });
});