export const currentUserTest = {
  data: {
    id: 'testID1',
    nom: 'Trast01',
    imgProfileUrl: '',
    language: 'Français',
    localisation: 'Mali',
    age: 18,
    phone: '+22394369704',
    // prenom: "",
    relation: 'Marriage',
    sexe: 'Male',
    email: 'dickoallassane1997@gmail.com',
  },
  contact: {
    gmail: 'testest@gmail.com',
    messenger: '',
    whatsapp: '',
  },
  info: {
    bio: 'My biographie 1',
  },
  partner: {
    age: '18-33',
    relation: 'Marriage',
    sexe: 'Homme / Femme',
  },
};

export const listFriendsTest = [
  /* ME
    {
      name: "Trast00",
      idChat: "testChatID",
      idFriend: "testID",
      lastMessage: "This is a test message",
      imgProfileUrl: "https://firebasestorage.googleapis.com/v0/b/rencontre-afrique.appspot.com/o/profiles%2Fz9PQajM49KadLmLTVJPKz81riLg1.jpg?alt=media&token=38b8b8a2-327a-47a7-9abf-5f86b78a91be",
      nbrNewMessage: 0,
      connected: false
    }, */
  // old friend
  {
    name: 'Trast01',
    idChat: 'testChatID1',
    idFriend: 'testID1',
    lastMessage: 'Hi! How are you ?',
    imgProfileUrl: 'https://firebasestorage.googleapis.com/v0/b/rencontre-afrique.appspot.com/o/profiles%2Fz9PQajM49KadLmLTVJPKz81riLg1.jpg?alt=media&token=38b8b8a2-327a-47a7-9abf-5f86b78a91be',
    nbrNewMessage: 0,
    connected: false,
  },
  /* should be new friend
    {
      name: "Trast02",
      idChat: "testChatID2",
      idFriend: "testID2",
      lastMessage: "This is a test message",
      imgProfileUrl: "https://firebasestorage.googleapis.com/v0/b/rencontre-afrique.appspot.com/o/profiles%2Fz9PQajM49KadLmLTVJPKz81riLg1.jpg?alt=media&token=38b8b8a2-327a-47a7-9abf-5f86b78a91be",
      nbrNewMessage: 0,
      connected: false
    } */
];

export const listUsersTest = [
  {
    data: {
      id: 'testID1',
      nom: 'Trast01',
      imgProfileUrl: '',
      language: 'Français',
      localisation: 'Mali',
      age: 18,
      phone: '+22394369704',
      prenom: '',
      relation: 'Marriage',
      sexe: 'Male',
    },
    contact: {
      gmail: 'testest@gmail.com',
      messenger: '',
      whatsapp: '',
    },
    info: {
      bio: 'My biographie 1',
    },
    partner: {
      age: '18-33',
      relation: 'Marriage',
      sexe: 'Homme / Femme',
    },
  },
  {
    data: {
      id: 'testID2',
      nom: 'Trast02',
      imgProfileUrl: '',
      language: 'Français',
      localisation: '',
      age: 18,
      phone: '+22394369704',
      prenom: '',
      relation: 'Amitie',
      sexe: 'Male',
    },
    contact: {
      gmail: 't2estest@gmail.com',
      messenger: '',
      whatsapp: '',
    },
    info: {
      bio: 'My biographie 2',
    },
    partner: {
      age: '18-33',
      relation: 'Marriage',
      sexe: 'Femme',
    },
  },
  {
    data: {
      id: 'testID3',
      nom: 'Trast03',
      imgProfileUrl: '',
      language: 'English',
      localisation: '',
      age: 23,
      phone: '+22394369705',
      prenom: '',
      relation: 'Love',
      sexe: 'Female',
    },
    contact: {
      gmail: 'testest3@gmail.com',
      messenger: 'dickoallassane.com',
      whatsapp: '+11 94 36 95 01',
    },
    info: {
      bio: "I like bananas, humberger, and phone. I don't like biscuit and chocolate",
    },
    partner: {
      age: '18-33',
      relation: 'Marriage',
      sexe: 'Femme',
    },
  },
  {
    data: {
      id: 'testID4',
      nom: 'Trast04',
      imgProfileUrl: '',
      language: 'English',
      localisation: '',
      age: 43,
      phone: '+22394369706',
      prenom: '',
      relation: 'Fun',
      sexe: 'Male',
    },
    contact: {
      gmail: 'testest4@gmail.com',
      messenger: 'dickoallassane.com',
      whatsapp: '+12 94 36 95 01',
    },
    info: {
      bio: "I don't like bananas, humberger, and phone. I don't like biscuit and chocolate",
    },
    partner: {
      age: '21-30',
      relation: 'Marriage',
      sexe: 'Female',
    },
  },
];

export const listMessageTest = {
  testChatID1: [
    {
      fromUserId: 'systeme',
      idChat: 'testChatID',
      message: 'Start Discussion',
      type: 'text',
    },
    {
      fromUserId: 'testID2',
      idChat: 'testID2',
      message: 'Hi!',
      type: 'text',
    },
    {
      fromUserId: 'testID1',
      idChat: 'testID2',
      message: 'Hi! How are you ?',
      type: 'text',
    },
  ],
};
