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
    },*/
    // old friend
    {
      name: "Trast01",
      idChat: "testChatID1",
      idFriend: "testID1",
      lastMessage: "This is a test message",
      imgProfileUrl: "https://firebasestorage.googleapis.com/v0/b/rencontre-afrique.appspot.com/o/profiles%2Fz9PQajM49KadLmLTVJPKz81riLg1.jpg?alt=media&token=38b8b8a2-327a-47a7-9abf-5f86b78a91be",
      nbrNewMessage: 0,
      connected: false
    },
  /*  should be new friend
    {
      name: "Trast02",
      idChat: "testChatID2",
      idFriend: "testID2",
      lastMessage: "This is a test message",
      imgProfileUrl: "https://firebasestorage.googleapis.com/v0/b/rencontre-afrique.appspot.com/o/profiles%2Fz9PQajM49KadLmLTVJPKz81riLg1.jpg?alt=media&token=38b8b8a2-327a-47a7-9abf-5f86b78a91be",
      nbrNewMessage: 0,
      connected: false
    }*/
]

export const listUsersTest = [
  {
    data: {
      id: "testID1",
      nom: "Trast01",
      imgProfileUrl: "",
      language: "Français",
      localisation: "Mali",
      age: 18,
      phone: "+22394369704",
      prenom: "",
      relation: "Marriage",
      sexe: "Male",
    },
    contact: {
      gmail: "testest@gmail.com",
      messenger: "",
      whatsapp: "",
    },
    info: {
      bio: "My biographie 1",
    },
    partner: {
      age:"18-33",
      relation: "Marriage",
      sexe: "Homme / Femme"
    }
  },
  {
    data: {
      id: "testID2",
      nom: "Trast02",
      imgProfileUrl: "",
      language: "Français",
      localisation: "",
      age: 18,
      phone: "+22394369704",
      prenom: "",
      relation: "Amitie",
      sexe: "Male",
    },
    contact: {
      gmail: "t2estest@gmail.com",
      messenger: "",
      whatsapp: "",
    },
    info: {
      bio: "My biographie 2",
    },
    partner: {
      age:"18-33",
      relation: "Marriage",
      sexe: "Femme"
    }
  },
]

export const listMessageTest = [
  {
    fromUserId: "systeme",
    idChat: "testChatID",
    message: "Debut de la conversation",
    type: "text"
  },
  {
    fromUserId: "testID2",
    idChat: "testID2",
    message: "Hi!",
    type: "text"
  },
  {
    fromUserId: "testID",
    idChat: "testID2",
    message: "Hi! How are you ?",
    type: "text"
  },
]

export const listDiscussionTest = {
  // idChat: listChat
  "testChatID1" : listMessageTest
}