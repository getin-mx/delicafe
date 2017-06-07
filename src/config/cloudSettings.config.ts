import { CloudSettings } from '@ionic/cloud-angular';

export const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '5362e53f'
  },
  'auth': {
    'facebook': {
      'scope': [
        'public_profile',
        'email',
        'user_about_me',
        'user_likes',
        'user_birthday',
        'user_education_history',
        'user_location'
      ]
    }
  }
};
