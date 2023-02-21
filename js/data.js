import { getRandomPositiveInteger, getRandomArrayElement } from './utils.js';

const commentsMessage = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
];

const descriptionPhoto = [
  'Супер',
  'хорошо',
  'Великолепно',
  'Как красиво',
  'Волшебно',
  'Красотище',
  'Это ужасно',
  'Какой кошмар',
  'Уберите детей от экранов',
  'Какой стыдлина',
  'Ужас',
  'Египетская сила',
  'Летний чил на югах. #тай #отдых #лето #чил #travel #travelgram #summergram #chill',
  'Тестим новую камеру! #camera #test #new #newcameratest #pic #photo #instaphoto',
  'Затусили с друзьями на море #laptevsea #north #northeastpassage',
  'Как же круто тут кормят #food #foodgram #instafood #delicious #yummy',
  'Отдыхаем... #chill #relax #group #photo',
  'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
  'Вот это тачка! #wow #car #carwow #drive',
  '#fun #party #cool #young',
  'Господи, это такая милота, я сейчас умру от нежности, у меня закшалил мимимиметр',
  'Хорошо, когда в жизни есть #друзья, которые вместе со мной могут зайти в #барнарубинштейна и бахнуть #пивка',
  'Норм',
];

const names = [
  'Иван',
  'Сергей',
  'Мария',
  'Павел',
  'Виктор',
  'Юлия',
  'Марина',
  'Петр',
  'Анастасия',
  'Галина',
  'Игорь',
  'Алексей',
  'Дарья',
  'Марьяна',
  'Арсений',
  'Григорий',
  'Михаил',
];

// создаем сообщение
const createMessage = () =>
  Array.from({ length: getRandomPositiveInteger(1, 2) }, () =>
    getRandomArrayElement(commentsMessage)
  ).join(' ');

//создаем объект комментарий
const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(names),
});

//создаем объект картинки
const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(descriptionPhoto),
  likes: getRandomPositiveInteger(15, 200),
  comments: Array.from(
    { length: getRandomPositiveInteger(0, 12) },
    (_, commentIndex) => createComment(commentIndex + 1)
  ),
});

//создание массива с 25 объектами
const getPictures = () =>
  Array.from({ length: 25 }, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );

export { getPictures };
