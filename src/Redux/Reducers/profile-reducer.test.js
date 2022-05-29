import { addPost, deletePost, profileReducer } from './profile-reducer';

  const state = {
    PostsData: [
      { id: 1, name: 'Jolly Docker', message: 'Hi, world!', time: '14:48', likeCounter: 15 },
      { id: 2, name: 'Jolly Docker', message: 'It\'s my first post', time: '14:55', likeCounter: 5 },
      { id: 3, name: 'Jolly Docker', message: 'How are you?', time: '14:58', likeCounter: 7 },
    ]};

test('length of postsData should be incremented', () => {
  const action = addPost ("it's should work!");
  const newState = profileReducer (state, action);

  expect(newState.PostsData.length).toBe((state.PostsData.length+1));
});

test('massege in new iten from postsData should be "it\'s should work!"', () => {
  const action = addPost ("it's should work!");
  const newState = profileReducer (state, action);

  expect(newState.PostsData[3].message).toBe("it's should work!");

});

test('after deleting length of postsData should be decremented', () => {
  const action = deletePost (1);
  const newState = profileReducer (state, action);

  expect(newState.PostsData.length).toBe((state.PostsData.length-1));
});

test('after deleting length of postsData shouldn\'t be decremented if id is incorrect', () => {
  const action = deletePost (1000);
  const newState = profileReducer (state, action);

  expect(newState.PostsData.length).toBe((state.PostsData.length));
});