import Meditation from '../models/meditations';
import MeditationCategory from '../models/meditationCategory'

export const MEDITATIONS = [
    new Meditation('nabhi','Feel Satisfied',
        [
            new MeditationCategory('5mins',
                'https://assets.wemeditate.co/uploads/meditation/image/32/huge_4._Satisfied_-_edited_.jpg',
                'https://player.vimeo.com/external/357098922.hd.mp4?s=edbbbfaa353745e69fe427d84e8697ff2232a48e&profile_id=175&oauth2_token_id=1254753263'),
            new MeditationCategory('10mins',
                'https://assets.wemeditate.co/uploads/meditation/image/32/huge_4._Satisfied_-_edited_.jpg',
                'https://player.vimeo.com/external/356946014.hd.mp4?s=01b94807267b93a478a3fa4bc2bd7f96f18b1453&profile_id=175&oauth2_token_id=1254753263'),
            new MeditationCategory('15mins',
                'https://assets.wemeditate.co/uploads/meditation/image/32/huge_4._Satisfied_-_edited_.jpg',
                'https://player.vimeo.com/external/357112355.hd.mp4?s=8df90ec22620c4b6c2de1a86ca9e8516a7c9e4ea&profile_id=175&oauth2_token_id=1254753263')
        ]
    
     )
];

// export const SELF_REALIZATION = [
//     new Meditation('self-realization','The First Experience','https://assets.wemeditate.co/uploads/meditation/image/32/huge_4._Satisfied_-_edited_.jpg', 'https://player.vimeo.com/external/363241676.sd.mp4?s=abf83f31dd912527afee13d4601a6b46795afb34&amp;profile_id=165&amp;oauth2_token_id=1254753263')
// ];